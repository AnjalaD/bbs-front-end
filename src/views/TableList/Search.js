import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { bloodGroups } from "config/formData";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomSelect from "components/CustomInput/CustomSelect";
import IconButton from "@material-ui/core/IconButton";
//icons
import SearchIcon from "@material-ui/icons/Search";

import { SEARCH_TABLE_HEADERS } from "config/tableData";
import { TEST_SEARCH_TABLE_DATA } from "config/testData";
import { USER_SEARCH } from "config/api";
import { set_loading } from "actions";
import { setHeaders } from "util/helpers";
import CustomButton from "components/CustomButtons/Button";
import { fetchData } from "util/helpers";
import { DONOR_SEARCH } from "config/api";
import { add_notification } from "actions";
import { USER_REQUEST_DONOR } from "config/api";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);

export default function Search() {
    const dispatch = useDispatch();
    const user = useSelector(({ currentUser }) => currentUser.user);

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSeachResutls] = useState([]);

    const formatSearchData = (searchResults) => {
        const results = searchResults.map((donor) => {
            const blood_group = bloodGroups.filter(
                group => group.value === donor.blood_group
            );
            // console.log('bl', blood_group);
            return ([
                donor.first_name + " " + donor.last_name,
                blood_group[0].label,
                donor.email,
                <CustomButton
                    color="success"
                    size="sm"
                    onClick={() => requestHandler(donor.id)}
                >
                    Request
                </CustomButton>
            ])
        });
        // console.log('resutls', results);
        return results;
    };

    const requestHandler = (id) => {
        const onSuccess = () => {
            setSeachResutls(searchResults.filter(donor => (donor.id) !== id));
            dispatch(add_notification(
                'Donation request sent',
                'info'
            ))
        };

        const options = {
            method: 'POST',
            headers: setHeaders(user.token),
            body: JSON.stringify({
                donor: id
            })
        }

        fetchData({
            dispatch: dispatch,
            link: USER_REQUEST_DONOR,
            options: options,
            test: onSuccess,
            startLoading: () => set_loading("Sending request..."),
            onSuccess: onSuccess,
            error: 'send request error'
        });
    }

    const searchHandler = () => {
        const options = {
            method: 'POST',
            headers: setHeaders(user.token),
            body: JSON.stringify({
                key: searchValue
            })
        }

        fetchData({
            dispatch: dispatch,
            link: USER_SEARCH,
            options: options,
            test: () => setSeachResutls(TEST_SEARCH_TABLE_DATA),
            startLoading: () => set_loading("Searching for donors..."),
            onSuccess: (res) => setSeachResutls(res.Users),
            error: 'search donors error'
        });

    }

    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <GridContainer justify="center" alignItems="center">
                            <GridItem xs={5} sm={5} md={5}>
                                <CustomSelect
                                    labelText="Select the blood type..."
                                    id="blood-group"
                                    name="blood_group"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    selection={bloodGroups}
                                    inputProps={{
                                        value: searchValue,
                                        onChange: (e => setSearchValue(e.target.value))
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={1} sm={1} md={1}>
                                <IconButton
                                    onClick={searchHandler}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </GridItem>
                        </GridContainer>
                        {/* <h4 className={classes.cardTitleWhite}>Search Results</h4> */}
                        <p className={classes.cardCategoryWhite}>
                            Search Results...
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={SEARCH_TABLE_HEADERS}
                            tableData={formatSearchData(searchResults)}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
