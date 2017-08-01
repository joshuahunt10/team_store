import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import BaseLayout from './components/BaseLayout'
import ProductDetails from './components/ProductDetails'

ReactDOM.render(

<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/products/:id' component={ProductDetails} />
      <Route path='/products' component={Products} />
      <Route path='/' component={Home} />
    </Switch>
  </BaseLayout>
</BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
