import {Link,NavLink} from 'react-router-dom';
import React from 'react'
import './css/heaer.css';

export const Header = () => {
  return (
    <>
    <header>
    <Link to='/'>Logo i slogan reklamowy strony</Link>
    </header>
    <nav className='navigation'>
        <NavLink to='/' className="link" end>Start</NavLink>
        <NavLink to='/product' className="link" end>Produkty</NavLink>
        <NavLink to='/product/154' className="link" end>Produkty DETALS</NavLink>
        <NavLink to='/contact' className="link" end>Kontakt</NavLink>
    </nav>
    </>
  )
}
