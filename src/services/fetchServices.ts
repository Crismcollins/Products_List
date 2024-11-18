import {
  useGetQuery,
  useGetQueryOptions,
  usePostQuery,
} from '@hooks/useRequest'

export const authLogin = () => {
  return usePostQuery('Login', '/auth/login')
}

export const getListProducts = (options?: useGetQueryOptions) => {
  return useGetQuery('Get List Products', '/products', options)
}

export const getProductById = (id: number, options?: useGetQueryOptions) => {
  return useGetQuery('Get Product by id', `/products/${id}`)
}
