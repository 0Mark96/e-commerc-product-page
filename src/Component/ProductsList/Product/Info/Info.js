import style from './Info.module.scss'
import { useReducer } from 'react'
//component
import Quantity from './Quantity/Quantity'
import AddToCart from './AddToCart/AddToCart'

const initialState = {count:0}
const quantityReducer = (state, action) => {
    switch (action.type) {
     
      case 'INCREASE':
      return {count: state.count + 1}

      case 'DECREASE':
      return {count: state.count > 0 ? state.count - 1 : state.count}
      
      case 'SET_INPUT_VALUE':
          return {count: action.value ? action.value : 0}
        
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
            <span className={price_style}>${price}</span>
            <span className={discount}>{discountPercentage}</span>
            <span className={original_price}>{originalPrice}</span>
        </div>
        <div className={buttons_wrapper}>
        <Quantity quantity={quantity.count} dispatch={dispatch}/>
        <AddToCart product={product} quantity={quantity.count}/>
        </div>
    </div>
  )
}

export default Info