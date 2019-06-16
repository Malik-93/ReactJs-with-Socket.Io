import React, { Component } from 'react';
import socketIO from 'socket.io-client';

export default class Chats extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket: null
        }
    }
 
 componentDidMount() {
  this.socketConnection()     
 }

 socketConnection = () => {
    const serverPORT = 'http://localhost:8000' 
    const socket = socketIO( serverPORT )   
    this.setState({
        socket,
    })
 }

 sendMessage = () => {
    const { socket } = this.state
    socket.emit('chat', {
        message: 'Helo dear!'
    })
    console.log('Message sent');
 }

    render() {
        console.log( 'State socket', this.state.socket )

        return (
      <div>
        <h1> Hello from chat Component </h1>
        <div></div>
        <button onClick={ this.sendMessage }>Send Message</button>
      </div>
    )
  }
}
