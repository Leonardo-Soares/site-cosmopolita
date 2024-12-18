'use server'
import { api_v1 } from '../axios'
import BannerProps from '@/hooks/useBannerProps'

export const getBannersBusca = async (titulo: string) => {
  const data = await api_v1.get(`/banner/show?titulo=${titulo}`)
  return data.data as BannerProps
}
