import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Requests from 'views/TableList/Requests';
import UserProfile from 'views/UserProfile/UserProfile';
import Search from 'views/TableList/Search';
import History from 'views/TableList/History';
import Register from 'views/Auth/Register';
import Login from 'views/Auth/Login';
import UpgradeRequests from 'views/TableList/UpgradeRequests';
import ReceivedRequests from 'views/TableList/ReceivedRequests';

export const viewerRoutes = [
    {
        path: "/sent-requests",
        name: "Sent Requests",
        icon: ArrowUpwardIcon,
        component: Requests
    },
    {
        path: "/search",
        name: "Search Donors",
        icon: SearchIcon,
        component: Search
    },
    {
        path: "/profile",
        name: "User Profile",
        icon: PersonIcon,
        component: UserProfile
    }
]

export const donorRoutes = [
    {
        path: "/received-requests",
        name: "Received Requests",
        icon: ArrowDownwardIcon,
        component: ReceivedRequests
    },
    {
        path: "/history",
        name: "Donation History",
        icon: HistoryIcon,
        component: History
    },
];

export const guestRoutes = [
    {
        path: "/register",
        name: "Register",
        icon: CreateIcon,
        component: Register
    },
    {
        path: "/",
        name: "Login",
        icon: SearchIcon,
        component: Login
    }
];

export const adminRoutes = [
    {
        path: "/upgrade-requests",
        name: "Upgrade Requests",
        icon: ArrowUpwardIcon,
        component: UpgradeRequests
    }
];