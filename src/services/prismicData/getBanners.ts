'use server'
import { api_v1 } from '../axios'
import BannerProps from '@/hooks/useBannerProps'
import DiretoresProps from '@/hooks/useDiretoresProps'

export const getBanners = async () => {
  const data = await api_v1.get(`/banner/show`)
  return data.data.data as BannerProps[]
}

export const postBanner = async (formdata: any) => {
  const data = await api_v1.get(``)
  return data.data as DiretoresProps
}
