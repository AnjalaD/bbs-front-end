import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';


import Requests from 'views/TableList/Requests';
import UserProfile from 'views/UserProfile/UserProfile';
import Search from 'views/TableList/Search';
import Register from 'views/Auth/Register';
import Login from 'views/Auth/Login';

const dashboardRoutes = [
    {
        path: "/requests",
        name: "Requests",
        icon: SupervisorAccountIcon,
        component: Requests,
        layout: "",
        user: "user"
    },
    {
        path: "/profile",
        name: "User Profile",
        icon: PersonIcon,
        component: UserProfile,
        layout: "",
        user: "user"
    },
    {
        path: "/search",
        name: "Search Donors",
        icon: SearchIcon,
        component: Search,
        layout: "",
        user: "user"
    },
    {
        path: "/register",
        name: "Register",
        icon: SearchIcon,
        component: Register,
        layout: "",
        user: "guest"
    },
    {
        path: "/",
        name: "Login",
        icon: SearchIcon,
        component: Login,
        layout: "",
        user: "guest"
    }
]

export default dashboardRoutes;