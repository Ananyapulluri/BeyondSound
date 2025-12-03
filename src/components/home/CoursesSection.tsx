import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Master the fundamentals of Python programming, from variables to algorithms.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    tags: ["Beginner", "Python", "ASL"],
    slug: "python-intro",
  },
  {
    id: 2,
    title: "Web Development Essentials",
    description: "Build your first websites with HTML, CSS, and JavaScript, explained visually and enhanced with visual examples.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    tags: ["Frontend", "HTML", "CSS"],
    slug: "web-dev",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Explore core data structures and algorithms, enhanced with visual explanations.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop",
    tags: ["Intermediate", "Algorithms", "Data"],
    slug: "data-structures",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Our Most Popular Courses
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="card-hover overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/courses/${course.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Course
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
