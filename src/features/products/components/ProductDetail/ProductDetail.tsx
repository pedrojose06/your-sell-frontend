import { PageProps } from 'waku/router'
import { products } from '../../constants/products'
import AddCartButton from '../AddCartButton/AddCartButton'

const ProductDetail = async ({ id }: PageProps<'/product/[id]'>) => {
  const { product } = await getStaticProps(id)
  if (!product) return <div>Nenhum produto encontrado</div>
  return (
    <div className="mx-auto flex w-full items-start justify-center gap-12 rounded-lg bg-white p-4">
      <div className="w-4/12">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          loading="lazy"
          decoding="async"
          className="h-auto flex-1 rounded-lg bg-gray-200 object-cover p-8 group-hover:opacity-75"
        />
      </div>
      <div className="flex h-full max-w-1/2 flex-col justify-between">
        <h1>{product?.name}</h1>
        <p className="mt-1 font-medium text-gray-900 text-lg">
          {product?.price}
        </p>
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-2xl">Descrição</h2>
          <p className=" text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <AddCartButton className="mt-auto max-w-96" productId={product?.id} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}

export const getStaticProps = async (id: string) => {
  const product = products.find((product) => product.id === Number(id))
  if (!product) return { notFound: true }
  return {
    product: {
      id: product.id,
      name: product.name,
      imageSrc: product.imageSrc,
      imageAlt: product.imageAlt,
      price: product.price,
    },
  }
}
