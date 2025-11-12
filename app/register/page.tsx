"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Mail, Lock, Building2, UserPlus } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: "", password: "", company: "" })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email: formData.email, company: formData.company, role: "admin" }))
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
            <CardTitle className="text-2xl text-center">Get Started</CardTitle>
            <CardDescription className="text-center">Join ColdHub –50 today</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-input border-border focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input border-border focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
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
                    Creating account...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Create Account
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">Demo registration: use any credentials</p>
      </div>
    </main>
  )
}
