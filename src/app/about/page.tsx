// app/about/page.tsx
import React from "react"
import dynamic from "next/dynamic"

const BrowserFeature = dynamic(() => import("@/components/BrowserFeature"), {
  ssr: false,
})

export default function AboutPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <BrowserFeature />
    </main>
  )
}
