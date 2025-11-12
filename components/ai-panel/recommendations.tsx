"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Recommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Оптимизировать распределение инвентаря",
      desc: "Перенести 500 единиц из Чикаго в Хаб LA",
      priority: "high",
      impact: "+$8.5K сбережений",
    },
    {
      id: 2,
      title: "График технического обслуживания",
      desc: "Компрессор Установки 7 требует профилактического обслуживания",
      priority: "medium",
      impact: "Избежать 12ч простоя",
    },
    {
      id: 3,
      title: "Оптимизация маршрутов",
      desc: "Скорректировать маршруты доставки для снижения времени в пути на 2 часа",
      priority: "medium",
      impact: "–15% выбросов",
    },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">💡</span> AI Рекомендации
        </CardTitle>
        <CardDescription>Практические рекомендации от машинного обучения</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="p-4 rounded-lg bg-white/5 border border-white/10 group hover:border-primary/50 transition"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{rec.desc}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2 ${
                    rec.priority === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {rec.priority === "high" ? "Высокий" : "Средний"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-primary font-semibold">{rec.impact}</span>
                <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                  Применить
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
