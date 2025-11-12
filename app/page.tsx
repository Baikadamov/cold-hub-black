"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Thermometer, TrendingUp, Lock, Zap } from "lucide-react"

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ColdHub –50</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Возможности
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition">
              Панель управления
            </a>
            <a href="#ai" className="text-muted-foreground hover:text-foreground transition">
              AI Аналитика
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Войти
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Начать
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary font-semibold text-sm">Корпоративная логистика холодовой цепи</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Интеллектуальное холодное хранение при –50°C
              </h1>
              <p className="text-xl text-muted-foreground text-balance max-w-xl">
                Мониторинг температуры в реальном времени, прогнозирование спроса на основе ИИ и автоматизированное соблюдение требований для премиальной холодовой логистики.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan w-full sm:w-auto">
                  Открыть панель
                </Button>
              </Link>
              <Link href="/ai-panel">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary w-full sm:w-auto bg-transparent"
                >
                  Изучить ColdBrain AI
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/10 blur-3xl rounded-full"></div>
            <div className="relative glass-effect p-8 rounded-2xl w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="text-6xl">❄️</div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">–50°C</p>
                <p className="text-muted-foreground mt-2">Оптимальная точность холодовой цепи</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary font-semibold text-sm">Основные возможности</p>
            <h2 className="text-4xl font-bold">Всё необходимое для холодовой логистики</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, title: "Мониторинг в реальном времени", desc: "Отслеживание температуры во всех установках" },
              { icon: TrendingUp, title: "AI прогнозирование", desc: "Предсказание спроса с помощью ML моделей" },
              { icon: Lock, title: "Готовность к проверкам", desc: "Автоматизированные журналы аудита и соответствие нормам" },
              { icon: Zap, title: "Мгновенные оповещения", desc: "Умные уведомления об аномалиях" },
            ].map((feature, idx) => (
              <div key={idx} className="glass-effect p-6 rounded-xl hover:bg-white/15 transition group">
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Готовы революционизировать холодовую логистику?</h2>
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к ведущим предприятиям, оптимизирующим свою холодовую цепь с ColdHub –50
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
              Начать бесплатный пробный период
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 ColdHub –50. Корпоративная платформа холодовой логистики.</p>
        </div>
      </footer>
    </main>
  )
}
