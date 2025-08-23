"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-qsmart-dark-blue via-qsmart-medium-blue to-qsmart-sky-blue bg-clip-text text-transparent">
            About Q-SMART-E
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Q-SMART-E is an innovative educational platform designed to bridge the gap between student 
            and advanced research. We provide students with the tools, mentorship, and community they need to excel in
            cutting-edge fields.
          </p>
        </motion.div>
        

        <div className="grid md:grid-cols-3 gap-8 mb-16">
{[
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower student with practical research experience and project development skills in emerging technologies, fostering innovation and academic excellence.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a global community of young researchers and innovators who will shape the future through collaborative learning and groundbreaking discoveries.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in learning where collaboration, mentorship, and continuous learning drive personal and collective growth.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
].map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className={`bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-white/50 group backdrop-blur-sm text-center`}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <motion.div
      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
    >
      <item.icon className="h-8 w-8 text-white" />
    </motion.div>
    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
      {item.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{item.description}</p>
  </motion.div>
))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-gradient-to-br from-qsmart-light-blue/20 to-qsmart-sky-blue/20 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Add animated background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-qsmart-medium-blue/10 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-qsmart-sky-blue/15 rounded-full blur-xl animate-float"></div>

          <h3 className="text-3xl font-bold mb-6 text-center relative z-10">What we have </h3>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-qsmart-dark-blue">Comprehensive Learning</h4>
              <p className="text-gray-600 mb-6">
                We don't just teach theory – we provide hands-on experience in research methodology, project
                development, and real-world application of cutting-edge technologies.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-qsmart-medium-blue">Expert Mentorship</h4>
              <p className="text-gray-600">
                Our network of experienced researchers, industry professionals, and academic experts provides
                personalized guidance to help students achieve their goals.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-qsmart-dark-blue">Collaborative Environment</h4>
              <p className="text-gray-600 mb-6">
                Students work together on projects, share knowledge, and build lasting connections in a supportive,
                family-like community atmosphere.
                
              </p>
              <h4 className="text-xl font-semibold mb-4 text-qsmart-medium-blue">Publication Opportunities</h4>
              <p className="text-gray-600">
                We guide students through the process of writing and publishing research papers, helping them build
                their academic portfolios early in their careers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
