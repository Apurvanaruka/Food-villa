import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componets/Header'
import Body from './componets/Body'
import Footer from './componets/Footer'
import ErrorPage from './componets/ErrorPage'
import ContactUs from './componets/ContactUs'
import AboutUs from './componets/Aboutus'
import RestaurantsMenu from './componets/RestautrentMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'



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
                element: <AboutUs />,
            },
            {
                path: "/contactus",
                element: <ContactUs />,

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