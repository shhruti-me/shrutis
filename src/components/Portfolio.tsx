import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

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
  githubUrl: string;
}

const Portfolio = () => {
  const experiences: Experience[] = [
    {
      title: "CEO & Creative Head",
      company: "Vioravisuals",
      period: "2024 - Present",
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
      period: "Oct 2024 - Present",
      description: [
        "Designed the official website UI for DevHouse'25, focusing on innovation and accessibility"
      ]
    },
    {
      title: "Designer",
      company: "Designers Club VITC",
      period: "Jul 2024 - Present",
      description: [
        "Created visuals for social media content and updates"
      ]
    }
  ];

  const projects: Project[] = [
    { id: 1, title: "Project Alpha", description: "Creative web application with modern design", githubUrl: "#" },
    { id: 2, title: "Design System", description: "Comprehensive UI component library", githubUrl: "#" },
    { id: 3, title: "Portfolio Website", description: "Personal portfolio with interactive elements", githubUrl: "#" },
    { id: 4, title: "Mobile App UI", description: "Clean and intuitive mobile interface", githubUrl: "#" },
    { id: 5, title: "Dashboard Design", description: "Data visualization dashboard", githubUrl: "#" },
    { id: 6, title: "E-commerce Platform", description: "Full-stack e-commerce solution", githubUrl: "#" },
    { id: 7, title: "Brand Identity", description: "Complete brand identity system", githubUrl: "#" },
    { id: 8, title: "Web Application", description: "Interactive web application", githubUrl: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Shruti</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 geometric-pattern"></div>
            <div className="relative bg-background p-12 border border-border">
              <h1 className="text-6xl font-bold text-primary mb-4">Shruti</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Creative designer and developer passionate about crafting beautiful, functional digital experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 no-shadow border border-border">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 transform rotate-45"></div>
              <h3 className="text-xl font-semibold mb-2">Creative Vision</h3>
              <p className="text-muted-foreground">Bringing innovative ideas to life through thoughtful design and user-centered approaches</p>
            </Card>
            <Card className="p-6 no-shadow border border-border">
              <div className="w-16 h-16 bg-accent mx-auto mb-4 clip-path-triangle"></div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-muted-foreground">Proficient in modern design tools and development technologies</p>
            </Card>
            <Card className="p-6 no-shadow border border-border">
              <div className="w-16 h-16 bg-secondary mx-auto mb-4 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-muted-foreground">Leading teams and projects while fostering creative collaboration</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-spacing bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 text-left no-shadow border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
                    <p className="text-lg text-accent-foreground">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground bg-secondary px-4 py-2 rounded-none border border-border mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <div className="w-2 h-2 bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      {desc}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 no-shadow border border-border group hover:border-primary transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-accent to-secondary mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full no-shadow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-muted/30">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and creative collaborations. Let's connect!
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              variant="outline" 
              size="lg"
              className="no-shadow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="mailto:shrutiselvakkumar06@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="no-shadow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://www.linkedin.com/in/shrutiselvakkumar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="no-shadow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/shhruti-me" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Shruti. Designed with creativity and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;