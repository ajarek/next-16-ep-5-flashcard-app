import React from 'react'
import CardProgress from './Card'
import { BookOpenCheck, Brain, Layers, MessageSquareOff } from 'lucide-react'
const Statistic = () => {
  return (
    <div className='w-full h-[calc(100vh-64px-32px)] flex flex-col gap-4 border-3 border-primary-foreground rounded-xl p-8'>
      <h1 className='text-2xl font-bold'>Study Statistics</h1>
      <div className='w-full flex flex-col items-center gap-8'>
      <CardProgress title="Total Cards" quantity={40} icon={<Layers />} bg_color="bg-blue-400" />
      <CardProgress title="Mastered Cards " quantity={20} icon={<Brain />} bg_color="bg-green-400" />
      <CardProgress title="In Progress Cards" quantity={21} icon={<BookOpenCheck />} bg_color="bg-yellow-400" />
      <CardProgress title="Not Started Cards" quantity={9} icon={<MessageSquareOff />} bg_color="bg-red-400" />
      </div>
    </div>
  )
}

export default Statistic