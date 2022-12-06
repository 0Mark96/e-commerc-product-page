import style from './Slider.module.scss'
import classnames from 'classnames'

const Slider = ({selectedId,product,children,dispatch,isMobile}) => {
    const {slider_wrapper,product_img,img_selected} = style
    
  return (
    <div className={slider_wrapper} onClick={()=>(!isMobile || isMobile >= 768) && dispatch({type:'OPEN_MODAL'})}>
      {
        product?.images.map(item => (
            <img src={item.img} alt='product' 
             className={classnames(product_img,{[img_selected]:selectedId === item.id})} 
             key={item.id}/>
        ))
      }
      {children}
    </div>
  )
}

export default Slider