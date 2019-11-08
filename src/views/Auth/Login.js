import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { Link } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { login } from "actions";
// import { TEST_USER } from "config/testData";
import { set_loading } from "actions";
import { USER_LOGIN } from "config/api";

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

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        //login logic
        const user = {
            email: email,
            password: password
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(user)
        }
        //display loading view
        dispatch(set_loading(true));

        //check login
        fetch(USER_LOGIN, options)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    //remove loading view
                    dispatch(set_loading(false), login(res.user));
                }
            })
            .catch(err => console.log('logging api call error', err))

        // mimic login
        // dispatch(login(TEST_USER));
    }

    const classes = useStyles();
    return (
        <div>
            <GridContainer justify="flex-end">
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Login</h4>
                            <p className={classes.cardCategoryWhite}></p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                {/* line 1 */}
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Email Address"
                                        id="email"
                                        name="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            name: 'email',
                                            value: email,
                                            onChange: e => setEmail(e.target.value)
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Password"
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: 'password',
                                            name: 'password',
                                            value: password,
                                            onChange: e => setPassword(e.target.value)
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <div style={{ width: '100%' }}>
                                <Link href="/fogotpassword" color="primary" style={{ float: 'left' }}>Fogot password?</Link>
                                <Button
                                    style={{ float: 'right' }}
                                    color="primary"
                                    onClick={loginHandler}
                                >Login</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
