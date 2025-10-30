"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ExamplesGallery } from "@/components/sections/examples-gallery"
import { Sparkles, Zap, MessageSquare, ArrowRight, Image, Layers, Wand2 } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="px-4 py-2 text-sm bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              The AI model that outperforms Flux Kontext
              <Link href="/generator" className="ml-2 font-semibold hover:underline">
                Try Now →
              </Link>
            </Badge>
          </div>

          {/* Title with Bananas */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <span className="text-6xl md:text-8xl animate-bounce" style={{ animationDelay: "0s" }}>🍌</span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              <span className="text-orange-500">Nano</span> <span className="text-yellow-500">Banana</span>
            </h1>
            <span className="text-6xl md:text-8xl animate-bounce" style={{ animationDelay: "0.5s" }}>🍌</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers{" "}
            <span className="font-semibold text-foreground">consistent character editing</span> and{" "}
            <span className="font-semibold text-foreground">scene preservation</span> that surpasses Flux Kontext. 
            Experience the future of AI image editing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/generator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-6 text-lg">
                Start Editing
                <Wand2 className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
              View Examples
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-foreground">One-shot editing</h3>
              <p className="text-sm text-muted-foreground">Instant transformations with a single prompt</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Layers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground">Multi-image support</h3>
              <p className="text-sm text-muted-foreground">Process batches of images simultaneously</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground">Natural language</h3>
              <p className="text-sm text-muted-foreground">Describe edits in plain English</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Examples Section */}
      <ExamplesGallery />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Images?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators using Nano Banana for professional image editing
          </p>
          <Link href="/generator">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}