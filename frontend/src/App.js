import Home from './screen/home/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductScreen from './screen/product/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
