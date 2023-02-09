
function Product() {
  return (
    <div>
        <h1>{Product.name}</h1>
        <h3>{Product.description}</h3>
        <h3>{Product.price}</h3>
        <img src={'http://127.0.0.1:8000/static'+Product.image}/>
    </div>
  )
}

export default Product