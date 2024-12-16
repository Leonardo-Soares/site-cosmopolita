'use server'
import { api_v1 } from '../axios'
import NoticiasProps from '@/hooks/useNoticiasProps'

export const getNoticias = async () => {
  const data = await api_v1.get(`/noticias/show`)
  return data.data.data as NoticiasProps[]
}
