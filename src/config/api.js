import { HOST } from "./config"

// USER ROUTES
export const USER_SIGNUP = HOST + "api/users/signup"
//   - POST(For sign up)
export const USER_LOGIN = HOST + "api/users/login"
//  - POST(for login)
export const USER_SEARCH = HOST + "api/users/search"
//  - POST (to search matching donors)
export const USER_DELETE = HOST + "api/users/delete"
//  - DELETE(Delete his/her own account )
export const USER_UPDATE = HOST + "api/users/update"
//  - PUT (Update user info)
export const USER_UPGRAGE = HOST + "api/users/donate"
//  - POST(Request permission to donate) 
export const USER_DONOR_DETAILS = HOST + "api/users/donordetails"
//  - POST(Request donor details)
export const USER_REQUEST_DONOR = HOST + "api/users/requestdonor"
// -POST
export const USER_VIEW_REQUESTS = HOST + "api/users/requests"
//-POST

// DONOR ROUTES
// api/donors/login - POST/
export const DONOR_HISTORY = HOST + "api/users/history"
//  - POST (See hsi/her medical history)
export const DONOR_DOWNGRADE = HOST + "api/donors/unregister"
//  - POST (Become a viewer again)
// export const DONOR_UPDATE = HOST + "api/donors/update"
//  - PUT(Update info)
// export const DONOR_DELETE = "api/donors/delete"
//  - DELETE (Delete his /her own acc)
// export const DONOR_SEARCH = "api/donors/search"
//  - POST (Search donors)
export const DONOR_ACCEPT_REQUEST = HOST + "api/donors/accept"
//  - POST (Accept blood donation request)
export const DONOR_REQUESTS = HOST + "api/donors/requests";
//POST

// ADMIN ROUTES
export const ADMIN_LOGIN = HOST + '';
//
export const ADMIN_VERIFY_DONATION = HOST + '';
//
export const ADMIN_SEARCH = HOST + "api/admin/search"
//  POST search
export const ADMIN_DELETE_USER = HOST + "api/admin/delete"
//   DELETE delete a user
export const ADMIN_ACCEP_VIEWER = HOST + "api/admin/accept"
//  POST accept a viewer request to be a donor
export const ADMIN_LOGOUT = HOST + "api/admin/logout"
// POST