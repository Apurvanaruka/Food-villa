import { useState } from "react";
import Logo from "../assests/img/foodvillalogo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href='/'>
        <img
            className='logo'
            src={Logo}
            alt='Food Villa'
        ></img>
    </a>
);

const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const isOnline = useOnline();
    return (

        <div
            className='header'>
            <Title />
    

            <ul className='nav-item'>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/contactus">Contect Us</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li>Cart</li>
            </ul>
            <p>{(isOnline) ? '🟢' : '🔴' }</p>
            {
                (isLogin ? <button onClick={ // login button
                    () => {
                        setIsLogin(false)
                    }
                }>Login</button> :
                    <button onClick={
                        () => { setIsLogin(true) }
                    } >Logout</button>
                )
            }
        </div>
    );
}

export default Header;