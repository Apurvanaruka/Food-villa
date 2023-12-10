import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componets/Header';
import Body from './componets/Body';
import Footer from './componets/Footer';
import ErrorPage from './componets/ErrorPage';
import ContactUs from './componets/ContactUs';
import Profile from './componets/Profile';
import RestaurantsMenu from './componets/RestautrentMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { lazy } from 'react';
import Simmer from './componets/Simmer';
import Instamart from './componets/Instamart';
import userContext from './userContext';
import { Provider, useSelector } from 'react-redux';
import store from './utils/store';
import Cart from './componets/Cart';

const Aboutus = lazy(() => import('./componets/Aboutus'));

const AppLayout = () => {

    const [user, setUser] = useState(
        {
            name: "Apurva Naruka",
            email: 'apurvanaruka1@gmail.com',
            age: 21
        }
    );

    return (
        <Provider store={store}>
            <userContext.Provider value={{
                user: user,
                setUser: setUser
            }}>

                <Header />
                <Outlet />
                <Footer />
            </ userContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/aboutus",
                element:
                    <Suspense fallback={<Simmer />} >
                        <Aboutus />
                    </Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contactus",
                element: <ContactUs />,

            },
            {
                path: "/instamart",
                element: <Instamart />
            },
            {
                path: '/restaurentmenu/:id',
                element: <RestaurantsMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
    },

])

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);