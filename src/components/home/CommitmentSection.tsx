import { Video, Code, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const commitments = [
  {
    icon: Video,
    title: "Video Tutorials by Native Signers",
    description: "Learn directly from experienced deaf instructors using clear and expressive sign language.",
  },
  {
    icon: Code,
    title: "Interactive Coding Exercises",
    description: "Practice coding in a supportive environment with immediate feedback and ASL guidance.",
  },
  {
    icon: Eye,
    title: "Comprehensive Visual Explanations",
    description: "Complex concepts are broken down with animations, diagrams, and practical examples.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Our Commitment to Accessible Learning
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <Card 
              key={index} 
              className="text-center card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
