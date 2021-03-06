import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faShoppingCart)

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Account from "./account";
import Home from "./home";
import NavBar from "./navbar";
import Auth from "./authentication/login";

import CheckoutPage from './checkout';
import Cart from './cart';


export default class App extends Component {
  render() {
    return (
      <div className='app'>



        <Router>
          <div>
          <NavBar />
           <Switch>   
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/login" component={Auth} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/cart" component={Cart} />

            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}