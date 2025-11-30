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

const Dashboard = () => {
  const searchParams = useSearchParams()
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
        <FormHeaderDashboard />
        <Button
          variant={"outline"}
          className='rounded-full text-lg flex items-center gap-2 px-6 py-3 cursor-pointer  '
        >
          <Shuffle className='w-6 h-6' />
          <span>Shuffle</span>
        </Button>
      </div>
      <div className='relative h-[480px] flex items-center justify-center bg-secondary m-8 rounded-2xl border-3 border-primary-foreground overflow-hidden'>
        <Button
          variant={"outline"}
          className='absolute top-4 right-1/2 translate-x-1/2 bg-card rounded-full'
        >
          {filteredFlashcard[currentFlashcard].category}
        </Button>
        <h1 className='w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold text-primary-foreground'>
          {filteredFlashcard[currentFlashcard].question}
        </h1>
        <p className='absolute bottom-24 left-1/2 -translate-x-1/2 text-sm md:text-lg lg:text-xl text-primary-foreground'>
          Click to reveal the answer
        </p>
        <div className='absolute w-[20%] bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 '>
          <ProgressScience />
          <p>
            {filteredFlashcard[currentFlashcard].progress}/
            {filteredFlashcard.length}
          </p>
        </div>
      </div>
      <div className='w-full h-24 flex items-center justify-center gap-4 '>
        <Button className='shadow-lg rounded-full'>
          <CircleCheckBig className='w-6 h-6' />I Know This
        </Button>
        <Button variant={"outline"} className='rounded-full'>
          <RotateCcw className='w-6 h-6' />
          Reset Progress
        </Button>
      </div>
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
