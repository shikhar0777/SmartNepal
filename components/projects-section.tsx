"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Research GPT Model",
      description:
        "A GPT-based language model designed for academic research, capable of analyzing scientific literature, generating research summaries, and assisting with hypothesis generation across multiple disciplines.",
      category: "AI/ML",
      status: "In Progress",
      team: 4,
      duration: "6 months",
      technologies: ["Python", "TensorFlow", "Satellite Data", "Climate Science"],
      image: "/coauthor-qsmarte.jpeg?height=200&width=300",
    },
    {
      title: "Find Co-Author",
      description: "An AI-powered tool that matches researchers with potential co-authors based on shared interests, expertise, and publication history.",
      category: "Quantum Computing",
      status: "In Progress",
      team: 3,
      duration: "8 months",
      technologies: ["Qiskit", "Python", "Cryptography", "Quantum Mechanics"],
      image: "/gpt-qsmarte.jpeg?height=200&width=300",
    },
    {
      title: "Economic Impact Analysis Tool",
      description: "A comprehensive tool for analyzing the economic impact of policy changes using big data analytics.",
      category: "Economics",
      status: "In Progress",
      team: 5,
      duration: "4 months",
      technologies: ["R", "Python", "Data Visualization", "Statistical Analysis"],
      image: "/Economic-qsmarte.jpeg?height=200&width=300",
    },
    {
      title: "Blockchain-Based Voting System",
      description: "A secure, transparent voting system built on blockchain technology for democratic processes.",
      category: "Emerging Tech",
      status: "In Progress",
      team: 6,
      duration: "10 months",
      technologies: ["Solidity", "Web3", "React", "Blockchain"],
      image: "/blockchain-qsmarte.jpeg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-qsmart-gradient bg-clip-text text-transparent">
            Student Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative projects our students are working on, from AI and quantum computing to economics and
            emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-qsmart-deep-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.team} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="bg-qsmart-gradient hover:opacity-90 text-white px-8 py-3">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
