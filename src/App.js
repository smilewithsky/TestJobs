import './reset.css'
import BabyShop from './Container';
import Header from './Container/Header';
import TabletFooterIcon from './Container/TabletFootIcon';
import Footer from './Container/Footer';
import FooterLow from './Container/FooterLow';
import ListItemScroll from './Container/ListIconScroll';
import Cart from './Container/Site/Cart';
import Login from './Container/Site/Login';
import HeaderTop from './Container/HeaderTop';
import SiteMenu from './Container/Site/Menu';
import PopUp from './Container/Common/Product/PopUp';
import OurProduct from './Container/OurProduct';
import Search from './Container/Search';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Container/AboutUs';
function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Header />
      <Search />
      <TabletFooterIcon />
      <ListItemScroll />
      <Routes>
        <Route path="/" element={<BabyShop />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/OurProduct">
          <Route path=":id" element={<OurProduct />}></Route>
        </Route>
      </Routes>
      <SiteMenu />
      <Cart />
      <Login />
      <div className='footer'>
          <Footer />
          <FooterLow />
      </div>
    </div>
  );
}

export default App;
