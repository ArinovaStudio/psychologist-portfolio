import React from 'react'
import { Sparkle } from 'lucide-react'
export default function SkillsBanner() {
  return (
    <div>
        <div className='bg-primary py-4 overflow-hidden'>
            <ul className='flex text-3xl py-2 -rotate-3 -translate-y-5 -translate-x-1  items-center gap-5 w-[2000px] bg-white'>
                <li><Sparkle stroke="black" fill="black"/></li>
                <li>Therapist</li>
                <li><Sparkle stroke="black" fill="black"/></li>
                <li>Content Writer</li>
                <li><Sparkle stroke="black" fill="black"/></li>
                <li>Psychologist</li>
                <li><Sparkle stroke="black" fill="black"/></li>
                <li>Author</li>
            </ul>
        </div>
        <div></div>
    </div>
  )
}
