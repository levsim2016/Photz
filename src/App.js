import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as pages from './Pages/pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={pages.HomePage}/>
          <Route path="/gallery" component={pages.GalleryPage}/>
          <Route path="/contact" component={pages.ContactPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
