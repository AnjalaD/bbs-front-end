import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TableList from "components/Custom/TableList";

import { ADMIN_ACCEP_VIEWER } from "config/api";
import { UPDRAGE_REQ_TABLE_HEADERS } from "config/tableData";
import { setHeaders } from "util/helpers";

import { TESTING } from "config/config";
import { TEST_UPGRADE_REQ_TABLE_DATA } from "config/testData";
import { set_loading } from "actions";
import { end_loading } from "actions";


export default function UpgradeRequests() {
  const token = useSelector(state => state.currentUser.token);
  const dispatch = useDispatch();
  const [requests, setRequests] = useState([]);

  const acceptHandler = (id, accept) => {
    if (TESTING) {
      setRequests(requests.filter(user => (user.id) !== id))
    } else {
      const options = {
        method: 'POST',
        headers: setHeaders(token),
        body: JSON.stringify({})
      }
      dispatch(set_loading("Processing Request..."));
      fetch(ADMIN_ACCEP_VIEWER, options)
        .then(res => res.json)
        .then(res => {
          if (res) {
            dispatch(end_loading());
            setRequests(requests.filter(user => (user.id) !== id))
          } else {
            console.log('upgrade request faied')
          }
        })
        .catch(err => console.log('account updrade error', err))
    }
  }


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
