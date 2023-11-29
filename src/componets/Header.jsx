import { useState } from "react";

const Title = () => (
    <a href='/'>
        <img
            className='logo'
            src='https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7'
            alt='Food Villa'
        ></img>
    </a>
);

const Header = () => {
    const [title, setTitle] = useState("Food Villa");
    return (

        <div
            className='header'>
            <Title />
                <h1>{title}</h1>
            
            <ul className='nav-item'>
                <li>Home</li>
                <li>Contect Us</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>

        </div>
    );
}

export default Header;