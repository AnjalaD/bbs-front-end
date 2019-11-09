import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { DONOR_HISTORY } from "config/api";
import { HISTORY_TABLE_HEADERS } from "config/tableData";
import { setHeaders } from "util/helpers";
import TableList from "components/Custom/TableList";

import { TESTING } from "config/config";
import { TEST_HISTORY_TABLE_DATA } from "config/testData";

export default function History() {
  const token = useSelector(({ currentUser }) => currentUser.token);
  const [history, setHistory] = useState([]);

  const formatHistoryData = (requests) => (
    requests.map(({ receiver, accepted_on }) => (
      [
        receiver.first_name + " " + receiver.last_name,
        accepted_on
      ]
    ))
  );

  useEffect(() => {
    if (TESTING) {
      setHistory(TEST_HISTORY_TABLE_DATA);
    } else {
      const options = {
        method: 'POST',
        headers: setHeaders()
      }

      console.log('fetching history...');
      fetch(DONOR_HISTORY, options)
        .then(res => res.json())
        .then()
        .catch(err => console.log('fetching history error', err))
    }

  }, [token]);

  return (
    <TableList
      title="Sent Request"
      subtitle="requests sent for blood donors"
      color="primary"
      tableHeaders={HISTORY_TABLE_HEADERS}
      tableData={formatHistoryData(history)}
    />
  );
}
