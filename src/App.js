import React from 'react';

import { Aboutus, Evnts, Footer, Header  } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Aboutus />
      <Evnts />
      <Footer />
    </div>
  )
};

export default App;