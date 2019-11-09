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

import { ADMIN_ACCEP_VIEWER } from "config/api";
import { UPDRAGE_REQ_TABLE_HEADERS } from "config/tableData";

import { TESTING } from "config/config";
import { TEST_UPGRADE_REQ_TABLE_DATA } from "config/testData";


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

export default function UpgradeRequests() {
  const classes = useStyles();
  const [requests, setRequests] = useState([]);

  const formatRequestData = (requests) => (
    requests.map((user) => (
      [
        user.first_name + " " + user.last_name,
        user.email,
        user.telephone
      ]
    ))
  );

  useEffect(() => {
    if (TESTING) {
      setRequests(TEST_UPGRADE_REQ_TABLE_DATA);
    } else {
      const options = {
        method: 'POST'
      }

      console.log('fetching upgrade requests...');
      fetch(ADMIN_ACCEP_VIEWER, options)
        .then(res => res.json())
        .then()
        .catch(err => console.log('fetchin upgrade requests error', err))
    }

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
              tableHead={UPDRAGE_REQ_TABLE_HEADERS}
              tableData={formatRequestData(requests)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
