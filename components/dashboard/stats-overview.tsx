"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Package, AlertTriangle, TrendingUp } from "lucide-react"

export function StatsOverview() {
  const stats = [
    {
      label: "Средняя температура",
      value: "–47.2°C",
      change: "–0.8°C",
      icon: Thermometer,
      color: "text-blue-400",
    },
    {
      label: "Активные установки",
      value: "342",
      change: "+12 на этой неделе",
      icon: Package,
      color: "text-cyan-400",
    },
    {
      label: "Оповещения (24ч)",
      value: "3",
      change: "–40% vs. прошлая неделя",
      icon: AlertTriangle,
      color: "text-yellow-400",
    },
    {
      label: "Эффективность",
      value: "98.4%",
      change: "+2.1% ↑",
      icon: TrendingUp,
      color: "text-green-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className="glass-effect border-border glow-cyan-sm overflow-hidden group">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color} opacity-75 group-hover:opacity-100 transition`} />
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded">{stat.change}</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-balance mt-1">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
