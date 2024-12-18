'use server'
import { api_v1 } from '../axios'
import AtasProp from '@/hooks/useAtasProps'

export const getAtas = async () => {
  const data = await api_v1.get(`/atas/show`)
  return data.data.data as AtasProp[]
}
