"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TemperatureZones() {
  const [zones, setZones] = useState([
    {
      id: 1,
      name: "Зона −18°C",
      temp: -18.2,
      setTemp: -18,
      minTemp: -20,
      maxTemp: -15,
      status: "stable",
      lastAlert: "нет",
    },
    {
      id: 2,
      name: "Зона −30°C",
      temp: -30.1,
      setTemp: -30,
      minTemp: -32,
      maxTemp: -28,
      status: "stable",
      lastAlert: "2 часа назад",
    },
    {
      id: 3,
      name: "Зона −50°C",
      temp: -50.3,
      setTemp: -50,
      minTemp: -52,
      maxTemp: -48,
      status: "warning",
      lastAlert: "5 мин назад",
    },
  ])

  const adjustTemp = (id: number, delta: number) => {
    setZones(
      zones.map((z) =>
        z.id === id ? { ...z, setTemp: Math.max(z.minTemp, Math.min(z.maxTemp, z.setTemp + delta)) } : z,
      ),
    )
  }

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🧊</span> Параметры зон
        </CardTitle>
        <CardDescription>Управление температурными режимами</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {zones.map((zone) => (
          <div key={zone.id} className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">{zone.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Диапазон: {zone.minTemp}° до {zone.maxTemp}°
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  zone.status === "stable" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {zone.status === "stable" ? "✓ Стабильно" : "⚠ Внимание"}
              </span>
            </div>

            {/* Temperature Display */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary/50 p-2 rounded text-center">
                <p className="text-xs text-muted-foreground">Текущая</p>
                <p className="text-lg font-bold text-cyan-400">{zone.temp}°C</p>
              </div>
              <div className="bg-secondary/50 p-2 rounded text-center">
                <p className="text-xs text-muted-foreground">Установка</p>
                <p className="text-lg font-bold text-primary">{zone.setTemp}°C</p>
              </div>
            </div>

            {/* Temperature Control */}
            <div className="flex items-center justify-between gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-3 bg-transparent"
                onClick={() => adjustTemp(zone.id, -1)}
              >
                ↓ −1°
              </Button>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-3 bg-transparent"
                onClick={() => adjustTemp(zone.id, 1)}
              >
                +1° ↑
              </Button>
            </div>

            {/* Last Alert */}
            <p className="text-xs text-muted-foreground border-t border-white/10 pt-2">
              Последнее оповещение: <span className="font-semibold">{zone.lastAlert}</span>
            </p>
          </div>
        ))}

        <Button className="w-full bg-primary hover:bg-primary/90 text-sm mt-4">Сохранить параметры</Button>
      </CardContent>
    </Card>
  )
}
