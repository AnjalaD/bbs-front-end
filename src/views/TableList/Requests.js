import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";

import { REQUEST_DATA_HEADERS } from "config/tableData";

import { TEST_REQUEST_TABLE_DATA } from "config/testData";
import { TESTING } from "config/config";
import CustomButton from "components/CustomButtons/Button";
import { setHeaders } from "util/helpers";
import { set_loading } from "actions";
import { end_loading } from "actions";


export default function Requests() {
  const [requests, setRequests] = useState([]);
  const token = useSelector(state => state.currentUser.token);
  const dispatch = useDispatch();

  const cancelHandler = (id) => {
    if (TESTING) {
      setRequests(requests.filter(request => (request.id) !== id));
    } else {
      const options = {
        method: 'POST',
        headers: setHeaders(token),
        body: JSON.stringify({})
      }

      dispatch(set_loading("Canceling Request..."));
      fetch('', options)
        .then(res => res.json)
        .then(res => {
          if (res) {
            dispatch(end_loading);
            setRequests(requests.filter(request => (request.id) !== id));
          } else {
            console.log('cancel request failed')
          }
        })
        .catch(err => console.log('cancel request error', err))
    }
  }


  const statusMessage = ['Pending', 'Accepted', 'Rejected'];

  const formatRequestData = (requests) => (
    requests.map(({ donor, reqState, id }) => (
      [
        donor.first_name + " " + donor.last_name,
        donor.bloodGroup,
        donor.telephone,
        statusMessage[reqState],
        reqState === 0 ?
          <CustomButton
            color="danger"
            size="sm"
            onClick={() => cancelHandler(id)}
          >
            Cancel
          </CustomButton>
          : "---"
      ]
    ))
  );

  useEffect(() => {
    console.log('fetching requests...');
    if (TESTING) {
      setRequests(TEST_REQUEST_TABLE_DATA);
    }
  }, []);

  return (
    <TableList
      title="Sent Requests"
      subtitle="request sent to blood donors"
      color="primary"
      tableHeaders={REQUEST_DATA_HEADERS}
      tableData={formatRequestData(requests)}
    />
  );
}
