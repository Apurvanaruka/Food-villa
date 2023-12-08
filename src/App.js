import React, { Suspense } from 'react';
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

const Aboutus = lazy(()=>import('./componets/Aboutus'));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
                <Suspense fallback={<Simmer/>} >
                    <Aboutus/> 
                </Suspense>,
                children:[
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
                element:<Instamart />
            },
            {
                path:'/restaurentmenu/:id',
                element:<RestaurantsMenu />
            }
        ],
    },

])

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);