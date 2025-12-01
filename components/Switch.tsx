"use client"
import React from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

const Switch = () => {
  const [mode, setMode] = React.useState<"study" | "all">("study")

  const handleStudyMode = () => {
    setMode("study")
  }
  const handleAllCards = () => {
    setMode("all")
  }

  return (
    <div className='hidden sm:flex items-center gap-2 border border-primary-foreground rounded-2xl p-1'>
      <Button
        onClick={handleStudyMode}
        variant='ghost'
        className='px-4 py-2 rounded-2xl relative hover:bg-transparent cursor-pointer'
      >
        {mode === "study" && (
          <motion.div
            layoutId='active-pill'
            className='absolute inset-0 bg-primary rounded-2xl'
            transition={{ type: "spring", duration: 0.6 }}
          />
        )}
        <span className='relative z-10'>Study Mode</span>
      </Button>
      <Button
        onClick={handleAllCards}
        variant='ghost'
        className='px-4 py-2 rounded-2xl relative hover:bg-transparent cursor-pointer'
      >
        {mode === "all" && (
          <motion.div
            layoutId='active-pill'
            className='absolute inset-0 bg-primary rounded-2xl'
            transition={{ type: "spring", duration: 0.6 }}
          />
        )}
        <span className='relative z-10'>All Cards</span>
      </Button>
    </div>
  )
}

export default Switch
