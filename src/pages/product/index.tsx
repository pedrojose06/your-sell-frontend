const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <p>This is the product page.</p>
    </div>
  )
}

export default ProductPage
export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
