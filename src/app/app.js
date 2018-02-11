import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
