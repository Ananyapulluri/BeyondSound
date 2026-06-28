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
  { id: 6, title: "Functions", completed: false },import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Circle, Play, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const courseData: Record<string, {
  title: string;
  description: string;
  lessons: { id: number; title: string; duration: string; completed?: boolean; current?: boolean }[];
}> = {
  "python-intro": {
    title: "Introduction to Python",
    description: "Master the fundamentals of Python programming from variables to algorithms.",
    lessons: [
      { id: 1, title: "Welcome to Python", duration: "5 min", completed: true },
      { id: 2, title: "Variables and Data Types", duration: "12 min", completed: false, current: true },
      { id: 3, title: "Operators and Expressions", duration: "10 min" },
      { id: 4, title: "Conditional Statements", duration: "14 min" },
      { id: 5, title: "Loops and Iteration", duration: "16 min" },
      { id: 6, title: "Functions", duration: "18 min" },
      { id: 7, title: "Lists and Tuples", duration: "15 min" },
      { id: 8, title: "Dictionaries and Sets", duration: "13 min" },
      { id: 9, title: "File I/O", duration: "11 min" },
      { id: 10, title: "Error Handling", duration: "12 min" },
    ],
  },
  "web-dev": {
    title: "Web Development Essentials",
    description: "Build your first websites with HTML, CSS, and JavaScript.",
    lessons: [
      { id: 1, title: "Introduction to HTML", duration: "8 min", completed: true },
      { id: 2, title: "HTML Structure & Tags", duration: "12 min", completed: false, current: true },
      { id: 3, title: "CSS Basics & Selectors", duration: "14 min" },
      { id: 4, title: "CSS Box Model & Layout", duration: "16 min" },
      { id: 5, title: "Flexbox & Grid", duration: "18 min" },
      { id: 6, title: "Responsive Design", duration: "15 min" },
      { id: 7, title: "Introduction to JavaScript", duration: "12 min" },
      { id: 8, title: "DOM Manipulation", duration: "16 min" },
      { id: 9, title: "Events & Interaction", duration: "14 min" },
      { id: 10, title: "Forms & Validation", duration: "13 min" },
      { id: 11, title: "Fetch API & JSON", duration: "15 min" },
      { id: 12, title: "Build Your First Website", duration: "20 min" },
    ],
  },
  "data-structures": {
    title: "Data Structures & Algorithms",
    description: "Explore core data structures and algorithms with visual explanations.",
    lessons: [
      { id: 1, title: "Introduction to DSA", duration: "10 min", completed: true },
      { id: 2, title: "Arrays & Time Complexity", duration: "14 min", completed: false, current: true },
      { id: 3, title: "Linked Lists", duration: "16 min" },
      { id: 4, title: "Stacks & Queues", duration: "14 min" },
      { id: 5, title: "Hash Tables", duration: "15 min" },
      { id: 6, title: "Trees & Binary Trees", duration: "18 min" },
      { id: 7, title: "Binary Search Trees", duration: "16 min" },
      { id: 8, title: "Graphs & BFS/DFS", duration: "20 min" },
      { id: 9, title: "Sorting Algorithms", duration: "18 min" },
      { id: 10, title: "Searching Algorithms", duration: "14 min" },
      { id: 11, title: "Dynamic Programming", duration: "22 min" },
      { id: 12, title: "Greedy Algorithms", duration: "16 min" },
      { id: 13, title: "Recursion Deep Dive", duration: "18 min" },
      { id: 14, title: "Space Complexity", duration: "12 min" },
      { id: 15, title: "Practice Problems", duration: "25 min" },
    ],
  },
};

const CourseSyllabus = () => {
  const { slug } = useParams();
  const course = courseData[slug || "python-intro"] || courseData["python-intro"];
  const completedCount = course.lessons.filter(l => l.completed).length;
  const progressPercent = (completedCount / course.lessons.length) * 100;
  const totalDuration = course.lessons.length + " lessons";

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        {/* Course Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {course.title}
          </h1>
          <p className="text-muted-foreground mb-4">{course.description}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {totalDuration}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Self-paced</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8 p-4 bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground text-sm">Your Progress</span>
            <span className="text-primary font-semibold">{Math.round(progressPercent)}% Complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{completedCount} of {course.lessons.length} lessons completed</p>
        </div>

        {/* Lessons */}
        <h2 className="font-display text-xl font-bold text-foreground mb-4">Course Content</h2>
        <div className="space-y-3">
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/courses/${slug}/${lesson.id}`}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl transition-all duration-200 border",
                lesson.current
                  ? "bg-primary/10 border-primary/30"
                  : "bg-card hover:bg-muted/50 border-transparent hover:border-border"
              )}
            >
              {lesson.completed ? (
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              ) : lesson.current ? (
                <Play className="w-6 h-6 text-primary flex-shrink-0 fill-primary" />
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
              )}
              <div className="flex-1">
                <span className={cn("text-base font-medium", lesson.current ? "text-primary" : "text-foreground")}>
                  {lesson.id}. {lesson.title}
                </span>
              </div>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {lesson.duration}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CourseSyllabus;

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
