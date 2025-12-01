'use client'
import React from 'react'
import CardProgress from './Card'
import { BookOpenCheck, Brain, Layers, MessageSquareOff } from 'lucide-react'
import { useFlashcardStore } from '@/store/flashcardStoe'
const Statistic = () => {
  const {items} = useFlashcardStore()
  return (
    <div className='w-full min-h-[calc(100vh-64px-32px)] flex flex-col gap-4 border-3 border-primary-foreground rounded-xl p-8'>
      <h1 className='text-2xl font-bold'>Study Statistics</h1>
      <div className='w-full flex flex-col items-center gap-8'>
      <CardProgress title="Total Cards" quantity={40} icon={<Layers />} bg_color="bg-blue-400" />
      <CardProgress title="Mastered Cards " quantity={items.length} icon={<Brain />} bg_color="bg-green-400" />
      <CardProgress title="In Progress Cards %" quantity={items.length/40*100 } icon={<BookOpenCheck />} bg_color="bg-yellow-400" />
      <CardProgress title="Not Started Cards" quantity={40-items.length} icon={<MessageSquareOff />} bg_color="bg-red-400" />
      </div>
    </div>
  )
}

export default Statistic