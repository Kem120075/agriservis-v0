"use client"

import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import { useState } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "tp">("en")

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "tp" : "en")
  }

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={toggleLanguage}
      className="gap-2 text-base"
      aria-label={language === "en" ? "Switch to Tok Pisin" : "Switch to English"}
    >
      <Globe className="h-5 w-5" />
      {language === "en" ? "English" : "Tok Pisin"}
    </Button>
  )
}
