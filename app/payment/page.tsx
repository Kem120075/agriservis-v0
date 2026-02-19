"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import {
  CheckCircle2,
  Wallet,
  Smartphone,
  Building2,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PaymentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [transactionNumber, setTransactionNumber] = useState("")
  const [quantity, setQuantity] = useState("100")
  const [pricePerKg, setPricePerKg] = useState("15.50")

  const calculateTotal = () => {
    const qty = Number.parseFloat(quantity) || 0
    const price = Number.parseFloat(pricePerKg) || 0
    return (qty * price).toFixed(2)
  }

  const handleSubmit = () => {
    const txnNumber = `TXN${Date.now().toString().slice(-8)}`
    setTransactionNumber(txnNumber)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{ backgroundColor: "#2e6a3b" }}
      >
        <div className="w-full max-w-md space-y-6">
          <Card className="border-2 bg-white" style={{ borderColor: "#f3c84b" }}>
            <CardContent className="pt-8 space-y-6 text-center">
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f3c84b20" }}
              >
                <CheckCircle2 className="h-12 w-12" style={{ color: "#f3c84b" }} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                  Payment Successful!
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Your payment has been processed successfully. SMS confirmations have been sent to both buyer and
                  farmer.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#f3c84b20" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#8a5a3b" }}>
                  Transaction Reference Number
                </p>
                <p className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                  {transactionNumber}
                </p>
                <p className="text-xs text-gray-600 mt-2">Save this number for your records</p>
              </div>
              <div className="pt-4 space-y-3">
                <Button
                  className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                  style={{ backgroundColor: "#f3c84b" }}
                  size="lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Make Another Payment
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
    <div className="min-h-screen flex flex-col items-center p-4 py-6" style={{ backgroundColor: "#2e6a3b" }}>
      <div className="w-full max-w-2xl space-y-6">
        {/* Header with language toggle */}
        <div className="flex justify-between items-center">
          <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-32 w-auto" />
          <div className="flex gap-2">
            <LanguageToggle />
            <Button
              variant="outline"
              size="lg"
              className="border-2 bg-white hover:bg-gray-50"
              style={{ borderColor: "#8a5a3b", color: "#8a5a3b" }}
              asChild
            >
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>

        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Make Payment
              </CardTitle>
              <VoicePromptButton
                text="Make a secure payment to farmers for their products using SevisWallet, mobile banking, or bank transfer."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">Securely pay farmers for their products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Product Details */}
            <div className="space-y-3">
              <Label htmlFor="product" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Product Name
              </Label>
              <Input
                id="product"
                type="text"
                value="Premium Cocoa Beans"
                readOnly
                className="text-lg h-14 border-2 bg-gray-50"
                style={{ borderColor: "#8a5a3b" }}
                aria-label="Product name"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="quantity" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Quantity (kg)
              </Label>
              <div className="flex gap-2">
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity in kg"
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="Quantity in kilograms"
                />
                <VoicePromptButton text="Quantity in kilograms" variant="input" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="price" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Price per kg (PGK)
              </Label>
              <Input
                id="price"
                type="number"
                value={pricePerKg}
                onChange={(e) => setPricePerKg(e.target.value)}
                placeholder="Enter price per kg"
                className="text-lg h-14 border-2"
                style={{ borderColor: "#8a5a3b" }}
                aria-label="Price per kilogram"
              />
            </div>

            <div className="p-4 rounded-lg border-2" style={{ borderColor: "#8a5a3b", backgroundColor: "#f3c84b20" }}>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold" style={{ color: "#8a5a3b" }}>
                  Total Amount:
                </span>
                <span className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                  PGK {calculateTotal()}
                </span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <Label htmlFor="payment-method" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Payment Method
              </Label>
              <div className="flex gap-2">
                <Select defaultValue="seviswallet">
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    id="payment-method"
                    aria-label="Payment method"
                  >
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seviswallet" className="text-base py-3">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        SevisWallet (Preferred)
                      </div>
                    </SelectItem>
                    <SelectItem value="mobile-banking" className="text-base py-3">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Mobile Banking (USSD/SMS)
                      </div>
                    </SelectItem>
                    <SelectItem value="bank-transfer" className="text-base py-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Bank Transfer
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <VoicePromptButton text="Select payment method" variant="speak" />
              </div>
            </div>

            {/* Buyer Details */}
            <div className="pt-4 space-y-6 border-t-2" style={{ borderColor: "#8a5a3b" }}>
              <h3 className="text-xl font-bold" style={{ color: "#8a5a3b" }}>
                Buyer Details
              </h3>

              <div className="space-y-3">
                <Label htmlFor="buyer-name" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                  Full Name
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="buyer-name"
                    type="text"
                    placeholder="Enter your full name"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Buyer full name"
                  />
                  <VoicePromptButton text="Full name" variant="input" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="buyer-phone" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                  Phone Number
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="buyer-phone"
                    type="tel"
                    placeholder="+675 XXXX XXXX"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Buyer phone number"
                  />
                  <VoicePromptButton text="Phone number" variant="input" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="buyer-email" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                  Email (Optional)
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="buyer-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    aria-label="Buyer email address"
                  />
                  <VoicePromptButton text="Email address" variant="input" />
                </div>
              </div>
            </div>

            <Button
              className="w-full h-16 text-lg font-semibold text-black hover:opacity-90"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
              onClick={handleSubmit}
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Confirm Payment
            </Button>

            <Card className="border-2" style={{ borderColor: "#8a5a3b", backgroundColor: "#f3c84b20" }}>
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <Wallet className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#8a5a3b" }} />
                  <p className="text-sm text-black leading-relaxed">
                    <strong>Secure Payment:</strong> All transactions are encrypted and protected. Both buyer and farmer
                    will receive SMS confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-black">
                <Wallet className="h-5 w-5" />
                <span>Payment Options</span>
              </div>
              <ul className="space-y-2 text-sm text-black/80 leading-relaxed ml-7">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>SevisWallet offers instant, secure digital payments</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Mobile Banking works with all major PNG providers</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Bank Transfer available for larger transactions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
