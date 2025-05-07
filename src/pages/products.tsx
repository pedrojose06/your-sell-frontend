import ProductsList from '../features/products/components/ProductsList/ProductsList'

const Products = () => {
  return <ProductsList />
}
export default Products

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
