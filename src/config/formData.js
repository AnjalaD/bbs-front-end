export const bloodGroups = [
    {
        value: 1,
        label: "O-"
    },
    {
        value: 2,
        label: "O+"
    },
    {
        value: 3,
        label: "A-"
    },
    {
        value: 4,
        label: "A+"
    },
    {
        value: 5,
        label: "B-"
    },
    {
        value: 6,
        label: "B+"
    },
    {
        value: 7,
        label: "AB-"
    },
    {
        value: 8,
        label: "AB+"
    }
];

const gender = [
    {
        value: 'm',
        label: 'Male'
    },
    {
        value: 'f',
        label: 'Female'
    }
];


export const userProfileFields = [
    {
        inputType: 'Input',
        labelText: 'First Name',
        id: 'first-name',
        type: 'text',
        name: 'first_name'
    },
    {
        labelText: "Last Name",
        inputType: "input",
        id: "last-name",
        name: "last_name",
        type: 'text'
    },
    {
        labelText: "Email address",
        inputType: "input",
        id: "email-address",
        disabled: true,
        type: 'email',
        name: 'email',
    },
    {
        labelText: "Date of Birth",
        inputType: "input",
        id: "birthday",
        type: 'text',
        name: 'birthday'
    },
    {
        labelText: "Gender",
        inputType: "select",
        id: "gender",
        name: 'gender',
        selection: gender,
        disabled: true,
    },
    {
        disabled: true,
        labelText: "Blood Group",
        inputType: 'select',
        id: 'blood_group',
        name: 'blood_group',
        selection: bloodGroups
    },
];


export const userRegisterFields = [
    {
        labelText: 'First Name',
        inputType: 'input',
        id: 'first-name',
        type: 'text',
        name: 'first_name'
    },
    {
        labelText: "Last Name",
        inputType: "input",
        id: "last-name",
        name: "last_name",
        type: 'text'
    },
    {
        labelText: "Email address",
        inputType: "input",
        id: "email-address",
        type: 'email',
        name: 'email'
    },
    // {
    //     labelText: "Telephone no.",
    //     inputType: "input",
    //     id: "telephone",
    //     type: 'text',
    //     name: 'telephone'
    // },
    {
        labelText: "Date of Birth",
        inputType: "input",
        id: "birthday",
        type: 'text',
        name: 'birthday'
    },
    {
        labelText: "Gender",
        inputType: "select",
        id: "gender",
        name: 'gender',
        selection: gender
    },
    {
        labelText: "Blood Group",
        inputType: 'select',
        id: 'blood_group',
        name: 'blood_group',
        selection: bloodGroups
    },
    {
        labelText: "Password",
        inputType: "input",
        id: "password",
        type: 'password',
        name: 'password',
    },
    // {
    //     labelText: "Confirm Password",
    //     inputType: "input",
    //     id: "confirm",
    //     type: 'password',
    //     name: 'confirm',
    // }
];