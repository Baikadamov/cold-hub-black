"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SystemSettings() {
  const [settings, setSettings] = useState({
    alertThreshold: -45,
    notificationEmail: "admin@company.com",
    backupFrequency: "daily",
    maintenanceMode: false,
    alertSound: true,
  })

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Параметры системы</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Alert Thresholds */}
        <Card className="glass-effect border-border">
          <CardHeader>
            <CardTitle className="text-lg">Пороги оповещений</CardTitle>
            <CardDescription>Критические значения температуры</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Критический порог (°C)</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={settings.alertThreshold}
                  onChange={(e) => handleChange("alertThreshold", Number.parseInt(e.target.value))}
                  className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-sm font-semibold text-cyan-400">{settings.alertThreshold}°C</span>
              </div>
              <p className="text-xs text-muted-foreground">Оповещение срабатывает при превышении этого значения</p>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="glass-effect border-border">
          <CardHeader>
            <CardTitle className="text-lg">Уведомления</CardTitle>
            <CardDescription>Параметры оповещений</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email для оповещений</label>
              <input
                type="email"
                value={settings.notificationEmail}
                onChange={(e) => handleChange("notificationEmail", e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="alert-sound"
                checked={settings.alertSound}
                onChange={(e) => handleChange("alertSound", e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="alert-sound" className="text-sm font-medium">
                Включить звуковые оповещения
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Backup Settings */}
        <Card className="glass-effect border-border">
          <CardHeader>
            <CardTitle className="text-lg">Резервные копии</CardTitle>
            <CardDescription>Параметры резервирования данных</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Частота резервного копирования</label>
              <select
                value={settings.backupFrequency}
                onChange={(e) => handleChange("backupFrequency", e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm"
              >
                <option value="hourly">Ежечасно</option>
                <option value="daily">Ежедневно</option>
                <option value="weekly">Еженедельно</option>
              </select>
            </div>
            <Button className="w-full bg-primary/20 hover:bg-primary/30 text-primary text-sm h-8">
              Создать резервную копию сейчас
            </Button>
          </CardContent>
        </Card>

        {/* Maintenance */}
        <Card className="glass-effect border-border">
          <CardHeader>
            <CardTitle className="text-lg">Обслуживание</CardTitle>
            <CardDescription>Управление режимом обслуживания</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-yellow-500/30">
              <div>
                <p className="font-medium text-sm">Режим обслуживания</p>
                <p className="text-xs text-muted-foreground mt-1">Отключает доступ пользователей к системе</p>
              </div>
              <button
                onClick={() => handleChange("maintenanceMode", !settings.maintenanceMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  settings.maintenanceMode ? "bg-red-500" : "bg-gray-500"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    settings.maintenanceMode ? "translate-x-6" : "translate-x-1"
                  }`}
                ></span>
              </button>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm text-blue-400">
              ℹ️ Статус: {settings.maintenanceMode ? "Режим обслуживания включен" : "Система работает нормально"}
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 h-10 text-base">Сохранить все параметры</Button>
    </div>
  )
}
