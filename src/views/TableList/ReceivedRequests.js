import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { RECEIVD_REQUEST_DATA_HEADERS } from "config/tableData";
import { TEST_RECEIVED_REQUEST_TABLE_DATA } from "config/testData";
import { TESTING } from "config/config";
import { set_loading } from "actions";
import { DONOR_ACCEPT_REQUEST } from "config/api";
import { setHeaders } from "util/helpers";
import { end_loading } from "actions";



export default function ReceivedRequests() {
  const token = useSelector(state => state.currentUser.token);
  const dispatch = useDispatch();
  const [receivedRequests, setReceivedRequests] = useState([]);

  const acceptHandler = (id, accept) => {
    if (TESTING) {
      setReceivedRequests(receivedRequests.filter(request => (request.id) !== id));
    } else {
      const options = {
        method: 'POST',
        headers: setHeaders(token),
        body: JSON.stringify({})
      }

      dispatch(set_loading("Processing Request..."));
      fetch(DONOR_ACCEPT_REQUEST, options)
        .then(res => res.json)
        .then(res => {
          if (res) {
            dispatch(end_loading());
            setReceivedRequests(receivedRequests.filter(request => (request.id) !== id));
          } else {
            console.log('upgrade request faied')
          }
        })
        .catch(err => console.log('account updrade error', err))
    }
  }

  const formatReceivedRequestData = (requests) => (
    requests.map(({ sender, reqState, id }) => (
      [
        sender.first_name + " " + sender.last_name,
        sender.email,
        sender.telephone,
        <GridContainer>
          <GridItem>
            <Button
              color="success"
              size="sm"
              onClick={() => acceptHandler(id, true)}
            >
              Accept
            </Button>
          </GridItem>
          <GridItem>
            <Button
              color="danger"
              size="sm"
              onClick={() => acceptHandler(id, false)}
            >
              Reject
            </Button>
          </GridItem>
        </GridContainer>
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
    <TableList
      title="Received Request"
      subtitle="requests received for blood donations"
      color="primary"
      tableHeaders={RECEIVD_REQUEST_DATA_HEADERS}
      tableData={formatReceivedRequestData(receivedRequests)}
    />
  );
}
