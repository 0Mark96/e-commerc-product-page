import style from './Info.module.scss'
import { useReducer } from 'react'
//component
import Quantity from './Quantity/Quantity'
import AddToCart from './AddToCart/AddToCart'

const initialState = 0
const quantityReducer = (state, action) => {
    switch (action.type) {
    
      case 'INCREASE':
      return state + 1

      case 'DECREASE':
      return state === 0 ? state : state -1
      
      default:
      return state
    }
    };

const Info = ({product}) => {
    const {info_wrapper,company_name,title_style,descrip,prices,price_style,discount,original_price,buttons_wrapper} = style
    const {company,title,description,price,discountPercentage,originalPrice} = product
   
    const [quantity,dispatch] = useReducer(quantityReducer,initialState)

  return (
      <div className={info_wrapper}>
        <p className={company_name}>{company}</p>
        <h1 className={title_style}>{title}</h1>
        <p className={descrip}>{description}</p>
        <div className={prices}>
            <h1 className={price_style}>${price}</h1>
            <h2 className={discount}>{discountPercentage}</h2>
            <h2 className={original_price}>{originalPrice}</h2>
        </div>
        <div className={buttons_wrapper}>
        <Quantity quantity={quantity} dispatch={dispatch}/>
        <AddToCart product={product} quantity={quantity}/>
        </div>
    </div>
  )
}

export default Info