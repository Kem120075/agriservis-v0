"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Leaf, Shovel, ShoppingBasket } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CropCategoryPage() {
  const router = useRouter()

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
                Choose Your Farming Type
              </CardTitle>
              <VoicePromptButton
                text="Choose your farming type. Select Cash Crop, Subsistence Farming, or Both."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">Select the type of farming you practice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Cash Crop Option */}
            <Button
              onClick={() => router.push("/crop-type?category=cash")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <Leaf className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Cash Crop</div>
                <div className="text-sm font-normal opacity-80">Cocoa, Coffee, Vanilla</div>
              </div>
            </Button>

            {/* Subsistence Farming Option */}
            <Button
              onClick={() => router.push("/crop-type?category=subsistence")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <Shovel className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Subsistence Farming</div>
                <div className="text-sm font-normal opacity-80">Garden tools, Vegetables</div>
              </div>
            </Button>

            {/* Both Option */}
            <Button
              onClick={() => router.push("/crop-type?category=both")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <ShoppingBasket className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Both</div>
                <div className="text-sm font-normal opacity-80">Mixed produce farming</div>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <span className="text-2xl shrink-0">ℹ️</span>
              <p className="text-sm text-black leading-relaxed">
                <strong>Tip:</strong> Select the farming type that best describes your primary activity. You can update
                this later.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
