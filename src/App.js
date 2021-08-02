import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import ProductLists from './components/Product-lists';
import AddProduct from './components/Add-product';
import EditProduct from './components/Edit-product';
import Header from './components/Header';
import PageNotFound from './components/Page-not-found';
import thunk from 'redux-thunk';
import ProductITList from './components/Product-IT-lists';
import ProductBookLists from './components/Product-Book-lists';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/edit/:id" component={EditProduct} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/" component={ProductLists} />
            <Route exact path="/product/category/IT" component={ProductITList}/>
            <Route exact path="/product/category/BOOK" component={ProductBookLists}/>
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
