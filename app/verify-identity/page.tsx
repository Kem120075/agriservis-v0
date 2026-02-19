"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"
import { VoicePromptButton } from "@/components/voice-prompt-button"
import { Mail, CheckCircle, Home, ArrowRight, RefreshCw } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function VerifyIdentityPage() {
  const [isVerified, setIsVerified] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.email) {
        setUserEmail(user.email)
        if (user.email_confirmed_at) {
          setIsVerified(true)
        }
      }
    }
    checkUser()
  }, [])

  const handleResendEmail = async () => {
    setIsChecking(true)
    const supabase = createClient()
    
    if (userEmail) {
      await supabase.auth.resend({
        type: 'signup',
        email: userEmail,
        options: {
          emailRedirectTo: `${window.location.origin}/verify-identity`,
        },
      })
    }
    
    setTimeout(() => setIsChecking(false), 2000)
  }

  const handleCheckVerification = async () => {
    setIsChecking(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user?.email_confirmed_at) {
      setIsVerified(true)
    }
    
    setTimeout(() => setIsChecking(false), 1000)
  }

  if (isVerified) {
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
                Email Verified!
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Your email has been verified successfully. You can now access all AgriServis features.
              </p>
            </div>
            <Link href="/login">
              <Button
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
              >
                Continue to Login
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

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

        {/* Verification Card */}
        <Card className="border-2 bg-white" style={{ borderColor: "#8a5a3b" }}>
          <CardHeader className="space-y-3 text-center">
            <div className="flex justify-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f3c84b" }}
              >
                <Mail className="h-8 w-8" style={{ color: "#8a5a3b" }} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CardTitle className="text-2xl font-bold" style={{ color: "#8a5a3b" }}>
                Verify Your Email
              </CardTitle>
              <VoicePromptButton
                text="Please check your email and click the verification link to activate your account."
                variant="speak"
              />
            </div>
            <CardDescription className="text-base">
              We have sent a verification link to your email address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {userEmail && (
              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: "#f3c84b20" }}>
                <p className="text-sm text-gray-600">Verification email sent to:</p>
                <p className="font-semibold" style={{ color: "#2e6a3b" }}>{userEmail}</p>
              </div>
            )}

            <div className="space-y-3">
              <p className="text-sm text-gray-600 text-center">
                Click the link in your email to verify your account. If you do not see the email, check your spam folder.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleCheckVerification}
                className="w-full h-14 text-lg font-semibold text-black hover:opacity-90"
                style={{ backgroundColor: "#f3c84b" }}
                disabled={isChecking}
              >
                {isChecking ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    I Have Verified My Email
                  </>
                )}
              </Button>

              <Button
                onClick={handleResendEmail}
                variant="outline"
                className="w-full h-12 text-base font-semibold border-2 bg-transparent"
                style={{ borderColor: "#8a5a3b", color: "#8a5a3b" }}
                disabled={isChecking}
              >
                <Mail className="mr-2 h-5 w-5" />
                Resend Verification Email
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Need help?{" "}
                <Link href="/select-role" className="hover:underline font-semibold" style={{ color: "#2e6a3b" }}>
                  Start over
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Help Info Box */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Mail className="h-8 w-8 shrink-0" style={{ color: "#8a5a3b" }} />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-black">Why Verify?</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Email verification helps protect your account and ensures you can receive important notifications about your farming activities and sales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
