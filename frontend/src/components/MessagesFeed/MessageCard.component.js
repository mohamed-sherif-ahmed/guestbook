import React from 'react';
import { Redirect } from 'react-router-dom';
import './MessageCard.css';
import MessageService from './message.service';

export default class MessageCard extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.handleReply = this.handleReply.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitText = this.handleSubmitText.bind(this);

        this.messageService = new MessageService();

        this.state = {
            replies: [
                {
                    owner: "Ahmed",
                    text: "Hola"
                }
            ],
            showReply: false,
            showEdit: false,
            newReply: "",
            newText: this.props.text,
            text: this.props.text
        };
    }

    componentWillMount() {
        // Call APIs
        this.messageService.getReplies(this.props.messageId).then(res => {
            this.setState({replies: res});
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
        this.messageService.addReply(this.state.newReply, this.props.messageId).then(res => {
            console.log(res);
            var nReplies = this.state.replies;
            nReplies.push(res);
            this.setState({ replies: nReplies, newReply: '', showReply: false});
        });
    }

    handleSubmitText(e) {
        e.preventDefault();
        this.messageService.editMessage(this.state.newText, this.props.messageId).then(res => {
            console.log(res);
            this.setState({showEdit: false, text: res.text});
        });
    }

    handleReply() {
        console.log("Reply");
        this.setState({showReply: !this.state.showReply});
    }

    handleEdit() {
        console.log("Edit");
        this.setState({showEdit: !this.state.showEdit});
    }

    handleDelete() {
        this.messageService.deleteMessage(this.props.messageId).then(res => {

        });
    }

    render() {
        if (sessionStorage.getItem('token') === null) {
            return (<Redirect to='/login' />);
        }
        var editArea;
        var replyArea;
        if (this.state.showReply) {
            replyArea = ( 
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-entry">
                        <input type="text" placeholder="enter message" value={this.state.newReply}  name="newReply" onChange={this.handleChange} />
                    </div>
                    <div className="form-entry">
                        <input type="submit" value="Send Reply" />
                    </div>
                </form>
            </div>
            );
        } else {
           replyArea = "";
        }

        if (this.state.showEdit) {
            editArea = (
                <div>
                    <form className="login-form" onSubmit={this.handleSubmitText}>
                        <div className="form-entry">
                            <input type="text" placeholder="enter message" value={this.state.newText} name="newText" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="submit" value="EDIT MESSAGE" />
                        </div>
                    </form>
                </div>
            );
        } else {
            editArea = "";
        }

        return (
            <div className="card">
                <div className="card-content">
                    <label className="content-username">{this.props.name}</label>
                    <label className="content-text">{this.state.text}</label>
                </div>
                { editArea }
                {
                    this.state.replies.map((e, i) => {
                        return (
                            <div className="card-content reply-content" key={i}>
                                <label className="content-username">{e.owner.name}</label>
                                <label className="content-text">{e.text}</label>
                            </div>
                        );
                    })
                }
                { replyArea }
                <div className="card-actions">
                    <label onClick={this.handleReply}>reply</label>
                    <label onClick={this.handleEdit}>edit</label>
                    <label onClick={this.handleDelete}>delete</label>
                </div>
            </div>
        );
    }
}