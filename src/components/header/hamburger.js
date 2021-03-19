import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

const hamburgerMenu = props => {
 const { loggedIn } = props;
  return (
    <Menu right>
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
             </li>)}
             </ul>
             {!loggedIn && (
             <ul>
              <li>
               <Link to="/register">
                 Registrera
               </Link> </li>             
                <li>
                <Link to="/login">
                 Logga in
               </Link> </li>            
               </ul>)}
    </Menu>
  );
};

hamburgerMenu.defaultProps = {
    loggedIn: null
};

export default hamburgerMenu;