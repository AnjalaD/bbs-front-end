import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";
import { DONATIONS_TABLE_HEADERS } from "config/tableData";
import { ADMIN_VERIFY_DONATION } from "config/api";
import { setHeaders } from "util/helpers";

import { TEST_DONATION_TABLE_DATA } from "config/testData";
import Button from "components/CustomButtons/Button";
import { set_loading } from "actions";
import { fetchData } from "util/helpers";


export default function Donations() {
  const token = useSelector(state => state.currentUser.user.token);
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([]);

  const onClickHandler = (id) => {
    const onSuccess = () => {
      setRequests(requests.filter(request => (request.id !== id)));
    }

    const options = {
      method: 'POST',
      headers: setHeaders(token),
      body: JSON.stringify({})
    }

    fetchData({
      dispatch: dispatch,
      link: ADMIN_VERIFY_DONATION,
      options: options,
      test: onSuccess,
      startLoading: () => set_loading("Verifing Donation..."),
      onSuccess: onSuccess,
      error: "verifing donation error"
    });
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
    const options = {
      method: 'POST',
      headers: setHeaders(token),
      body: JSON.stringify({})
    }
    fetchData({
      dispatch: dispatch,
      link: '',
      options: options,
      test: () => setRequests(TEST_DONATION_TABLE_DATA),
      onSuccess: setRequests
    });

  }, [token, dispatch]);

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
