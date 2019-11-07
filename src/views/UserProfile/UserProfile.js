import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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

import avatar from "assets/img/faces/marc.jpg";

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
  const user = useSelector(state => state.currentUser.user);
  const classes = useStyles();

  const [updatableUser, setUpdatableUser] = useState(user);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUpdatableUser(updatableUser[name] = value);
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
                      value: user.firstName,
                      name: 'firstName',
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
                      value: user.lastName,
                      name: 'lastName',
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
                      value: user.email,
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
                      value: user.telephone,
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
                      value: user.birthday,
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
                      value: user.gender,
                      name: 'gender',
                      onChange: onChangeHandler
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <img src={avatar} alt="..." />
            </CardAvatar>
            <CardBody profile>
              <h5 className={classes.cardCategory}>{user.email}</h5>
              <h4 className={classes.cardTitle}>{user.firstName + " " + user.lastName}</h4>
              <h5 className={classes.cardCategory}>Tele. No: {user.telephone}</h5>
              <h5 className={classes.cardCategory}>Gender: {user.gender}</h5>
              <h5 className={classes.cardCategory}>Date of Birth: {user.birthday}</h5>

              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
