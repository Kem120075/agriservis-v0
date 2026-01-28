"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { User, Phone, MapPin, Mail, Fingerprint, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegistered(true)
  }

  if (isRegistered) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{ backgroundColor: "#2e6a3b" }}
      >
        <Card className="w-full max-w-md border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardContent className="pt-10 pb-10 text-center space-y-6">
            <div className="flex justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f3c84b" }}
              >
                <CheckCircle className="h-12 w-12 text-green-700" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Account Created Successfully!
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Your AgriServis account has been created using SevisPass ID.
              </p>
              <p className="text-sm text-gray-600">
                You can now login using your SevisPass ID to access all AgriServis features.
              </p>
            </div>
            <Link href="/login">
              <Button
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
              >
                Go to Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 py-6"
      style={{ backgroundColor: "#2e6a3b" }}
    >
      <div className="w-full max-w-md space-y-6">
        {/* Header with logo and language toggle */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="h-12 text-black border-2 font-semibold hover:opacity-90 bg-transparent"
                style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Registration Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Register with SevisPass
              </CardTitle>
              <VoicePromptButton
                text="Create your AgriServis account using your verified SevisPass ID. Please enter your SevisPass ID and other details."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              Create your AgriServis account using your verified SevisPass ID
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <form onSubmit={handleRegister} className="space-y-5">
              {/* SevisPass ID - Primary Field */}
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
                    aria-label="SevisPass ID (required)"
                    required
                  />
                  <VoicePromptButton text="SevisPass ID" variant="input" />
                </div>
                <p className="text-xs text-gray-600">Your verified SevisPass ID is required to create an account</p>
              </div>

              {/* Full Name - Auto-filled from SevisPass */}
              <div className="space-y-3">
                <Label
                  htmlFor="fullname"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <User className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Full Name
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Auto-filled from SevisPass"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Full name"
                  />
                  <VoicePromptButton text="Full name" variant="input" />
                </div>
                <p className="text-xs text-gray-600">Auto-filled from your SevisPass, editable if needed</p>
              </div>

              {/* Village/Community - Auto-filled from SevisPass */}
              <div className="space-y-3">
                <Label
                  htmlFor="village"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Village/Community
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="village"
                    type="text"
                    placeholder="Auto-filled from SevisPass"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Village or community"
                  />
                  <VoicePromptButton text="Village or community" variant="input" />
                </div>
                <p className="text-xs text-gray-600">Auto-filled from your SevisPass, editable if needed</p>
              </div>

              {/* Phone Number - Optional */}
              <div className="space-y-3">
                <Label
                  htmlFor="phone"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Phone Number <span className="text-sm text-gray-500">(Optional)</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+675 7XX XXXXX"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Phone number (optional)"
                  />
                  <VoicePromptButton text="Phone number" variant="input" />
                </div>
                <p className="text-xs text-gray-600">For SMS notifications</p>
              </div>

              {/* Email Address - Optional */}
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Email Address <span className="text-sm text-gray-500">(Optional)</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Email address (optional)"
                  />
                  <VoicePromptButton text="Email address" variant="input" />
                </div>
                <p className="text-xs text-gray-600">For buyers or cooperatives</p>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Fingerprint className="mr-2 h-5 w-5" />
                Create Account with SevisPass
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Info Box */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Fingerprint className="h-8 w-8 shrink-0" style={{ color: "#8a5a3b" }} />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Secure Registration with SevisPass</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Your SevisPass ID provides secure, verified identity for accessing AgriServis features and connecting
                  with buyers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
