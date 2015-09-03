import React from 'react';

export default class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    
    componentWillMount() {
        this.setState({
            text: "Hello World!"
        });
    }
    
    render() {
        return ( <p> {this.state.text} </p>);
    }
}