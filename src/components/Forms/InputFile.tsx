'use client'
import React, { useState } from 'react'


interface InputPrimaryProps {
  name: string
  title?: string
  required?: boolean
  placeholder: string
  onChange?: any
  value?: string
  maxLength?: number
  type: 'application/pdf' | 'image/png' | 'image/jpeg' | 'image/jpg' | 'image/gif'
}

export default function InputFile({ name, title, maxLength, type, required, placeholder, value, onChange }: InputPrimaryProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    const maxFileSize = 2 * 1024 * 1024; // 2MB em bytes

    if (selectedFile) {
      // Verifica se o arquivo é um PDF
      if (selectedFile.type !== type) {
        setError("O arquivo deve estar no formato correto.");
        setFile(null);
        return;
      }

      // Verifica se o tamanho do arquivo é menor que 2MB
      if (selectedFile.size > maxFileSize) {
        setError("O arquivo deve ser menor que 2MB.");
        setFile(null);
        return;
      }

      // Se passar as validações
      setFile(selectedFile);
      setError(""); // Limpa mensagens de erro
    } else {
      setError("Nenhum arquivo selecionado.");
      setFile(null);
    }
  };

  return (
    <div className='relative'>
      {title &&
        <label htmlFor={name} className="block text-md font-semibold text-dark">
          {title}
        </label>
      }
      <input
        min={0}
        name={name}
        value={value}
        type={'file'}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleFileChange}
        className="w-full lowercase font-semibold h-10 mb-2 pl-4 pr-10 border border-brand-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
      />
      {error && <p className="text-red-500 text-sm mt-1 mb-4">{error}</p>}
      {file && <p className="text-green-500 text-sm mt-1 mb-4">Arquivo válido: {file.name}</p>}
    </div>
  )
}
