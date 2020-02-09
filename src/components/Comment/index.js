import React from 'react';

import './style.css';

export default function Comment({ content: { author, content } }) {
    return (
        <div className="comment">
            <img src={author.avatar} className="userCommentImage" width="32" height="32" alt="Imagem de perfl do usuáro" />
            <div className="textBox">
                <p className="textComment"><span className="userName">{author.name}</span> {content} </p>
            </div>
        </div>
    );
}
