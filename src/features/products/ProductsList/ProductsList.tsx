import useGetProducts from '../hooks/useGetProducts'

const ProductsList = () => {
  const { products, isLoading, error } = useGetProducts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) <div>Nenhum produto encontrado</div>

  return (
    <div>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default ProductsList
export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
