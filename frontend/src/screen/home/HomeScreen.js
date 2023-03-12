import React from 'react';
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
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product__info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
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
