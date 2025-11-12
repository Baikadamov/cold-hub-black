"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { InventoryTable } from "@/components/dashboard/inventory-table"
import { TemperatureChart } from "@/components/dashboard/temperature-chart"
import { StatsOverview } from "@/components/dashboard/stats-overview"
import { LogOut, Menu } from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [user, setUser] = useState<{ email: string; role: string } | null>(null)
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
          <NavItem href="/dashboard" label="Приборная панель" icon="📊" active sidebarOpen={sidebarOpen} />
          <NavItem href="/ai-panel" label="ColdBrain AI" icon="🧠" sidebarOpen={sidebarOpen} />
          <NavItem href="/admin" label="Администратор" icon="⚙️" sidebarOpen={sidebarOpen} />
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
            <div>
              <h1 className="text-2xl font-bold">Приборная панель</h1>
              <p className="text-sm text-muted-foreground mt-1">Мониторинг холодной цепи в реальном времени</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Добро пожаловать, <span className="font-semibold text-foreground">{user.email.split("@")[0]}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          {/* Stats Overview */}
          <StatsOverview />

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <TemperatureChart />
            <div className="glass-effect rounded-lg p-6">
              <h3 className="font-semibold mb-4">Распределение складов</h3>
              <div className="space-y-3">
                {["Зона NYC 1", "Зона NYC 2", "Хаб LA", "Чикаго", "Майами"].map((zone, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{zone}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-blue-400"
                          style={{ width: `${70 + idx * 5}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{70 + idx * 5}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <InventoryTable />
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
