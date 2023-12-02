import { useState } from "react";
import Logo from "../assests/img/foodvillalogo.png";
import { Link } from "react-router-dom";

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
    const [title, setTitle] = useState("Food Villa");
    const [isLogin, setIsLogin] = useState(true);
    return (

        <div
            className='header'>
            <Title />
            <h1>{title}</h1>

            <ul className='nav-item'>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/contactus">Contect Us</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li>Cart</li>
            </ul>{

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