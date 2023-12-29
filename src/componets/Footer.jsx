import { useContext } from "react";
import userContext from "../userContext";
import useOnline from "../utils/useOnline";

const Footer = () => {

    const isOnline = useOnline();
    const { user } = useContext(userContext);

    return (
        <div
            data-testid="footer-child"
            className="bg-black text-white h-14 p-3 flex justify-center space-x-6">
            {/* <p>Powered by {user?.name} {user?.email} </p>
            <p>{(isOnline) ? '🟢' : '🔴'}</p> */}
            <div>
                <h1>Food Villa</h1>
            </div>
            <div>
                About us
            </div>
            <div>
                <div>
                    contact us
                </div>
                <div>
                    Legel
                </div>
            </div>
            <div>
                we deliver to
            </div>

        </div>
    );
}

export default Footer;