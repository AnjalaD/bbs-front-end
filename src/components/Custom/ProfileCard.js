import React from 'react';
import PropTyeps from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";

import Card from 'components/Card/Card';
import CardAvatar from 'components/Card/CardAvatar';
import CardBody from 'components/Card/CardBody';

import maleAvatar from "assets/img/faces/male.svg";
import femaleAvatar from "assets/img/faces/female.svg";

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

export default function ProfileCard(props) {
    const classes = useStyles();

    return (
        <Card profile>
            <CardAvatar profile>
                <img src={props.user.gender === "male" ? maleAvatar : femaleAvatar} alt="..." />
            </CardAvatar>
            <CardBody profile>
                <h5 className={classes.cardCategory}>{props.user.email}</h5>
                <h4 className={classes.cardTitle}>{props.user.first_name + " " + props.user.last_name}</h4>
                <h5 className={classes.cardCategory}>Gender: {props.user.gender}</h5>
                <h5 className={classes.cardCategory}>Date of Birth: {props.user.birthday}</h5>
                {props.button}
            </CardBody>
        </Card>
    )
}

ProfileCard.propTypes = {
    user: PropTyeps.object,
    button: PropTyeps.object
}