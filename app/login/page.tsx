"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Mail, Lock, LogIn } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email, role: "manager" }))
      router.push("/dashboard")
    }, 800)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-400/10 pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center">
            <Thermometer className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        <Card className="glass-effect border-border bg-background/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-center">Добро пожаловать</CardTitle>
            <CardDescription className="text-center">Войдите в ColdHub –50</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Электронная почта
                </label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Пароль
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-border focus-visible:ring-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-transparent border-t-primary-foreground rounded-full animate-spin" />
                    Вход...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Войти
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                Нет аккаунта?{" "}
                <Link href="/register" className="text-primary hover:underline font-semibold">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">Демо доступ: любой email / любой пароль</p>
      </div>
    </main>
  )
}
