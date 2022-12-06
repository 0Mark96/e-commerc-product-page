import './Remove.scss'
import deleteImg from '../../../../../assets/images/icon-delete.svg'
import { CartSetterContext } from '../../../../../Contextprovider/ContextProvider'
import { useContext } from 'react'




const Remove = ({id}) => {
    const dispatch = useContext(CartSetterContext)

    const removeProduct = (id) => {
       dispatch({type: 'REMOVE_PRODUCT', productId:id})
    }
  return (
    <button onClick={()=>removeProduct(id)} className='remove_btn'><img src={deleteImg} alt='delete'/></button>
  )
}

export default Remove