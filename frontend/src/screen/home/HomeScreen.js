import React from 'react';
import { Link } from 'react-router-dom';
import Carouselitem from '../../component/carousel/Carouselitem';
import Header from '../../component/header/Header';
import '../../data';
import data from '../../data';
import './home.css';

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Carouselitem />
        <div className="container">
          <h1>ผลไม้สด</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product__info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
