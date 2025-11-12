"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CapacityForecast() {
  const forecastData = [
    { неделя: "Н1", зона18: 65, зона30: 72, зона50: 58 },
    { неделя: "Н2", зона18: 71, зона30: 78, зона50: 68 },
    { неделя: "Н3", зона18: 82, зона30: 85, зона50: 75 },
    { неделя: "Н4", зона18: 88, зона30: 92, зона50: 89 },
    { неделя: "Н5", зона18: 95, зона30: 98, зона50: 94 },
    { неделя: "Н6", зона18: 92, зона30: 95, зона50: 91 },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📈</span> Прогноз загрузки камер
        </CardTitle>
        <CardDescription>Процент занятости по температурным зонам на 6 недель</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={forecastData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="неделя" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(10, 17, 32, 0.95)", border: "1px solid rgba(0, 217, 255, 0.3)" }}
            />
            <Legend />
            <Line type="monotone" dataKey="зона18" stroke="#3EB3F7" strokeWidth={2} dot={false} name="−18°C" />
            <Line type="monotone" dataKey="зона30" stroke="#FFB91C" strokeWidth={2} dot={false} name="−30°C" />
            <Line type="monotone" dataKey="зона50" stroke="#FF6B6B" strokeWidth={2} dot={false} name="−50°C" />
          </LineChart>
        </ResponsiveContainer>

        <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
          <p className="text-sm">
            <span className="font-semibold text-yellow-400">Рекомендация AI:</span> Через 10 дней загрузка камеры −50°C
            достигнет 92%. Рекомендуется перераспределить часть партий в зону −30°C.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
