'use server'
import { api_v1 } from '../axios'
import DiretoresProps from '@/hooks/useDiretoresProps'

export const getDiretores = async () => {
  const data = await api_v1.get(`/galeria/show`)
  return data.data.data as DiretoresProps[]
}

export const getDiretoresDetalhes = async (id: any) => {
  const data = await api_v1.get(`/galeria/show?id=${id}`)
  return data.data as DiretoresProps
}
