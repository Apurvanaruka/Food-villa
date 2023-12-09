import { useContext } from "react";
import userContext from "../userContext";
const Footer = () => {

    const { user } = useContext(userContext);

    return (
        <div className="bg-gray-100 h-14 p-3 flex justify-center">
            <p>Powered by {user?.name} {user?.email} </p>
        </div>
    );
}

export default Footer;