'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  onClick?: any
  color?: string
  full?: boolean
  disabled?: boolean
  isLoading?: boolean
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function ButtonPrimary({
  onClick,
  children,
  full = false,
  type = 'button',
  disabled = false,
  isLoading = false,
}: Props) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading ? true : disabled}
      style={{ width: full ? '100%' : 'auto' }}
      className='h-12 mt-2 hover:scale-105 bg-brand-blue transition-all text-white font-bold rounded-2xl'
    >
      {isLoading ?
        <Icon
          fontSize={28}
          icon="mdi:loading"
          className="animate-spin transition-all hover:scale-105"
        />
        :
        children
      }
    </button>
  )
}
