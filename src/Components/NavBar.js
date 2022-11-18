import {Link} from "react-router-dom"
import {useAuth} from "../Hooks/Auth";

const NavBar = (props) => {
    const auth = useAuth();

    return (
        <div>
        <h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
        <Link to="/">Home Page </Link>
        <Link to="/registration">Registration Form</Link>
        <Link to="/login">Login Form</Link>
        <button onClick={()=>{
            auth.logout()
        }}>Logout</button>
</div>

    )
}
export default NavBar


//If you implemented the above steps correctly, you should be able to register a new user with the applicaition
//log in as that user and then have a message specific to that user display on the Home Page. 
//You should also see the user email appear in the Nav Bar if the user is logged in. 
//You should also be able to click the logout button to have the state of the application reset to its initial state.