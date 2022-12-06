import style from './AddToCart.module.scss'
import cartIcon from '../../../../../assets/images/icon-minicart.svg'
import { useContext } from "react"
import { CartContext, CartSetterContext } from "../../../../../Contextprovider/ContextProvider"



const AddToCart = ({product,quantity}) => {
    const {add_btn} = style
    const {id,title,price,thumbnail} = product

    const cart = useContext(CartContext)
    const dispatch = useContext(CartSetterContext)

    const addToCart = () =>{
        const productToCart = {
            id,
            title,
            price,
            quantity,
            totalPrice:(price * (quantity === 0 ? 1 : quantity )).toFixed(2),
            thumbnail:thumbnail[0].thumb
        }
        if(cart?.some((product)=>product.id === id)){
            alert('product already added')
        }else{
            dispatch({type:'ADD_PRODUCT',product:productToCart})          
        }
    }

  return (
    <button onClick={addToCart} className={add_btn}>
       <img  src={cartIcon} alt='cart img'/>
       Add to cart
    </button>
  )
}

export default AddToCart