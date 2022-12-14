import iconCart from '../../../assets/images/icon-cart.svg'
import style from './Cart.module.scss'
import classnames from 'classnames'
//context
import { CartContext } from '../../../Contextprovider/ContextProvider'
import { useContext, useState, useEffect} from 'react'
import ProductItem from './ProductItem/ProductItem'

const Cart = () => {
    const {outer_wrapper,btn_open_cart,cart_container,cart_title,open_cart,prodList_container,check_btn,empty_p,length} = style
    
    const [isCartOpen,setIsCartOpen] = useState(false)

    const cart = useContext(CartContext)

    useEffect(() => {
      const closeModal = (e) => {
        if (!e.target.closest('.cartwrapper,.remove-btn')) {
          setIsCartOpen(false)
        }
      }
      document.addEventListener('click', closeModal)
      return () => {      
        document.removeEventListener('click', closeModal)
      }
    }, [outer_wrapper])


  return (
    <div className={`${outer_wrapper} cartwrapper`}>
        <button className={btn_open_cart} onClick={()=>setIsCartOpen(prev => !prev)}>
          <img src={iconCart} alt='open cart'/>
          {cart.numOfProducts > 0 && <span className={length}>{cart.numOfProducts}</span>}
        </button> 
    
        <div className={classnames(cart_container,{[open_cart]:isCartOpen})}>
            <p className={cart_title}>Cart</p>
            <ul className={prodList_container}>
                {cart.products.length > 0 ? cart.products.map((prod)=><ProductItem prod={prod} key={prod.id}/>) :
                 <p className={empty_p}>Your cart is empty</p>
                }
            </ul>
            {cart.products.length > 0 && <button className={check_btn}>Checkout</button>}
        </div>
    </div>
  )
}

export default Cart