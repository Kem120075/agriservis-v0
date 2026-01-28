"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { DollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function PriceSettingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const crop = searchParams.get("crop") || "Cocoa"
  const [price, setPrice] = useState("")

  const suggestedPrices: Record<string, string> = {
    Cocoa: "8-12 Kina per kg",
    Coffee: "10-15 Kina per kg",
    Vanilla: "150-200 Kina per kg",
    "Root Crops": "3-6 Kina per kg",
    Vegetables: "4-8 Kina per kg",
    Fruits: "5-10 Kina per kg",
  }

  const handleSubmit = () => {
    router.push(`/transport?crop=${encodeURIComponent(crop)}&price=${encodeURIComponent(price)}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#2e6a3b" }}>
      <div className="w-full max-w-2xl space-y-6">
        {/* Header with logo, language toggle and home button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
          </div>
          <div className="flex gap-2">
            <LanguageToggle />
            <Button asChild variant="outline" size="lg" className="text-base font-semibold bg-transparent">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Set Your Prices
              </CardTitle>
              <VoicePromptButton
                text="Set your price per kilogram for your crop. Check the suggested market price for guidance."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">Enter your selling price</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Crop Name */}
            <div className="space-y-3">
              <Label className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Crop Name
              </Label>
              <Input
                value={crop}
                disabled
                className="text-lg h-14 border-2 bg-gray-50"
                style={{ borderColor: "#8a5a3b" }}
              />
            </div>

            {/* Price Input */}
            <div className="space-y-3">
              <Label
                htmlFor="price"
                className="text-base font-medium flex items-center gap-2"
                style={{ color: "#8a5a3b" }}
              >
                <DollarSign className="h-5 w-5" style={{ color: "#8a5a3b" }} />
                Price per kg (Kina)
              </Label>
              <div className="flex gap-2">
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price in Kina"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="Price per kilogram"
                />
                <VoicePromptButton text="Price per kilogram" variant="speak" />
              </div>
            </div>

            {/* Suggested Market Price */}
            <Card className="border-2 bg-green-50" style={{ borderColor: "#2e6a3b" }}>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 shrink-0" style={{ color: "#2e6a3b" }} />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold" style={{ color: "#2e6a3b" }}>
                      Suggested Market Price
                    </p>
                    <p className="text-base font-bold" style={{ color: "#8a5a3b" }}>
                      {suggestedPrices[crop] || "Contact local buyer for pricing"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Button */}
            <Button
              onClick={handleSubmit}
              disabled={!price}
              className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              Continue to Transport
            </Button>
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <span className="text-2xl shrink-0">ℹ️</span>
              <p className="text-sm text-black leading-relaxed">
                <strong>Tip:</strong> Check the suggested market price to ensure you get a fair price for your crops.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function PriceSettingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PriceSettingContent />
    </Suspense>
  )
}
