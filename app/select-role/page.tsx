"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Leaf, ShoppingCart, Home } from "lucide-react"
import Link from "next/link"

export default function SelectRolePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: "#2e6a3b" }}
    >
      <div className="w-full max-w-md space-y-6">
        {/* Header with logo and navigation */}
        <div className="flex justify-between items-center">
          <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link href="/">
              <Button
                className="h-12 px-6 text-base font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
              >
                <Home className="mr-2 h-5 w-5" />
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Role Selection Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Select Your Role
              </CardTitle>
              <VoicePromptButton
                text="Choose your role to create an account. Select Farmer if you grow and sell produce. Select Buyer if you want to purchase agricultural products."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              Choose how you want to use AgriServis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Farmer Button */}
            <Link href="/farmer-signup" className="block">
              <Button
                className="w-full h-20 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-center gap-4"
                style={{ backgroundColor: "#f3c84b" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#2e6a3b" }}
                >
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold">I am a Farmer</p>
                  <p className="text-sm font-normal opacity-80">Sell your produce</p>
                </div>
              </Button>
            </Link>

            {/* Buyer Button */}
            <Link href="/buyer-signup" className="block">
              <Button
                className="w-full h-20 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-center gap-4"
                style={{ backgroundColor: "#f3c84b" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#2e6a3b" }}
                >
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold">I am a Buyer</p>
                  <p className="text-sm font-normal opacity-80">Purchase farm products</p>
                </div>
              </Button>
            </Link>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-base text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Admin Link - Subtle */}
        <div className="text-center">
          <Link
            href="/admin-login"
            className="text-xs text-white/60 hover:text-white/90 hover:underline transition-colors"
          >
            Admin Login
          </Link>
        </div>

        {/* Help Info Box */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Leaf className="h-8 w-8 shrink-0" style={{ color: "#8a5a3b" }} />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Not sure which to choose?</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Choose Farmer if you grow crops, raise livestock, or produce agricultural goods. Choose Buyer if you want to purchase products from farmers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
