"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ExternalLink, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    {
      title: "Machine Learning Approaches to Climate Change Prediction: A Comprehensive Analysis",
      authors: ["Sarah Johnson", "Michael Chen", "Dr. Emily Watson"],
      journal: "Journal of Environmental Data Science",
      date: "December 2024",
      category: "AI/ML",
      abstract:
        "This paper presents novel machine learning approaches for predicting climate change patterns using satellite data and historical weather information...",
      status: "Under Review",
      citations: 12,
    },
    {
      title: "Quantum Key Distribution Protocols: Security Analysis and Implementation",
      authors: ["Alex Rodriguez", "Lisa Park", "Prof. Michael Rodriguez"],
      journal: "Quantum Information Processing",
      date: "November 2024",
      category: "Quantum Computing",
      abstract:
        "We analyze the security implications of various quantum key distribution protocols and present a practical implementation framework...",
      status: "In Preparation",
      citations: 8,
    },
    {
      title: "Economic Impact Assessment of Digital Transformation in Developing Countries",
      authors: ["David Kim", "Maria Santos", "Dr. James Wilson"],
      journal: "International Economics Review",
      date: "October 2024",
      category: "Economics",
      abstract:
        "This study examines the economic implications of digital transformation initiatives in developing countries using comprehensive data analysis...",
      status: "In Preparation",
      citations: 0,
    },
    {
      title: "Blockchain-Based Voting Systems: A Security and Privacy Analysis",
      authors: ["Jennifer Lee", "Robert Taylor", "Dr. Sarah Chen"],
      journal: "IEEE Transactions on Information Security",
      date: "September 2024",
      category: "Emerging Tech",
      abstract:
        "We present a comprehensive analysis of blockchain-based voting systems, focusing on security vulnerabilities and privacy concerns...",
      status: "In Preparation",
      citations: 0,
    },
  ]

  const blogPosts = [
    {
      title: "Getting Started with Quantum Computing: A Beginner's Guide",
      author: "Q-SMART-E Team",
      date: "January 2025",
      category: "Tutorial",
      readTime: "8 min read",
    },
    {
      title: "The Future of AI in Climate Science",
      author: "Sarah Johnson",
      date: "December 2024",
      category: "Research Insights",
      readTime: "12 min read",
    },
    {
      title: "Building Your First Machine Learning Model",
      author: "Michael Chen",
      date: "December 2024",
      category: "Tutorial",
      readTime: "15 min read",
    },
  ]

  return (
    <section id="publications" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-qsmart-gradient bg-clip-text text-transparent">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the research papers, publications, and insights from our student researchers and mentors.
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-8"
          >
            Recent Publications
          </motion.h3>

          <div className="space-y-6">
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              paper.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : paper.status === "Under Review"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {paper.status}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {paper.category}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 hover:text-qsmart-deep-blue transition-colors duration-300">
                          {paper.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{paper.authors.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{paper.date}</span>
                          </div>
                          {paper.citations > 0 && (
                            <div className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              <span>{paper.citations} citations</span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{paper.abstract}</p>
                        <p className="text-sm font-medium text-qsmart-deep-blue mb-4">{paper.journal}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Paper
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Journal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            Latest Blog Posts
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-qsmart-light-blue/20 text-qsmart-deep-blue rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-qsmart-deep-blue transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold mb-6">Publish Your Research</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to share your research with the world? We provide guidance and support for students looking to publish
            their work in peer-reviewed journals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="/research-guide.pdf" download>
  <Button
    size="lg"
    className="bg-qsmart-gradient hover:opacity-90 text-qsmart-text-primary px-8 py-3"
    style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
  >
    Publication Guidelines
  </Button>
</a>
            {/* <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              View All Publications
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
