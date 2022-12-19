import style from './Arrow.module.scss'
import IconPrev from '../../../../../assets/images/iconPrevious.js'
import IconNext from '../../../../../assets/images/iconNext.js'


const Arrow = ({dispatch,imgLength}) => {
    const {arrow_wrapper} = style

  return (
    <div className={arrow_wrapper}>
       <button onClick={()=>dispatch({type:'PREVIOUS',imgLength})}><IconPrev /></button>
       <button onClick={()=>dispatch({type:'NEXT',imgLength})}><IconNext /></button>
    </div>
  )
}

export default Arrow