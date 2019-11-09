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
import InputSelector from "components/CustomInput/InputSelector";
import { userRegisterFields } from "config/formData";

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
							value: user[field.name],
							onChange: onChangeHandler
						}}
					/>
				</ GridItem>
			))
		)
	}(userRegisterFields);

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
								{/* register form fields */}
								{formFields}
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
