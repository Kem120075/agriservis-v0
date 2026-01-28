"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Fingerprint, Camera, CheckCircle2, Shield, Scan } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SubmitPage() {
  const [documentPreview, setDocumentPreview] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState("")
  const [faceCaptured, setFaceCaptured] = useState(false)
  const [fingerprintCaptured, setFingerprintCaptured] = useState(false)

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setDocumentPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFaceCapture = () => {
    setFaceCaptured(true)
  }

  const handleFingerprintCapture = () => {
    setFingerprintCaptured(true)
  }

  const handleSubmit = () => {
    const refNumber = `SP${Date.now().toString().slice(-8)}`
    setReferenceNumber(refNumber)
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
                  Application Submitted!
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Your SevisPass ID application has been received. You will receive an SMS confirmation shortly.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#f3c84b20" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#8a5a3b" }}>
                  Reference Number
                </p>
                <p className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                  {referenceNumber}
                </p>
                <p className="text-xs text-gray-600 mt-2">Save this number for tracking your application</p>
              </div>
              <div className="pt-4 space-y-3">
                <Button
                  className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                  style={{ backgroundColor: "#f3c84b" }}
                  size="lg"
                  onClick={() => setIsSubmitted(false)}
                >
                  Apply for Another
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
                Apply for SevisPass ID
              </CardTitle>
              <VoicePromptButton
                text="Apply for your SevisPass ID. Create your verified digital identity to access AgriServis."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              Create your verified digital identity to access AgriServis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="fullname" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Full Name
              </Label>
              <div className="flex gap-2">
                <Input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="Full name"
                />
                <VoicePromptButton text="Full name" variant="input" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="dob" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Date of Birth
              </Label>
              <Input
                id="dob"
                type="date"
                className="text-lg h-14 border-2"
                style={{ borderColor: "#8a5a3b" }}
                aria-label="Date of birth"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="gender" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Gender
              </Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    id="gender"
                    aria-label="Gender"
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male" className="text-base py-3">
                      Male
                    </SelectItem>
                    <SelectItem value="female" className="text-base py-3">
                      Female
                    </SelectItem>
                    <SelectItem value="other" className="text-base py-3">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
                <VoicePromptButton text="Select gender" variant="speak" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="village" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Village/Community
              </Label>
              <div className="flex gap-2">
                <Input
                  id="village"
                  type="text"
                  placeholder="Enter your village or community"
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="Village or community"
                />
                <VoicePromptButton text="Village or community" variant="input" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="province" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Province/District
              </Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    id="province"
                    aria-label="Province or district"
                  >
                    <SelectValue placeholder="Select province or district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central" className="text-base py-3">
                      Central Province
                    </SelectItem>
                    <SelectItem value="eastern-highlands" className="text-base py-3">
                      Eastern Highlands
                    </SelectItem>
                    <SelectItem value="east-new-britain" className="text-base py-3">
                      East New Britain
                    </SelectItem>
                    <SelectItem value="madang" className="text-base py-3">
                      Madang
                    </SelectItem>
                    <SelectItem value="morobe" className="text-base py-3">
                      Morobe
                    </SelectItem>
                    <SelectItem value="west-new-britain" className="text-base py-3">
                      West New Britain
                    </SelectItem>
                    <SelectItem value="other" className="text-base py-3">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
                <VoicePromptButton text="Select province or district" variant="speak" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Phone Number
              </Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+675 XXXX XXXX"
                  className="text-lg h-14 border-2"
                  style={{ borderColor: "#8a5a3b" }}
                  aria-label="Phone number"
                />
                <VoicePromptButton text="Phone number" variant="input" />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="document" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                National ID or Supporting Document (Optional)
              </Label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    id="document"
                    type="file"
                    accept="image/*"
                    className="text-base h-14 border-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-black hover:file:opacity-90"
                    style={{ borderColor: "#8a5a3b", ["--file-bg" as any]: "#f3c84b" }}
                    onChange={handleDocumentUpload}
                    aria-label="Upload document"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="shrink-0 border-2 bg-white hover:bg-gray-50"
                    style={{ borderColor: "#8a5a3b", color: "#8a5a3b" }}
                  >
                    <Camera className="h-5 w-5" />
                  </Button>
                </div>
                {documentPreview && (
                  <div className="relative rounded-lg overflow-hidden border-2" style={{ borderColor: "#8a5a3b" }}>
                    <img
                      src={documentPreview || "/placeholder.svg"}
                      alt="Document preview"
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setDocumentPreview(null)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="language" className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                Preferred Language
              </Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger
                    className="text-lg h-14 border-2"
                    style={{ borderColor: "#8a5a3b" }}
                    id="language"
                    aria-label="Preferred language"
                  >
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tok-pisin" className="text-base py-3">
                      Tok Pisin
                    </SelectItem>
                    <SelectItem value="english" className="text-base py-3">
                      English
                    </SelectItem>
                    <SelectItem value="local" className="text-base py-3">
                      Local Language
                    </SelectItem>
                  </SelectContent>
                </Select>
                <VoicePromptButton text="Select preferred language" variant="speak" />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t-2" style={{ borderColor: "#8a5a3b" }}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold" style={{ color: "#8a5a3b" }}>
                  Contactless Biometrics Capture
                </h3>
                <VoicePromptButton
                  text="Capture your biometrics contactlessly. You can capture your face and fingerprint for secure verification."
                  variant="speak"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Capture your biometrics securely and contactlessly. You may skip this step if using agent-assisted
                enrollment.
              </p>

              {/* Facial Recognition */}
              <div className="space-y-3">
                <Label className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                  Facial Recognition
                </Label>
                <Button
                  type="button"
                  className={`w-full h-16 text-lg font-semibold border-2 ${
                    faceCaptured ? "bg-green-100 hover:bg-green-100" : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    borderColor: faceCaptured ? "#10b981" : "#8a5a3b",
                    color: faceCaptured ? "#10b981" : "#8a5a3b",
                  }}
                  onClick={handleFaceCapture}
                  variant="outline"
                >
                  <Scan className="mr-2 h-6 w-6" />
                  {faceCaptured ? "Face Captured ✓" : "Capture Your Face (Contactless)"}
                </Button>
              </div>

              {/* Fingerprint Capture */}
              <div className="space-y-3">
                <Label className="text-base font-medium" style={{ color: "#8a5a3b" }}>
                  Fingerprint Capture
                </Label>
                <Button
                  type="button"
                  className={`w-full h-16 text-lg font-semibold border-2 ${
                    fingerprintCaptured ? "bg-green-100 hover:bg-green-100" : "bg-white hover:bg-gray-50"
                  }`}
                  style={{
                    borderColor: fingerprintCaptured ? "#10b981" : "#8a5a3b",
                    color: fingerprintCaptured ? "#10b981" : "#8a5a3b",
                  }}
                  onClick={handleFingerprintCapture}
                  variant="outline"
                >
                  <Fingerprint className="mr-2 h-6 w-6" />
                  {fingerprintCaptured ? "Fingerprint Captured ✓" : "Capture Your Fingerprint (Contactless)"}
                </Button>
              </div>

              <Card className="border-2" style={{ borderColor: "#1e40af", backgroundColor: "#dbeafe" }}>
                <CardContent className="pt-4">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#1e40af" }} />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold" style={{ color: "#1e40af" }}>
                        Audio Guidance Available
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#1e40af" }}>
                        Clear instructions in Tok Pisin and English are provided during biometric capture. Click the
                        speaker icons to hear instructions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              className="w-full h-16 text-lg font-semibold text-black hover:opacity-90"
              style={{ backgroundColor: "#f3c84b" }}
              size="lg"
              onClick={handleSubmit}
            >
              <Fingerprint className="mr-2 h-5 w-5" />
              Apply for SevisPass
            </Button>

            <Card className="border-2" style={{ borderColor: "#8a5a3b", backgroundColor: "#f3c84b20" }}>
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#8a5a3b" }} />
                  <p className="text-sm text-black leading-relaxed">
                    <strong>Secure & Verified:</strong> Your SevisPass ID creates a trusted digital identity for
                    accessing AgriServis services.
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
                <Shield className="h-5 w-5" />
                <span>Why Get SevisPass?</span>
              </div>
              <ul className="space-y-2 text-sm text-black/80 leading-relaxed ml-7">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Access all AgriServis features with one verified identity</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Secure digital identity for farming services</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Connect with buyers and cooperative members</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Track your farming activities and transactions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
