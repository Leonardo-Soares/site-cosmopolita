'use server'
import HistoriaProps from '@/hooks/useHistoriaProps'
import { api_v1 } from '../axios'
import NoticiasProps from '@/hooks/useNoticiasProps'

export const getHistoriaDetalhes = async (id: any) => {
  const data = await api_v1.get(`/historia/show?id=${id}`)
  return data.data as HistoriaProps
}
