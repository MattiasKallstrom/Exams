import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import lamp from './../../assets/lamp.png';
import {Image} from 'react-bootstrap';


const Header = props => {
    const { loggedIn } = props;
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link to ="/">
                        <Image src={lamp}></Image>
                    </Link>
                </div>

                <div className="nav">
                    
                    <ul>
                             <li>
                             <Link to="/about">
                                 Om oss
                             </Link>
                             </li>
                             <li>
                             <Link to="/contact">
                                 Kontakta oss
                             </Link>
                             </li>
                            
        
            
                    {loggedIn && (
                       <li
                        onClick={() => auth.signOut()}>
                            <Link to="/">
                         Logga ut
                         </Link>
                       </li>
                    )}
                    </ul>
                                       

                    {!loggedIn && (
                        <ul>
                         <li>
                         <Link to="/register">
                            Registrera
                         </Link>
                           </li>           
                             
                        <li>
                         <Link to="/login">
                            Logga in
                         </Link>
                         </li>            
                           </ul>
                    )}
                    

                </div>
            </div>

        </header>
        
    );
};

Header.defaultProps = {
    loggedIn: null
};

export default Header;