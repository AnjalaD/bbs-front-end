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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import InputSelector from "components/Custom/InputSelector";

import { update_profile, set_loading, logout } from "actions";
import { USER_UPGRAGE, USER_UPDATE, USER_DELETE } from "config/api";
import { DONOR_DOWNGRADE } from "config/api";
import { userProfileFields } from "config/formData";
import { setHeaders } from "util/helpers";
import ProfileCard from "components/Custom/ProfileCard";
import { fetchData } from "util/helpers";
import { add_notification } from "actions";
import { login } from "actions";

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
        blood_group: '',
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
        const options = {
            headers: setHeaders(user.token),
            method: 'PUT',
            body: JSON.stringify(updatableUser)
        }

        fetchData({
            dispatch: dispatch,
            link: USER_UPDATE,
            options: options,
            startLoading: () => set_loading('Updating profile..'),
            onSuccess: (res) => {
                dispatch(login(res.user));
                dispatch(add_notification(
                    'Profile Updated', 'info'
                ))
            },
            onFail: () => dispatch(add_notification(
                'Profile Update Failed', 'danger'
            )),
            test: dispatch(update_profile(updatableUser))
        });
    }

    const upgradeHandler = () => {
        const options = {
            headers: setHeaders(user.token),
            method: 'POST'
        }
        fetchData({
            dispatch: dispatch,
            link: user.is_donor ? DONOR_DOWNGRADE : USER_UPGRAGE,
            options: options,
            startLoading: () => set_loading('Processing Request'),
            onSuccess: () => dispatch(add_notification(
                'Reqeust Sent- Wait for confirmation',
                'info'
            )),
            test: () => dispatch(update_profile(Object.assign({}, user, {
                is_donor: !user.is_donor
            })))
        })
    }

    const deleteHandler = () => {
        const options = {
            method: 'DELETE',
            headers: setHeaders(user.token)
        }
        fetchData({
            dispatch: dispatch,
            link: USER_DELETE,
            options: options,
            onSuccess: () => dispatch(logout()),
            test: () => dispatch(logout()),
            startLoading: () => dispatch(set_loading("Deleting account..."))
        })
    }

    const statusButton = [
        <Button round color="primary" onClick={upgradeHandler} >
            Be a Blood Donor
        </Button>,
        <Button round color="warning" onClick={upgradeHandler} >
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
                        type={field.inputType}
                        selection={field.selection}
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <ProfileCard
                        user={user}
                        button={
                            <GridContainer justify="center" direction="column">
                                <GridItem>
                                    {user.is_donor ? statusButton[1] : statusButton[0]}
                                </GridItem>
                                <GridItem>
                                    <Button round size="sm" onClick={deleteHandler}>Delete Account</Button>
                                </GridItem>
                            </GridContainer>
                        }
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}
