import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componets/Header'
import Body from './componets/Body'
import Footer from './componets/Footer'

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