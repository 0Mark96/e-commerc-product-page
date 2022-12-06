import style from './ProductItem.module.scss'
import Remove from "./Remove/Remove"


const ProductItem = ({prod}) => {
    const {prod_container,_thumbnail,info,_title,price_wrapper,total_price} = style
    const {thumbnail,title,quantity,price,totalPrice} = prod
    
  return (
    <li className={prod_container}>
        <img alt='thumbnail' src={thumbnail} className={_thumbnail}/>
        <div className={info}>
            <p className={_title}>{title}</p>
            <div className={price_wrapper}>
                <p>${price} x {quantity === 0 ? 1 : quantity} <span className={total_price}>${totalPrice}</span></p>
            </div>
        </div>
        <Remove id={prod.id}/>
    </li>
  )
}

export default ProductItem