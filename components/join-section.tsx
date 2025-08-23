"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, ArrowRight, Users, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Access to cutting-edge research opportunities",
    "Personalized mentorship from industry experts",
    "Collaborative project-based learning",
    "Publication and presentation opportunities",
    "Networking with like-minded peers",
    "Career guidance and academic support",
    "Access to exclusive workshops and seminars",
    "Certificate of completion for programs",
  ]

  const steps = [
    {
      icon: Users,
      title: "Apply Online",
      description: "Submit your application with academic background and interests",
    },
    {
      icon: BookOpen,
      title: "Assessment",
      description: "Complete our skills assessment and interview process",
    },
    {
      icon: Award,
      title: "Start Learning",
      description: "Begin your journey with orientation and project assignment",
    },
  ]

  return (
    <section id="join" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-qsmart-gradient bg-clip-text text-transparent">
            Join Q-SMART-E
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your research journey? Join our community of passionate learners and innovative thinkers.
          </p>
        </motion.div>

        {/* Application Process - Centered */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">How to Join</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-qsmart-gradient rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-qsmart-gradient-light rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Add overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

          <div className="relative z-10">
            <h3
              className="text-3xl font-bold mb-6 text-qsmart-text-primary"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              Ready to Start Your Journey?
            </h3>
            <p
              className="text-xl text-qsmart-text-light mb-8 max-w-2xl mx-auto"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
              Applications are now open for our next cohort. Don't miss this opportunity to be part of an innovative
              learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-qsmart-gradient-dark hover:opacity-90 text-qsmart-text-primary px-8 py-3"
                style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
              >
                Apply June 2026
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-white/20 border-white/30 text-qsmart-text-primary hover:bg-white/30"
                style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
              >
                Download Brochure
              </Button>
            </div>
            <p className="text-sm text-qsmart-text-accent mt-4">
              Application deadline: Rolling admissions for R2 Batch• Next cohort starts: May 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
