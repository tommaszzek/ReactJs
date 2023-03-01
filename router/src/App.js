import { Route,Routes,Navigate } from 'react-router-dom';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import {Home} from './component/Home';
import {Contact} from './component/Contact';
import {Product} from './component/Product';
import {ProductDet} from './component/ProductDet';
import {Admin} from './component/Admin';


import './App.css';

function App() {
const user=false;

  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='contact' element={<Contact/>}></Route>
         <Route path='product' element={<Product/>}></Route>
         <Route path='productDet/1001' element={<ProductDet/>}></Route>
         <Route path='admin' element={user ?<Admin /> :<Navigate to='/'/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
// 56 poczatek

export default App;
