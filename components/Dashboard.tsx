import React from 'react'
import FormHeaderDashboard from './FormHeaderDashboard'
import { Button } from './ui/button'
import { Shuffle } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='w-full h-[calc(100vh-64px-32px)] border-3 border-primary-foreground rounded-xl  '>
        <div className='w-full h-32 flex items-center justify-between border-b-2 border-primary-foreground px-4'>
            <FormHeaderDashboard/>
            <Button variant={'outline'} className='rounded-full text-lg flex items-center gap-2 px-6 py-3 cursor-pointer  '><Shuffle className='w-6 h-6'/><span>Shuffle</span></Button>
        </div>
        <div className='relative h-96 flex items-center justify-center bg-secondary m-8 rounded-2xl border-3 border-primary-foreground '>
          <Button variant={'outline'} className='absolute top-4 right-1/2 translate-x-1/2 bg-card rounded-full'>Web Development</Button>
          <h1 className='w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-primary-foreground'>What does HTML stand for?</h1>
          <p className='absolute bottom-32 left-1/2 -translate-x-1/2 text-lg text-primary-foreground'>Click to reveal the answer</p>
            
        </div>
    </div>
  )
}

export default Dashboard