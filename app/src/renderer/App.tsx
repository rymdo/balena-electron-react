import React, { Component } from 'react';

import './App.css';
import ReactImg from './images/react.png';

export class App extends Component {
  spinner() {
    return <img src={ReactImg} alt="img" />;
  }
  render() {
    return (
      <div className="App">
        <div className="AppSpinner">{this.spinner()}</div>
      </div>
    );
  }
}
