import React from 'react';

//import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { routes } from './config/Router';

import './App.css';
// import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { SignOutUser } from './components/SignOut';



function App() {
  // return (
  //   <Router>
  //     <Switch>
  //       {routes.map((route) => (
  //         // map fonksiyonu kullanırken her bir eleman için unique bir key verilmeli
  //         <Route exact={route.exact} path={route.path}>
  //           <Layout>{route.component}</Layout>
  //         </Route>
  //       ))}
  //     </Switch>
  //   </Router>
  // );
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/movies" element={<Home />} />
        <Route exact path="/favorites" element={<Favorite/>} />
        <Route exact path="/movies/:id" element={<Detail />} />
        <Route exact path="/sign_out" element={<SignOutUser />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
