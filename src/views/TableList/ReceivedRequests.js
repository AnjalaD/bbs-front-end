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

import { RECEIVD_REQUEST_DATA_HEADERS } from "config/tableData";
import { TEST_RECEIVED_REQUEST_TABLE_DATA } from "config/testData";
import { TESTING } from "config/config";

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

export default function ReceivedRequests() {
  const classes = useStyles();
  const [receivedRequests, setReceivedRequests] = useState([]);

  const formatReceivedRequestData = (requests) => (
    requests.map(({ sender, reqState }) => (
      [
        sender.first_name + " " + sender.last_name,
        sender.email,
        sender.telephone
      ]
    ))
  );

  useEffect(() => {
    console.log('fetching received requests...');
    if (TESTING) {
      setReceivedRequests(TEST_RECEIVED_REQUEST_TABLE_DATA);
    }
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Received Requests</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={RECEIVD_REQUEST_DATA_HEADERS}
              tableData={formatReceivedRequestData(receivedRequests)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
