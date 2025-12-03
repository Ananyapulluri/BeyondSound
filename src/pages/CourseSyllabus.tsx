import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Circle, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const lessons = [
  { id: 1, title: "Introduction to Python", completed: true },
  { id: 2, title: "Variables and Data Types", completed: false, current: true },
  { id: 3, title: "Operators and Expressions", completed: false },
  { id: 4, title: "Conditional Statements", completed: false },
  { id: 5, title: "Loops and Iteration", completed: false },
  { id: 6, title: "Functions", completed: false },
  { id: 7, title: "Lists and Tuples", completed: false },
  { id: 8, title: "Dictionaries and Sets", completed: false },
  { id: 9, title: "File I/O", completed: false },
  { id: 10, title: "Error Handling", completed: false },
];

const CourseSyllabus = () => {
  const { slug } = useParams();
  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercent = (completedCount / lessons.length) * 100;

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Introduction to Python
        </h1>
        
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Course Progress</span>
            <span className="text-primary font-semibold">{Math.round(progressPercent)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/courses/${slug}/${lesson.id}`}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
                lesson.current 
                  ? "bg-primary/10 border border-primary/30" 
                  : "bg-card hover:bg-muted/50 border border-transparent"
              )}
            >
              {lesson.completed ? (
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              ) : lesson.current ? (
                <Play className="w-6 h-6 text-primary flex-shrink-0 fill-primary" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              )}
              <span className={cn(
                "text-base font-medium",
                lesson.current ? "text-primary" : "text-foreground"
              )}>
                {lesson.id}. {lesson.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CourseSyllabus;
