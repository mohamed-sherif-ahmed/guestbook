import React from 'react';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import MessageCard from './MessageCard.component';
import MessageService from './message.service';

 export default class MessagesFeed extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            messages: [],
            newMessage: ''
        };

        this.messageService = new MessageService();
    }

    componentWillMount(){
        this.messageService.getMessages().then(res => {
            this.setState({messages: res});
        });
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.messageService.addMessage(this.state.newMessage).then(res => {
            console.log(res);
            var nMessages = this.state.messages;
            nMessages.push(res);
            this.setState({messages: nMessages, newMessage: ''});

        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                    <h2>Create New Message</h2>
                        <div className="form-entry">
                            <input type="text" placeholder="enter message" value={this.state.newMessage}  name="newMessage" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="submit" value="send message" />
                        </div>
                    </form>
                </div>
                {
                    this.state.messages.map((e, i) => {
                        return <MessageCard key={i} name={e.owner.name} text={e.text} messageId={e._id}></MessageCard>
                    })
                }            
            </React.Fragment>
            
        );
    }
}
