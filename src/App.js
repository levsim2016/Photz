import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';
import Menu from './Menu';
import SocialIcons from './SocialIcons';
import Logo from './Logo';
import Gallery from './Gallery';
import CollectionList from './CollectionList';
import FeedbackForm from './FeedbackForm';
import ButtonLink from './ButtonLink';
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
          <Route exact path="/" render={(props) => (
            <Layout {...props} className="d-flex discover flex-column align-items-center justify-content-center">
              <h1 className="title">
                Харизматичный<wbr/> и<wbr/> амбициозный
              </h1>
              <span className="description">
                Даниил Жмаев
              </span>
              <ButtonLink to="/gallery" className="discoverButton">
                Насладиться творчеством
              </ButtonLink>
            </Layout>
          )}/>
          <Route path="/gallery" render={(props) => (
            <>
              <Layout {...props}>
                <div className="container">
                  <div className="row">
                    <div className="d-flex col justify-content-center">
                      <h2>Последние работы</h2>
                    </div>
                  </div>
                  <Gallery fetchAmount={4} maxAmount={4}/>
                </div>
              </Layout>
              {/* <Layout>
                <CollectionList />
              </Layout> */}
            </>
          )}/>
          <Route path="/contact" render={(props) => (
            <Layout {...props}>
              <div className="container">
                  <div className="row">
                    <div className="d-flex col justify-content-center">
                      <h2>Оставайся в курсе</h2>
                    </div>
                  </div>
                  <FeedbackForm />
                </div>
            </Layout>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
