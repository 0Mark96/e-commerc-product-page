import style from './Quantity.module.scss'
import minusImg from '../../../../../assets/images/icon-minus.svg'
import plusImg from '../../../../../assets/images/icon-plus.svg'


const Quantity = ({quantity,dispatch}) => {
  const {quantity_wrapper,num} = style
  return (
    <div className={quantity_wrapper}>
        <button onClick={()=>dispatch({type:'DECREASE'})}><img src={minusImg} alt='minus'/></button>
           <p className={num}>{quantity}</p>
        <button onClick={()=>dispatch({type:'INCREASE'})}><img src={plusImg} alt='plus'/></button>
    </div>
  )
}

export default Quantity