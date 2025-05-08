import ProductsList from '../features/products/components/ProductsList/ProductsList'

const ProductsPage = () => {
  return <ProductsList />
}
export default ProductsPage

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
