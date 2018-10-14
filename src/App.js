import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as pages from './Pages/pages';
import Layout from './Layout';
import Header from './Header';
import Menu from './Menu';
import SocialIcons from './SocialIcons';
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
          <SocialIcons />
        </Header>
        <Layout className="discover">
          <h1>Photz</h1>
        </Layout>
        {/*<Layout>
          <h2>Последние работы</h2>
          <Gallery fetchAmount={4} maxAmount={4}/>
        </Layout>
        <Layout>
          <CollectionList />
        </Layout>
        <Layout>
          <h2>Оставайся в курсе</h2>
          <FeedbackForm />
        </Layout> */}
      </div>
    );
  }
}

export default App;
