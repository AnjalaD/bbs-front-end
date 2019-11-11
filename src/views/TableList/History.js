import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DONOR_HISTORY } from "config/api";
import { HISTORY_TABLE_HEADERS } from "config/tableData";
import { setHeaders } from "util/helpers";
import TableList from "components/Custom/TableList";

import { TEST_HISTORY_TABLE_DATA } from "config/testData";
import { fetchData } from "util/helpers";

export default function History() {
  const dispatch = useDispatch();
  const token = useSelector(({ currentUser }) => currentUser.user.token);
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
    const options = {
      method: 'POST',
      headers: setHeaders(token)
    };

    fetchData({
      dispatch: dispatch,
      link: DONOR_HISTORY,
      test: setHistory(TEST_HISTORY_TABLE_DATA),
      options: options,
      onSuccess: setHistory
    });
  }, [token, dispatch]);

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
