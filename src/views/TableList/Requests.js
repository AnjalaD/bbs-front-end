import React, { useEffect, useState } from "react";
import TableList from "components/Custom/TableList";

import { REQUEST_DATA_HEADERS } from "config/tableData";

import { TEST_REQUEST_TABLE_DATA } from "config/testData";
import { TESTING } from "config/config";


export default function Requests() {
  const [requests, setRequests] = useState([]);

  const statusMessage = ['Pending', 'Accepted', 'Rejected'];

  const formatRequestData = (requests) => (
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
