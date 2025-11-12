"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function StockAnalysis() {
  const stockData = [
    { sku: "FRZ-SALM", level: 450, status: "warning", daysLeft: 6, avgDaily: 75 },
    { sku: "MEAT-LOT04", level: 320, status: "critical", daysLeft: 4, avgDaily: 80 },
    { sku: "FISH-COD", level: 680, status: "normal", daysLeft: 12, avgDaily: 55 },
    { sku: "VEG-BROC", level: 540, status: "normal", daysLeft: 15, avgDaily: 36 },
    { sku: "DAIRY-CHZ", level: 290, status: "warning", daysLeft: 5, avgDaily: 58 },
  ]

  const chartData = stockData.map((item) => ({
    name: item.sku,
    остаток: item.level,
  }))

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📦</span> Анализ остатков
        </CardTitle>
        <CardDescription>Статус SKU по зонам хранения</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(10, 17, 32, 0.95)", border: "1px solid rgba(0, 217, 255, 0.3)" }}
            />
            <Bar dataKey="остаток" fill="hsl(var(--color-primary))" />
          </BarChart>
        </ResponsiveContainer>

        <div className="space-y-2 max-h-40 overflow-y-auto">
          {stockData.map((item) => (
            <div
              key={item.sku}
              className={`p-3 rounded-lg border ${
                item.status === "critical"
                  ? "bg-red-500/10 border-red-500/30"
                  : item.status === "warning"
                    ? "bg-yellow-500/10 border-yellow-500/30"
                    : "bg-green-500/10 border-green-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.sku}</p>
                  <p className="text-xs text-muted-foreground">
                    Осталось {item.daysLeft} дней · {item.avgDaily} кг/день
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.status === "critical"
                      ? "bg-red-500/20 text-red-400"
                      : item.status === "warning"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {item.status === "critical" ? "Критично" : item.status === "warning" ? "Низкий" : "В норме"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
