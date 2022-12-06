import style from './Header.module.scss'
import { useState, useEffect } from 'react'
//component
import NavBarMobile from './NavBarMobile/NavBarMobile'
import NavBarDesktop from './NavBarDesktop/NavBarDesktop'
import Logo from './Logo/Logo'
import Cart from './Cart/Cart'
import Avatar from './Avatar/Avatar'

const Header = () => {
    const {header} = style

    const [isMobile,setIsMobile]=useState(window.innerWidth)
    // detect screenSize
    useEffect(()=>{
      const mql = window.matchMedia('(max-width: 767px)');
      const screenTest = (e)=>{
        return setIsMobile(e.matches)
      }
      mql.addEventListener('change', screenTest);
      return ()=> mql.removeEventListener('change',screenTest)
    },[])
    
  return ( 
    <header className={header}>
        {(isMobile <= 767 && isMobile ) && <NavBarMobile />}
        <Logo />
        {(isMobile >= 768 || !isMobile ) && <NavBarDesktop />}
        <Cart />
        <Avatar />
    </header>
  ) 
}



export default Header 