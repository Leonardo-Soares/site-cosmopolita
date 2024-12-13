'use client'
import React, { FormEvent, useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'


interface InputPrimaryProps {
  name: string
  title?: string
  type?: string
  required?: boolean
  placeholder: string
  value?: string
  onChange?: (event: FormEvent<HTMLInputElement>) => void
}

export default function InputArea({ name, type, title, value, required, placeholder, onChange }: InputPrimaryProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false)

  return (
    <div className='relative'>
      {title &&
        <label htmlFor={name} className="block font-bold text-md text-dark">
          {title}
        </label>
      }
      <textarea
        name={name}
        required={required}
        rows={5}
        value={value}
        placeholder={placeholder}
        onChange={onChange as any}
        className="w-full h-24 mb-2 pl-4 pr-10 border border-brand-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
      >
      </textarea>
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
