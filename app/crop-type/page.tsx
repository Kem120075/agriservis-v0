"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Coffee, Flower, Carrot, Apple } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function CropTypeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "cash"

  const cashCrops = [
    { name: "Cocoa", icon: Coffee },
    { name: "Coffee", icon: Coffee },
    { name: "Vanilla", icon: Flower },
  ]

  const subsistenceCrops = [
    { name: "Root Crops", icon: Carrot },
    { name: "Vegetables", icon: Carrot },
    { name: "Fruits", icon: Apple },
  ]

  const crops =
    category === "subsistence"
      ? subsistenceCrops
      : category === "both"
        ? [...cashCrops, ...subsistenceCrops]
        : cashCrops

  const handleCropSelect = (cropName: string) => {
    router.push(`/price-setting?crop=${encodeURIComponent(cropName)}`)
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
                Select Your Crop Type
              </CardTitle>
              <VoicePromptButton
                text="Select the crop type you want to sell. Choose from the available options."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">What crop do you want to sell?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {crops.map((crop) => {
                const Icon = crop.icon
                return (
                  <Button
                    key={crop.name}
                    onClick={() => handleCropSelect(crop.name)}
                    className="h-24 text-lg font-semibold text-black hover:opacity-90 flex items-center justify-start gap-4 px-6"
                    style={{ backgroundColor: "#f3c84b" }}
                    size="lg"
                  >
                    <Icon className="h-10 w-10 shrink-0" />
                    <span>{crop.name}</span>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <span className="text-2xl shrink-0">ℹ️</span>
              <p className="text-sm text-black leading-relaxed">
                <strong>Tip:</strong> Select the crop you are currently ready to sell. You can come back to add more
                crops later.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CropTypePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CropTypeContent />
    </Suspense>
  )
}
