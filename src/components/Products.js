import Product from "./Product"

function Products({Products}) {
  return (
    <div>Products:
        {Products.map(product => <Product key={product.id} product={product}/>)}
    </div>
  )
}

export default Products