'use server'
import { api_v1 } from '../axios'
import NoticiasProps from '@/hooks/useNoticiasProps'

export const getNoticiasBusca = async (titulo: string) => {
  const data = await api_v1.get(`/noticias/show?titulo=${titulo}`)
  return data.data as NoticiasProps
}
