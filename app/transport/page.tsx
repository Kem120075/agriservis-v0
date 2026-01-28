"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Truck, Users, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"

function TransportContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const crop = searchParams.get("crop") || "Cocoa"
  const price = searchParams.get("price") || "0"
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null)

  const handleTransportSelect = (transport: string) => {
    setSelectedTransport(transport)
  }

  if (selectedTransport) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{ backgroundColor: "#2e6a3b" }}
      >
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
            <div className="flex gap-2">
              <LanguageToggle />
              <Button asChild variant="outline" size="lg" className="text-base font-semibold bg-transparent">
                <Link href="/">Home</Link>
              </Button>
            </div>
          </div>

          {/* Success Card */}
          <Card className="border-2 bg-white" style={{ borderColor: "#f3c84b" }}>
            <CardContent className="pt-8 space-y-6 text-center">
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f3c84b20" }}
              >
                <Truck className="h-12 w-12" style={{ color: "#f3c84b" }} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                  Transport Selected!
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  You have selected: <strong>{selectedTransport}</strong>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Crop: {crop} | Price: {price} PGK per kg
                </p>
              </div>
              <div className="pt-4 space-y-3">
                <Button
                  className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                  style={{ backgroundColor: "#f3c84b" }}
                  size="lg"
                  onClick={() => setSelectedTransport(null)}
                >
                  Choose Different Transport
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-14 text-lg border-2 bg-white hover:bg-gray-50"
                  style={{ borderColor: "#8a5a3b", color: "#8a5a3b" }}
                  size="lg"
                  asChild
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
                Transport Your Goods
              </CardTitle>
              <VoicePromptButton
                text="Choose how you will transport your goods. Select local buyer pickup, cooperative transport, or self-arranged transport."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">Select your transport method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Local Buyer Pickup */}
            <Button
              onClick={() => handleTransportSelect("Local Buyer Pickup")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <Truck className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Local Buyer Pickup</div>
                <div className="text-sm font-normal opacity-80">Buyer collects from your farm</div>
              </div>
            </Button>

            {/* Cooperative Transport */}
            <Button
              onClick={() => handleTransportSelect("Cooperative Transport")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <Users className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Cooperative Transport</div>
                <div className="text-sm font-normal opacity-80">Group transport with other farmers</div>
              </div>
            </Button>

            {/* Self-arranged Transport */}
            <Button
              onClick={() => handleTransportSelect("Self-arranged Transport")}
              className="w-full h-24 text-xl font-semibold text-black hover:opacity-90 flex items-center justify-start gap-6 px-8"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
            >
              <ShoppingCart className="h-12 w-12 shrink-0" />
              <div className="text-left">
                <div className="font-bold">Self-arranged Transport</div>
                <div className="text-sm font-normal opacity-80">You arrange your own transport</div>
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
                <strong>Tip:</strong> Cooperative transport can save costs when multiple farmers transport together.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function TransportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransportContent />
    </Suspense>
  )
}
