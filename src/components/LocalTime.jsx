'use client'

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from 'lucide-react'

export function LocalTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Montevideo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })

  return (
    <div className="py-12">
      <Card className="w-fit mx-auto bg-card/50 backdrop-blur-sm">
        <CardContent className="flex items-center gap-4 p-6">
          <Clock className="w-6 h-6 text-muted-foreground" />
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">Current time in Uruguay</p>
            <p className="text-2xl font-mono tabular-nums">
              {formatter.format(time)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}