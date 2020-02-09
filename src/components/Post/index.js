import React from 'react';

import './style.css';

import Comment from '../Comment';

export default function Post({ content: { author, date, content, comments } }) {
    return (
        <div className="post">
            <div className="user">
                <img src={author.avatar} className="userImage" alt="Imagem de perfil do usuário" />
                <div className="userInfo">
                    <h4>{author.name}</h4>
                    <span>{date}</span>
                </div>
            </div>
            <p className="text">{content}</p>

            <div className="separator">
            </div>

            {comments.map(comment => <Comment key={comment.id} content={comment} />)}
        </div>
    );
}
