'use server'
import { api_v1 } from '../axios'
import NoticiasProps from '@/hooks/useNoticiasProps'

export const getNoticiasDetalhes = async (id: any) => {
  const data = await api_v1.get(`/noticias/show?id=${id}`)
  return data.data as NoticiasProps
}
