import React, { Component } from 'react';
import './App.css';
import ColorPop from './ColorPop';
import Button from './Button';
import Text from './Text';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickColor: "white"
    }

}
  callbackFunction = (childData) => {
    this.setState({ pickColor: childData })
    
    console.log(childData);
  }
  sendColor(){
    return this.state.pickColor;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="buttonBanner">
            <Button id="White" parentCallback={this.callbackFunction} />
            <Button id="Red" parentCallback={this.callbackFunction}/>
            <Button id="Orange" parentCallback={this.callbackFunction}/>
            <Button id="Yellow" parentCallback={this.callbackFunction}/>
            <Button id="Green" parentCallback={this.callbackFunction}/>
            <Button id="Blue" parentCallback={this.callbackFunction}/>
            <Button id="Purple" parentCallback={this.callbackFunction}/>
            <Button id="Black" parentCallback={this.callbackFunction}/>

          </div>
         
          <div className="images">
            <ColorPop plsColor= {this.state.pickColor} />
          </div>

          <div className="typeBanner">
            <Text plsColor= {this.state.pickColor} />
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
