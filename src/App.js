import React from 'react';
import './App.scss';
import Header from './shared/Header/Header';
import NewsList from './scenes/News/NewsList';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
