"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WhatIfScenarios() {
  const [demandIncrease, setDemandIncrease] = useState(20)
  const [deliveryDelay, setDeliveryDelay] = useState(3)
  const [scenario, setScenario] = useState<"normal" | "stress" | null>(null)

  const getScenarioResult = () => {
    if (demandIncrease > 30 || deliveryDelay > 5) {
      return {
        status: "критический",
        color: "red",
        message: `При увеличении спроса на +${demandIncrease}% и задержке поставки на ${deliveryDelay} дней, запасы истощатся через 3 дня. Требуется срочное действие.`,
      }
    } else if (demandIncrease > 15 || deliveryDelay > 3) {
      return {
        status: "высокий риск",
        color: "yellow",
        message: `Запасы подойдут к концу через 5 дней. Рекомендуется активировать план B и перераспределить партии.`,
      }
    } else {
      return {
        status: "контролируемый",
        color: "green",
        message: `При текущих параметрах система справится. Запасов хватит примерно на 8 дней.`,
      }
    }
  }

  const result = getScenarioResult()

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔍</span> What-If сценарии
        </CardTitle>
        <CardDescription>Интерактивное моделирование различных ситуаций</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Demand Increase Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">Увеличение спроса</label>
              <span className="text-lg font-bold text-primary">+{demandIncrease}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={demandIncrease}
              onChange={(e) => setDemandIncrease(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, hsl(var(--color-primary)) 0%, hsl(var(--color-primary)) ${demandIncrease * 2}%, rgba(255,255,255,0.1) ${demandIncrease * 2}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Delivery Delay Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">Задержка поставки</label>
              <span className="text-lg font-bold text-primary">+{deliveryDelay} дн.</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={deliveryDelay}
              onChange={(e) => setDeliveryDelay(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, hsl(var(--color-primary)) 0%, hsl(var(--color-primary)) ${deliveryDelay * 10}%, rgba(255,255,255,0.1) ${deliveryDelay * 10}%, rgba(255,255,255,0.1) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 дн.</span>
              <span>10 дн.</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          className={`p-4 rounded-lg border ${
            result.color === "red"
              ? "bg-red-500/10 border-red-500/30"
              : result.color === "yellow"
                ? "bg-yellow-500/10 border-yellow-500/30"
                : "bg-green-500/10 border-green-500/30"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                result.color === "red"
                  ? "bg-red-500/20 text-red-400"
                  : result.color === "yellow"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
              }`}
            >
              {result.status}
            </span>
            <p className="text-sm mt-0.5">{result.message}</p>
          </div>
        </div>

        {/* Reset Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setDemandIncrease(20)
              setDeliveryDelay(3)
            }}
          >
            Сброс параметров
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
