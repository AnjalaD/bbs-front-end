export const bloodGroups = [
    {
        value: 0,
        label: "O-"
    },
    {
        value: 1,
        label: "O+"
    },
    {
        value: 2,
        label: "A-"
    },
    {
        value: 3,
        label: "A+"
    },
    {
        value: 4,
        label: "B-"
    },
    {
        value: 5,
        label: "B+"
    },
    {
        value: 6,
        label: "AB-"
    },
    {
        value: 7,
        label: "AB+"
    }
];


export const userProfileFields = (onChangeHandler, user) => [
    {
        type: 'Input',
        labelText: 'First Name',

        id: 'first-name',
        inputProps: {
            type: 'text',
            value: user.first_name,
            name: 'first_name',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Last Name",
        type: "Input",
        id: "last-name",
        name: "last_name",
        inputProps: {
            type: 'text',
            value: user.last_name,
            name: 'last_name',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Email address",
        type: "Input",
        id: "email-address",
        inputProps: {
            disabled: true,
            type: 'email',
            value: user.email,
            name: 'email',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Telephone no.",
        type: "Input",
        id: "telephone",
        inputProps: {
            type: 'text',
            value: user.telephone,
            name: 'telephone',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Date of Birth",
        type: "Input",
        id: "birthday",
        inputProps: {
            type: 'text',
            value: user.birthday,
            name: 'birthday',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Gender",
        type: "Select",
        id: "gender",
        inputProps: {
            disabled: true,
            type: 'text',
            value: user.gender,
            name: 'gender',
            onChange: onChangeHandler
        }
    }
];


export const userRegisterFields = (onChangeHandler, user) => [
    {
        labelText: 'First Name',
        type: 'Input',
        id: 'first-name',
        inputProps: {
            type: 'text',
            value: user.first_name,
            name: 'first_name',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Last Name",
        type: "Input",
        id: "last-name",
        name: "last_name",
        inputProps: {
            type: 'text',
            value: user.last_name,
            name: 'last_name',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Email address",
        type: "Input",
        id: "email-address",
        inputProps: {
            type: 'email',
            value: user.email,
            name: 'email',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Telephone no.",
        type: "Input",
        id: "telephone",
        inputProps: {
            type: 'text',
            value: user.telephone,
            name: 'telephone',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Date of Birth",
        type: "Input",
        id: "birthday",
        inputProps: {
            type: 'text',
            value: user.birthday,
            name: 'birthday',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Gender",
        type: "Select",
        id: "gender",
        inputProps: {
            type: 'text',
            value: user.gender,
            name: 'gender',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Password",
        type: "Input",
        id: "password",
        inputProps: {
            type: 'password',
            value: user.password,
            name: 'password',
            onChange: onChangeHandler
        }
    },
    {
        labelText: "Confirm Password",
        type: "Input",
        id: "confirm",
        inputProps: {
            type: 'password',
            value: user.confirm,
            name: 'confirm',
            onChange: onChangeHandler
        }
    }
];