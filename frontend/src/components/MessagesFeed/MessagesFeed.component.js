import React from 'react';

export default class MessagesFeed extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                {localStorage.getItem('loggedIn') || false ? <h2>Welcome Aboard</h2> : <h2>Please Login</h2>}
            </React.Fragment>
            
        );
    }
}