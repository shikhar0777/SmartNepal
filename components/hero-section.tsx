"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, Lightbulb, Award, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Bitcoin, DollarSign, Euro, PoundSterling } from "lucide-react"


export default function AnimatedResearchBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0a1628] pointer-events-none">
      {/* Quantum Atoms Layer */}
      <div className="absolute inset-0 z-[-10]">
        {/* Atom 1 */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 animate-float-slow">
          <div className="relative w-full h-full">
            {/* Nucleus */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2563eb] rounded-full shadow-[0_0_10px_#2563eb] opacity-60"></div>
            {/* Orbital Ring 1 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-slow"></div>
            {/* Orbital Ring 2 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-reverse"></div>
            {/* Electron 1 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
            {/* Electron 2 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 animate-spin-reverse">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Atom 2 */}
        <div className="absolute top-[25%] right-[15%] w-20 h-20 animate-float-medium">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2563eb] rounded-full shadow-[0_0_12px_#2563eb] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#f1f5f9] rounded-full opacity-15 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 border border-[#f1f5f9] rounded-full opacity-15 animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 animate-spin-reverse">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Atom 3 */}
        <div className="absolute bottom-[20%] left-[20%] w-14 h-14 animate-float-fast">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2563eb] rounded-full shadow-[0_0_8px_#2563eb] opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-[#f1f5f9] rounded-full opacity-25 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-7 border border-[#f1f5f9] rounded-full opacity-25 animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Atom 4 */}
        <div className="absolute top-[60%] right-[25%] w-18 h-18 animate-float-slow">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2563eb] rounded-full shadow-[0_0_9px_#2563eb] opacity-55"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-9 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Atom 5 */}
        <div className="absolute bottom-[35%] right-[10%] w-16 h-16 animate-float-medium">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2563eb] rounded-full shadow-[0_0_10px_#2563eb] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 border border-[#f1f5f9] rounded-full opacity-20 animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Atom 6 */}
        <div className="absolute top-[40%] left-[5%] w-20 h-20 animate-float-fast">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2563eb] rounded-full shadow-[0_0_12px_#2563eb] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#f1f5f9] rounded-full opacity-15 animate-spin-slow"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 border border-[#f1f5f9] rounded-full opacity-15 animate-spin-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-spin-slow">
              <div className="w-1 h-1 bg-[#2563eb] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Board Patterns Layer */}
      <div className="absolute inset-0 z-[-9]">
        {/* Circuit Pattern 1 - Top Left */}
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

        {/* Circuit Pattern 2 - Bottom Right */}
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

        {/* Circuit Pattern 3 - Top Right */}
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
                    className="animate-draw-line" strokeDasharray="200" strokeDashoffset="200" />
              <circle cx="30" cy="80" r="2" fill="#2563eb" className="animate-pulse-slow" />
              <circle cx="70" cy="60" r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <circle cx="110" cy="40" r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <circle cx="150" cy="30" r="2" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
            </g>
          </svg>
        </div>

        {/* Bar Chart */}
        <div className="absolute bottom-[25%] right-[20%] w-40 h-24 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 160 96">
            <g fill="#2563eb">
              <rect x="20" y="60" width="12" height="36" className="animate-bar-grow" />
              <rect x="40" y="40" width="12" height="56" className="animate-bar-grow" style={{ animationDelay: '0.5s' }} />
              <rect x="60" y="70" width="12" height="26" className="animate-bar-grow" style={{ animationDelay: '1s' }} />
              <rect x="80" y="30" width="12" height="66" className="animate-bar-grow" style={{ animationDelay: '1.5s' }} />
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
                    className="animate-draw-line" strokeDasharray="150" strokeDashoffset="150" 
                    style={{ animationDelay: '3s' }} />
              <circle cx="25" cy="60" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '4s' }} />
              <circle cx="55" cy="45" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '5s' }} />
              <circle cx="85" cy="35" r="1.5" fill="#2563eb" className="animate-pulse-slow" style={{ animationDelay: '6s' }} />
            </g>
          </svg>
        </div>
      </div>

      {/* Currency Symbols Layer */}
      <div className="absolute inset-0 z-[-7]">
        {/* Bitcoin */}
        <div className="absolute top-[15%] opacity-30 animate-drift-right">
          <Bitcoin className="w-8 h-8 text-[#2563eb] animate-rotate-slow" />
        </div>
        
        {/* Dollar */}
        <div className="absolute top-[30%] opacity-25 animate-drift-right" style={{ animationDelay: '5s' }}>
          <DollarSign className="w-6 h-6 text-[#f1f5f9] animate-rotate-slow" />
        </div>
        
        {/* Euro */}
        <div className="absolute top-[45%] opacity-35 animate-drift-right" style={{ animationDelay: '10s' }}>
          <Euro className="w-7 h-7 text-[#2563eb] animate-rotate-slow" />
        </div>
        
        {/* Yen */}
        <div className="absolute top-[60%] opacity-20 animate-drift-right" style={{ animationDelay: '15s' }}>
          <div className="w-6 h-6 text-[#f1f5f9] animate-rotate-slow flex items-center justify-center text-lg font-bold">
            ¥
          </div>
        </div>
        
        {/* Pound */}
        <div className="absolute top-[75%] opacity-30 animate-drift-right" style={{ animationDelay: '20s' }}>
          <PoundSterling className="w-8 h-8 text-[#2563eb] animate-rotate-slow" />
        </div>
        
        {/* Additional symbols */}
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
        {/* Node connections */}
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
        
        {/* Network nodes */}
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
        {/* Hexagon */}
        <div className="absolute top-[25%] left-[70%] w-16 h-16 opacity-5 animate-rotate-slow">
          <svg width="100%" height="100%" viewBox="0 0 64 64">
            <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" 
                     stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Triangle */}
        <div className="absolute top-[70%] left-[40%] w-12 h-12 opacity-8 animate-rotate-reverse">
          <svg width="100%" height="100%" viewBox="0 0 48 48">
            <polygon points="24,8 44,36 4,36" 
                     stroke="#2563eb" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Rectangle */}
        <div className="absolute top-[45%] left-[80%] w-10 h-16 opacity-6 animate-scale-pulse">
          <svg width="100%" height="100%" viewBox="0 0 40 64">
            <rect x="8" y="8" width="24" height="48" 
                  stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Additional Hexagon */}
        <div className="absolute top-[55%] left-[10%] w-14 h-14 opacity-7 animate-rotate-slow" style={{ animationDelay: '10s' }}>
          <svg width="100%" height="100%" viewBox="0 0 56 56">
            <polygon points="28,7 42,17.5 42,38.5 28,49 14,38.5 14,17.5" 
                     stroke="#2563eb" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Additional Triangle */}
        <div className="absolute top-[15%] left-[50%] w-8 h-8 opacity-5 animate-rotate-reverse" style={{ animationDelay: '15s' }}>
          <svg width="100%" height="100%" viewBox="0 0 32 32">
            <polygon points="16,4 28,24 4,24" 
                     stroke="#f1f5f9" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes drift-right {
          0% { transform: translateX(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) rotate(360deg); opacity: 0; }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes bar-grow {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        
        .animate-drift-right {
          animation: drift-right 30s linear infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 15s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 18s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 8s ease-in-out infinite;
        }
        
        .animate-bar-grow {
          animation: bar-grow 6s ease-in-out infinite;
          transform-origin: bottom;
        }
        
        .animate-scale-pulse {
          animation: scale-pulse 8s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-float-medium,
          .animate-float-fast,
          .animate-spin-slow,
          .animate-spin-reverse,
          .animate-drift-right,
          .animate-rotate-slow,
          .animate-rotate-reverse,
          .animate-pulse-slow,
          .animate-draw-line,
          .animate-bar-grow,
          .animate-scale-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}




export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Sophisticated Background Animation */}
      
      <div className="absolute inset-0">
        

        
        {/* Elegant gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30"></div>

        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
              `,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating orbs with sophisticated movement */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/5 w-48 h-48 bg-gradient-to-br from-purple-100/15 to-pink-100/10 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 30, -15, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-100/20 to-teal-100/15 rounded-full blur-xl"
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -25, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(30deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(120deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content - Better Spacing */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading Section - Increased Top Spacing and Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pt-32 md:pt-40 lg:pt-48 pb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                  Q-SMART-E
                </span>
              </motion.h1>
              </motion.div>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.div>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Empowering the next generation of researchers through */}
              <span className="font-medium text-slate-800">WE THE SMART FUTURE</span>
              {/* <span className="font-medium text-slate-800"> expert mentorship</span>, and
              <span className="font-medium text-slate-800"> collaborative discovery</span> */}
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 leading-relaxed font-light max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Empowering the next generation of Research and Technology
              <span className="font-medium text-slate-800"> innovative learning</span>,
              <span className="font-medium text-slate-800"> expert mentorship</span>, and
              <span className="font-medium text-slate-800"> collaborative discovery</span>
            </motion.p>

          {/* Call-to-Action Buttons - Updated Animation Timing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-24 px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              
            </motion.div>
          </motion.div>

          {/* Feature Highlights - Updated Animation Timing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-3 gap-8 mb-24 px-4"
          >
            {[
              {
                icon: BookOpen,
                title: "Research Excellence",
                description: "Master research methodologies and publish in peer-reviewed journals",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                icon: Users,
                title: "Collaborative Innovation",
                description: "Work alongside brilliant minds on groundbreaking projects",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Lightbulb,
                title: "Expert Mentorship",
                description: "Learn from leading researchers and industry professionals",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-white/50 group backdrop-blur-sm`}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators - Better Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-slate-200/50 mb-16"
          >
            {[
              { icon: Users, number: "8+", label: "Active Members", color: "text-blue-600" },
              { icon: Target, number: "15+", label: "Innovation", color: "text-purple-600" },
              { icon: Award, number: "2+", label: "Expert Mentors", color: "text-emerald-600" },
              { icon: Zap, number: "0", label: "Publications", color: "text-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.1 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>
                <motion.div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-3`} whileHover={{ scale: 1.1 }}>
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Proposition - Better Spacing */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-3xl p-8 md:p-12 border border-slate-200/50 mx-4 mb-20"
          >

          </motion.div> */}
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
