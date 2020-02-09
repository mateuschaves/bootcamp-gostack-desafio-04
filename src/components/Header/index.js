import React from 'react';

import './style.css';

import facebookLogo from '../../assets/images/facebook-1.png';

import { MdPerson } from "react-icons/md";

export default function Header() {
    return (
        <div className="header">
            <img src={facebookLogo} />

            <div className="profile">
                <span>Meu perfil</span>
                <MdPerson className="personIcon" size={30} />
            </div>
        </div>
    );
}
