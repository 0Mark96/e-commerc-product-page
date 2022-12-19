import style from './ProductsList.module.scss'
import { productsData } from './dataProducts'
//component
import Product from './Product/Product'




const ProductsList = () => {
    const {products_list} = style

    
  return (
    <main className={products_list}>
      {
        productsData.map(product => (
          <Product product={product} key={product.id}/>
        ))
      }
    </main>
  )
}

export default ProductsList