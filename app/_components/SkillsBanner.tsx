"use client";

import React from 'react';
import { Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillsBanner() {
  return (
    <div>
      <div className='bg-orange-500 py-4 overflow-hidden relative'>
        {/* Continuous scrolling list */}
        <motion.ul
          className='flex text-3xl py-2 -rotate-[1.3deg] -translate-y-2 px-10 items-center gap-5 w-[2000px] bg-white'
          animate={{ x: [-2000, 0] }} // scroll from left to right
          transition={{
            duration: 1
          }}
        >
          <li><Sparkle stroke="var(--primary)" fill="var(--primary)" /></li>
          <li>Therapist</li>
          <li><Sparkle stroke="var(--primary)" fill="var(--primary)" /></li>
          <li>Content Writer</li>
          <li><Sparkle stroke="var(--primary)" fill="var(--primary)" /></li>
          <li>Psychologist</li>
          <li><Sparkle stroke="var(--primary)" fill="var(--primary)" /></li>
          <li>Author</li>
        </motion.ul>
      </div>
    </div>
  );
}
