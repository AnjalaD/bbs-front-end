import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
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

  const upgradeHandler = (userState) => {
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
                {/* line 1 */}
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value
                    inputProps={{
                      type: 'text',
                      value: updatableUser.first_name,
                      name: 'first_name',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    name="last_name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: 'text',
                      value: updatableUser.last_name,
                      name: 'last_name',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* line 2 */}
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true,
                      type: 'email',
                      value: updatableUser.email,
                      name: 'email',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Telephone no."
                    id="telephone"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: 'text',
                      value: updatableUser.telephone,
                      name: 'telephone',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* line 3 */}
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Date of Birth"
                    id="birthday"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: 'text',
                      value: updatableUser.birthday,
                      name: 'birthday',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Gender"
                    id="gender"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true,
                      type: 'text',
                      value: updatableUser.gender,
                      name: 'gender',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
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
              {
                user.account_status === 0 ?
                  <Button
                    round
                    color="primary"
                    onClick={() => upgradeHandler(user.account_status)}
                  >
                    Be a Blood Donor
                  </Button>
                  : (user.account_status === 1 ?
                    <Button
                      round
                      onClick={() => upgradeHandler(user.account_status)}
                    >
                      Swicth To Basic Account
                  </Button>
                    :
                    <Button
                      round
                      disabled
                      color="primary"
                    >
                      Waiting...
                  </Button>
                  )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
