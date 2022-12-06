import {productsData} from './dataProducts'
import { createContext, useReducer} from "react"

export const ProductsContext = createContext(productsData)
export const CartSetterContext = createContext(()=>{})
export const CartContext = createContext([])

//reducer

const initialstate = []

const cartReducer = (state, action) => {
  switch (action.type) {
  
    case 'ADD_PRODUCT':
    return [...state,action.product]
  
    case 'REMOVE_PRODUCT':
    return state.filter((product)=>product.id !== action.productId)
  
    default:
    return state;
  }
  };


const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialstate);
  return (
    <ProductsContext.Provider value={productsData}>
        <CartSetterContext.Provider value={dispatch}>
            <CartContext.Provider value={cart}>
               {children}
            </CartContext.Provider>
        </CartSetterContext.Provider>
    </ProductsContext.Provider>
  )
}

export default ContextProvider
