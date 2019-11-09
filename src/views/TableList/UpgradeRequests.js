import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import { ADMIN_ACCEP_VIEWER } from "config/api";
import { UPDRAGE_REQ_TABLE_HEADERS } from "config/tableData";
import { setHeaders } from "util";
import TableList from "components/Table/TableList";

import { TESTING } from "config/config";
import { TEST_UPGRADE_REQ_TABLE_DATA } from "config/testData";

export default function UpgradeRequests() {
  const token = useSelector(state => state.currentUser.token)
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
        method: 'POST',
        headers: setHeaders(token)
      }

      console.log('fetching upgrade requests...');
      fetch(ADMIN_ACCEP_VIEWER, options)
        .then(res => res.json())
        .then()
        .catch(err => console.log('fetchin upgrade requests error', err))
    }

  }, [token]);

  return (
    <TableList
      title="To Donor Requests"
      subtitle="request to change account to donor"
      color="primary"
      tableHeaders={UPDRAGE_REQ_TABLE_HEADERS}
      tableData={formatRequestData(requests)}
    />
  );
}
