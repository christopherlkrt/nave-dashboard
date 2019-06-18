import React, { Component } from 'react';
import './App.css';
import Icons_menu from './components/Icons_menu.js';
import Chart from './components/Chart.js';
import Chat from './components/Chat.js';


class App extends Component {

  render() {
    return (
      <div className="container-fluid bg">
        <header>
          <Icons_menu />
          <div className="row">
          <Chart />
          <Chat />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
