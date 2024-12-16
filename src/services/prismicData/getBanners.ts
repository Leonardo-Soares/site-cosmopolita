'use server'
import { api_v1 } from '../axios'
import BannerProps from '@/hooks/useBannerProps'

export const getBanners = async () => {
  const data = await api_v1.get(`/banner/show`)
  return data.data.data as BannerProps[]
}
