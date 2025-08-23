"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MentorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // State for which mentor’s bio is showing
  const [selectedMentor, setSelectedMentor] = useState<{
    name: string
    bio: string
  } | null>(null)

  const mentors = [
    {
      name: "Mr. Shikhar Pandey7",
      title: "Founder",
      organization: "West Virginia State University",
      expertise: ["Researcher", "Innovator", "Leadership", "Technologist"],
      image: "/shikhar-qmartee.jpeg?height=200&width=200",
      bio: "Shikhar Pandey is the founder and CEO of Q-SMART-E, connecting students with advanced research in CS and IT. He studies computer science with minors in mathematics and economics at West Virginia State University, where he is a Dean’s Honor Student. He works as a research assistant, tutors C programming, and is part of the Yellow H@ckets hackathon team. He has interned as a software engineer and served as the technical lead for the NACDEP 2025 Conference. His research has been presented at events including URDC, NACDEP, and to the West Virginia State Board of Governors."
    },
    {
      name: "Mr. Ashok Gaire",
      title: "Co-Founder",
      organization: "Incoming Freshman",
      expertise: ["Web Developer", "Researcher", "Learner"],
      image: "/ashok-qsmarte.jpg?height=200&width=200",
      bio: "Ashok is the Co-Founder and Technical Lead at Q-SMART-E. He is a national-level quiz competitor and has built numerous projects, including an e-learning platform and an R1-based chat model. Currently, he is focusing on research and preparing to join as a freshman in Fall 2026. Ashok is passionate about using AI to enhance student engagement through content recommendation and filtering systems. He enjoys solving complex problems and driving innovation in education technology."
    },
    {
      name: "Mr. Rabin K. Kalikote",
      title: "Mentor",
      organization: "College of Idaho",
      expertise: ["Software Engineering", "Content Creation", "Leadership"],
      image: "/rabin-Qsmartee.svg?height=200&width=200",
      bio: "Rabin is the Founder and CEO of Ask Mattrab. He is a software engineer and honors student who loves solving problems with a clear purpose. He built a popular learning app used by over 60,000 students every month. Rabin also runs a YouTube channel teaching web development and hosts the podcast ICT Waves. He is a published poet and has created websites for more than 10 companies. With 6 years of experience in Ruby on Rails, he enjoys building web apps and solving algorithm challenges."
    },
    {
      name: "Bimarsh Pandey",
      title: "Chief Operating Officer",
      organization: "Incoming Freshman",
      expertise: ["Graphic Designer", "Web Developer", "Tech Geek"],
      image: "/bim-qsmarte.svg?height=200&width=200",
      bio: "Bimarsh is the Chief Operating Officer at Q-SMART-E. He interned at an ISP in Nepal, where he developed a web-based customer management portal. Additionally, he created a library management system used daily by nearly 3,000 people. He has worked on many projects and is currently focused on researching AI-based personalized learning for programming. He will begin his freshman year in Fall 2026."
    }
  ]

  const membersList = [
    {
      name: "Ashok Gaire",
      image: "/ashok-qsmarte.jpg",
      description: "Head of Coding"
    },
    {
      name: "Bimarsh Pandey",
      image: "/bim-qsmarte.svg",
      description: "Programmer and Graphic Designer."
    },
    {
      name: "Aashutosh Bista",
      image: "/aasu-qsmarte.svg",
      description: "Team Manager and Content Handler."
    },
    {
      name: "Abhishes Bashyal",
      image: "/abshishes-qsmarte.svg",
      description: "Blog Writer and Programmer."
    },
    {
      name: "Saroj Kandel",
      image: "/saroj-qsmarte.jpg",
      description: "Blog Writer and Designer."
    },
    {
      name: "Nishan Sharma",
      image: "/nishan-qsmarte.jpg",
      description: "Blog Writer and Designer."
    },
    {
      name: "Soroup Pokhrel",
      image: "/soro-qsmarte.svg",
      description: "Media Handler and Designer."
    },
    {
      name: "Byanjana Subedi",
      image: "/byanjana-qsmarte.svg",
      description: "Media Handler and Designer."
    }
  ]

  const membersScrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = 256 // px, matches w-64

  return (
    <section id="mentors" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-qsmart-gradient bg-clip-text text-transparent">
            Our Mentors & Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from world-class researchers, industry leaders, and academic experts who are passionate about guiding
            the next generation of innovators.
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="cursor-pointer"
              onClick={() =>
                setSelectedMentor({ name: mentor.name, bio: mentor.bio })
              }
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.05 }}>
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-qsmart-deep-blue transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="text-qsmart-deep-blue font-medium mb-1">{mentor.title}</p>
                  <p className="text-gray-500 text-sm mb-4">{mentor.organization}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {mentor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-qsmart-light-blue/20 text-qsmart-deep-blue rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center gap-3">
                    <motion.button
                      className="p-2 text-gray-400 hover:text-qsmart-deep-blue transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 text-gray-400 hover:text-qsmart-deep-blue transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 text-gray-400 hover:text-qsmart-deep-blue transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="h-4 w-4" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Current Members Section */}
        <div className="mb-12 mt-32">
          <h3
            className="text-4xl md:text-5xl font-bold mb-8 bg-qsmart-gradient bg-clip-text text-transparent text-center"
            style={{ display: "block" }}
          >
            Our Team
          </h3>
          <div className="relative">
            <button
              type="button"
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full shadow p-2 hover:bg-blue-100 transition disabled:opacity-40"
              onClick={() => {
                membersScrollRef.current?.scrollBy({
                  left: -cardWidth * 4 - 24 * 4,
                  behavior: "smooth"
                })
              }}
              style={{ display: "flex" }}
            >
              <ChevronLeft className="h-6 w-6 text-blue-700" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-blue-200 rounded-full shadow p-2 hover:bg-blue-100 transition disabled:opacity-40"
              onClick={() => {
                membersScrollRef.current?.scrollBy({
                  left: cardWidth * 4 + 24 * 4,
                  behavior: "smooth"
                })
              }}
              style={{ display: "flex" }}
            >
              <ChevronRight className="h-6 w-6 text-blue-700" />
            </button>
            <div
              ref={membersScrollRef}
              className="overflow-x-auto scrollbar-none px-12"
              style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              <div className="flex gap-6 min-w-[600px] pb-4">
                {membersList.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-64 bg-white border border-blue-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 group relative"
                    style={{ minWidth: cardWidth, maxWidth: cardWidth }}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-300 bg-gradient-to-br from-blue-100 to-blue-200 shadow group-hover:scale-105 transition-transform duration-300">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                      {member.name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">{member.description}</p>
                    <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold shadow group-hover:bg-blue-200 transition">
                      Member
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BIO MODAL */}
        {selectedMentor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedMentor(null)}
          >
            <div
              className="bg-white rounded-lg p-6 max-w-sm w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl leading-none"
                onClick={() => setSelectedMentor(null)}
              >
                &times;
              </button>
              <h3 className="text-xl font-semibold mb-4">{selectedMentor.name}</h3>
              <p className="text-gray-700">{selectedMentor.bio}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}