import React from 'react';
import PropTypes from 'prop-types';

import CustomInput from 'components/CustomInput/CustomInput';
import CustomSelect from 'components/CustomInput/CustomSelect';

export default function InputSelector(props) {
    const type = props.type;
    delete props.type;
    switch (type) {
        case 'input':
            return <CustomInput {...props} />;
        case 'select':
            return <CustomSelect {...props} />;
        default:
            return <CustomInput {...props} />;
    }
}
