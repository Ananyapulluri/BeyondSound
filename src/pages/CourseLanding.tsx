import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const allCourses = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Master the fundamentals of Python programming, from variables to algorithms. Perfect for complete beginners.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    tags: ["Beginner", "Python", "ASL"],
    slug: "python-intro",
    lessons: 10,
    duration: "8 hours",
  },
  {
    id: 2,
    title: "Web Development Essentials",
    description: "Build your first websites with HTML, CSS, and JavaScript, explained visually.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    tags: ["Frontend", "HTML", "CSS"],
    slug: "web-dev",
    lessons: 12,
    duration: "10 hours",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Explore core data structures and algorithms with visual explanations.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop",
    tags: ["Intermediate", "Algorithms", "Data"],
    slug: "data-structures",
    lessons: 15,
    duration: "12 hours",
  },
];

const CourseLanding = () => {
  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Courses
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Learn programming through accessible ASL video tutorials. All courses include interactive exercises and visual explanations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <Card key={course.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{course.lessons} lessons</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/courses/${course.slug}`} className="w-full">
                    <Button className="w-full">Start Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseLanding;
