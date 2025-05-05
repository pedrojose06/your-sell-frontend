import ProductsList from '../features/products/ProductsList/ProductsList'

const Products = () => {
  return <ProductsList />
}
export default Products

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
