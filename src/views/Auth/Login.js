import React from "react";
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
import { Link } from "@material-ui/core";

import { useDispatch } from "react-redux";
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

export default function Login() {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div>
            <GridContainer justify="center">
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
                                    // inputProps={{
                                    //   disabled: true
                                    // }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Password"
                                        name="password"
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true
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
                                    onClick={e => dispatch(login(null))}
                                >Login</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
