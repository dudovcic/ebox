import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import Firebase from './firebase.js';
import Layout from './components/layout/Layout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Layout/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Firebase/>
      </div>
    );
  }
}

export default App;
