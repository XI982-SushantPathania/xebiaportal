import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      
      </div>
    );
  }
}

export default App;
