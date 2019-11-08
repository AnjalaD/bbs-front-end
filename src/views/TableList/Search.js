import React, { useState, useEffect } from "react";
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
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSeachResutls] = useState([]);

  useEffect(() => {
    console.log('fetching search resutls...');
    setSeachResutls(TEST_SEARCH_TABLE_DATA);
  }, [searchValue]);

  const formatSearchData = (searchResults) => (
    searchResults.map((donor) => (
      [
        donor.first_name + " " + donor.last_name,
        donor.bloodGroup,
        donor.telephone,
        "request"
      ]
    ))
  );


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
                <IconButton>
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
