import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { set_loading } from "actions";
import { USER_SIGNUP } from "config/api";

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

export default function Register() {
	const initUser = {
		first_name: '',
		last_name: '',
		birthday: '',
		gender: '',
		email: '',
		password: '',
		confirm: ''
	}
	const dispatch = useDispatch();
	const [user, setUser] = useState(initUser);

	const onChangeHandler = (e) => {
		const { value, name } = e.target;
		setUser(Object.assign({}, user, {
			[name]: value
		}));
	}

	const registerHandler = () => {
		//register logic
		dispatch(set_loading(true));
		const options = {
			method: 'POST',
			body: JSON.stringify(user)
		}
		//display loading view


		//check register new user
		fetch(USER_SIGNUP, options)
			.then(res => res.json())
			.then(res => {
				if (res) {
					// remove loading view
					dispatch(set_loading(false));
				}
			})
			.catch(err => console.log('register api call error', err))
	}

	const classes = useStyles();
	return (
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>Register</h4>
							<p className={classes.cardCategoryWhite}>Complete the details below.</p>
						</CardHeader>
						<CardBody>
							<GridContainer>
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
											value: user.first_name,
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
											value: user.last_name,
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
											type: 'text',
											value: user.gender,
											name: 'gender',
											onChange: onChangeHandler
										}}
									/>
								</GridItem>
							</GridContainer>
							{/* line 4 */}
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Password"
										id="password"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											type: 'text',
											value: user.password,
											name: 'password',
											onChange: onChangeHandler
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										labelText="Confirm Password"
										id="confirm"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											type: 'text',
											value: user.confirm,
											name: 'confirm',
											onChange: onChangeHandler
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
									onClick={registerHandler}
								>
									Register
                </Button>
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
