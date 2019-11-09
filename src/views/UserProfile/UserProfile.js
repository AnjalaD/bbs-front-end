import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import maleAvatar from "assets/img/faces/male.svg";
import femaleAvatar from "assets/img/faces/female.svg";
import { update_profile } from "actions";
import { USER_UPGRAGE } from "config/api";
import { DONOR_DOWNGRADE } from "config/api";
import { set_loading } from "actions";
import { USER_UPDATE } from "config/api";
import { TESTING } from "config/config";
import InputSelector from "components/CustomInput/InputSelector";
import { userProfileFields } from "config/formData";
import { USER_DELETE } from "config/api";
import { logout } from "actions";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
    const classes = useStyles();

    const user = useSelector(({ currentUser }) => currentUser.user);
    const dispatch = useDispatch();

    const initUser = {
        first_name: '',
        last_name: '',
        birthday: '',
        gender: '',
        email: '',
        telephone: ''
    }

    const [updatableUser, setUpdatableUser] = useState(initUser);
    useEffect(() => {
        setUpdatableUser(user)
    }, [user])

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setUpdatableUser(Object.assign({}, updatableUser, {
            [name]: value
        }));
    }

    const updateHandler = () => {
        if (TESTING) {
            dispatch(update_profile(updatableUser));
        } else {
            const options = {
                method: 'PUT'
            }
            dispatch(set_loading(true));
            //update user
            fetch(USER_UPDATE, options)
                .then(res => res.json())
                .then(
                    dispatch(set_loading(false))
                )
                .catch(err => console.log("update user error", err));
        }
    }

    const upgradeHandler = (userState) => {
        if (TESTING) {
            const status = [1, 0];
            dispatch(update_profile(Object.assign({}, user, {
                account_state: status[userState]
            })))
        } else {
            const options = {
                method: 'POST'
            }
            const link = [USER_UPGRAGE, DONOR_DOWNGRADE];

            dispatch(set_loading(true));

            //change user type
            fetch(link[userState], options)
                .then(res => res.json())
                .then(
                    dispatch(set_loading(false))
                )
                .catch(err => console.log('donor<=>viewer', err));
        }
    }

    const deleteHandler = () => {
        if (TESTING) {
            dispatch(logout());
        } else {
            const options = {
                method: 'DELETE'
            }

            dispatch(set_loading(true));

            //deleting user type
            fetch(USER_DELETE, options)
                .then(res => res.json())
                .then(
                    dispatch(set_loading(false))
                )
                .catch(err => console.log('delete donor', err));
        }
    }

    const statusButton = [
        <Button round color="primary" onClick={() => upgradeHandler(user.account_state)} >
            Be a Blood Donor
    </Button>,
        <Button round color="warning" onClick={() => upgradeHandler(user.account_state)} >
            Swicth To Basic Account
    </Button>,
        <Button round disabled color="primary">
            Waiting...
    </Button>
    ];

    const formFields = function (fields) {
        return (
            fields.map((field, key) => (
                < GridItem xs={12} sm={12} md={6} key={key}>
                    <InputSelector
                        type={field.type}
                        id={field.id}
                        labelText={field.labelText}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: field.type,
                            name: field.name,
                            value: updatableUser[field.name],
                            onChange: onChangeHandler,
                            disabled: field.disabled
                        }}
                    />
                </ GridItem>
            ))
        )
    }(userProfileFields);


    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                {/* User details form */}
                                {formFields}
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="primary"
                                onClick={updateHandler}
                            >
                                Update Profile
                            </Button>
                        </CardFooter>
                    </Card>
                    {user.account_state === 1 ?
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Donor Details</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem>
                                        <h5 className={classes.cardCategory}>Blood type</h5>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                        : null
                    }
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card profile>
                        <CardAvatar profile>
                            <img src={user.gender === "male" ? maleAvatar : femaleAvatar} alt="..." />
                        </CardAvatar>
                        <CardBody profile>
                            <h5 className={classes.cardCategory}>{user.email}</h5>
                            <h4 className={classes.cardTitle}>{user.first_name + " " + user.last_name}</h4>
                            <h5 className={classes.cardCategory}>Tele. No: {user.telephone}</h5>
                            <h5 className={classes.cardCategory}>Gender: {user.gender}</h5>
                            <h5 className={classes.cardCategory}>Date of Birth: {user.birthday}</h5>
                            <GridContainer justify="center" direction="column">
                                <GridItem>
                                    {statusButton[user.account_state]}
                                </GridItem>
                                <GridItem>
                                    <Button round size="sm" onClick={deleteHandler}>Delete Account</Button>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
