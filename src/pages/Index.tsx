import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate DevOps Engineer specializing in cloud infrastructure,
              automation, and continuous delivery. I help teams build and scale
              robust systems.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/a13554e0-c080-4487-a70a-c4de5193b1d8.png"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover border-4 border-primary/20"
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Learn more about my journey and expertise"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/lovable-uploads/a13554e0-c080-4487-a70a-c4de5193b1d8.png"
            alt="John Doe at work"
            className="rounded-lg shadow-xl"
          />
          <div className="space-y-6">
            <p className="text-lg">
              With over 5 years of experience in DevOps and cloud infrastructure, I've
              helped numerous organizations streamline their development processes
              and build scalable solutions. I'm passionate about automation,
              container orchestration, and building resilient systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Some of my recent work"
        className="bg-muted/50"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Cloud Migration Platform"
            description="Automated cloud migration tool for legacy applications"
            technologies={["AWS", "Terraform", "Python", "Docker"]}
            githubUrl="https://github.com"
            demoUrl="https://demo.com"
          />
          <ProjectCard
            title="K8s Monitoring Suite"
            description="Comprehensive monitoring solution for Kubernetes clusters"
            technologies={["Kubernetes", "Prometheus", "Grafana", "Go"]}
            githubUrl="https://github.com"
          />
          <ProjectCard
            title="CI/CD Pipeline Generator"
            description="Tool for generating optimized CI/CD pipelines"
            technologies={["Jenkins", "GitLab CI", "Bash", "Docker"]}
            githubUrl="https://github.com"
            demoUrl="https://demo.com"
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Expertise"
        subtitle="Technologies I work with"
      >
        <SkillsGrid />
      </Section>

      {/* Blog Section */}
      <Section
        id="blog"
        title="Latest Articles"
        subtitle="Thoughts and guides on DevOps practices"
        className="bg-muted/50"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Kubernetes Best Practices"
            description="A comprehensive guide to Kubernetes security and performance optimization"
            technologies={["Kubernetes", "Security", "Performance"]}
            demoUrl="https://blog.com/kubernetes-best-practices"
          />
          <ProjectCard
            title="Modern CI/CD Pipelines"
            description="Building efficient CI/CD pipelines with GitLab and AWS"
            technologies={["GitLab", "AWS", "CI/CD"]}
            demoUrl="https://blog.com/modern-cicd"
          />
          <ProjectCard
            title="Infrastructure as Code"
            description="Managing cloud infrastructure with Terraform and AWS CDK"
            technologies={["Terraform", "AWS CDK", "IaC"]}
            demoUrl="https://blog.com/infrastructure-as-code"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Let's work together"
      >
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;