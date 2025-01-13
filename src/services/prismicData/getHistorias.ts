'use server'
import { api_v1 } from '../axios'
import HistoriaProps from '@/hooks/useHistoriaProps'

export const getHistorias = async () => {
  const data = await api_v1.get(`/historia/show`)
  return data.data.data as HistoriaProps[]
}
