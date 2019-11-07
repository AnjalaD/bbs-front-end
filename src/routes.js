import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';


import Requests from 'views/TableList/Requests';
import UserProfile from 'views/UserProfile/UserProfile';
import Search from 'views/TableList/Search';
import Register from 'views/Auth/Register';
import Login from 'views/Auth/Login';

export const userRoutes = [
    {
        path: "/requests",
        name: "Requests",
        icon: SupervisorAccountIcon,
        component: Requests
    },
    {
        path: "/profile",
        name: "User Profile",
        icon: PersonIcon,
        component: UserProfile
    },
    {
        path: "/search",
        name: "Search Donors",
        icon: SearchIcon,
        component: Search
    }
]

export const guestRoutes = [
    {
        path: "/register",
        name: "Register",
        icon: SearchIcon,
        component: Register
    },
    {
        path: "/",
        name: "Login",
        icon: SearchIcon,
        component: Login
    }
]