"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WarehouseMap() {
  const [selectedZone, setSelectedZone] = useState<number | null>(null)

  const zones = [
    {
      id: 1,
      name: "Зона −18°C (Хладильная)",
      x: 20,
      y: 20,
      width: 30,
      height: 35,
      color: "bg-blue-500",
      load: 65,
      items: 2340,
      temp: "-18.2°C",
    },
    {
      id: 2,
      name: "Зона −30°C (Глубокаяморозь)",
      x: 55,
      y: 20,
      width: 30,
      height: 35,
      color: "bg-cyan-500",
      load: 78,
      items: 4120,
      temp: "-30.1°C",
    },
    {
      id: 3,
      name: "Зона −50°C (Ультра-холод)",
      x: 20,
      y: 60,
      width: 30,
      height: 30,
      color: "bg-purple-500",
      load: 92,
      items: 1850,
      temp: "-50.3°C",
    },
    {
      id: 4,
      name: "Зона обработки / Приёмка",
      x: 55,
      y: 60,
      width: 30,
      height: 30,
      color: "bg-amber-500",
      load: 32,
      items: 450,
      temp: "-10.5°C",
    },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📍</span> Карта склада
        </CardTitle>
        <CardDescription>Интерактивное отображение температурных зон</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="relative w-full bg-slate-900/30 border border-border rounded-lg p-4"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-10 rounded-lg" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>

          {/* Zones */}
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`absolute transition-all transform hover:scale-105 rounded-lg border-2 ${
                selectedZone === zone.id
                  ? `${zone.color} border-white scale-110 shadow-lg shadow-white/50`
                  : `${zone.color} border-white/30 opacity-70 hover:opacity-100`
              }`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.width}%`,
                height: `${zone.height}%`,
              }}
              title={zone.name}
            >
              <div className="flex flex-col items-center justify-center h-full text-white text-center p-2 text-xs font-semibold">
                <div className="truncate">{zone.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Zone Details */}
        {selectedZone && (
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-primary/30 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              {zones
                .filter((z) => z.id === selectedZone)
                .map((zone) => (
                  <div key={zone.id} className="col-span-2 space-y-3">
                    <h3 className="font-bold text-lg">{zone.name}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Загрузка</p>
                        <p className="text-xl font-bold text-primary">{zone.load}%</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Температура</p>
                        <p className="text-xl font-bold text-cyan-400">{zone.temp}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Позиции</p>
                        <p className="text-xl font-bold">{zone.items}</p>
                      </div>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Статус</p>
                        <p className="text-xl font-bold text-green-400">✓ OK</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
