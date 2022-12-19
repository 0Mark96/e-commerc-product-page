import { createContext, useReducer} from "react"

export const CartSetterContext = createContext(()=>{})
export const CartContext = createContext([])

//reducer

const initialstate = {
  numOfProducts:0,
  products:[]
}

const cartReducer = (state, action) => {
  switch (action.type) {
  
    case 'ADD_PRODUCT':
      if(state.products?.some((product)=>product.id === action.newProduct.id)){ // update quantity if product is in cart
        return {
                numOfProducts:state.numOfProducts + action.newProduct.quantity,
                products: state.products?.map(prodInCart => {
                            if(prodInCart.id === action.newProduct.id){
                                return {
                                        ...prodInCart,
                                        quantity: action.newProduct.quantity + prodInCart.quantity
                                       }
                            }
                            else{
                                return prodInCart
                            }
                          })
              }
      }else{ // add product in cart
        return {
          numOfProducts:state.numOfProducts + action.newProduct.quantity,
          products:[...state.products, action.newProduct]
        }
      }
      
    case 'REMOVE_PRODUCT':
    return {
      numOfProducts:state.numOfProducts - action.quantity,
      products: state.products.filter((product)=>product.id !== action.productId)
    }
  
    default:
    return state;
  }
  };


const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialstate);
  return (
        <CartSetterContext.Provider value={dispatch}>
            <CartContext.Provider value={cart}>
               {children}
            </CartContext.Provider>
        </CartSetterContext.Provider>
  )
}

export default ContextProvider



// case 'ADD_PRODUCT':
  // return [...state,action.product]