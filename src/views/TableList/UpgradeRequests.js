import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TableList from "components/Custom/TableList";

import { ADMIN_ACCEP_VIEWER } from "config/api";
import { UPDRAGE_REQ_TABLE_HEADERS } from "config/tableData";
import { setHeaders } from "util/helpers";

import { TEST_UPGRADE_REQ_TABLE_DATA } from "config/testData";
import { set_loading } from "actions";
import { fetchData } from "util/helpers";
import { add_notification } from "actions";


export default function UpgradeRequests() {
  const token = useSelector(state => state.currentUser.user.token);
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([]);

  const acceptHandler = (id, accept) => {
    const options = {
      method: 'POST',
      headers: setHeaders(token),
      body: JSON.stringify({})
    }

    const onSuccess = () => {
      setRequests(requests.filter(user => (user.id) !== id));
      dispatch(add_notification(
        accept ? 'User request Accepted' : 'User request Rejected',
        accept ? 'success' : 'danger'
      ))
    }
    fetchData({
      dispatch: dispatch,
      link: ADMIN_ACCEP_VIEWER,
      options: options,
      startLoading: () => set_loading('Processing Request...'),
      onSuccess: onSuccess,
      test: onSuccess
    })
  }

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: setHeaders(token)
    }

    fetchData({
      dispatch: dispatch,
      link: ADMIN_ACCEP_VIEWER,
      options: options,
      startLoading: () => set_loading('Processing Request...'),
      onSuccess: setRequests,
      test: () => setRequests(TEST_UPGRADE_REQ_TABLE_DATA)
    })
  }, [token, dispatch]);


  const formatRequestData = (requests) => (
    requests.map((user) => (
      [
        user.first_name + " " + user.last_name,
        user.email,
        user.telephone,
        <GridContainer>
          <GridItem>
            <CustomButton
              color="success"
              size="sm"
              onClick={() => acceptHandler(user.id, true)}
            >
              Accept
            </CustomButton>
          </GridItem>
          <GridItem>
            <CustomButton
              color="danger"
              size="sm"
              onClick={() => acceptHandler(user.id, false)}
            >
              Reject
            </CustomButton>
          </GridItem>
        </GridContainer>
      ]
    ))
  );

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
