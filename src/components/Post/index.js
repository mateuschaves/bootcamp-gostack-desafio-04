import React from 'react';

import './style.css';

import Profile from '../../assets/images/i.jpg'

export default function Post() {
    return (
        <div className="post">
            <div className="user">
                <img src={Profile} className="userImage" />
                <div className="userInfo">
                    <h4>Mateus Henrique</h4>
                    <span>04 jun 2019</span>
                </div>
            </div>
            <p className="text">Pessoal, alguém sabe se a Rocketseat está contratando?</p>

            <div className="separator">
            </div>
        </div>
    );
}
