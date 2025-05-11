import { lazy } from 'react'
import { PageProps } from 'waku/router'

const ProductDetail = lazy(
  () => import('../../features/products/components/ProductDetail/ProductDetail')
)

const ProductIdPage = async ({ id }: PageProps<'/product/[id]'>) => {
  return <ProductDetail path={'/product/[id]'} query={''} id={id} />
}

export default ProductIdPage

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}
