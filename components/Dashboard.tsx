"use client"
import React from "react"
import FormHeaderDashboard from "./FormHeaderDashboard"
import { Button } from "./ui/button"
import {
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  RotateCcw,
  Shuffle,
} from "lucide-react"
import { ProgressScience } from "./Progress"
import flashcard from "../data/flashcard.json"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

const Dashboard = () => {
  const searchParams = useSearchParams()
  const [flip, setFlip] = React.useState(true)
  const query = searchParams.get("category") || "All"
  const [currentFlashcard, setCurrentFlashcard] = React.useState(0)
  const filteredFlashcard =
    query === "All"
      ? flashcard
      : flashcard.filter((flashcard) => flashcard.category === query)

  React.useEffect(() => {
    setCurrentFlashcard(0)
  }, [query])

  if (!filteredFlashcard.length)
    return (
      <div className='w-full h-[calc(100vh-64px-32px)] flex flex-col justify-start gap-4 border-3 border-primary-foreground rounded-xl'>
        <div className='w-full h-24 flex items-center justify-between border-b-2 border-primary-foreground px-4'>
          <FormHeaderDashboard />
        </div>
        <div className='flex items-center justify-center h-full'>
          <p>No flashcards found for category: {query}</p>
        </div>
      </div>
    )

  return (
    <div className='w-full h-[calc(100vh-64px-32px)] flex flex-col justify-between gap-4  border-3 border-primary-foreground rounded-xl   '>
      <div className='w-full h-24 flex items-center justify-between border-b-2 border-primary-foreground px-4'>
        {/* Header */}
        <FormHeaderDashboard />
        
        {/* Shuffle Button */}
        <Button
          variant={"outline"}
          className='rounded-full text-lg flex items-center gap-2 px-6 py-3 cursor-pointer  '
          onClick={() => setCurrentFlashcard(Math.floor(Math.random() * filteredFlashcard.length))}
        >
          <Shuffle className='w-6 h-6' />
          <span>Shuffle</span>
        </Button>
      </div>

       {/* FlipCard */}

        <div className='flex justify-center items-center h-screen'>
      <motion.div className='relative w-full h-[360px] flex items-center justify-center m-8 perspective-[1000px]'>
        <motion.div
          className='w-full h-full relative transform-3d'
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
        >
          {/* Front Side */}
          <div className='absolute inset-0 w-full h-full bg-secondary rounded-2xl flex items-center justify-center backface-hidden border border-primary-foreground'>
             <Button
          variant={"outline"}
          className='absolute top-20 right-1/2 translate-x-1/2 bg-card rounded-full'
        >
          {filteredFlashcard[currentFlashcard].category}
        </Button>
        <h1 className='w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold text-primary-foreground'>
          {filteredFlashcard[currentFlashcard].question}
        </h1>
        <p className='absolute bottom-24 left-1/2 -translate-x-1/2 text-sm md:text-lg lg:text-xl text-primary-foreground'>
          {flip ? "Click to reveal the answer" : filteredFlashcard[currentFlashcard].answer}
        </p>
        <div className='absolute w-[20%] bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 '>
          <ProgressScience />
          <p>
            {filteredFlashcard[currentFlashcard].progress}/
            {filteredFlashcard.length}
          </p>
        </div>
          </div>

          {/* Back Side */}
          <div className='absolute inset-0 w-full h-full bg-amber-300 rounded-2xl flex items-center justify-center backface-hidden transform-[rotateY(180deg)] border border-primary-foreground'>
            <span className='text-2xl font-bold'>{filteredFlashcard[currentFlashcard].answer}</span>
          </div>
        </motion.div>

        <button
          onClick={() => setFlip((prevState) => !prevState)}
          className='absolute w-full h-full z-10 bg-transparent cursor-pointer '
        >
          {/* {flip ? "Click to reveal the answer" : "Click to reveal the question"} */}
        </button>
      </motion.div>
    </div> 

       {/* Footer */}
      <div className='w-full h-24 flex items-center justify-center gap-4 '>
        <Button className='shadow-lg rounded-full'>
          <CircleCheckBig className='w-6 h-6' />I Know This
        </Button>
        <Button variant={"outline"} className='rounded-full'>
          <RotateCcw className='w-6 h-6' />
          Reset Progress
        </Button>
      </div>

      {/* Pagination */}
      <div className='w-full h-24 flex justify-between items-center border-t-2 border-primary-foreground px-4'>
        <Button
          variant={"outline"}
          className='rounded-full'
          onClick={() =>
            setCurrentFlashcard(
              currentFlashcard <= 0 ? 0 : currentFlashcard - 1
            )
          }
        >
          <ChevronLeft className='w-6 h-6' />
          Previous
        </Button>
        <p>
          {filteredFlashcard[currentFlashcard].id}/{filteredFlashcard.length}
        </p>
        <Button
          variant={"outline"}
          className='rounded-full'
          onClick={() =>
            setCurrentFlashcard(
              currentFlashcard >= filteredFlashcard.length - 1
                ? filteredFlashcard.length - 1
                : currentFlashcard + 1
            )
          }
        >
          <ChevronRight className='w-6 h-6' />
          Next
        </Button>
      </div>
    </div>
  )
}

export default Dashboard
