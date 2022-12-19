import style from './ProductItem.module.scss'
import Remove from "./Remove/Remove"


const ProductItem = ({prod}) => {
    const {prod_container,_thumbnail,info,_title,price_wrapper,total_price} = style
    const {thumbnail,title,quantity,price} = prod
    
    let totalPrice = (price * quantity).toFixed(2)

  return (
    <li className={prod_container}>
        <img alt='thumbnail' src={thumbnail} className={_thumbnail}/>
        <div className={info}>
            <p className={_title}>{title}</p>
            <div className={price_wrapper}>
                <p>${price} x {quantity}
                    <span className={total_price}> ${totalPrice}</span>
                </p>
            </div>
        </div>
        <Remove id={prod.id} quantity={quantity}/>
    </li>
  )
}

export default ProductItem