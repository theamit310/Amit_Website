import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <Section
        id="blog"
        title="Latest Articles"
        subtitle="Thoughts and guides on DevOps practices"
        className="pt-32 md:pt-40"
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

      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;