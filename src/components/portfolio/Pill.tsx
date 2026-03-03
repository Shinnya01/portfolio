'use client'
import React from 'react'
import { cn } from './utils'

export const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur',
      className
    )}
  >
    {children}
  </span>
)