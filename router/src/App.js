import { Route,Routes } from 'react-router-dom';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import {Home} from './component/Home';
import {Contact} from './component/Contact';
import {Product} from './component/Product';
import {ProductDet} from './component/ProductDet';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='contact' element={<Contact/>}></Route>
         <Route path='product' element={<Product/>}></Route>
         <Route path='productDet/1001' element={<ProductDet/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
// 54 poczatek

export default App;
