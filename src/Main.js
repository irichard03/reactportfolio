//contains routes for displaying tables and dynamic page elements.
import React, { Component } from 'react';
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "portfolio",
    }
  }

  callbackStateChanger = (callbackState) => {
    this.setState({page: callbackState });
  }

  DisplayPage = () =>{
    
    if (this.state.page === "portfolio"){
      return (
        <Portfolio />
      );
    }

    if (this.state.page === "about"){
      return (
        <About />
      );
    }
  }
  render() {
    return (
      <div>
        {this.DisplayPage()}
      </div>
    );
  }
}

export default Main;