import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as pages from './Pages/pages';
import Layout from './Layout';
import Header from './Header';
import Menu from './Menu';
import SocialIcons from './SocialIcons';
import Logo from './Logo';
import Gallery from './Gallery';
import CollectionList from './CollectionList';
import FeedbackForm from './FeedbackForm';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Menu />
          <Logo />
          <SocialIcons />
        </Header>
        <Switch>
          <Route exact path="/" render={() => (
            <Layout className="discover flex-column align-items-center justify-content-center">
              <h1 className="title">
                Харизматичный и амбициозный
              </h1>
              <span className="description">
                Даниил Жмаев
              </span>
              <Link to="/gallery" className="d-flex align-items-center justify-content-center discoverButton">
                Насладиться творчеством
              </Link>
            </Layout>
          )}/>
          <Route path="/gallery" render={() => (
            <>
              <Layout>
                <h2>Последние работы</h2>
                <Gallery fetchAmount={4} maxAmount={4}/>
              </Layout>
              <Layout>
                <CollectionList />
              </Layout>
            </>
          )}/>
          <Route path="/contact" render={() => (
            <Layout>
              <h2>Оставайся в курсе</h2>
              <FeedbackForm />
            </Layout>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
