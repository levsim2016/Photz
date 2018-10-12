import React, { Component } from 'react';
import Layout from '../Layout';
import Header from '../Header';
import Menu from '../Menu';
import SocialIcons from '../SocialIcons';
import Gallery from '../Gallery';
import CollectionList from '../CollectionList';
import FeedbackForm from '../FeedbackForm';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Menu />
            <SocialIcons />
          </Header>
          <Layout>
            <h1>Photz</h1>
          </Layout>
        </Layout>
        <Layout>
          <h2>Последние работы</h2>
          <Gallery fetchAmount={4} maxAmount={4}/>
        </Layout>
        <Layout>
          <CollectionList />
        </Layout>
        <Layout>
          <h2>Оставайся в курсе</h2>
          <FeedbackForm />
        </Layout>
      </div>
    );
  }
}
