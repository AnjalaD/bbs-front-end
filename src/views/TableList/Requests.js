import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import TableList from "components/Custom/TableList";

import { REQUEST_DATA_HEADERS } from "config/tableData";

import { TEST_REQUEST_TABLE_DATA } from "config/testData";
// import CustomButton from "components/CustomButtons/Button";
import { setHeaders } from "util/helpers";

import { fetchData } from "util/helpers";
import { USER_VIEW_REQUESTS } from "config/api";
import { set_loading } from "actions";
import { bloodGroups } from "config/formData";


export default function Requests() {
  const [requests, setRequests] = useState([]);
  const token = useSelector(state => state.currentUser.user.token);
  const dispatch = useDispatch();

  const statusMessage = ['Pending', 'Accepted'];

  const formatRequestData = (requests) => {
    const results = requests.map((donor) => {
      const blood_group = bloodGroups.filter(
        group => group.value === donor.blood_group
      );
      return (
        [
          donor.first_name + " " + donor.last_name,
          blood_group[0].label,
          donor.email,
          statusMessage[donor.match_status]
        ]
      )
    })
    return results
  };

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: setHeaders(token)
    };
    fetchData({
      dispatch: dispatch,
      link: USER_VIEW_REQUESTS,
      options: options,
      test: () => setRequests(TEST_REQUEST_TABLE_DATA),
      onSuccess: res => setRequests(res.requests)
    });
  }, [dispatch, token]);

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
