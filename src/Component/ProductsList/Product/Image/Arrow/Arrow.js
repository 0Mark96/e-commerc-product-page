import style from './Arrow.module.scss'
import iconPrev from '../../../../../assets/images/icon-previous.svg'
import iconNext from '../../../../../assets/images/icon-next.svg'


const Arrow = ({dispatch,imgLength}) => {
    const {arrow_wrapper} = style

  return (
    <div className={arrow_wrapper}>
       <button onClick={()=>dispatch({type:'PREVIOUS'})}><img src={iconPrev} alt='previous'/></button>
       <button onClick={()=>dispatch({type:'NEXT',imgLength})}><img src={iconNext} alt='next'/></button>
    </div>
  )
}

export default Arrow