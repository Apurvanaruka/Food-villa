import { useContext } from "react";
import userContext from "../userContext";
import useOnline from "../utils/useOnline";

const Footer = () => {

    const isOnline = useOnline();
    const { user } = useContext(userContext);

    return (
        <div className="bg-gray-100 h-14 p-3 flex justify-center">
            <p>Powered by {user?.name} {user?.email} </p>
            <p>{(isOnline) ? '🟢' : '🔴'}</p>

        </div>
    );
}

export default Footer;