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

import { useDispatch } from "react-redux";
import { set_loading, login } from "actions";

import { TEST_USER } from "config/testData";
import { USER_LOGIN } from "config/api";
import { setHeaders } from "util/helpers";
import { add_notification } from "actions";
import { fetchData } from "util/helpers";

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
            headers: setHeaders(),
            body: JSON.stringify(user)
        }
        //display loading view
        dispatch(set_loading("Loggin In..."));
        fetchData({
            dispatch: dispatch,
            link: USER_LOGIN,
            options: options,
            startLoading: () => set_loading('Verifing details...'),
            onSuccess: (res) => dispatch(login(res.user)),
            onFail: () => dispatch(add_notification(
                'Incorrect email or password',
                'danger'
            )),
            test: () => dispatch(login(TEST_USER))
        })

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
