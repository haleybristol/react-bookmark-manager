import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resources: [
      "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.7596kavhy",
      "https://github.com/facebookincubator/create-react-app",
      "https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.lcjnx6ys0"
      ]
    };
  }

  //event handlers here

  render() {
    return(
      <div>
        {this.state.resources.map((resource) => {
          return <a href="{resource}"></a>
        })}
      </div>
    );
  }
}

export default App;
