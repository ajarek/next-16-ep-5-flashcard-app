"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressScience({progress}: {progress: number}) {
  

  return <Progress value={progress} className="w-[60%]" />
}
