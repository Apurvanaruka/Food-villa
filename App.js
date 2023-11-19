import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * header
 *  -logo 
 *  - nav-bar list
 * body 
 *  - search bar
 *  - Restorent card
 *      - image
 *      - name
 *      - address
 *      - rating 
 * footer
 *  - links
 *  - copyright
 */


restaurants = {
    "restaurants": [
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pwnv5rrzonaurn1uj1lh",
            "name": "The Codfather",
            "address": "123 Main Street, Anytown, CA 98765",
            "rating": 4.5
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jfm9r8qrx8upko6tpvnq",
            "name": "Sushi Heaven",
            "address": "456 Elm Street, Anytown, CA 98765",
            "rating": 4.2
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f7a458c5d5e39b84533d3bddaed2cb23",
            "name": "Pizza Perfection",
            "address": "789 Oak Street, Anytown, CA 98765",
            "rating": 4.8
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jfm9r8qrx8upko6tpvnq",
            "name": "Pasta Paradise",
            "address": "1011 Maple Street, Anytown, CA 98765",
            "rating": 4.7
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pwnv5rrzonaurn1uj1lh",
            "name": "Burger Bliss",
            "address": "1213 Pine Street, Anytown, CA 98765",
            "rating": 4.6
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/24c46ccf853507618262d2449179c4d5",
            "name": "Taco Temptation",
            "address": "1314 Walnut Street, Anytown, CA 98765",
            "rating": 4.4
        },
        {
            "image_link": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f34657e4f398eec0e714971b58f8be69",
            "name": "Salad Symphony",
            "address": "1415 Cherry Street, Anytown, CA 98765",
            "rating": 4.3
        }]
}

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

const RestaurantsCard = ({ image_link, name, address, rating }) => {
    return (
        <div className='restaurants-card'>
            <img src={image_link} alt={name} />
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h3>{rating} star</h3>
        </div>
    );
}

const Body = () => {
    return (
        <div className='restaurants-list'>
            {
                restaurants.restaurants.map((restaurant) => {
                    return <RestaurantsCard {...restaurant} />
                })
            }
        </div>
    );
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    );
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>

    );
}


root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)