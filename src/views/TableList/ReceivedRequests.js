import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import { RECEIVD_REQUEST_DATA_HEADERS } from "config/tableData";
import { TEST_RECEIVED_REQUEST_TABLE_DATA } from "config/testData";
import { set_loading } from "actions";
import { DONOR_ACCEPT_REQUEST } from "config/api";
import { setHeaders } from "util/helpers";
import { fetchData } from "util/helpers";
import { add_notification } from "actions";
import { DONOR_REQUESTS } from "config/api";



export default function ReceivedRequests() {
  const token = useSelector(state => state.currentUser.user.token);
  const dispatch = useDispatch();
  const [receivedRequests, setReceivedRequests] = useState([]);

  const acceptHandler = (id, accept) => {
    const options = {
      method: 'POST',
      headers: setHeaders(token),
      body: JSON.stringify({})
    };

    const onSuccess = () => {
      setReceivedRequests(receivedRequests.filter(request => (request.id) !== id));
      dispatch(add_notification(
        'Request ' + (accept ? 'Accepted' : 'Rejected'),
        accept ? 'info' : 'danger'
      ));
    }

    fetchData({
      dispatch: dispatch,
      link: DONOR_ACCEPT_REQUEST,
      options: options,
      startLoading: () => set_loading('Processing Request...'),
      onSuccess: onSuccess,
      test: onSuccess
    });
  }

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: setHeaders(token),
      body: JSON.stringify({})
    };

    fetchData({
      dispatch: dispatch,
      link: DONOR_REQUESTS,
      options: options,
      onSuccess: (res) => setReceivedRequests(res.Users),
      test: () => setReceivedRequests(TEST_RECEIVED_REQUEST_TABLE_DATA)
    });
  }, [token, dispatch]);

  const formatReceivedRequestData = (requests) => {
    console.log('res req', requests)
    const results = requests.map((sender) => (
      [
        sender.first_name + " " + sender.last_name,
        sender.email,
        <GridContainer>
          <GridItem>
            <Button
              color="success"
              size="sm"
              onClick={() => acceptHandler(sender.id, true)}
            >
              Accept
            </Button>
          </GridItem>
          <GridItem>
            <Button
              color="danger"
              size="sm"
              onClick={() => acceptHandler(sender.id, false)}
            >
              Reject
            </Button>
          </GridItem>
        </GridContainer>
      ]
    ))
    return results;
  };

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
