import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import TableList from "components/Custom/TableList";
import { DONATIONS_TABLE_HEADERS } from "config/tableData";
import { ADMIN_VERIFY_DONATION } from "config/api";
import { setHeaders } from "util";

import { TESTING } from "config/config";
import { TEST_DONATION_TABLE_DATA } from "config/testData";


export default function Donations() {
  const token = useSelector(state => state.currentUser.token)
  const [requests, setRequests] = useState([]);

  const formatDonationstData = (donations) => (
    requests.map(({ donor, receiver }) => (
      [
        donor.first_name + " " + donor.last_name,
        receiver.first_name + " " + receiver.last_name
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
