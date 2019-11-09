export const TEST_USER = {
    id: 1,
    first_name: 'Ruchin',
    last_name: 'Meegamuwa',
    email: 'rume@gmail.com',
    telephone: '0719090909',
    gender: 'male',
    birthday: '1997-09-18',
    account_status: 1
}

export const TEST_SEARCH_TABLE_DATA = [
    {
        id: 2,
        first_name: 'Thumula',
        last_name: 'Meegamuwa',
        bloodGroup: 'O+',
        telephone: '0711231234'
    },
    {
        id: 1,
        first_name: 'Ruchin',
        last_name: 'Meegamuwa',
        bloodGroup: 'O-',
        telephone: '071112334'
    },
    {
        id: 3,
        first_name: 'Bucha',
        last_name: 'Meegamuwa',
        bloodGroup: 'B-',
        telephone: '0711231234'
    },
    {
        id: 4,
        first_name: 'Chamika',
        last_name: 'Meegamuwa',
        bloodGroup: 'A-',
        telephone: '0711231234'
    }
]

export const TEST_REQUEST_TABLE_DATA = [
    {
        donor: {
            id: 1,
            first_name: 'Thumula',
            last_name: 'Meegamuwa',
            bloodGroup: 'O+',
            telephone: '0711231234'
        },
        reqState: 1
    },
    {
        donor: {
            id: 2,
            first_name: 'Ruchin',
            last_name: 'Meegamuwa',
            bloodGroup: 'O-',
            telephone: '071112334'
        },
        reqState: 0
    },
    {
        donor: {
            id: 3,
            first_name: 'Bucha',
            last_name: 'Meegamuwa',
            bloodGroup: 'B-',
            telephone: '0711231234'
        },
        reqState: 2
    },
    {
        donor: {
            id: 4,
            first_name: 'Chamika',
            last_name: 'Meegamuwa',
            bloodGroup: 'A-',
            telephone: '0711231234'
        },
        reqState: 1
    }
];

export const TEST_RECEIVED_REQUEST_TABLE_DATA = [
    {
        sender: {
            id: 1,
            first_name: 'Thumula',
            last_name: 'Meegamuwa',
            email: '123@e.lea',
            telephone: '0711231234'
        },
        reqState: 1
    },
    {
        sender: {
            id: 2,
            first_name: 'Ruchin',
            last_name: 'Meegamuwa',
            email: '123@e.lea',
            telephone: '071112334'
        },
        reqState: 0
    },
    {
        sender: {
            id: 3,
            first_name: 'Bucha',
            last_name: 'Meegamuwa',
            email: '123@e.lea',
            telephone: '0711231234'
        },
        reqState: 2
    },
    {
        sender: {
            id: 4,
            first_name: 'Chamika',
            last_name: 'Meegamuwa',
            email: '123@e.lea',
            telephone: '0711231234'
        },
        reqState: 1
    }
];

export const TEST_HISTORY_TABLE_DATA = [
    {
        receiver: {
            first_name: 'xyz',
            last_name: 'abc'
        },
        accepted_on: '2018-10-12'
    },
    {
        receiver: {
            first_name: 'addaw',
            last_name: 'aseq'
        },
        accepted_on: '2018-01-12'
    },
    {
        receiver: {
            first_name: 'teq',
            last_name: 'powel'
        },
        accepted_on: '2018-05-12'
    }
];

export const TEST_UPGRADE_REQ_TABLE_DATA = [
    {
        id: 1,
        first_name: 'Thumula',
        last_name: 'Meegamuwa',
        email: '123@a.com',
        telephone: '0711231234'
    },
    {
        id: 2,
        first_name: 'Ruchin',
        last_name: 'Meegamuwa',
        email: '123@a.com',
        telephone: '071112334'
    },
    {
        id: 3,
        first_name: 'Bucha',
        last_name: 'Meegamuwa',
        email: '123@a.com',
        telephone: '0711231234'
    },
    {
        id: 4,
        first_name: 'Chamika',
        last_name: 'Meegamuwa',
        email: '123@a.com',
        telephone: '0711231234'
    }
];

export const TEST_DONATION_TABLE_DATA = [
    {
        receiver: {
            first_name: 'xyz',
            last_name: 'abc'
        },
        donor: {
            first_name: 'xyz',
            last_name: 'abc'
        },
    },
    {
        receiver: {
            first_name: 'addaw',
            last_name: 'aseq'
        },
        donor: {
            first_name: 'xyz',
            last_name: 'abc'
        },
    },
    {
        receiver: {
            first_name: 'teq',
            last_name: 'powel'
        },
        donor: {
            first_name: 'xyz',
            last_name: 'abc'
        },
    }
]