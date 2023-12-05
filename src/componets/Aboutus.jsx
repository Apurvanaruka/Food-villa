import Profile from "./Profile.jsx";
import { Outlet } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>Welcome to about us page</h2>
            <Outlet />
        </div>
        
    );
}

export default AboutUs;