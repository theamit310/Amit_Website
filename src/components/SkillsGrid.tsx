import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "DevOps Tools",
    skills: [
      { name: "Docker", proficiency: 90 },
      { name: "Kubernetes", proficiency: 85 },
      { name: "Terraform", proficiency: 80 },
      { name: "Ansible", proficiency: 75 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "Bash", proficiency: 80 },
      { name: "JavaScript", proficiency: 75 },
      { name: "Go", proficiency: 60 },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", proficiency: 90 },
      { name: "Azure", proficiency: 85 },
      { name: "GCP", proficiency: 75 },
    ],
  },
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category) => (
        <Card key={category.title}>
          <CardHeader>
            <CardTitle className="text-xl">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsGrid;