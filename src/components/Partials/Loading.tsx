import { Icon } from '@iconify/react'
import React from 'react'

export function Loading() {
  return (
    <div className="flex-1 flex justify-center items-center absolute z-50 w-full h-full bg-brand-dark/50 rounded-lg">
      <Icon
        icon="mingcute:loading-fill"
        className="animate-spin text-brand-white"
        width="40"
        height="40"
      />
    </div>
  )
}
