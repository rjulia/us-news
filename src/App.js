import React from 'react';
import './App.scss';
import Header from './shared/Header/layout/Header';
import NewsList from './pages/News/layout/NewsList';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>React Test - US news</title>
        <meta name="description" content="This is a test make it in react for Coherent" />
      </Helmet>
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
