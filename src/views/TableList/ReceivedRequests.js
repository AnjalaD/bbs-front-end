import React, { useEffect, useState } from "react";

import TableList from "components/Custom/TableList";

import { RECEIVD_REQUEST_DATA_HEADERS } from "config/tableData";
import { TEST_RECEIVED_REQUEST_TABLE_DATA } from "config/testData";
import { TESTING } from "config/config";


export default function ReceivedRequests() {
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
    <TableList
      title="Received Request"
      subtitle="requests received for blood donations"
      color="primary"
      tableHeaders={RECEIVD_REQUEST_DATA_HEADERS}
      tableData={formatReceivedRequestData(receivedRequests)}
    />
  );
}
