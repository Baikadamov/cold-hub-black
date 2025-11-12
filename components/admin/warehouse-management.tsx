"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Plus, X } from "lucide-react"

interface Warehouse {
  id: number
  name: string
  location: string
  capacity: number
  used: number
  zones: string[]
  status: "active" | "inactive"
}

export function WarehouseManagement() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([
    {
      id: 1,
      name: "NYC Zone 1",
      location: "Нью-Йорк, США",
      capacity: 500,
      used: 390,
      zones: ["-18°C", "-30°C", "-50°C"],
      status: "active",
    },
    {
      id: 2,
      name: "NYC Zone 2",
      location: "Нью-Йорк, США",
      capacity: 450,
      used: 320,
      zones: ["-18°C", "-30°C"],
      status: "active",
    },
    {
      id: 3,
      name: "LA Hub",
      location: "Лос-Анджелес, США",
      capacity: 600,
      used: 480,
      zones: ["-18°C", "-30°C", "-50°C"],
      status: "active",
    },
    {
      id: 4,
      name: "Chicago",
      location: "Чикаго, США",
      capacity: 350,
      used: 210,
      zones: ["-18°C", "-50°C"],
      status: "active",
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [isDeleteConfirm, setIsDeleteConfirm] = useState<number | null>(null)

  const [formData, setFormData] = useState<Partial<Warehouse>>({
    name: "",
    location: "",
    capacity: 0,
    used: 0,
    zones: [],
    status: "active",
  })

  const getCapacityColor = (used: number, capacity: number) => {
    const percent = (used / capacity) * 100
    if (percent >= 90) return "bg-red-500"
    if (percent >= 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  const handleAddClick = () => {
    setEditingId(null)
    setFormData({
      name: "",
      location: "",
      capacity: 0,
      used: 0,
      zones: [],
      status: "active",
    })
    setIsModalOpen(true)
  }

  const handleEditClick = (warehouse: Warehouse) => {
    setEditingId(warehouse.id)
    setFormData(warehouse)
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (!formData.name || !formData.location) {
      alert("Пожалуйста, заполните все поля")
      return
    }

    if (editingId !== null) {
      setWarehouses(warehouses.map((w) => (w.id === editingId ? ({ ...formData, id: editingId } as Warehouse) : w)))
    } else {
      const newId = Math.max(...warehouses.map((w) => w.id), 0) + 1
      setWarehouses([...warehouses, { ...formData, id: newId } as Warehouse])
    }
    setIsModalOpen(false)
  }

  const handleDelete = (id: number) => {
    setWarehouses(warehouses.filter((w) => w.id !== id))
    setIsDeleteConfirm(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Управление складами</h2>
        <Button onClick={handleAddClick} className="bg-primary hover:bg-primary/90 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Добавить склад
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {warehouses.map((warehouse) => (
          <Card key={warehouse.id} className="glass-effect border-border group hover:border-primary/50 transition">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{warehouse.name}</CardTitle>
                  <CardDescription className="mt-1">{warehouse.location}</CardDescription>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    warehouse.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {warehouse.status === "active" ? "Активен" : "Неактивен"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Capacity Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Загрузка</span>
                  <span className="text-sm font-semibold">
                    {warehouse.used}/{warehouse.capacity} тонн
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getCapacityColor(warehouse.used, warehouse.capacity)} transition-all`}
                    style={{ width: `${(warehouse.used / warehouse.capacity) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {Math.round((warehouse.used / warehouse.capacity) * 100)}% загруженности
                </p>
              </div>

              {/* Zones */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Температурные зоны</span>
                <div className="flex flex-wrap gap-2">
                  {warehouse.zones.map((zone) => (
                    <span
                      key={zone}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => handleEditClick(warehouse)}
                  size="sm"
                  variant="outline"
                  className="flex-1 text-xs h-8 flex items-center justify-center gap-1 bg-transparent"
                >
                  <Edit2 className="w-3 h-3" /> Редактировать
                </Button>
                <Button
                  onClick={() => setIsDeleteConfirm(warehouse.id)}
                  size="sm"
                  variant="outline"
                  className="flex-1 text-xs h-8 flex items-center justify-center gap-1 text-red-400 hover:text-red-500 bg-transparent"
                >
                  <Trash2 className="w-3 h-3" /> Удалить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md glass-effect border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle>{editingId ? "Редактировать склад" : "Добавить новый склад"}</CardTitle>
              <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Название</label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Название склада"
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Локация</label>
                <input
                  type="text"
                  value={formData.location || ""}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Город, страна"
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Емкость (тонн)</label>
                <input
                  type="number"
                  value={formData.capacity || 0}
                  onChange={(e) => setFormData({ ...formData, capacity: Number.parseInt(e.target.value) })}
                  placeholder="500"
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Текущая загрузка (тонн)</label>
                <input
                  type="number"
                  value={formData.used || 0}
                  onChange={(e) => setFormData({ ...formData, used: Number.parseInt(e.target.value) })}
                  placeholder="390"
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Температурные зоны</label>
                <div className="space-y-2">
                  {["-18°C", "-30°C", "-50°C"].map((zone) => (
                    <label key={zone} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.zones?.includes(zone) || false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              zones: [...(formData.zones || []), zone],
                            })
                          } else {
                            setFormData({
                              ...formData,
                              zones: formData.zones?.filter((z) => z !== zone),
                            })
                          }
                        }}
                        className="w-4 h-4 rounded border-border cursor-pointer"
                      />
                      <span className="text-sm">{zone}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Статус</label>
                <select
                  value={formData.status || "active"}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "inactive" })}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="active">Активен</option>
                  <option value="inactive">Неактивен</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={() => setIsModalOpen(false)} variant="outline" className="flex-1">
                  Отмена
                </Button>
                <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary/90">
                  {editingId ? "Сохранить" : "Добавить"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {isDeleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm glass-effect border-border">
            <CardHeader>
              <CardTitle>Подтверждение удаления</CardTitle>
              <CardDescription className="mt-2">
                Вы уверены, что хотите удалить этот склад? Это действие необратимо.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button onClick={() => setIsDeleteConfirm(null)} variant="outline" className="flex-1">
                Отмена
              </Button>
              <Button onClick={() => handleDelete(isDeleteConfirm)} className="flex-1 bg-red-500 hover:bg-red-600">
                Удалить
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
