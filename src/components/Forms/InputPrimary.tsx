'use client'
import React, { useState } from 'react'


interface InputPrimaryProps {
  name: string
  title?: string
  type?: string
  required?: boolean
  placeholder: string
  onChange?: any
}

export default function InputPrimary({ name, type, title, required, placeholder, onChange }: InputPrimaryProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false)

  return (
    <div className='relative'>
      {title &&
        <label htmlFor={name} className="block text-md text-dark">
          {title}
        </label>
      }
      <input
        name={name}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        type={type === 'password' && senhaVisivel ? 'text' : type}
        className="w-full h-12 mb-2 pl-4 pr-10 border border-brand-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
      />
      {type === 'password' &&
        <a onClick={() => setSenhaVisivel(!senhaVisivel)} className='absolute z-50 cursor-pointer top-4 right-4'>
          {senhaVisivel ?
            <img src="../img/icons/icon-eye-not.svg" alt="" />
            :
            <img src="../img/icons/icon-eye.svg" alt="" />
          }
        </a>
      }
    </div>

  )
}
