'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  color?: string
  fontWeigth?: string
  decoration?: string
  alignment?: string
  children: React.ReactNode
}

export function TitleH1({
  children,
  alignment = 'text-start',
  fontWeigth = 'font-bold',
  color = 'text-brand-white',
  decoration = 'none',

}: Props) {

  return (
    <h1
      className={`
        ${color && color}
        ${fontWeigth && fontWeigth}
        ${decoration && decoration}
        ${alignment && alignment}
        text-4xl
        `}
    >
      {children}
    </h1>
  )
}
