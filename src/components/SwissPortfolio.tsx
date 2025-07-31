import { Github, Linkedin, Mail, Figma, Menu, X } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
}

interface DesignProject {
  id: number;
  title: string;
  description: string;
  figmaUrl: string;
}

const SwissPortfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const experiences: Experience[] = [
    {
      title: "CEO & Creative Head",
      company: "Vioravisuals",
      period: "May 2025 - Present",
      description: ["Leading creative direction and strategic vision for a creative agency", "Overseeing innovative design solutions and client relationships"]
    },
    {
      title: "Summer Research Intern",
      company: "VIT Chennai",
      period: "June 2025 - Present",
      description: [
        "Fine-tuned a language model to generate feedback for descriptive answers in CS exams",
        "Curated and labelled datasets from student responses to improve training quality",
        "Collaborated on optimizing model output and educational value"
      ]
    },
    {
      title: "UI/UX & Design Lead",
      company: "IEEE Computer Society",
      period: "Aug 2024 - Present", 
      description: [
        "Leading the UI/UX and Design Team for the academic year 2025",
        "Led UI design for Hackhub'25 and Bitwars 2.0 event platform",
        "Created promotional visuals for BitWars 2.0 and Builders Hut to enhance outreach"
      ]
    },
    {
      title: "UX Designer",
      company: "Google Developer Group (GDG)",
      period: "Oct 2024 - July 2025",
      description: [
        "Designed the official website UI for DevHouse'25, focusing on innovation and accessibility"
      ]
    },
    {
      title: "Designer",
      company: "Designers Club VITC",
      period: "Jul 2024 - July 2025",
      description: [
        "Created visuals for social media content and updates"
      ]
    }
  ];

  const projects: Project[] = [
    { 
      id: 1, 
      title: "Blockchain Content Authenticator", 
      description: "Blockchain-based system for verifying digital content origin, authorship, and AI-driven tampering.", 
      stack: ["Solidity", "IPFS", "Node.js", "React", "OpenAI API", "DeepAI/ImageHash", "Web3.js", "Python", "PostgreSQL"],
      githubUrl: "#" 
    },
    { 
      id: 2, 
      title: "Tata Autopilot Mechanic", 
      description: "AI-powered AR assistant for DIY EV repair using computer vision and GPT-4 walkthroughs.", 
      stack: ["Python", "React Native", "GPT-4", "YOLOv8", "ARCore", "Firebase"],
      githubUrl: "#" 
    },
    { 
      id: 3, 
      title: "DressFit", 
      description: "Virtual try-on platform with 3D avatars, customizable clothing, and real-time AR-based draping.", 
      stack: ["ReactJS", "Flask", "Ready Player Me API", "Blender", "WebGL", "AR"],
      githubUrl: "#" 
    },
    { 
      id: 4, 
      title: "NutriMate", 
      description: "AI-based food tracker that analyzes meals via image recognition and gives nutrition insights.", 
      stack: ["Flutter", "Flask", "TensorFlow", "Firebase", "REST APIs"],
      githubUrl: "#" 
    },
    { 
      id: 5, 
      title: "AI Feedback Generator", 
      description: "Fine-tuned an LLM to generate academic feedback by curating and annotating educational datasets.", 
      stack: ["Python", "NLP", "AI/ML", "Dataset Curation"],
      githubUrl: "#" 
    },
    { 
      id: 6, 
      title: "Budget Buddy", 
      description: "Personal finance web app with live expense tracking, analytics, and JWT-secured login.", 
      stack: ["ReactJS", "Flask", "MongoDB", "Chart.js", "JWT"],
      githubUrl: "#" 
    },
    { 
      id: 7, 
      title: "Secure File Encryption System", 
      description: "Local FTP server with encrypted file handling and key-based secure downloads.", 
      stack: ["Python", "Flask", "Cryptography"],
      githubUrl: "#" 
    },
    { 
      id: 8, 
      title: "Viora Visual", 
      description: "Designed and built UI for a SaaS landing page with responsive web components.", 
      stack: ["HTML", "CSS", "JS", "Figma"],
      githubUrl: "#" 
    }
  ];

  const designProjects: DesignProject[] = [
    { id: 1, title: "Brand Identity System", description: "Complete visual identity design for modern startup", figmaUrl: "#" },
    { id: 2, title: "Mobile App Interface", description: "Clean and intuitive design for productivity app", figmaUrl: "#" },
    { id: 3, title: "Web Dashboard UI", description: "Data visualization and analytics interface", figmaUrl: "#" },
    { id: 4, title: "E-commerce Platform", description: "User-centered shopping experience design", figmaUrl: "#" },
    { id: 5, title: "Event Website Design", description: "Modern event landing page with registration flow", figmaUrl: "#" },
    { id: 6, title: "SaaS Product Interface", description: "Comprehensive design system for B2B platform", figmaUrl: "#" }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navigation - Responsive */}
      <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wider uppercase">
              <a href="#about" className="hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-all">About</a>
              <a href="#experience" className="hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-all">Experience</a>
              <a href="#projects" className="hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-all">Projects</a>
              <a href="#design-projects" className="hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-all">Design</a>
              <a href="#contact" className="hover:bg-primary hover:text-primary-foreground px-3 py-1 transition-all">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4 text-sm font-medium tracking-wider uppercase">
                <a 
                  href="#about" 
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#design-projects" 
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Design
                </a>
                <a 
                  href="#contact" 
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Responsive Swiss Layout */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="text-5xl md:text-8xl font-bold swiss-title leading-none tracking-tighter mb-4">
              SHRUTI
            </h1>
            <div className="swiss-line mb-6"></div>
            <p className="text-base md:text-lg swiss-body max-w-2xl leading-relaxed">
              Designer and developer creating functional digital experiences through systematic design approaches
            </p>
          </div>
          <div className="md:col-span-4 text-left md:text-right mt-6 md:mt-0">
            <div className="swiss-emphasis inline-block text-sm tracking-wider">
              PORTFOLIO / 2025
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Responsive Grid */}
      <section id="about" className="swiss-section px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-3xl font-bold swiss-title tracking-wide mb-8">ABOUT</h2>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg md:text-xl swiss-subtitle mb-4 tracking-wide">01 / VISION</h3>
                <p className="swiss-body text-muted-foreground leading-relaxed">
                  Bringing innovative ideas to life through systematic design and user-centered methodologies
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl swiss-subtitle mb-4 tracking-wide">02 / SKILLS</h3>
                <p className="swiss-body text-muted-foreground leading-relaxed">
                  Proficient in modern design tools and development technologies with focus on functionality
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl swiss-subtitle mb-4 tracking-wide">03 / LEADERSHIP</h3>
                <p className="swiss-body text-muted-foreground leading-relaxed">
                  Leading teams and projects while maintaining systematic approaches to creative collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="swiss-line mx-4 md:mx-8"></div>

      {/* Experience Section - Responsive */}
      <section id="experience" className="swiss-section px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-3xl font-bold swiss-title tracking-wide mb-8">EXPERIENCE</h2>
          </div>
          <div className="md:col-span-9 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="swiss-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl md:text-2xl swiss-subtitle mb-2 tracking-wide">{exp.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground swiss-body">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="swiss-emphasis text-sm tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="swiss-body text-muted-foreground leading-relaxed flex">
                      <span className="w-8 flex-shrink-0 text-primary font-medium">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="swiss-line mx-4 md:mx-8"></div>

      {/* Projects Section - Responsive Grid */}
      <section id="projects" className="swiss-section px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-3xl font-bold swiss-title tracking-wide mb-8">PROJECTS</h2>
            <p className="swiss-body text-muted-foreground leading-relaxed">
              A collection of functional design solutions and development projects
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="swiss-card group">
                  <div className="flex justify-between items-start mb-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <h3 className="text-lg md:text-xl swiss-subtitle tracking-wide cursor-help">{project.title}</h3>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <div className="p-2">
                          <p className="text-xs font-semibold mb-2 tracking-wider">TECH STACK</p>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.map((tech, i) => (
                              <span key={i} className="text-xs bg-muted px-2 py-1 rounded-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-sm text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="swiss-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <button 
                    className="swiss-button w-full text-sm tracking-wider"
                    onClick={() => index < 2 ? {} : window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    {index < 2 ? 'ON PROGRESS' : 'VIEW ON GITHUB'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="swiss-line mx-4 md:mx-8"></div>

      {/* Design Projects Section - Responsive Grid */}
      <section id="design-projects" className="swiss-section px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-3xl font-bold swiss-title tracking-wide mb-8">DESIGN PROJECTS</h2>
            <p className="swiss-body text-muted-foreground leading-relaxed">
              Visual design solutions and interface concepts crafted with precision
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designProjects.map((project, index) => (
                <div key={project.id} className="swiss-card group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg md:text-xl swiss-subtitle tracking-wide">{project.title}</h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="swiss-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <button 
                    className="swiss-button w-full text-sm tracking-wider"
                    onClick={() => window.open(project.figmaUrl, '_blank')}
                  >
                    <Figma className="w-4 h-4 inline mr-2" />
                    VIEW THE DESIGN
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="swiss-line mx-4 md:mx-8"></div>

      {/* Contact Section - Responsive */}
      <section id="contact" className="swiss-section px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-3xl font-bold swiss-title tracking-wide mb-8">CONTACT</h2>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="swiss-body text-muted-foreground mb-8 leading-relaxed">
                  Available for creative collaborations and design opportunities. 
                  Contact for project inquiries and professional discussions.
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="mailto:shrutiselvakkumar06@gmail.com"
                  className="swiss-button block text-center"
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  EMAIL
                </a>
                <a 
                  href="https://www.linkedin.com/in/shrutiselvakkumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button block text-center"
                >
                  <Linkedin className="w-4 h-4 inline mr-2" />
                  LINKEDIN
                </a>
                <a 
                  href="https://github.com/shhruti-me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-button block text-center"
                >
                  <Github className="w-4 h-4 inline mr-2" />
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Swiss Minimal */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground tracking-wider">
              © 2025 SHRUTI
            </p>
            <p className="text-sm text-muted-foreground tracking-wider">
              DESIGNED WITH SYSTEMATIC PRECISION
            </p>
          </div>
        </div>
      </footer>
      </div>
    </TooltipProvider>
  );
};

export default SwissPortfolio;