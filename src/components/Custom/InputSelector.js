import React from 'react';
import PropTypes from 'prop-types';

import CustomInput from 'components/CustomInput/CustomInput';
import CustomSelect from 'components/CustomInput/CustomSelect';

export default function InputSelector(props) {
    switch (props.inputType) {
        case 'input':
            return <CustomInput {...props} />;
        case 'select':
            return <CustomSelect {...props} />;
        default:
            return <CustomInput {...props} />;
    }
}

InputSelector.prototype = {
    type: PropTypes.oneOf(['input', 'select']),
}
