import ProductCard from '@/components/cards/ProductCard'
import { Badge } from '@/components/ui/badge'
import { Dot } from 'lucide-react'
import React from 'react'

export default function BooksSection() {
  return (
    <div className='relative mb-10'>
      <div className='absolute text-9xl -z-1 w-full text-center grid items-center h-full min-h-[300px]'>
        MY BOOKS
      </div>
      <div className='px-3 w-full flex flex-col items-center gap-8 my-3'>
        <div className='grid grid-cols-3 gap-4 w-full place-items-center'>

        <ProductCard image={"/book.png"}/>
        <ProductCard image={"/book.png"}/>
        <ProductCard image={"/book.png"}/>
        </div>
        <Badge className='text-black bg-transparent border-1 py-2 px-3 border-gray-200'>
           <div className='h-2 w-2 rounded-full bg-black'/> Explore More
        </Badge>
      </div>
    </div>
  )
}
