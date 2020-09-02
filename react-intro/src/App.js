import React from 'react';
import './sass/style.scss';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navigation />          
          <Heading color="blue" content="Page Title" fontSize="50" padding="10"/>
            <List />
            <div className="grid">
              <div className="grid__item">
                <Product title="Hello" description="product description" price="10"/>
              </div>
              <div className="grid__item">
                <Product special="product--special" title="Hello" description="product description" price="50"/>
              </div>
              <div className="grid__item">
                <Product title="Hello" description="product description" price="22"/>
              </div>
              <div className="grid__item">
                <Product special="product--sold-out" title="Hello" description="product description" price="30"/>
              </div>
            </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
