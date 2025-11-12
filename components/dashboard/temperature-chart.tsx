"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TemperatureChart() {
  const data = [
    { time: "00:00", temp: -48.2 },
    { time: "04:00", temp: -47.5 },
    { time: "08:00", temp: -46.8 },
    { time: "12:00", temp: -47.2 },
    { time: "16:00", temp: -48.1 },
    { time: "20:00", temp: -47.4 },
    { time: "23:59", temp: -47.0 },
  ]

  return (
    <Card className="glass-effect border-border col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📊</span> Временная шкала температуры
        </CardTitle>
        <CardDescription>Показания средней температуры холодной зоны за 24 часа</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" domain={[-50, -46]} />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(10, 17, 32, 0.95)", border: "1px solid rgba(0, 217, 255, 0.3)" }}
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="hsl(var(--color-primary))"
              dot={{ fill: "hsl(var(--color-primary))", r: 4 }}
              strokeWidth={2}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
