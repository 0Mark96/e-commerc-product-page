import './AddToCart.scss'
import cartIcon from '../../../../../assets/images/icon-minicart.svg'
import { useContext } from "react"
import { CartSetterContext } from "../../../../../Contextprovider/ContextProvider"



const AddToCart = ({product,quantity}) => {
    const {id,title,price,thumbnail} = product

    const dispatch = useContext(CartSetterContext)

    const addToCart = () =>{
        const productToCart = {
            id,
            title,
            price,
            quantity:quantity === 0 ? quantity +1 : quantity,
            thumbnail:thumbnail[0].thumb
        }
            dispatch({type:'ADD_PRODUCT',newProduct:productToCart})          
    }

  return (
    <button onClick={addToCart} className='add_btn'>
       <img  src={cartIcon} alt='cart img'/>
       Add to cart
    </button>
  )
}

export default AddToCart