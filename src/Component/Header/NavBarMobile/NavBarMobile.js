import style from './NavBarMobile.module.scss'
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import hamburgher from '../../../assets/images/icon-menu.svg'
import close_icon from '../../../assets/images/icon-close.svg'
//component
import NavLink from '../NavLink/NavLink'


const NavBarMobile = () => {
    const {btn_open_nav,btn_close_nav,navBar_container,open_navBar,link_list,opacity} = style

    const [isNavBarOpen,setIsNavBarOpen] = useState(false)
    const toggleNavBar = ()=>{
        setIsNavBarOpen(!isNavBarOpen)
    }
    
    useEffect(()=>{
      if(isNavBarOpen){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'scroll'
      }
    },[isNavBarOpen])

  return (
    <>
        <button className={btn_open_nav} onClick={toggleNavBar}>
            <img src={hamburgher} alt='open menu'/>
        </button> 
        
        {isNavBarOpen && <div className={opacity} onClick={toggleNavBar}></div>}
        
        <nav className={classnames(navBar_container,{[open_navBar]:isNavBarOpen})} role='navigation'>
            <button className={btn_close_nav} onClick={toggleNavBar}>
              <img src={close_icon} alt='close menu'/>
            </button> 
            
            <ul className={link_list} role='menubar'>
                <NavLink />
            </ul>
        </nav>
    </>
  )
}

export default NavBarMobile