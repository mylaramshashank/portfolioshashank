import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, BookOpen, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AcademicShelf",
      description: "A comprehensive student academic hub designed to streamline educational resources and enhance learning experiences.",
      longDescription: "Built with React and Node.js, this platform provides students with organized access to study materials, assignment tracking, and collaborative tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      icon: BookOpen,
      featured: true
    },
    {
      id: 3,
      title: "AI Assistant - Kaira",
      description: "Advanced AI assistant with natural language processing capabilities and personalized user interactions.",
      longDescription: "Sophisticated AI system built with modern machine learning techniques, offering contextual conversations and task automation.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Brain,
      featured: true
    },
    {
      id: 4,
      title: "Mobile Learning App",
      description: "Cross-platform mobile application for enhanced learning experiences with offline capabilities.",
      longDescription: "React Native app designed for seamless learning on mobile devices with features like offline content and progress tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "SQLite", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone,
      featured: false
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-hover">
                  <div className="aspect-video bg-gradient-to-br from-teal-primary to-navy-deep flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-white opacity-80" />
                  </div>
                  <div className="absolute inset-0 bg-navy-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="glass" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="teal" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground font-heading">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="teal" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-foreground text-center font-heading">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="project" className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-navy-light to-teal-primary flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
