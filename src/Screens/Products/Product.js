import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import ProductPage from '../../Components/ProductPage';

export default class Home extends Component {
    render() {
      return (
          <div>
              <Navbar />
              <ProductPage/>
              
          </div>
      )
    }
  }