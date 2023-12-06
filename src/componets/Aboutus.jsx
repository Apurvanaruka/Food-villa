import Profile from "./Profile.jsx";
import { Outlet } from "react-router-dom";
import { Component } from 'react';

const AboutUs2 = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>Welcome to about us page</h2>
            <Outlet />
        </div>
        
    );
}


class AboutUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        }

        console.log('parent-  constestor');
    }

    componentDidUpdate(){
        console.log('parent - ComponentDidUpdate');
    }

    componentDidMount(){
        this.setState({
            count:1
        })
        console.log('parent- componentDidMount');
    }

    componentWillUnmount(){
        console.log('parent - component will Unmount')

    }


    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>Welcome to about us page</h2>
                {/* <Outlet /> */}
                <Profile />
                <Profile />

            </div>
            );
        };
    }
    
export default AboutUs;