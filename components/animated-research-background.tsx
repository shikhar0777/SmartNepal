"use client"

import { Bitcoin, DollarSign, Euro, PoundSterling } from "lucide-react"

export default function AnimatedResearchBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0a1628] pointer-events-none">
      {/* Quantum Atoms Layer */}
      <div className="absolute inset-0 z-[-10]">
        {/* Atom 1 */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 animate-float-slow">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-3 h-3 bg-[#2563eb] 
                            rounded-full shadow-[0_0_10px_#2563eb] 
                            opacity-60">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-8 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-8 animate-spin-reverse">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Atom 2 */}
        <div className="absolute top-[25%] right-[15%] w-20 h-20 animate-float-medium">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-4 h-4 bg-[#2563eb] shadow-[0_0_12px_#2563eb] 
                            rounded-full opacity-50">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-16 border border-[#f1f5f9] rounded-full 
                            opacity-15 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-20 h-10 border border-[#f1f5f9] rounded-full 
                            opacity-15 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-16 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-20 h-10 animate-spin-reverse">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Atom 3 */}
        <div className="absolute bottom-[20%] left-[20%] w-14 h-14 animate-float-fast">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-2 h-2 bg-[#2563eb] shadow-[0_0_8px_#2563eb] 
                            rounded-full opacity-70">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-10 h-10 border border-[#f1f5f9] rounded-full 
                            opacity-25 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-14 h-7 border border-[#f1f5f9] rounded-full 
                            opacity-25 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-10 h-10 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Atom 4 */}
        <div className="absolute top-[60%] right-[25%] w-18 h-18 animate-float-slow">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-3 h-3 bg-[#2563eb] shadow-[0_0_9px_#2563eb] 
                            rounded-full opacity-55">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-14 h-14 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-18 h-9 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-14 h-14 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Atom 5 */}
        <div className="absolute bottom-[35%] right-[10%] w-16 h-16 animate-float-medium">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-3 h-3 bg-[#2563eb] shadow-[0_0_10px_#2563eb] 
                            rounded-full opacity-60">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-8 border border-[#f1f5f9] rounded-full 
                            opacity-20 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-12 h-12 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Atom 6 */}
        <div className="absolute top-[40%] left-[5%] w-20 h-20 animate-float-fast">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-4 h-4 bg-[#2563eb] shadow-[0_0_12px_#2563eb] 
                            rounded-full opacity-50">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-16 border border-[#f1f5f9] rounded-full 
                            opacity-15 animate-spin-slow">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-20 h-10 border border-[#f1f5f9] rounded-full 
                            opacity-15 animate-spin-reverse">
            </div>
            <div className="absolute top-1/2 left-1/2 
                            transform -translate-x-1/2 -translate-y-1/2 
                            w-16 h-16 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full 
                              absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Board Patterns Layer */}
      <div className="absolute inset-0 z-[-9]">
        {/* Pattern 1 */}
        <div className="absolute top-0 left-0 w-80 h-80 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 320 320">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g stroke="#2563eb" strokeWidth="1" fill="none" filter="url(#glow)">
              <path d="M40 40 L80 40 L80 80 L120 80 L120 120 L160 120" className="animate-pulse-slow" />
              <path d="M40 80 L80 80 L80 120 L120 120 L120 160 L160 160" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <path d="M40 120 L80 120 L80 160 L120 160 L120 200 L160 200" className="animate-pulse-slow" style={{ animationDelay: '4s' }} />
              <circle cx="40" cy="40" r="2" fill="#2563eb" />
              <circle cx="80" cy="80" r="2" fill="#2563eb" />
              <circle cx="120" cy="120" r="2" fill="#2563eb" />
              <circle cx="160" cy="160" r="2" fill="#2563eb" />
            </g>
          </svg>
        </div>
        {/* Pattern 2 */}
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 320 320">
            <g stroke="#2563eb" strokeWidth="1" fill="none" filter="url(#glow)">
              <path d="M280 280 L240 280 L240 240 L200 240 L200 200 L160 200" className="animate-pulse-slow" />
              <path d="M280 240 L240 240 L240 200 L200 200 L200 160 L160 160" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
              <path d="M280 200 L240 200 L240 160 L200 160 L200 120 L160 120" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <circle cx="280" cy="280" r="2" fill="#2563eb" />
              <circle cx="240" cy="240" r="2" fill="#2563eb" />
              <circle cx="200" cy="200" r="2" fill="#2563eb" />
              <circle cx="160" cy="160" r="2" fill="#2563eb" />
            </g>
          </svg>
        </div>
        {/* Pattern 3 */}
        <div className="absolute top-0 right-0 w-60 h-60 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 240 240">
            <g stroke="#2563eb" strokeWidth="1" fill="none" filter="url(#glow)">
              <path d="M200 40 L160 40 L160 80 L120 80 L120 120 L80 120" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
              <path d="M200 80 L160 80 L160 120 L120 120 L120 160 L80 160" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <circle cx="200" cy="40" r="2" fill="#2563eb" />
              <circle cx="160" cy="80" r="2" fill="#2563eb" />
              <circle cx="120" cy="120" r="2" fill="#2563eb" />
              <circle cx="80" cy="160" r="2" fill="#2563eb" />
            </g>
          </svg>
        </div>
      </div>

      {/* Data Visualization Layer */}
      <div className="absolute inset-0 z-[-8]">
        {/* Line Graph 1 */}
        <div className="absolute top-[20%] left-[15%] w-48 h-32 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 192 128">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <g stroke="#2563eb" strokeWidth="2" fill="none">
              <path d="M10 100 L30 80 L50 90 L70 60 L90 70 L110 40 L130 50 L150 30 L170 40 L190 20"
                    className="animate-draw-line"
                    strokeDasharray="200"
                    strokeDashoffset="200"
              />
              <circle cx="30" cy="80"  r="2" fill="#2563eb" className="animate-pulse-slow" />
              <circle cx="70" cy="60"  r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <circle cx="110" cy="40" r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <circle cx="150" cy="30" r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
            </g>
          </svg>
        </div>
        {/* Bar Chart */}
        <div className="absolute bottom-[25%] right-[20%] w-40 h-24 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 160 96">
            <g fill="#2563eb">
              <rect x="20"  y="60" width="12" height="36" className="animate-bar-grow" />
              <rect x="40"  y="40" width="12" height="56" className="animate-bar-grow" style={{ animationDelay: '0.5s' }} />
              <rect x="60"  y="70" width="12" height="26" className="animate-bar-grow" style={{ animationDelay: '1s' }} />
              <rect x="80"  y="30" width="12" height="66" className="animate-bar-grow" style={{ animationDelay: '1.5s' }} />
              <rect x="100" y="50" width="12" height="46" className="animate-bar-grow" style={{ animationDelay: '2s' }} />
              <rect x="120" y="20" width="12" height="76" className="animate-bar-grow" style={{ animationDelay: '2.5s' }} />
            </g>
          </svg>
        </div>
        {/* Line Graph 2 */}
        <div className="absolute top-[60%] left-[60%] w-36 h-24 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 144 96">
            <g stroke="#2563eb" strokeWidth="1.5" fill="none">
              <path d="M10 80 L25 60 L40 70 L55 45 L70 55 L85 35 L100 45 L115 25 L130 35"
                    className="animate-draw-line"
                    strokeDasharray="150"
                    strokeDashoffset="150"
                    style={{ animationDelay: '3s' }}
              />
              <circle cx="25" cy="60" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '4s' }} />
              <circle cx="55" cy="45" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '5s' }} />
              <circle cx="85" cy="35" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '6s' }} />
            </g>
          </svg>
        </div>
      </div>

      {/* Currency Symbols Layer */}
      <div className="absolute inset-0 z-[-7]">
        <div className="absolute top-[15%] opacity-30 animate-drift-right">
          <Bitcoin className="w-8 h-8 text-[#2563eb] animate-rotate-slow" />
        </div>
        <div className="absolute top-[30%] opacity-25 animate-drift-right" style={{ animationDelay: '5s' }}>
          <DollarSign className="w-6 h-6 text-[#f1f5f9] animate-rotate-slow" />
        </div>
        <div className="absolute top-[45%] opacity-35 animate-drift-right" style={{ animationDelay: '10s' }}>
          <Euro className="w-7 h-7 text-[#2563eb] animate-rotate-slow" />
        </div>
        <div className="absolute top-[60%] opacity-20 animate-drift-right" style={{ animationDelay: '15s' }}>
          <div className="w-6 h-6 text-[#f1f5f9] animate-rotate-slow flex items-center justify-center text-lg font-bold">
            ¥
          </div>
        </div>
        <div className="absolute top-[75%] opacity-30 animate-drift-right" style={{ animationDelay: '20s' }}>
          <PoundSterling className="w-8 h-8 text-[#2563eb] animate-rotate-slow" />
        </div>
        <div className="absolute top-[20%] opacity-25 animate-drift-right" style={{ animationDelay: '8s' }}>
          <Bitcoin className="w-5 h-5 text-[#f1f5f9] animate-rotate-slow" />
        </div>
        <div className="absolute top-[50%] opacity-20 animate-drift-right" style={{ animationDelay: '12s' }}>
          <DollarSign className="w-9 h-9 text-[#2563eb] animate-rotate-slow" />
        </div>
        <div className="absolute top-[35%] opacity-35 animate-drift-right" style={{ animationDelay: '18s' }}>
          <Euro className="w-6 h-6 text-[#f1f5f9] animate-rotate-slow" />
        </div>
      </div>

      {/* Network Nodes Layer */}
      <div className="absolute inset-0 z-[-6]">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
          <g stroke="#2563eb" strokeWidth="0.1" fill="none">
            <line x1="15" y1="20" x2="35" y2="40" className="animate-pulse-slow" />
            <line x1="35" y1="40" x2="65" y2="30" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="65" y1="30" x2="85" y2="60" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <line x1="85" y1="60" x2="60" y2="80" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
            <line x1="60" y1="80" x2="25" y2="70" className="animate-pulse-slow" style={{ animationDelay: '4s' }} />
            <line x1="25" y1="70" x2="15" y2="20" className="animate-pulse-slow" style={{ animationDelay: '5s' }} />
            <line x1="35" y1="40" x2="25" y2="70" className="animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
            <line x1="65" y1="30" x2="60" y2="80" className="animate-pulse-slow" style={{ animationDelay: '3.5s' }} />
          </g>
        </svg>
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-[#2563eb] rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-[40%] left-[35%] w-3 h-3 bg-[#2563eb] rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] left-[65%] w-2 h-2 bg-[#2563eb] rounded-full opacity-35 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] left-[85%] w-3 h-3 bg-[#2563eb] rounded-full opacity-25 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[80%] left-[60%] w-2 h-2 bg-[#2563eb] rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[70%] left-[25%] w-3 h-3 bg-[#2563eb] rounded-full opacity-40 animate-pulse-slow" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[50%] left-[45%] w-2 h-2 bg-[#2563eb] rounded-full opacity-35 animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[25%] left-[75%] w-2 h-2 bg-[#2563eb] rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-[45%] left-[20%] w-3 h-3 bg-[#2563eb] rounded-full opacity-25 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[65%] left-[40%] w-2 h-2 bg-[#2563eb] rounded-full opacity-35 animate-pulse-slow" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-[35%] left-[90%] w-3 h-3 bg-[#2563eb] rounded-full opacity-30 animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[85%] left-[10%] w-2 h-2 bg-[#2563eb] rounded-full opacity-40 animate-pulse-slow" style={{ animationDelay: '7s' }}></div>
      </div>

      {/* Abstract Geometric Shapes Layer */}
      <div className="absolute inset-0 z-[-5]">
        <div className="absolute top-[25%] left-[70%] w-16 h-16 opacity-5 animate-rotate-slow">
          <svg width="100%" height="100%" viewBox="0 0 64 64">
            <polygon points="32,8 52,20 52,44 32,56 12,44 12,20"
                     stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[70%] left-[40%] w-12 h-12 opacity-8 animate-rotate-reverse">
          <svg width="100%" height="100%" viewBox="0 0 48 48">
            <polygon points="24,8 44,36 4,36"
                     stroke="#2563eb" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[80%] w-10 h-16 opacity-6 animate-scale-pulse">
          <svg width="100%" height="100%" viewBox="0 0 40 64">
            <rect x="8" y="8" width="24" height="48"
                  stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[55%] left-[10%] w-14 h-14 opacity-7 animate-rotate-slow" style={{ animationDelay: '10s' }}>
          <svg width="100%" height="100%" viewBox="0 0 56 56">
            <polygon points="28,7 42,17.5 42,38.5 28,49 14,38.5 14,17.5"
                     stroke="#2563eb" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[15%] left-[50%] w-8 h-8 opacity-5 animate-rotate-reverse" style={{ animationDelay: '15s' }}>
          <svg width="100%" height="100%" viewBox="0 0 32 32">
            <polygon points="16,4 28,24 4,24" 
                     stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  )
}
