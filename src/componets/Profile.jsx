import React from "react";

class Profile extends React.Component {

    constructor(props) {                        // 1
        super(props);
        this.state = {
            userInfo : {},
        }
        console.log('constructor');

    }

    async componentDidMount() {                       // 4 
        console.log("component Did Mount");
        
        const response = await fetch('https://api.github.com/users/krishnaik06');
        const json = await response.json();
        console.log(json);
          
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate() {

    }

    render() {                                  // 2
        console.log('render');
        return (                               //  3
        <div> 
            <h2>name {this.state.userInfo?.name}</h2>
            <img src={this.state.userInfo?.avatar_url} alt="" />
            <h3>{this.state.userInfo?.bio}</h3>
            <h3>Follwers {this.state.userInfo?.followers}  Following {this.state.userInfo?.following}</h3>
            <h2>Location :-  {this.state.userInfo?.location}</h2>
            <h2>Company :- {this.state.userInfo?.company}</h2>           
        </div>
        );
    }
}



export default Profile