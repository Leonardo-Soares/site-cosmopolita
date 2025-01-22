'use server'
import { api_v1 } from '../axios'
import useUsuariosProps from '@/hooks/useUsuariosProps'

export const getUsuarios = async () => {
  const data = await api_v1.get(`/usuario/show`)
  return data.data.data as useUsuariosProps[]
}
