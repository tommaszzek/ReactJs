import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom';
import {Home,Contact,Product,ProductDet,Admin,PageNotFound,Contacten,Contactpl} from '../pages/index';

export const Allroutes = () => {
    const user=false;
  return (
    <>
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
    </>
  )
}
