import React from 'react'


import Header from '../../components/Header'
import Post from '../../components/Post'

import './style.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Post />
      </div>
    </div>
  );
}

export default App;
