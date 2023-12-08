import { useState } from "react";
import Logo from "../assests/img/foodvillalogo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href='/'>
        <img
            className='w-20'
            src={Logo}
            alt='Food Villa'
        ></img>
    </a>
);

const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const isOnline = useOnline();
    return (

        <div className='flex bg-gray-100 justify-between'>
            <Title />
            <div className='ml-auto my-7 mr-5'>
                <ul className="flex" >
                    <li className="mx-2"><Link to="/" >Home</Link></li>
                    <li className="mx-2"><Link to="/contactus">Contect Us</Link></li>
                    <li className="mx-2"><Link to="/aboutus">About Us</Link></li>
                    <li className="mx-2"><Link to="/instamart">InstaMart</Link></li>
                    <p>{(isOnline) ? '🟢' : '🔴'}</p>
                </ul>
            </div>
            <div className="my-7 mr-5">
                {
                    (isLogin ? <button className="mr-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1" onClick={ // login button
                        () => {
                            setIsLogin(false)
                        }
                    }>Login</button> :
                        <button className="mr-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-1" onClick={
                            () => { setIsLogin(true) }
                        } >Logout</button>
                    )
                }
            </div>
        </div>
    );
}

export default Header;