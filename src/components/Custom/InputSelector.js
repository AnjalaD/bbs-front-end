import React from 'react';
import PropTypes from 'prop-types';

import CustomInput from 'components/CustomInput/CustomInput';
import CustomSelect from 'components/CustomInput/CustomSelect';

export default function InputSelector(props) {
    // console.log(props);
    switch (props.type) {
        case 'input':
            // console.log('input input');
            return <CustomInput {...props} />;
        case 'select':
            // console.log('select input', props);
            return <CustomSelect {...props} />;
        default:
            return <CustomInput {...props} />;
    }
}

InputSelector.prototype = {
    type: PropTypes.oneOf(['input', 'select']),
}
