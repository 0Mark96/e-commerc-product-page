import style from './SliderModal.module.scss'
import { createPortal } from 'react-dom'
import IconClose from '../../../../../assets/images/iconClose'
const modalRoot = document.getElementById('modalRoot')

const SliderModal = ({children,dispatch}) => {
    const {slider_modal,ligth_box,close_modal_btn} = style
  
    return createPortal(
        <>
            <div className={ligth_box} onClick={()=>dispatch({type:'CLOSE_MODAL'})}></div>
            
            <div className={slider_modal}>
                <button className={close_modal_btn} onClick={()=>dispatch({type:'CLOSE_MODAL'})}><IconClose/></button>
               {children}
            </div>
        </>,
        modalRoot
  )
}

export default SliderModal