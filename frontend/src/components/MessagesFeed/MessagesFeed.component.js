import React from 'react';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

 export default class MessagesFeed extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                { ( (localStorage.getItem('loggedIn') || 'false') === 'false') ?
                         <Redirect push to="login/"/>
                        // history.push("/login")
                        : <h1>Hello!</h1>
                    }
                
            </React.Fragment>
            
        );
    }
}
