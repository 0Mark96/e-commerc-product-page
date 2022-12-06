import style from './Logo.module.scss'
import logo_img from '../../../assets/images/logo.svg'

const Logo = () => {
    const {logo_wrapper} = style
  return (
    <div className={logo_wrapper}>
        <a href='./#'><img src={logo_img} alt='logo(sneaker)'/></a>
    </div>
  )
}

export default Logo