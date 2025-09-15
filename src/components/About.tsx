import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Rocket, Users } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
const About = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  };
  const skills = [{
    name: "React",
    level: 90,
    color: "bg-blue-500"
  }, {
    name: "Node.js",
    level: 85,
    color: "bg-green-500"
  }, {
    name: "Python",
    level: 80,
    color: "bg-yellow-500"
  }, {
    name: "AI/ML",
    level: 75,
    color: "bg-purple-500"
  }, {
    name: "TypeScript",
    level: 88,
    color: "bg-blue-600"
  }, {
    name: "MongoDB",
    level: 82,
    color: "bg-green-600"
  }];
  const highlights = [{
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expert in modern web technologies with focus on React, Node.js, and cloud platforms."
  }, {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Building intelligent assistants like Kaira and Jarvis, exploring cutting-edge AI solutions."
  }, {
    icon: Rocket,
    title: "Innovation & Projects",
    description: "Created AcademicShelf and Campus Smart Assistant, delivering real-world impact."
  }, {
    icon: Users,
    title: "Collaboration",
    description: "Strong team player with experience in agile development and project leadership."
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting the future with code and artificial intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{
          once: true
        }} className="space-y-6">
            <div className="relative">
              <motion.img src={profileImage} alt="Mylaram Shashank" className="w-64 h-64 rounded-2xl mx-auto lg:mx-0 object-cover shadow-hover" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-primary rounded-2xl flex items-center justify-center">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{
          once: true
        }} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground font-heading">
                Full-Stack Developer & AI Enthusiast
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>I'm a passionate computer science student from diploma background with a deep fascination for artificial intelligence and modern web development. My journey in tech has been driven by curiosity and a desire to create solutions that make a real difference.</p>
                <p>
                  Currently, I'm focused on building intelligent AI assistants, including 
                  <strong className="text-teal-primary"> Kaira</strong> and 
                  <strong className="text-teal-primary"> Jarvis</strong>, while also developing 
                  full-stack applications that solve real-world problems for students and communities.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or brainstorming the next innovative solution.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Technical Skills</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => <motion.div key={skill.name} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div className={`h-2 rounded-full ${skill.color}`} initial={{
                    width: 0
                  }} whileInView={{
                    width: `${skill.level}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1,
                    delay: index * 0.1
                  }} />
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => <motion.div key={highlight.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
              <Card variant="elevated" className="text-center h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-teal-primary rounded-2xl flex items-center justify-center mx-auto">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground font-heading">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default About;