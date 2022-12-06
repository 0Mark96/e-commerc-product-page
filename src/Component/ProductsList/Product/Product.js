import style from './Product.module.scss'
//component
import Slider from './Image/Image'
import Info from './Info/Info'

const Product = ({product}) => {
    const {product_wrapper} = style
  return (
    <section className={product_wrapper}>
        <Slider product={product}/>
        <Info product={product}/>
    </section>
  )
}

export default Product