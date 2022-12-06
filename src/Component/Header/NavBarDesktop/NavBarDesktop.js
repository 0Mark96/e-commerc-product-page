import style from './NavBarDesktop.module.scss'
//component
import NavLink from "../NavLink/NavLink"

const NavBarDesktop = () => {
    const {navBar_wrapper,link_list} = style
  return (
    <nav className={navBar_wrapper}>
        <ul className={link_list}>
            <NavLink />
        </ul>
    </nav>
  )
}

export default NavBarDesktop