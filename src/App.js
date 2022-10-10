import { Route, Routes } from 'react-router-dom';

import './App.css';
import './styles/header.css'
import './styles/categoryMenu.css'
import './styles/carousel.css'
import './styles/productDetail.css'
import './styles/products.css'
import './styles/productCard.css'
import './styles/cart.css'

import { Header } from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Cart from './components/Cart';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <CategoryMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          {/* <Route path='category' element={<Products />} />
          <Route path='category/:category_id' element={<CategoryDetail />} /> */}
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
