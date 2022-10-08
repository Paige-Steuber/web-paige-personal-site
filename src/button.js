import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    sendData = (idColor) => {
        console.log("button");
        this.props.parentCallback(idColor);
   }
  
  render() {
    let className = "button " + this.props.id;
  
    return (

        <div id={this.props.id} className={className} onClick={() => this.sendData(this.props.id)}>
        <p >{this.props.id} </p>
      </div>
    );
  }
}

export default Button;