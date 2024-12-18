'use server'
import { api_v1 } from '../axios'
import AtasProp from '@/hooks/useAtasProps'

export const getAtasBusca = async (conteudo: string) => {
  const data = await api_v1.get(`/atas/show?conteudo=${conteudo}`)
  return data.data.data as AtasProp[]
}
