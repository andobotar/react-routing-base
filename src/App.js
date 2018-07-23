import React, { Component } from 'react';
import './App.css';

import Navbar from './component/Navbar'
import MainPage from './component/Main';
//import SecondPage from './component/Second';
//import ThirdPage from './component/Third';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPage />
      </div>
    );
  }
}

export default App;
