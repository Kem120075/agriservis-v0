"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Phone, Lock, Fingerprint, ChevronDown, ChevronUp, Home } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showAlternativeMethods, setShowAlternativeMethods] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{ backgroundColor: "#2e6a3b" }}
      >
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
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

          {/* Success Card */}
          <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full p-6" style={{ backgroundColor: "#2e6a3b" }}>
                  <Fingerprint className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold" style={{ color: "#2e6a3b" }}>
                  Welcome Back!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You are logged in with SevisPass – verified and secure.
                </p>
              </div>
              <Button
                onClick={() => setIsLoggedIn(false)}
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
              >
                Continue to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#2e6a3b" }}>
      <div className="w-full max-w-md space-y-6">
        {/* Header with language toggle */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
          </div>
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

        {/* Login Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Login with SevisPass
              </CardTitle>
              <VoicePromptButton
                text="Welcome to AgriServis. Please enter your SevisPass ID to login securely."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              Access your AgriServis account securely with SevisPass
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* SevisPass ID Field - Primary */}
            <div className="space-y-3">
              <Label
                htmlFor="sevispass"
                className="text-base font-medium flex items-center gap-2"
                style={{ color: "#8a5a3b" }}
              >
                <Fingerprint className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                SevisPass ID <span className="text-red-600">*</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="sevispass"
                  type="text"
                  placeholder="Enter your SevisPass ID"
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="SevisPass ID"
                />
                <VoicePromptButton text="SevisPass ID" variant="speak" />
              </div>
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm hover:underline font-medium" style={{ color: "#2e6a3b" }}>
                Forgot SevisPass ID?
              </Link>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <Fingerprint className="mr-2 h-5 w-5" />
              Login with SevisPass
            </Button>

            {/* Alternative Login Methods - Collapsible */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                onClick={() => setShowAlternativeMethods(!showAlternativeMethods)}
                className="w-full flex items-center justify-between text-sm font-medium"
                style={{ color: "#8a5a3b" }}
              >
                <span>Other Login Options</span>
                {showAlternativeMethods ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>

              {showAlternativeMethods && (
                <div className="space-y-6 pt-4 border-t-2" style={{ borderColor: "#8a5a3b" }}>
                  {/* Phone Number + Password */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-600">Login with Phone Number</p>
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-base font-medium flex items-center gap-2"
                        style={{ color: "#8a5a3b" }}
                      >
                        <Phone className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                        Phone Number
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+675 7XX XXXXX"
                          className="text-lg h-14 border-2"
                          style={{ borderColor: "#8a5a3b" }}
                          aria-label="Phone number"
                        />
                        <VoicePromptButton text="Phone number" variant="speak" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="phone-password"
                        className="text-base font-medium flex items-center gap-2"
                        style={{ color: "#8a5a3b" }}
                      >
                        <Lock className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                        Password
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="phone-password"
                          type="password"
                          placeholder="Enter your password"
                          className="text-lg h-14 border-2"
                          style={{ borderColor: "#8a5a3b" }}
                          aria-label="Password"
                        />
                        <VoicePromptButton text="Password" variant="speak" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Registration Links */}
            <div className="text-center pt-4 space-y-2">
              <p className="text-sm text-gray-600">
                Need to apply?{" "}
                <Link href="/submit" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Register for SevisPass
                </Link>
              </p>
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Create AgriServis account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <span className="text-2xl shrink-0">ℹ️</span>
              <p className="text-sm text-black leading-relaxed">
                <strong>Need help?</strong> Contact your local agricultural officer or visit your nearest community
                center for SevisPass registration assistance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
