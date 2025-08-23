"use client"

import { Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8" style={{ backgroundColor: '#BDE1F6' }}>
      <div className="flex justify-center items-center">
        <div className="flex gap-16">
          <a
            href="https://www.linkedin.com/in/qsmarte/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-transform hover:scale-105 hover:bg-blue-100"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8 text-[#0077B5]" />
          </a>
          <a
            href="https://x.com/qsmarte34979"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-transform hover:scale-105 hover:bg-blue-100"
            aria-label="Twitter"
          >
            <Twitter className="h-8 w-8 text-[#1DA1F2]" />
          </a>
          <a
            href="https://www.instagram.com/tech.qsmarte/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-transform hover:scale-105 hover:bg-pink-100"
            aria-label="Instagram"
          >
            <Instagram className="h-8 w-8 text-[#E4405F]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
