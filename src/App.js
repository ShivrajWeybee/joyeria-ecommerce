import { Route, Routes } from 'react-router-dom';

import './App.css';
import './styles/header.css'
import './styles/categoryMenu.css'
import './styles/carousel.css'
import './styles/productDetail.css'
import './styles/products.css'
import './styles/productCard.css'
import './styles/cart.css'
import './styles/counter.css'
import './styles/home.css'
import './styles/collectionImage.css'
import './styles/footer.css'
import './styles/loader.css'

import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Cart from './components/Cart';
import { Footer } from './components/Footer';
import Favourite from './components/Favourite';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Cart />
        <CategoryMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          {/* <Route path='category' element={<Products />} />
          <Route path='category/:category_id' element={<CategoryDetail />} /> */}
          {/* <Route path='cart' element={<Cart />} /> */}
          <Route path='favourite' element={<Favourite />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
