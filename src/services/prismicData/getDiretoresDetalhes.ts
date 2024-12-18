'use server'
import { api_v1 } from '../axios'
import DiretoresProps from '@/hooks/useDiretoresProps'

export const getDiretoresDetalhes = async (nome: any) => {
  const data = await api_v1.get(`/galeria/show?nome=${nome}`)
  return data.data.data as DiretoresProps
}
