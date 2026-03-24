import React from 'react'

export default function GridLines() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <div className="max-w-container mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="w-px h-full bg-black/[0.04]" />
        <div className="w-px h-full bg-black/[0.04] hidden md:block" />
        <div className="w-px h-full bg-black/[0.04] hidden md:block" />
        <div className="w-px h-full bg-black/[0.04]" />
      </div>
      
      {/* Optional: Full height outer lines if the user wants them beyond container */}
      <div className="absolute top-0 left-0 w-px h-full bg-black/[0.02] hidden xl:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-black/[0.02] hidden xl:block" />
    </div>
  )
}
