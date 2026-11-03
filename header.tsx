'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Page scroll progress line — fills left to right as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = height ? (winScroll / height) * 100 : 0
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky header container */}
      <div className="sticky top-0 z-40 bg-background border-b border-gray-200 shadow-sm" id="header">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-2 py-4">
            <div className="flex flex-wrap items-center justify-between w-full gap-4 ml-4 sm:ml-0">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="/Deped CDO_Official Logo-min.png"
                  alt="DepEd CDO Official Logo"
                  className="h-18 w-auto"
                />
                <div className="flex flex-col">
                  <h1 className="text-xs uppercase tracking-widest text-muted-foreground font-normal">
                    REPUBLIC OF THE PHILIPPINES
                  </h1>
                  <h2 className="text-xl font-bold uppercase text-foreground leading-none">
                    DEPARTMENT OF EDUCATION
                  </h2>
                  <p className="text-sm text-muted-foreground leading-none">
                    Region X - Northern Mindanao
                  </p>
                  <p className="text-sm text-muted-foreground leading-none">
                    Division of Cagayan de Oro City
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  size="lg"
                  render={<a href="#submit" />}
                  nativeButton={false}
                  className="hidden sm:flex"
                >
                  Submit Outputs & Templates
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Progress line — fills left to right as page is scrolled */}
        <div
          className="h-[3px] bg-yellow-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}
