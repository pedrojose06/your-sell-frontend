const useGetProducts = () => {
  const mockProducts = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 15.49 },
    { id: 3, name: 'Product C', price: 7.99 },
  ]
  const data = mockProducts
  const isLoading = false
  const error = null

  return {
    products: data,
    isLoading,
    error,
  }
}

export default useGetProducts
