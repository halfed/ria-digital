import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './containers/App';  
import ContactList from './components/home/ContactList';  


export default (  
  <Route path="/" component={App}>
    <IndexRoute path="/home/" component={ContactList} />
    <Route path="/contact-form" component={} />
  </Route>
);