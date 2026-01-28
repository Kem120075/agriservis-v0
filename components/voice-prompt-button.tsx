"use client"

import { Button } from "@/components/ui/button"
import { Mic, Volume2 } from 'lucide-react'
import { useState } from "react"

interface VoicePromptButtonProps {
  text: string
  onVoiceInput?: () => void
  variant?: "speak" | "input"
}

export function VoicePromptButton({ text, onVoiceInput, variant = "speak" }: VoicePromptButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    if (variant === "speak") {
      // In a real app, this would use Web Speech API
      setIsPlaying(true)
      // Simulate speech
      setTimeout(() => setIsPlaying(false), 2000)
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance)
      }
    } else {
      onVoiceInput?.()
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={handleClick}
      className="shrink-0"
      aria-label={variant === "speak" ? "Read aloud" : "Voice input"}
    >
      {variant === "speak" ? (
        <Volume2 className={`h-5 w-5 ${isPlaying ? "text-primary" : ""}`} />
      ) : (
        <Mic className="h-5 w-5" />
      )}
    </Button>
  )
}
