"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AIRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Дозаказ SKU #FRZ-SALM",
      desc: "На основе текущего спроса прогнозируется исчерпание запасов через 6 дней. Рекомендуется дозаказать +25 кг до 15 ноября.",
      type: "reorder",
      icon: "💡",
      priority: "high",
    },
    {
      id: 2,
      title: "Риск просрочки партии #MEAT-LOT04",
      desc: "Партия рискует выйти за срок хранения через 4 дня. Возможные действия: перераспределить в B2C-аутлет или предложить скидку.",
      type: "expiry",
      icon: "⏳",
      priority: "high",
    },
    {
      id: 3,
      title: "Перераспределение запасов",
      desc: "Зона −30°C имеет запас мощности. Рекомендуется переместить 150 кг из зоны −18°C для балансировки нагрузки.",
      type: "redistribution",
      icon: "🔄",
      priority: "medium",
    },
    {
      id: 4,
      title: "Оптимизация загрузки камеры −50°C",
      desc: "Текущая загрузка 78%. Для пиковых периодов (праздники) рекомендуется предварительно разгрузить на 15% или добавить мощность.",
      type: "optimization",
      icon: "🧊",
      priority: "medium",
    },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🤖</span> Рекомендации и советы AI
        </CardTitle>
        <CardDescription>Генерируемые на основе текущих данных и прогнозов машинного обучения</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`p-4 rounded-lg border group hover:border-primary/50 transition ${
                rec.priority === "high" ? "bg-red-500/5 border-red-500/30" : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0">{rec.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{rec.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    rec.priority === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {rec.priority === "high" ? "Высокий приоритет" : "Средний приоритет"}
                </span>
                <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                  Принять меры
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
