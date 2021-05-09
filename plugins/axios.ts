import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosError } from 'axios'

type PluginParams = {
  $axios: NuxtAxiosInstance
  redirect: (key: string) => void
}

export default function ({ $axios, redirect }: PluginParams) {
  $axios.setHeader('Accept-Language', 'it')
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('x-musement-currency', 'EUR')
  $axios.setHeader('x-musement-version', '3.4.0')

  $axios.onError((error: AxiosError) => {
    redirect('/404')
  })
}
