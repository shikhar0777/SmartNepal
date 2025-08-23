"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useMemo } from "react"
import { Brain, Atom, TrendingUp, Zap, Sparkles, ArrowRight } from "lucide-react"

export function FocusAreasSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const dotGridBackground = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`

  const focusAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Explore the frontiers of AI and ML through hands-on projects, from neural networks to natural language processing and computer vision.",
      color: "from-purple-500 via-pink-500 to-red-500",
      bgColor: "from-purple-50 to-pink-50",
      shadowColor: "shadow-purple-200",
      glowColor: "shadow-purple-400/50",
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description:
        "Dive into the quantum realm and learn about quantum algorithms, quantum cryptography, and the future of computing.",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-50 to-cyan-50",
      shadowColor: "shadow-blue-200",
      glowColor: "shadow-blue-400/50",
    },
    {
      icon: TrendingUp,
      title: "Economics & Data Science",
      description:
        "Analyze economic trends, market behaviors, and financial systems using advanced statistical methods and data analysis.",
      color: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "from-green-50 to-emerald-50",
      shadowColor: "shadow-green-200",
      glowColor: "shadow-green-400/50",
    },
    {
      icon: Zap,
      title: "Emerging Technologies",
      description:
        "Stay ahead of the curve with research in blockchain, IoT, renewable energy, biotechnology, and other cutting-edge fields.",
      color: "from-orange-500 via-yellow-500 to-amber-500",
      bgColor: "from-orange-50 to-yellow-50",
      shadowColor: "shadow-orange-200",
      glowColor: "shadow-orange-400/50",
    },
  ]

  const floatingElements = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    })), []
  )

  return (
    <section
      id="focus-areas"
      ref={ref}
      aria-label="Focus Areas Section"
      role="region"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-sm"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative Grid Pattern (Fixed) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url('${dotGridBackground}')` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive learning and research opportunities in the most exciting and rapidly evolving
            fields of technology and science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${area.bgColor} rounded-3xl p-8 shadow-xl ${area.shadowColor} hover:${area.glowColor} transition-all duration-500 group cursor-pointer border border-white/50 backdrop-blur-sm relative overflow-hidden`}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl mb-6 shadow-lg relative`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <area.icon className="h-10 w-10 text-white" />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {area.description}
              </p>

              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {/* <span>Learn More</span> */}
                {/* <ArrowRight className="h-4 w-4" /> */}
              </motion.div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{
                    rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                  }}
                >
                  <Sparkles className="h-6 w-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  )
}
