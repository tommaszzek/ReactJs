import { Route,Routes,Navigate } from 'react-router-dom';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import {Home} from './component/Home';
import {Contact} from './component/Contact';
import {Product} from './component/Product';
import {ProductDet} from './component/ProductDet';
import {Admin} from './component/Admin';
import {PageNotFound} from './component/PageNotFound';
import {Contacten} from './component/Contacten';
import {Contactpl} from './component/Contactpl';


import './App.css';

function App() {
const user=false;

  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
         <Route path='product/:id' element={<ProductDet/>}/>
         <Route path='contact' element={<Contact/>}>
              <Route path='pl' element={<Contactpl/>}/>
              <Route path='en' element={<Contacten/>}/>
         </Route>
         <Route path='admin' element={user ?<Admin /> :<Navigate to='/'/>}/>
         <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}
// 56 poczatek

export default App;
