'use client'
import React from 'react'
import Link from 'next/link'

type Props = {
  item: any
  icon: 'user' | 'banner' | 'news' | 'users' | 'atas' | string
}

export function CardDashboard({ item, icon }: Props) {
  return (
    <Link href={`${item.route}`} className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-brand-blue transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-blue transition-all duration-300 group-hover:bg-sky-400">
          {icon === 'atas' &&
            <img src="/img/icons/atas.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'user' &&
            <img src="/img/icons/user.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'banner' &&
            <img src="/img/icons/banner.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'news' &&
            <img src="/img/icons/news.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'users' &&
            <img src="/img/icons/users.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
        </span>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <p className="text-brand-bg-brand-blue transition-all duration-300 group-hover:text-white">
              {item.title}
            </p>
          </p>
        </div>
        <div className="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
