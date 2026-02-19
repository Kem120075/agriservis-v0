import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, UserPlus, Layers, CreditCard } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#2e6a3b" }}>
      <div className="w-full max-w-2xl space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="mx-auto flex items-center justify-center">
            <img src="/images/agriservis-20png-01-01.png" alt="Agriservis Logo" className="h-40 w-auto" />
          </div>
          <div className="space-y-2">
            <p className="text-lg text-white text-balance">Digital Platform for Farmers in Papua New Guinea</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-2 bg-white hover:shadow-lg transition-all" style={{ borderColor: "#8a5a3b" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#8a5a3b" }}>
                <LogIn className="h-6 w-6" />
                Login
              </CardTitle>
              <CardDescription className="text-base">Access your farmer account</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full h-12 text-base text-black"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Link href="/login">Go to Login</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 bg-white hover:shadow-lg transition-all" style={{ borderColor: "#8a5a3b" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#8a5a3b" }}>
                <UserPlus className="h-6 w-6" />
                Register
              </CardTitle>
              <CardDescription className="text-base">Create new farmer account</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full h-12 text-base text-black"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Link href="/register">Create Account</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 bg-white hover:shadow-lg transition-all" style={{ borderColor: "#8a5a3b" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#8a5a3b" }}>
                <Layers className="h-6 w-6" />
                Crop Selection
              </CardTitle>
              <CardDescription className="text-base">Choose your farming type</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full h-12 text-base text-black"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Link href="/crop-category">Start Selection</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 bg-white hover:shadow-lg transition-all" style={{ borderColor: "#8a5a3b" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl" style={{ color: "#8a5a3b" }}>
                <CreditCard className="h-6 w-6" />
                Make Payment
              </CardTitle>
              <CardDescription className="text-base">Pay farmers securely</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full h-12 text-base text-black"
                style={{ backgroundColor: "#f3c84b" }}
                size="lg"
              >
                <Link href="/payment">Pay Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <Card className="border-2" style={{ backgroundColor: "#f3c84b", borderColor: "#8a5a3b" }}>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <span className="text-2xl shrink-0">🤝</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-black">Community Support</p>
                <p className="text-sm text-black leading-relaxed">
                  Join thousands of Papua New Guinea farmers improving their livelihoods together.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
