"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WarehouseManagement } from "@/components/admin/warehouse-management"
import { UserManagement } from "@/components/admin/user-management"
import { WarehouseMap } from "@/components/admin/warehouse-map"
import { TemperatureZones } from "@/components/admin/temperature-zones"
import { SystemSettings } from "@/components/admin/system-settings"
import { LogOut, Menu, Settings } from "lucide-react"

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [user, setUser] = useState<{ email: string; role: string } | null>(null)
  const [activeTab, setActiveTab] = useState("warehouses")
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (!user) return null

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300 border-r border-border bg-secondary/50 backdrop-blur-sm flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">ColdHub</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-muted p-2 rounded">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 px-4">
          <NavItem href="/dashboard" label="Приборная панель" icon="📊" sidebarOpen={sidebarOpen} />
          <NavItem href="/ai-panel" label="ColdBrain AI" icon="🧠" sidebarOpen={sidebarOpen} />
          <NavItem href="/admin" label="Администратор" icon="⚙️" active sidebarOpen={sidebarOpen} />
        </nav>

        <div className="p-4 border-t border-border">
          <Button onClick={handleLogout} variant="ghost" className="w-full justify-start" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            {sidebarOpen && "Выход"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-secondary/30 backdrop-blur-sm px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Администрирование</h1>
                <p className="text-sm text-muted-foreground mt-1">Управление складами, пользователями и системой</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Пользователь: <span className="font-semibold text-foreground">{user.email}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-secondary/30 border border-border">
              <TabsTrigger value="warehouses">🏭 Склады</TabsTrigger>
              <TabsTrigger value="storage">📍 Дополнительные места</TabsTrigger>
              <TabsTrigger value="users">👥 Пользователи</TabsTrigger>
              <TabsTrigger value="settings">⚙️ Система</TabsTrigger>
            </TabsList>

            {/* Warehouse Management Tab */}
            <TabsContent value="warehouses" className="space-y-6">
              <WarehouseManagement />
            </TabsContent>

            {/* Storage Spaces Tab */}
            <TabsContent value="storage" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <WarehouseMap />
                </div>
                <div className="lg:col-span-1">
                  <TemperatureZones />
                </div>
              </div>
            </TabsContent>

            {/* User Management Tab */}
            <TabsContent value="users" className="space-y-6">
              <UserManagement />
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <SystemSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

function NavItem({ href, label, icon, active, sidebarOpen }: any) {
  return (
    <Link href={href}>
      <button
        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${active ? "bg-primary/20 text-primary" : "hover:bg-secondary"}`}
      >
        <span>{icon}</span>
        {sidebarOpen && <span className="text-sm">{label}</span>}
      </button>
    </Link>
  )
}
