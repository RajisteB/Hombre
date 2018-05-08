import './App.css';
import axios from 'axios';
import HomeLayout from './components/layout/home/HomeLayout';
import { Route, Switch } from 'react-router-dom';
import ProductListLayout from './components/layout/product/ProductListLayout';
import ProductLayout from './components/layout/product/ProductLayout';
import Footer from './components/ui/footers/Footer';
import Navbar from './components/ui/navigation/Navbar';
import React, { Component } from 'react';
import { API_KEY, MAIN_API_ROUTE } from './config_keys.js';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      apiDataLoaded: false,
      data: {},
    }
  }
  
  getData = () => {
    let salesData = {}, 
        endingSoon,
        activeSales = [], 
        sortedSales, 
        salesByDate,
        salesSection_00,
        salesSection_01, 
        salesSection_02, 
        salesSection_03,
        salesSection_04, 
        salesSection_05, 
        salesSection_06,
        salesSection_07;

    axios.get(`${MAIN_API_ROUTE}${API_KEY}`)
      .then(res => {
        let sales = res.data.sales;
        sales.map(sale => {
          if (sale.store === 'women' || typeof sale.products === 'undefined') {
            return sales.splice(sales.indexOf(sale), 1);
          } else {
            return sale;
          }
          // return sale.store === 'women' ? sales.splice(sales.indexOf(sale), 1) : sale;
        })
        activeSales = sales.slice(0, 21);

        sortedSales = (array, i) => {
          return array.sort((a,b) => {
            let x = a[i];
            let y = b[i];
            return x < y ? -1 : ((x > y ) ? 1 : 0);
          })
        };

        salesByDate = sortedSales(activeSales, 'ends');
        endingSoon = salesByDate.slice(0, 3); //Hero
        salesSection_00 = salesByDate.splice(3, 1);
        salesSection_01 = salesByDate.slice(4, 6);
        salesSection_02 = salesByDate.slice(6, 9);
        salesSection_03 = salesByDate.slice(9, 11);
        salesSection_04 = salesByDate.splice(12, 1);
        salesSection_05 = salesByDate.slice(12, 16);
        salesSection_06 = salesByDate.splice(16, 1);
        salesSection_07 = salesByDate.slice(16, salesByDate.length);

        salesData = {
          ends: endingSoon,
          sc0: salesSection_00,
          sc1: salesSection_01,
          sc2: salesSection_02,
          sc3: salesSection_03,
          sc4: salesSection_04,
          sc5: salesSection_05,
          sc6: salesSection_06,
          sc7: salesSection_07
        };

        this.setState({
          data: salesData,
          apiDataLoaded: true
        })
      })
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    let { data, apiDataLoaded } = this.state;
    //console.log(this.state.data);
    return (
      <main>
        <Switch>
          <Route path={`/products/:product_id`} render={()=> ( 
            <div>
              <Navbar />
              <ProductLayout/>
              <Footer />
            </div> )} 
          />
          <Route path="/:id" render={(props)=> (
            <div>
              <Navbar />
              <ProductListLayout {...props} />
              <Footer />
            </div> )} 
          />
          <Route exact path="/" render={()=> apiDataLoaded ? (
            <div>
              <Navbar />
              <HomeLayout data={data}/> 
              <Footer />
            </div> ) : 
            <div>Loading...</div>}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
