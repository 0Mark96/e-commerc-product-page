import style from './Thumbnail.module.scss'
import classnames from 'classnames'


const Thumbnail = ({product,dispatch,selectedId}) => {
    const {thumbnail_wrapper,_thumbnail,img_wrapper,img_wrapper_selected} = style

  return (
    <ul className={thumbnail_wrapper}>
        {
            product.thumbnail.map(item => (
                <div key={item.id}
                className={classnames(img_wrapper,{[img_wrapper_selected]:selectedId === item.id})}>
                   <img  src={item.thumb} alt={`thumbnail ${item.id}`}
                        className={_thumbnail}
                        onClick={()=>{dispatch({type:'CHANGE_FROM_THUMBNAIL',id:item.id})}}/>
                </div>

            ))
        }
    </ul>
  )
}

export default Thumbnail