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
import { TESTING } from "config/config";
import { setHeaders } from "util/helpers";
import CustomButton from "components/CustomButtons/Button";
import { end_loading } from "actions";

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
    const token = useSelector(({ currentUser }) => currentUser.token);

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSeachResutls] = useState([]);

    const formatSearchData = (searchResults) => (
        searchResults.map((donor) => (
            [
                donor.first_name + " " + donor.last_name,
                donor.bloodGroup,
                donor.telephone,
                <CustomButton
                    color="success"
                    size="sm"
                    onClick={() => requestHandler(donor.id)}
                >
                    Request
                </CustomButton>
            ]
        ))
    );

    const requestHandler = (id) => {
        if (TESTING) {
            setSeachResutls(searchResults.filter(donor => (donor.id) !== id));
        } else {
            const options = {
                method: 'POST',
                headers: setHeaders(token),
                body: JSON.stringify({})
            }

            dispatch(set_loading("Requesting..."));
            fetch('', options)
                .then(res => res.json)
                .then(res => {
                    if (res) {
                        dispatch(end_loading());
                        setSeachResutls(searchResults.filter(donor => (donor.id) !== id));
                    } else {
                        console.log('donor request failed')
                    }
                })
                .catch(err => console.log('donor request error', err))
        }
    }

    const searchHandler = () => {
        if (TESTING) {
            setSeachResutls(TEST_SEARCH_TABLE_DATA);
        } else {
            const options = {
                method: 'POST',
                headers: setHeaders(token),
                body: JSON.stringify({
                    search: searchValue
                })
            }

            //set loading view
            dispatch(set_loading("Searching for donors..."));

            //fetching search results...
            fetch(USER_SEARCH, options)
                .then(res => res.json)
                .then(
                    //remove loading view
                    dispatch(end_loading())
                )
                .catch(err => console.log('fetch search results error', err))
        }

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
