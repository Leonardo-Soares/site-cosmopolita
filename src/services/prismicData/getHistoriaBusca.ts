'use server'
import HistoriaProps from '@/hooks/useHistoriaProps'
import { api_v1 } from '../axios'

export const getHistoriaBusca = async (titulo: string) => {
  const data = await api_v1.get(`/historia/show?titulo=${titulo}`)
  return data.data as HistoriaProps[]
}
