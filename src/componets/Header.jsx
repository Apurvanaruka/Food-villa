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
    return (

        <div
            className='header'>
            <Title />
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