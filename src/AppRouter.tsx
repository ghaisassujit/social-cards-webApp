import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './containers/List';
import  AddNew from './components/AddNew/';
import { Header } from './components/Header/Header';

export const AppRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Route path="/" exact component={List} />
      <Route path="/addNew/" component={AddNew} />
    </Router>
  );
};
