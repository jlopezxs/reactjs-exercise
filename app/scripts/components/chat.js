import React from 'react';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            text: ''
        };
    }
    
    componentWillMount() {
        this.firebaseRef = new Firebase("https://privaliachat.firebaseio.com/items/");
        this.firebaseRef.on("child_added", function (dataSnapshot) {
            let messages = this.state.messages || [];
            messages.push(dataSnapshot.val());
            
            this.setState({
                messages: messages
            });
        }.bind(this));
    }

    handleKeyDown(e) {
        if(e.keyCode == 13){
            this.firebaseRef.push({
                text: e.target.value
            });
            this.setState({
                text: ''
            });
        }else{
            this.setState({
                text: e.target.value
            });
        }
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    render() {
        var value = this.state.value;
        return (
            <div className="chat">
                <div className="chat-header"><h1>Privalia Chat</h1></div>
                <ul className="chat-messages">
                   {this.state.messages.map(function(message){
                        return <li>{message.text}</li>
                   })}
                </ul>
                <input type="text" value={value} onKeyDown={this.handleKeyDown.bind(this)}/>
            </div>
        );
    }
}
