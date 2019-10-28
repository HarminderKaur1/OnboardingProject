import React, {Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchCustomer } from './components/FetchCustomer';
import { FetchProduct } from './components/FetchProduct';
import CreateCustomer from './components/CreateCustomer'
import EditCustomer from './components/EditCustomer'
import DeleteCustomer from './components/DeleteCustomer'
import CreateProduct from './components/CreateProduct'
import DeleteProduct from './components/DeleteProduct'
import { FetchStore } from './components/FetchStore';
import CreateStore from './components/CreateStore'
import DeleteStore from './components/DeleteStore'
import { FetchSalesDetail } from './components/FetchSalesDetail';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/fetchproduct' component={FetchProduct} />
            <Route path='/createProduct' component={CreateProduct} />
            <Route path='/deleteProduct' component={DeleteProduct} />
            <Route path='/fetchstore' component={FetchStore} />
            <Route path='/createstore' component={CreateStore} />
            <Route path='/deletestore' component={DeleteStore} />
            <Route path='/fetchcustomer' component={FetchCustomer} />
            <Route path='/createcustomer' component={CreateCustomer} />
            <Route path='/editcustomer' component={EditCustomer} />
            <Route path='/deletecustomer' component={DeleteCustomer} />
            <Route path='/fetchsalesdetail' component={FetchSalesDetail}/>    
      </Layout>
    );
  }
}
