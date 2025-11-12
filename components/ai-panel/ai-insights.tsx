"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      title: "Оптимальное поддержание температуры",
      desc: "Все установки работают в идеальных параметрах. Отклонений не обнаружено за последние 48 часов.",
      icon: "✅",
    },
    {
      title: "Прогнозируется скачок спроса",
      desc: "Модель ML предсказывает рост спроса на фармацевтические запасы на 15% на следующей неделе. Рекомендуется ранний перезаказ.",
      icon: "📈",
    },
    {
      title: "Прирост энергоэффективности",
      desc: "Новые алгоритмы охлаждения снизили потребление энергии на 8%. Прогнозируемые сбережения: $12K/месяц.",
      icon: "⚡",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-bold">AI Рекомендации</h2>
      </div>

      <div className="grid gap-4">
        {insights.map((insight, idx) => (
          <Card key={idx} className="glass-effect border-border glow-cyan-sm">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{insight.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
