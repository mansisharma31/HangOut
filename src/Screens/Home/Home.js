import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import HeroSection from '../../Components/HeroSection';
import Carousel from '../../Components/Carousel';
import Packages from '../../Components/Packages';
import CardCarousel from '../../Components/CardCarousel';

export default class Home extends Component {
  render() {
    return (
        <div>
            <Navbar />
            {/* <HeroSection /> */}
            <Carousel/>
            <CardCarousel/>
            {/* <div className="mt-24">
                <Carousel/>
            </div> */}
            
        </div>
    )
  }
}



