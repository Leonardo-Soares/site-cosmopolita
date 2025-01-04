'use client'
import React, { useState } from 'react'

interface SelectPrimaryProps {
  title?: string
  placeholder: string
  onChange?: any
  value?: string
  disabled?: boolean
  defaultValue?: string
  defaultLabel?: string
  options: [
    {
      value: string
      label: string
    }
  ]
}

export default function SelectPrimary({ title, disabled, placeholder, value, onChange, options, defaultLabel, defaultValue }: SelectPrimaryProps) {
  return (
    <div className='mb-3'>
      <p className='font-bold text-brand-dark text-center lg:text-start'>
        {title}
      </p>
      <select
        className=' w-full h-12 rounded-xl'
        value={value}
        disabled={disabled}
        onChange={onChange}
        aria-label={placeholder}
      >
        <option value={defaultValue ?? ''}>{defaultLabel ?? 'Selecione uma opção'}</option>
        {options.map((option, index) => (
          option.value != defaultValue &&
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>

  )
}
