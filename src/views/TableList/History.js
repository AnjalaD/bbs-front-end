import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { DONOR_HISTORY } from "config/api";
import { HISTORY_TABLE_HEADERS } from "config/tableData";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function History() {
  const classes = useStyles();
  const [history, setHistory] = useState([]);

  const statusMessage = ['Pending', 'Accepted', 'Rejected'];

  const formatHistoryData = (requests) => (
    requests.map(({ donor, reqState }) => (
      [
        donor.first_name + " " + donor.last_name,
        donor.bloodGroup,
        donor.telephone,
        statusMessage[reqState]
      ]
    ))
  );

  useEffect(() => {
    const options = {
      method: 'POST'
    }

    console.log('fetching history...');
    fetch(DONOR_HISTORY, options)
      .then(res => res.json())
      .then()
      .catch(err => console.log('fetching history error', err))

  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Requests</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={HISTORY_TABLE_HEADERS}
              tableData={formatHistoryData(history)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
