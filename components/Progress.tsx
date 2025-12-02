"use client"

import { Progress } from "@/components/ui/progress"

export function ProgressScience({ progress }: { progress: number }) {
  return <Progress value={progress} className='w-[60%]' />
}
