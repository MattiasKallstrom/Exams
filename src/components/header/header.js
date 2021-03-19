import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import lamp from './../../assets/lamp.png';
import {Image} from 'react-bootstrap';
import Hamburger from './hamburger';

const Header = props => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link to ="/">
                        <Image src={lamp}></Image>
                    </Link>
                </div>
                <Hamburger />
                </div>
        </header>
    );
};



export default Header;