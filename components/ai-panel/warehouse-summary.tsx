"use client"

import { Card, CardContent } from "@/components/ui/card"

export function WarehouseSummary() {
  const stats = [
    { label: "Загрузка холодного хранилища", value: "78%", status: "optimal", icon: "🧊" },
    { label: "Средний расход (день)", value: "2,340 кг", status: "normal", icon: "📦" },
    { label: "Активные риски", value: "3", status: "warning", icon: "⚠️" },
    { label: "SKU в критическом статусе", value: "2", status: "critical", icon: "🔴" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Сводка склада</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="glass-effect border-border glow-cyan-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{stat.icon}</div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    stat.status === "optimal"
                      ? "bg-green-500"
                      : stat.status === "critical"
                        ? "bg-red-500"
                        : stat.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                  }`}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
