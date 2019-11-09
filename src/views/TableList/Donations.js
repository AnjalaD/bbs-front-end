import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";
import { DONATIONS_TABLE_HEADERS } from "config/tableData";
import { ADMIN_VERIFY_DONATION } from "config/api";
import { setHeaders } from "util/helpers";

import { TESTING } from "config/config";
import { TEST_DONATION_TABLE_DATA } from "config/testData";
import Button from "components/CustomButtons/Button";
import { set_loading } from "actions";
import { end_loading } from "actions";


export default function Donations() {
  const token = useSelector(state => state.currentUser.token);
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([]);

  const onClickHandler = (id) => {
    if (TESTING) {
      setRequests(requests.filter(request => (request.id !== id)))
    } else {
      dispatch(set_loading("Verifing Donation..."));
      const options = {
        method: 'POST',
        headers: setHeaders(token),
        body: JSON.stringify({})
      }
      fetch(ADMIN_VERIFY_DONATION, options)
        .then(res => res.json)
        .then(res => {
          if (res) {
            dispatch(end_loading());
            setRequests(requests.filter(request => (request.id !== id)));
          } else {
            console.log('verify request faied')
          }
        })
        .catch(err => console.log('donation verify error', err))
    }
  }

  const formatDonationstData = (donations) => (
    requests.map(({ donor, receiver, id }) => (
      [
        donor.first_name + " " + donor.last_name,
        receiver.first_name + " " + receiver.last_name,
        <Button
          onClick={() => onClickHandler(id)}
          color="success"
          size="sm">
          Verify
          </Button>
      ]
    ))
  );

  useEffect(() => {
    if (TESTING) {
      setRequests(TEST_DONATION_TABLE_DATA);
    } else {
      const options = {
        method: 'POST',
        headers: setHeaders(token),
        body: JSON.stringify({})
      }

      console.log('fetching upgrade requests...');
      fetch(ADMIN_VERIFY_DONATION, options)
        .then(res => res.json())
        .then()
        .catch(err => console.log('fetchin upgrade requests error', err))
    }

  }, [token]);

  return (
    <TableList
      title="Requests"
      subtitle="requests for create blood donors accounts"
      color="primary"
      tableHeaders={DONATIONS_TABLE_HEADERS}
      tableData={formatDonationstData(requests)}
    />
  );
}
