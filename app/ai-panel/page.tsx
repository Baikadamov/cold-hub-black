"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WarehouseSummary } from "@/components/ai-panel/warehouse-summary"
import { StockAnalysis } from "@/components/ai-panel/stock-analysis"
import { CapacityForecast } from "@/components/ai-panel/capacity-forecast"
import { AIRecommendations } from "@/components/ai-panel/ai-recommendations"
import { WhatIfScenarios } from "@/components/ai-panel/what-if-scenarios"
import { Menu, LogOut, Brain } from "lucide-react"

export default function AIPanelPage() {
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
          <NavItem href="/dashboard" label="Приборная панель" icon="📊" sidebarOpen={sidebarOpen} />
          <NavItem href="/ai-panel" label="ColdBrain AI" icon="🧠" active sidebarOpen={sidebarOpen} />
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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ColdBrain Advisor</h1>
                <p className="text-sm text-muted-foreground mt-1">Умный прогноз и оптимизация запасов</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">AI контролирует ваш склад</div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          {/* Warehouse Summary */}
          <WarehouseSummary />

          {/* Stock Analysis and Capacity Forecast */}
          <div className="grid lg:grid-cols-2 gap-6">
            <StockAnalysis />
            <CapacityForecast />
          </div>

          {/* AI Recommendations */}
          <AIRecommendations />

          {/* What-If Scenarios */}
          <WhatIfScenarios />
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
