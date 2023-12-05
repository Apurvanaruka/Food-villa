// const Profile = () => {
//     return (
//         <h1>Profile</h1>
//     )
// }

import React from "react";

class Profile extends React.Component {

    constructor(props) {                        // 1
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor');

    }

    componentDidMount() {                       // 4 
        console.log("component Did Mount");
    }

    render() {                                  // 2
        console.log('render');
        return (                               //  3
        <> 
            {
                console.log('componentent')
            }
            <h1>Profile page</h1>
            <h2>My name is {this.props.name}</h2>
            <h2>welcome to my profile</h2>
            <h3>count = {this.state.count}</h3>
            <button onClick={() => {
                console.log("clicked!")
                this.setState({
                    count: 1
                })
            }}>Click</button>
        </>
        );
    }
}



export default Profile