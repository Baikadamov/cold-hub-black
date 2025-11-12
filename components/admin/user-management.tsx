"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Plus, Shield } from "lucide-react"

export function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, email: "john@company.com", role: "Администратор", lastLogin: "2025-11-11 14:32", status: "active" },
    { id: 2, email: "sarah@company.com", role: "Менеджер склада", lastLogin: "2025-11-11 09:15", status: "active" },
    { id: 3, email: "mike@company.com", role: "Оператор", lastLogin: "2025-11-10 17:45", status: "active" },
    { id: 4, email: "elena@company.com", role: "Просмотр", lastLogin: "2025-11-09 11:20", status: "inactive" },
  ])

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Администратор":
        return "bg-red-500/20 text-red-400"
      case "Менеджер склада":
        return "bg-blue-500/20 text-blue-400"
      case "Оператор":
        return "bg-cyan-500/20 text-cyan-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Управление пользователями</h2>
        <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Добавить пользователя
        </Button>
      </div>

      <Card className="glass-effect border-border">
        <CardHeader>
          <CardTitle>Члены команды</CardTitle>
          <CardDescription>Все активные и неактивные пользователи</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 rounded-lg bg-white/5 border border-white/10 group hover:border-primary/30 transition flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{user.email}</p>
                      <p className="text-xs text-muted-foreground">
                        Роль: <span className="font-semibold">{user.role}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {user.status === "active" ? "✓ Активен" : "○ Неактивен"}
                    </span>
                    <span className="text-xs text-muted-foreground">Последний вход: {user.lastLogin}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs h-8 px-2 bg-transparent">
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-8 px-2 text-red-400 hover:text-red-500 bg-transparent"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
