'use server'
import { api_v1 } from '../axios'
import AtasProp from '@/hooks/useAtasProps'

export const getAtasDetalhes = async (id: any) => {
  const data = await api_v1.get(`/atas/show?id=${id}`)
  return data.data as AtasProp
}
