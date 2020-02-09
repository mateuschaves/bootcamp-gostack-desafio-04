import React, { useState, useEffect } from 'react'


import Header from '../../components/Header'
import Post from '../../components/Post'

import './style.css'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          author: {
            name: "Mateus Henrique",
            avatar: "https://avatars2.githubusercontent.com/u/34848657?s=460&v=4"
          },
          date: "09 Fev 2020",
          content: "Terminei o desafioooooo !",
          comments: [
            {
              id: 1,
              author: {
                name: "Bronson Berwald",
                avatar: "https://avatars2.githubusercontent.com/u/49327062?s=460&v=4"
              },
              content: "Uhuuuu !📣"
            },
            {
              id: 2,
              author: {
                name: "Houari ZEGAI",
                avatar: "https://avatars3.githubusercontent.com/u/24855117?s=460&v=4"
              },
              content: "Yeeaaahhh 😀"
            }
          ]
        }
      ]
      );
    });
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        {posts.map(post => <Post key={post.id} content={post} />)}
      </div>
    </div>
  );
}

export default App;
