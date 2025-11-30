"use client"
import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useSearchParams, useRouter } from "next/navigation"
const FormHeaderDashboard = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)
  const currentCategory = searchParams.get("category") || "All"

  const handleSearch = (term: string) => {
    if (term === "All") {
      params.delete("category")
      params.delete("query")
    } else if (term) {
      params.set("category", term)
    } else {
      params.delete("category")
    }

    try {
      replace(`/?${params.toString()}`)
    } catch (error) {
      console.error("Failed to replace URL parameters:", error)
    }
  }
  return (
    <form className='w-full flex items-center gap-4'>
      <Select value={currentCategory} onValueChange={handleSearch}>
        <SelectTrigger className='w-[180px] text-lg '>
          <SelectValue placeholder='Select Category' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='All'>All</SelectItem>
            <SelectItem value='Web Development'>Web Development</SelectItem>
            <SelectItem value='Node.js'>Node.js</SelectItem>
            <SelectItem value='PHP'>PHP</SelectItem>
            <SelectItem value='Database'>Database</SelectItem>
            <SelectItem value='React'>React</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className='hidden md:flex  items-center gap-3'>
        <Checkbox id='terms' className='w-6 h-6 ' />
        <Label htmlFor='terms' className='text-lg'>
          Hide Mastered
        </Label>
      </div>
    </form>
  )
}

export default FormHeaderDashboard
