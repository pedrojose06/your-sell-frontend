import ProductsList from '../features/products/components/ProductsList/ProductsList'

export default async function HomePage() {
  const data = await getData()

  return (
    <div>
      <title>{data.title}</title>
      <ProductsList />
    </div>
  )
}

const getData = async () => {
  const data = {
    title: 'Wakuuu',
    headline: 'Wakuq',
    body: 'Hello world!',
  }

  return data
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
