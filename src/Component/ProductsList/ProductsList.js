import style from './ProductsList.module.scss'
//component
import Product from './Product/Product'
//context
import { useContext } from "react"
import { ProductsContext } from "../../Contextprovider/ContextProvider"


const ProductsList = () => {
    const {products_list} = style

    const productsData = useContext(ProductsContext)
    
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