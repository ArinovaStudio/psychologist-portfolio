import React from 'react'
import { Button } from './ui/button'

export default function ButtonWithBadge({text,color}:{text: string,color?: string}) {
  const variant = color || "primary";
  return (
    <Button variant={"outline"} size="sm" className={`flex items-center gap-2 rounded-full text-${variant} hover:text-${variant}`}><div className={`h-2 w-2 rounded-full bg-${variant}`}/>{text}</Button>
  )
}
