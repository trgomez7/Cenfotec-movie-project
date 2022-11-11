import React from 'react';

import { Link } from 'react-router-dom';

import { routes } from '../config/Router';

import { useAuthState } from "react-firebase-hooks/auth";
import '../styles/Header.css';

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <header>
      <nav>
      
        

        <div className='logo'>Movie App</div>
        <div className='nav-item'>
          <div className='nav-links'>
            {routes.map((route) => {
              if (route.isHeaderElement) {
                
                if (route.title=='Login') {
                  //alert("hola")

                  if (user) {
                    route.title = user.email;
                    console.log(user)
                    return (
                      <li key={route.title}>
                        <Link to={route.path} className='link'>
                          {route.title}
                        </Link>
                        <span class="w3-dropdown-content w3-green w3-padding">Hello World!</span>
                        
                      </li>
                    );

                  }

                }
                return (
                  <li key={route.title}>
                    <Link to={route.path} className='link'>
                      {route.title}
                    </Link>
                  </li>
                );
              }
            })}
          </div>
        </div>
       

      </nav>
    </header>
  );
};

export default Header;