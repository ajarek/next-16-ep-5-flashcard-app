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
import { useFlashcardStore } from "../store/flashcardStoe"

const Dashboard = () => {
  const { addFlashcard, removeAllFlashcards, items } = useFlashcardStore()
  const searchParams = useSearchParams()
  const [flip, setFlip] = React.useState(true)
  const [info, setInfo] = React.useState("")
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
          onClick={() =>
            setCurrentFlashcard(
              Math.floor(Math.random() * filteredFlashcard.length)
            )
          }
        >
          <Shuffle className='w-6 h-6' />
          <span>Shuffle</span>
        </Button>
      </div>

      {/* FlipCard */}

      <div className='flex justify-center items-center h-screen'>
        <motion.div className='relative w-full sm:h-[360px] h-[260px] flex items-center justify-center m-8 perspective-[1000px]'>
          <motion.div
            className='w-full h-full relative transform-3d'
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
          >
            {/* Front Side */}
            <div className='absolute inset-0 w-full h-full bg-secondary rounded-2xl flex items-center justify-center backface-hidden border border-primary-foreground'>
              <Button
                variant={"outline"}
                className='absolute min-w-36 top-8 right-1/2 translate-x-1/2 bg-card rounded-full '
              >
                {filteredFlashcard[currentFlashcard].category}
              </Button>
              <h1 className='w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold text-primary-foreground'>
                {filteredFlashcard[currentFlashcard].question}
              </h1>
              {info && (
                <p className='absolute top-24 left-1/2 -translate-x-1/2 text-lg text-primary-foreground'>
                  {info}
                </p>
              )}
              <div className='absolute w-[40%] bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 '>
                <ProgressScience
                  progress={(items.length / flashcard.length) * 100}
                />
                <p>
                  {items.length}/{flashcard.length}
                </p>
              </div>
            </div>

            {/* Back Side */}
            <div className='absolute inset-0 w-full h-full bg-primary rounded-2xl flex flex-col items-center justify-center  backface-hidden transform-[rotateY(180deg)] border border-primary-foreground'>
              <h2 className='text-lg font-bold text-primary-foreground'>
                Answer:
              </h2>
              <span className='text-2xl text-center text-primary-foreground font-bold'>
                {filteredFlashcard[currentFlashcard].answer}
              </span>
            </div>
          </motion.div>

          <button
            onClick={() => setFlip((prevState) => !prevState)}
            className='absolute w-full h-full z-10 bg-transparent cursor-pointer '
          ></button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className='w-full h-24 flex items-center justify-center gap-4 '>
        <Button
          className='shadow-lg rounded-full'
          onClick={() => {
            if (
              items.find(
                (item) => item.id === filteredFlashcard[currentFlashcard].id
              )
            ) {
              if (currentFlashcard < filteredFlashcard.length - 1) {
                setCurrentFlashcard(currentFlashcard + 1)
              }
              setInfo("Already know this!")
              setTimeout(() => {
                setInfo("")
              }, 2000)
              return
            }
            addFlashcard(filteredFlashcard[currentFlashcard])
            if (currentFlashcard < filteredFlashcard.length - 1) {
              setCurrentFlashcard(currentFlashcard + 1)
            }
          }}
        >
          <CircleCheckBig className='w-6 h-6' />I Know This
        </Button>
        <Button
          variant={"outline"}
          className='rounded-full'
          onClick={() => removeAllFlashcards()}
        >
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
