import React from 'react'
import FormHeaderDashboard from './FormHeaderDashboard'
import { Button } from './ui/button'
import { Shuffle } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='w-full h-[calc(100vh-64px-32px)] border-3 border-primary-foreground rounded-xl  overflow-hidden'>
        <div className='w-full h-32 flex items-center justify-between border-b-2 border-primary-foreground px-4'>
            <FormHeaderDashboard/>
            <Button variant={'outline'} className='rounded-full text-lg flex items-center gap-2 px-6 py-3 cursor-pointer  '><Shuffle className='w-6 h-6'/><span>Shuffle</span></Button>
        </div>
    </div>
  )
}

export default Dashboard