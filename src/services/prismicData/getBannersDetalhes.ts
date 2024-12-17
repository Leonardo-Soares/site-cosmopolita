'use server'
import { api_v1 } from '../axios'
import BannerProps from '@/hooks/useBannerProps'

export const getBannersDetalhes = async (id: any) => {
  const data = await api_v1.get(`/banner/show?id=${id}`)
  return data.data as BannerProps
}
