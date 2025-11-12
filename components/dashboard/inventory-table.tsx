"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InventoryTable() {
  const inventory = [
    { sku: "PHARMA-001", product: "Вакцина серия A", qty: 5000, temp: -48, warehouse: "NYC 1", status: "Стабильно" },
    { sku: "FOOD-045", product: "Замороженные белки", qty: 12000, temp: -46, warehouse: "NYC 2", status: "Стабильно" },
    {
      sku: "BIO-230",
      product: "Исследовательские образцы",
      qty: 2500,
      temp: -50,
      warehouse: "LA Hub",
      status: "Оптимально",
    },
    {
      sku: "PHARM-089",
      product: "Ферментная терапия",
      qty: 1200,
      temp: -47,
      warehouse: "Chicago",
      status: "Мониторинг",
    },
    { sku: "FOOD-156", product: "Премиум морепродукты", qty: 8500, temp: -45, warehouse: "Miami", status: "Стабильно" },
  ]

  return (
    <Card className="glass-effect border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">📦</span> Статус инвентаря
        </CardTitle>
        <CardDescription>Текущая информация о партиях и хранении</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">SKU</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Продукт</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Кол-во</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Темп</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Склад</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Статус</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="py-3 px-4 font-mono text-primary">{item.sku}</td>
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4 font-semibold">{item.qty.toLocaleString()}</td>
                  <td className="py-3 px-4 font-semibold text-blue-400">{item.temp}°C</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.warehouse}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Оптимально"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "Мониторинг"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
