import style from './Quantity.module.scss'
import minusImg from '../../../../../assets/images/icon-minus.svg'
import plusImg from '../../../../../assets/images/icon-plus.svg'


const Quantity = ({quantity,dispatch}) => {
  const {quantity_wrapper,num} = style

  const manualyValue = (e) => {
          dispatch({type:'SET_INPUT_VALUE',value:parseInt(e.target.value)})
  }

  return (
    <div className={quantity_wrapper}>
        <button onClick={()=>dispatch({type:'DECREASE'})}><img src={minusImg} alt='minus'/></button>
           <input type='text' value={quantity} onChange={(e)=> manualyValue(e)} className={num}/>
        <button onClick={()=>dispatch({type:'INCREASE'})}><img src={plusImg} alt='plus'/></button>
    </div>
  )
}

export default Quantity