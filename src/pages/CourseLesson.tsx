import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const lessons = [
  { id: 1, title: "Introduction to Python", completed: true },
  { id: 2, title: "Variables and Data Types", completed: true, current: true },
  { id: 3, title: "Operators and Expressions", completed: false },
  { id: 4, title: "Conditional Statements", completed: false },
  { id: 5, title: "Loops and Iteration", completed: false },
  { id: 6, title: "Functions", completed: false },
  { id: 7, title: "Lists and Tuples", completed: false },
  { id: 8, title: "Dictionaries and Sets", completed: false },
  { id: 9, title: "File I/O", completed: false },
  { id: 10, title: "Error Handling", completed: false },
];

const CourseLesson = () => {
  const [currentLesson] = useState(lessons[1]);
  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercent = (completedCount / lessons.length) * 100;

  return (
    <Layout hideFooter>
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border bg-card hidden lg:block overflow-y-auto">
          <div className="p-6">
            <h2 className="font-display font-bold text-lg text-foreground mb-2">
              Introduction to Python
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Course Progress</p>
            <div className="flex gap-2 mb-2">
              <div className="progress-bar flex-1">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              {completedCount} of {lessons.length} lessons completed
            </p>

            <nav className="space-y-1">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to="#"
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                    lesson.current 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  {lesson.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : lesson.current ? (
                    <PlayCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <span className="text-sm">{lesson.id}. {lesson.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 overflow-y-auto">
          {/* Video Section */}
          <div className="flex-1">
            <div className="bg-code rounded-xl overflow-hidden aspect-video mb-4">
              <video
                controls
                className="w-full h-full"
                poster="/videos/variables-tutorial.mp4#t=0.1"
              >
                <source src="/videos/variables-tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Variables and Data Types in Python
            </h1>
            <p className="text-muted-foreground">
              Learn how to declare and use variables in Python, explained through American Sign Language.
            </p>
            
            <div className="mt-6 flex gap-4">
              <Link to="/exercise">
                <Button>Practice with Exercise</Button>
              </Link>
              <Button variant="outline">Next Lesson</Button>
            </div>
          </div>

          {/* Transcript Section */}
          <Card className="w-full lg:w-96 flex-shrink-0">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Transcript
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-h-96 overflow-y-auto">
                <p>
                  <span className="text-primary font-medium">Welcome</span> back to Beyond Sound Academy. Today we're learning about variables and data types in Python.
                </p>
                <p>
                  A variable is like a container that stores data. Think of it like a labeled box where you can put things inside.
                </p>
                <p>
                  In Python, you create a variable by giving it a name and assigning a value using the equals sign. For example: <code className="bg-muted px-1 rounded">name = "Alex"</code>
                </p>
                <p>
                  Python has several data types: strings for text, integers for whole numbers, floats for decimal numbers, and booleans for true/false values.
                </p>
                <p>
                  Let's practice creating some variables together. Follow along with me as I demonstrate each data type.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CourseLesson;
