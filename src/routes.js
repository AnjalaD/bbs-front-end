import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import Requests from 'views/TableList/Requests';
import UserProfile from 'views/UserProfile/UserProfile';
import Search from 'views/TableList/Search';
import History from 'views/TableList/History';
import Register from 'views/Auth/Register';
import Login from 'views/Auth/Login';
import UpgradeRequests from 'views/TableList/UpgradeRequests';
import ReceivedRequests from 'views/TableList/ReceivedRequests';
import Donations from 'views/TableList/Donations';
import AdminLogin from 'views/Auth/AdminLogin';

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
        path: "/",
        name: "Login",
        icon: CreateIcon,
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        icon: AddCircleOutlineIcon,
        component: Register
    },
    {
        path: "/admin-login",
        name: "Admin Login",
        icon: SupervisorAccountIcon,
        component: AdminLogin
    }
];

export const adminRoutes = [
    {
        path: "/upgrade-requests",
        name: "Upgrade Requests",
        icon: ArrowUpwardIcon,
        component: UpgradeRequests
    },
    {
        path: "/donations",
        name: "Donations",
        icon: SupervisorAccountIcon,
        component: Donations
    }
];