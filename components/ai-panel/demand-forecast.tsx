"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DemandForecast() {
  const forecastData = [
    { week: "Н1", predicted: 2200, actual: 2150 },
    { week: "Н2", predicted: 2400, actual: 2380 },
    { week: "Н3", predicted: 2800, actual: 2750 },
    { week: "Н4", predicted: 3100, actual: null },
    { week: "Н5", predicted: 3400, actual: null },
    { week: "Н6", predicted: 3600, actual: null },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📊</span> Прогноз спроса на 6 недель
        </CardTitle>
        <CardDescription>AI прогнозируемые требования инвентаря</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(10, 17, 32, 0.95)", border: "1px solid rgba(0, 217, 255, 0.3)" }}
            />
            <Bar dataKey="actual" fill="hsl(var(--color-chart-2))" opacity={0.8} />
            <Bar dataKey="predicted" fill="hsl(var(--color-primary))" opacity={0.6} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
