import avatarImg from '../../../assets/images/image-avatar.png'
import style from './Avatar.module.scss'

const Avatar = () => {
    const {img_wrapper} = style
  return (
    <div className={img_wrapper}>
        <img src={avatarImg} alt='open cart' /> 
    </div> 
  )
}

export default Avatar
