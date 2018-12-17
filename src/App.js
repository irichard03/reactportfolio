import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="page">
          <Header className="header"/>
          <div className="App">
            <div className="container">
              <Main />
            </div>
          </div>
          <Footer className="footer" />
        </div>
    );
  }
}

export default App;
