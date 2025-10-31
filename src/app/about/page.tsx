import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, Target, Zap, GraduationCap, BookOpen, Users, Award, Lightbulb, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Merit Ranker | AI-Powered EdTech Platform",
  description: "Learn more about Merit Ranker, our mission to revolutionize education with AI, and how we help students and teachers achieve excellence.",
}

const features = [
  {
    feature: "AI-Powered Learning",
    description: "Smart algorithms that adapt to each student's pace and learning style",
    traditional: "One-size-fits-all approach",
    meritranker: "Personalized AI tutoring for every student",
    icon: Brain,
  },
  {
    feature: "Interactive Content",
    description: "Engaging multimedia content with videos, diagrams, and quizzes",
    traditional: "Static textbooks and boring lectures",
    meritranker: "Dynamic, interactive learning experiences",
    icon: Zap,
  },
  {
    feature: "Progress Tracking",
    description: "Real-time analytics and progress monitoring",
    traditional: "Limited feedback and delayed results",
    meritranker: "Instant feedback and detailed analytics",
    icon: TrendingUp,
  },
  {
    feature: "Teacher Tools",
    description: "Comprehensive suite of tools for educators",
    traditional: "Manual content creation and grading",
    meritranker: "AI-assisted content creation and auto-grading",
    icon: GraduationCap,
  },
]

const values = [
  {
    title: "Innovation",
    description: "We continuously push the boundaries of educational technology to create better learning experiences.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product development to customer service.",
    icon: Award,
  },
  {
    title: "Accessibility",
    description: "We believe quality education should be accessible to everyone, everywhere.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Revolutionizing Education
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                About Merit Ranker
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Empowering educators and students with AI-powered learning technology 
                that personalizes education for every learner.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Target className="h-10 w-10 text-primary mr-4" />
                      <h2 className="text-3xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To revolutionize education by providing innovative, AI-powered learning solutions 
                      that make quality education accessible, engaging, and effective for students and 
                      teachers worldwide.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <BookOpen className="h-10 w-10 text-cyan-400" />
                      <h2 className="text-3xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To create a world where every learner has access to personalized, 
                      high-quality education that adapts to their unique needs and helps 
                      them achieve their full potential.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Why Merit Ranker?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how we're transforming traditional education with modern technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="flex flex-col items-center text-center md:text-left md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                          <item.icon className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="text-xl font-semibold">{item.feature}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-lg">
                          <p className="text-muted-foreground">{item.traditional}</p>
                        </div>
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <p className="text-primary font-medium">{item.meritranker}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/10 hover:border-primary/20 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of educators and students who are already experiencing 
                the future of learning with Merit Ranker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
