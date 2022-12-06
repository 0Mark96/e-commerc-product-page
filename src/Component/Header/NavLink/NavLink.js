import style from './NavLink.module.scss';

const NavLink = () => {
    const {link} = style
    const links = ['Collections','Men','Women','About','Contact']
  return (
    <>
      {
        links.map(item => (
          <li className={link} key={item}><a href='./#'>{item}</a></li>         
        ))
      }
    </>
  )
}

export default NavLink