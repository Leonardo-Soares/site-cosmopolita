'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  onClick?: any
  full?: boolean
  color?: string
  disabled?: boolean
  isLoading?: boolean
  borderColor?: string
  backgroundColor?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function ButtonPrimary({
  onClick,
  children,
  full = false,
  type = 'button',
  disabled = false,
  borderColor = 'border-brand-blue',
  backgroundColor = 'bg-brand-blue',
  color = 'text-white',
  isLoading = false,
}: Props) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading ? true : disabled}
      style={{ width: full ? '100%' : 'auto' }}
      className={`
        ${borderColor && borderColor}
        ${backgroundColor && backgroundColor}
        ${color && color}
        border-2 border-solid 
        h-12 mt-2 hover:scale-105 transition-all font-bold rounded-2xl px-4`}
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
