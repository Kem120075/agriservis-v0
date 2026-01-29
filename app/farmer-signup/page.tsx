"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { User, Mail, Phone, MapPin, Leaf, Lock, Eye, EyeOff, Home, CheckCircle } from "lucide-react"
import Link from "next/link"

const pngProvinces = [
  "Bougainville",
  "Central",
  "Chimbu (Simbu)",
  "East New Britain",
  "East Sepik",
  "Eastern Highlands",
  "Enga",
  "Gulf",
  "Hela",
  "Jiwaka",
  "Madang",
  "Manus",
  "Milne Bay",
  "Morobe",
  "National Capital District",
  "New Ireland",
  "Northern (Oro)",
  "Southern Highlands",
  "West New Britain",
  "West Sepik (Sandaun)",
  "Western",
  "Western Highlands",
]

const farmingCategories = [
  { value: "crops", label: "Crops" },
  { value: "livestock", label: "Livestock" },
  { value: "fisheries", label: "Fisheries" },
  { value: "mixed", label: "Mixed Farming" },
]

export default function FarmerSignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    village: "",
    farmingCategory: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
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
                Farmer Account Created!
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Your AgriServis farmer account has been successfully created.
              </p>
              <p className="text-sm text-gray-600">
                You can now login to access all AgriServis features and connect with buyers.
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
      className="min-h-screen flex flex-col items-center justify-start p-4 py-6"
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

        {/* Signup Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Farmer Signup
              </CardTitle>
              <VoicePromptButton
                text="Create your farmer account. Please fill in your personal details, location, and farming information."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              Join AgriServis to connect with buyers and grow your farming business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <User className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Full Name <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    aria-label="Full name (required)"
                  />
                  <VoicePromptButton text="Full name" variant="input" />
                </div>
                <p className="text-xs text-gray-500">Enter your name as it appears on official documents</p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Email Address <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    aria-label="Email address (required)"
                  />
                  <VoicePromptButton text="Email address" variant="input" />
                </div>
                <p className="text-xs text-gray-500">We will send account updates to this email</p>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Phone Number <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+675 7XX XXXXX"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    aria-label="Phone number (required)"
                  />
                  <VoicePromptButton text="Phone number" variant="input" />
                </div>
                <p className="text-xs text-gray-500">For SMS notifications and buyer contact</p>
              </div>

              {/* Province */}
              <div className="space-y-2">
                <Label
                  htmlFor="province"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Province <span className="text-red-600">*</span>
                </Label>
                <Select
                  value={formData.province}
                  onValueChange={(value) => setFormData({ ...formData, province: value })}
                  required
                >
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Select province (required)"
                  >
                    <SelectValue placeholder="Select your province" />
                  </SelectTrigger>
                  <SelectContent>
                    {pngProvinces.map((province) => (
                      <SelectItem key={province} value={province} className="text-base">
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Select the province where your farm is located</p>
              </div>

              {/* District */}
              <div className="space-y-2">
                <Label
                  htmlFor="district"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  District <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="district"
                    type="text"
                    placeholder="Enter your district"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    required
                    aria-label="District (required)"
                  />
                  <VoicePromptButton text="District" variant="input" />
                </div>
              </div>

              {/* Ward / Village */}
              <div className="space-y-2">
                <Label
                  htmlFor="village"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Ward / Village <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="village"
                    type="text"
                    placeholder="Enter your ward or village"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    required
                    aria-label="Ward or village (required)"
                  />
                  <VoicePromptButton text="Ward or village" variant="input" />
                </div>
              </div>

              {/* Farming Category */}
              <div className="space-y-2">
                <Label
                  htmlFor="farmingCategory"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Leaf className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Farming Category <span className="text-red-600">*</span>
                </Label>
                <Select
                  value={formData.farmingCategory}
                  onValueChange={(value) => setFormData({ ...formData, farmingCategory: value })}
                  required
                >
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Select farming category (required)"
                  >
                    <SelectValue placeholder="Select your farming type" />
                  </SelectTrigger>
                  <SelectContent>
                    {farmingCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value} className="text-base">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Choose the main type of farming you do</p>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Lock className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Password <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="text-lg h-14 border-2 pr-12"
                      style={{ borderColor: "#8a5a3b" }}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      aria-label="Password (required)"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <VoicePromptButton text="Password" variant="input" />
                </div>
                <p className="text-xs text-gray-500">Use at least 8 characters</p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-base font-medium flex items-center gap-2"
                  style={{ color: "#8a5a3b" }}
                >
                  <Lock className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                  Confirm Password <span className="text-red-600">*</span>
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="text-lg h-14 border-2 pr-12"
                      style={{ borderColor: "#8a5a3b" }}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                      aria-label="Confirm password (required)"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <VoicePromptButton text="Confirm password" variant="input" />
                </div>
                <p className="text-xs text-gray-500">Re-enter your password to confirm</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90 mt-6"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Leaf className="mr-2 h-5 w-5" />
                Create Farmer Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Info Box */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Leaf className="h-8 w-8 shrink-0" style={{ color: "#8a5a3b" }} />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Join the AgriServis Community</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Create your farmer account to access market prices, connect with buyers, and manage your farm produce
                  sales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
