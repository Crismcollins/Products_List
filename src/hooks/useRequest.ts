import { BACKEND_URL } from '@env'
import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

export type usePostQueryOptions = UseMutationOptions<
  AxiosResponse,
  AxiosError,
  any,
  unknown
>

export type useGetQueryOptions = UseQueryOptions<
  AxiosResponse<any, any>,
  AxiosError<unknown, any>,
  AxiosResponse<any, any>,
  QueryKey
>

const baseUrl = BACKEND_URL;

export const useGetQuery = (
  name: string,
  url: string,
  options?: useGetQueryOptions,
  params?: unknown[],
) => {
  return useQuery({
    queryKey: params ? [name, ...params] : [name],
    queryFn: async () => {
      const finalUrl = `${baseUrl}${url}`

      try {
        return await axios.get(finalUrl);
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          return await axios.get(finalUrl);
        } else {
          throw error;
        }
      }
    },
    networkMode: 'always',
    ...options
  })
}

export const usePostQuery = (
  name: string,
  url: string,
  options?: usePostQueryOptions,
  headers?: Record<string, string>,
) => {
  return useMutation<AxiosResponse, AxiosError, any>({
    mutationKey: [name],
    mutationFn: async (values: any) => {
      try {
        return await axios.post(`${baseUrl}${url}`, values, { headers });
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response.status === 401) {
          return await axios.post(`${baseUrl}${url}`, values, { headers });
        }
        throw axiosError;
      }
    },
    networkMode: 'always',
    ...options,
  });
};

export const usePatchQuery = (
  name: string,
  url: string,
  options?: usePostQueryOptions,
  headers?: Record<string, string>,
) => {
  return useMutation<AxiosResponse, AxiosError, any>({
    mutationKey: [name],
    mutationFn: async (values: any) => {
      return await axios.patch(`${baseUrl}${url}`, values, {
        headers
      })
    },
    ...options
  })
}

export const useDeleteQuery = (
  name: string,
  url: string,
  options?: usePostQueryOptions,
) => {
  return useMutation<AxiosResponse, AxiosError, any>({
    mutationKey: [name],
    mutationFn: async () => {
      const completeUrl = `${baseUrl}${url}`

      return await axios.delete(completeUrl)
    },
    ...options
  })
}
