import React from "react";
import PropTypes from "prop-types";
import { Modal, CircularProgress } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";

export default function LoadingModal(props) {
    return (
        <Modal
            open={props.isLoading}
            keepMounted
            disableBackdropClick
        >
            <div style={{
                height: '100vh',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                color: '#fff',
                opacity: 0.6
            }}>
                <GridContainer direction="column" style={{ alignItems: 'center' }}>
                    <CircularProgress disableShrink />
                    <p>Please wait...</p>
                </GridContainer>
            </div>
        </Modal>
    )
}

LoadingModal.propTypes = {
    isLoading: PropTypes.bool
}