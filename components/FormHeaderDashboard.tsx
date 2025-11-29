import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const FormHeaderDashboard = () => {
  return (
    <form className='w-full flex items-center gap-4'>
      <Select>
        <SelectTrigger className='w-[180px] text-lg '>
          <SelectValue placeholder='All Categories' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
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
