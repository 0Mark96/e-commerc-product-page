import style from './Image.module.scss'
import { useEffect, useReducer,useState} from 'react'
//component
import Slider from './Slider/Slider';
import Thumbnail from './Thumbnail/Thumbnail';
import SliderModal from './SliderModal/SliderModal';
import Arrow from './Arrow/Arrow';

const initialstate= {
    openModal:false,
    selectedId:1
}
const sliderReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
    return state.selectedId < action.imgLength ? {
      ...state,
      selectedId: state.selectedId + 1
    } : {
       ...state,
       selectedId:1
    }

    case 'PREVIOUS':
    return state.selectedId > 1 ? {
      ...state,
      selectedId:state.selectedId - 1
    } : {
      ...state,
      selectedId: action.imgLength 
      }
    case 'CHANGE_FROM_THUMBNAIL':
    return {
      ...state,
      selectedId:action.id
    }

    case 'OPEN_MODAL':
      return {
        ...state,
        openModal:true
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        openModal:false
      }

    default:
    return state
  }
  };


const Images = ({product}) => {
    const {image_wrapper} = style
    
    //control slider behavour
    const [{openModal,selectedId}, dispatch] = useReducer(sliderReducer,initialstate)
    // detect screenSize
    const [isMobile,setIsMobile]=useState(window.innerWidth)
    useEffect(()=>{
      const mql = window.matchMedia('(max-width: 767px)');
      const screenTest = (e)=>{
        return setIsMobile(e.matches)
      }
      mql.addEventListener('change', screenTest);
      return ()=> mql.removeEventListener('change',screenTest)
    },[])
   
  return (
    <div className={image_wrapper} >
        <Slider dispatch={dispatch} selectedId={selectedId} product={product} isMobile={isMobile}>
            {(isMobile >= 768 || !isMobile ) ? null : <Arrow dispatch={dispatch} imgLength={product.images.length}/>}
        </Slider>
        {(isMobile >= 768 || !isMobile ) &&  <Thumbnail 
                                             product={product} 
                                             dispatch={dispatch} 
                                             selectedId={selectedId}/> 
                                           }
      
    {/* portal modal zoom image  */}
       { openModal && (isMobile >= 768  || !isMobile) &&
       <SliderModal dispatch={dispatch}>
            <Slider dispatch={dispatch} 
                    selectedId={selectedId} 
                    product={product}
                    isMobile={isMobile}>
                    <Arrow dispatch={dispatch} imgLength={product.images.length}/>
            </Slider>
             
            <Thumbnail product={product} 
                       dispatch={dispatch} 
                       selectedId={selectedId}/>
        </SliderModal> 
      }
    </div>
  )
}

export default Images