import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Destinations from "./Destinations";
import BestPrices from "./BestPrices";
import AviaCompanies from "./AviaСompanies";
import KnowMore from "./KnowMore";
import SpecialOffer from "./SpecialOffer";
import AboutFlight from "./AbouFlight";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Destinations />
        <BestPrices />
        <AviaCompanies />
        <KnowMore />
        <SpecialOffer />
        <AboutFlight />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
