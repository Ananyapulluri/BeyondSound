import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const courseData: Record<string, {
  title: string;
  lessons: { id: number; title: string; completed?: boolean; current?: boolean; description: string; transcript: string[] }[];
}> = {
  "python-intro": {
    title: "Introduction to Python",
    lessons: [
      { id: 1, title: "Welcome to Python", completed: true, description: "Get started with Python — the most beginner-friendly programming language in the world.", transcript: ["Welcome to Beyond Sound Academy!", "Python is one of the most popular programming languages in the world.", "In this course, we'll learn Python step by step using visual and sign language demonstrations.", "Let's start with why Python is great for beginners."] },
      { id: 2, title: "Variables and Data Types", current: true, description: "Learn how to store and use data in Python using variables and different data types.", transcript: ["Today we're learning about variables and data types in Python.", "A variable is like a container that stores data.", "In Python, you create a variable by assigning a value: name = 'Alex'", "Python has several data types: strings, integers, floats, and booleans."] },
      { id: 3, title: "Operators and Expressions", description: "Perform calculations and comparisons using Python operators.", transcript: ["Operators let us perform actions on data.", "Arithmetic operators: +, -, *, / for calculations.", "Comparison operators: ==, !=, >, < for comparisons.", "Logical operators: and, or, not for combining conditions."] },
      { id: 4, title: "Conditional Statements", description: "Make decisions in your code with if, elif, and else statements.", transcript: ["Conditional statements let your program make decisions.", "The if statement runs code only when a condition is true.", "elif lets you check multiple conditions.", "else runs when no conditions match."] },
      { id: 5, title: "Loops and Iteration", description: "Repeat actions efficiently with for and while loops.", transcript: ["Loops let us repeat code without writing it multiple times.", "A for loop iterates over a sequence.", "A while loop repeats while a condition is true.", "Use break to exit a loop early."] },
      { id: 6, title: "Functions", description: "Write reusable blocks of code with functions.", transcript: ["Functions are reusable blocks of code.", "Define a function with the def keyword.", "Functions can take parameters and return values.", "Good functions do one thing well."] },
      { id: 7, title: "Lists and Tuples", description: "Store multiple values in ordered collections.", transcript: ["Lists store multiple values in one variable.", "Create a list: my_list = [1, 2, 3]", "Tuples are like lists but cannot be changed.", "Use indexing to access individual elements."] },
      { id: 8, title: "Dictionaries and Sets", description: "Work with key-value pairs and unique collections.", transcript: ["Dictionaries store key-value pairs.", "Create one: person = {'name': 'Alex', 'age': 25}", "Access values using their keys.", "Sets store unique values with no duplicates."] },
      { id: 9, title: "File I/O", description: "Read from and write to files in Python.", transcript: ["File I/O lets you read and write files.", "Open a file using the open() function.", "Always close files after using them, or use 'with'.", "You can read line by line or all at once."] },
      { id: 10, title: "Error Handling", description: "Handle errors gracefully with try and except.", transcript: ["Errors happen — handling them makes your code robust.", "Use try/except to catch errors.", "You can handle specific error types.", "Finally block runs whether or not an error occurred."] },
    ],
  },
  "web-dev": {
    title: "Web Development Essentials",
    lessons: [
      { id: 1, title: "Introduction to HTML", completed: true, description: "Learn the building blocks of every webpage.", transcript: ["HTML stands for HyperText Markup Language.", "It's the skeleton of every website.", "HTML uses tags like <h1>, <p>, <div> to structure content.", "Let's build our first HTML page together."] },
      { id: 2, title: "HTML Structure & Tags", current: true, description: "Deep dive into HTML tags and document structure.", transcript: ["Every HTML page has a basic structure.", "The <head> contains meta information.", "The <body> contains visible content.", "Common tags: headings, paragraphs, links, images."] },
      { id: 3, title: "CSS Basics & Selectors", description: "Style your HTML with CSS.", transcript: ["CSS makes websites look beautiful.", "CSS stands for Cascading Style Sheets.", "Selectors target HTML elements to style.", "Properties like color, font-size, margin control appearance."] },
      { id: 4, title: "CSS Box Model & Layout", description: "Understand how elements are sized and spaced.", transcript: ["The box model is fundamental to CSS layout.", "Every element has margin, border, padding, and content.", "Width and height control the content area.", "Margin creates space outside the element."] },
      { id: 5, title: "Flexbox & Grid", description: "Build modern layouts with Flexbox and CSS Grid.", transcript: ["Flexbox and Grid are modern layout tools.", "Flexbox is great for one-dimensional layouts.", "Grid is perfect for two-dimensional layouts.", "Together they can build almost any layout."] },
      { id: 6, title: "Responsive Design", description: "Make websites that work on all screen sizes.", transcript: ["Responsive design adapts to any screen size.", "Media queries let us apply styles at specific widths.", "Mobile-first design is the modern best practice.", "Test on multiple devices and screen sizes."] },
      { id: 7, title: "Introduction to JavaScript", description: "Add interactivity with JavaScript.", transcript: ["JavaScript makes websites interactive.", "It runs in the browser and can change the page.", "Variables, functions, and events are the basics.", "JS is the most used language in web development."] },
      { id: 8, title: "DOM Manipulation", description: "Change webpage content with JavaScript.", transcript: ["The DOM is the Document Object Model.", "JS can access and modify any HTML element.", "Use getElementById or querySelector to find elements.", "Change text, styles, and attributes with JS."] },
      { id: 9, title: "Events & Interaction", description: "Respond to user actions with event listeners.", transcript: ["Events fire when users interact with the page.", "addEventListener lets you respond to clicks, inputs, etc.", "Event objects contain information about the interaction.", "Prevent default browser behavior when needed."] },
      { id: 10, title: "Forms & Validation", description: "Build and validate HTML forms.", transcript: ["Forms collect user input.", "Input types: text, email, password, checkbox, radio.", "Validation checks if input is correct before submitting.", "Always validate on both client and server side."] },
      { id: 11, title: "Fetch API & JSON", description: "Load data from APIs in your webpage.", transcript: ["The Fetch API loads data without refreshing the page.", "APIs return data as JSON — JavaScript Object Notation.", "Parse JSON with JSON.parse() or response.json().", "Display fetched data dynamically in your HTML."] },
      { id: 12, title: "Build Your First Website", description: "Put it all together and build a complete website.", transcript: ["Now let's combine everything we've learned.", "Plan your site structure first.", "Write semantic HTML, then add CSS, then JS.", "Congratulations on completing the course!"] },
    ],
  },
  "data-structures": {
    title: "Data Structures & Algorithms",
    lessons: [
      { id: 1, title: "Introduction to DSA", completed: true, description: "Why data structures and algorithms matter in programming.", transcript: ["Data structures organize and store data efficiently.", "Algorithms are step-by-step procedures to solve problems.", "Good DSA knowledge makes you a better programmer.", "This course covers the most important concepts."] },
      { id: 2, title: "Arrays & Time Complexity", current: true, description: "Learn arrays and how to measure algorithm efficiency.", transcript: ["Arrays store elements in contiguous memory.", "Access any element in O(1) time using its index.", "Time complexity measures how fast an algorithm runs.", "Big O notation: O(1), O(n), O(n²) are common."] },
      { id: 3, title: "Linked Lists", description: "Explore dynamic data structures with linked lists.", transcript: ["A linked list is a chain of nodes.", "Each node contains data and a pointer to the next node.", "Insertion and deletion are O(1) if you have a pointer.", "Traversal is O(n) — you must visit each node."] },
      { id: 4, title: "Stacks & Queues", description: "LIFO and FIFO data structures explained.", transcript: ["A stack is Last In First Out — like a pile of plates.", "Push adds to the top, pop removes from the top.", "A queue is First In First Out — like a line at a store.", "Queues use enqueue and dequeue operations."] },
      { id: 5, title: "Hash Tables", description: "Fast key-value lookups with hash tables.", transcript: ["Hash tables give O(1) average lookup time.", "A hash function converts a key to an array index.", "Collisions occur when two keys hash to the same index.", "Chaining and open addressing handle collisions."] },
      { id: 6, title: "Trees & Binary Trees", description: "Hierarchical data structures for organized data.", transcript: ["Trees are hierarchical data structures.", "The top node is the root, bottom nodes are leaves.", "A binary tree has at most 2 children per node.", "Trees are used in file systems, databases, and more."] },
      { id: 7, title: "Binary Search Trees", description: "Efficient searching and sorting with BSTs.", transcript: ["A BST has a special property: left < root < right.", "Search, insert, delete are all O(log n) average.", "In-order traversal gives sorted output.", "Balanced BSTs maintain O(log n) in worst case."] },
      { id: 8, title: "Graphs & BFS/DFS", description: "Model relationships with graphs and traverse them.", transcript: ["Graphs model relationships between entities.", "Nodes (vertices) are connected by edges.", "BFS explores level by level using a queue.", "DFS goes deep first using a stack or recursion."] },
      { id: 9, title: "Sorting Algorithms", description: "Sort data efficiently with classic algorithms.", transcript: ["Sorting is one of the most common operations.", "Bubble sort: O(n²) — simple but slow.", "Merge sort: O(n log n) — divide and conquer.", "Quick sort: O(n log n) average — most used in practice."] },
      { id: 10, title: "Searching Algorithms", description: "Find elements quickly with smart search strategies.", transcript: ["Linear search checks each element — O(n).", "Binary search works on sorted arrays — O(log n).", "Binary search halves the search space each step.", "Always check if data is sorted before using binary search."] },
      { id: 11, title: "Dynamic Programming", description: "Solve complex problems by breaking them into subproblems.", transcript: ["Dynamic programming solves problems by breaking them down.", "Store solutions to subproblems to avoid recomputation.", "Memoization stores results top-down.", "Tabulation builds solutions bottom-up."] },
      { id: 12, title: "Greedy Algorithms", description: "Make locally optimal choices for global solutions.", transcript: ["Greedy algorithms make the best local choice each step.", "They don't always give the global optimum.", "Coin change, activity selection are classic greedy problems.", "Greedy is fast but needs careful proof of correctness."] },
      { id: 13, title: "Recursion Deep Dive", description: "Master recursive thinking and avoid common pitfalls.", transcript: ["Recursion is a function calling itself.", "Every recursive function needs a base case.", "The call stack grows with each recursive call.", "Some problems are naturally recursive: trees, fractals."] },
      { id: 14, title: "Space Complexity", description: "Analyze how much memory algorithms use.", transcript: ["Space complexity measures memory usage.", "O(1) space: only a few variables used.", "O(n) space: memory grows with input size.", "Trade-offs between time and space are common."] },
      { id: 15, title: "Practice Problems", description: "Apply everything you've learned with real coding challenges.", transcript: ["Let's practice with real interview-style problems.", "Two Sum, Valid Parentheses, Reverse Linked List.", "Always think about time and space complexity.", "Congratulations on completing the course!"] },
    ],
  },
};

const CourseLesson = () => {
  const { slug, lessonId } = useParams();
  const course = courseData[slug || "python-intro"] || courseData["python-intro"];
  const currentId = parseInt(lessonId || "1");
  const currentLesson = course.lessons.find(l => l.id === currentId) || course.lessons[0];
  const completedCount = course.lessons.filter(l => l.completed).length;
  const progressPercent = (completedCount / course.lessons.length) * 100;
  const prevLesson = course.lessons.find(l => l.id === currentId - 1);
  const nextLesson = course.lessons.find(l => l.id === currentId + 1);

  return (
    <Layout hideFooter>
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border bg-card hidden lg:block overflow-y-auto">
          <div className="p-6">
            <h2 className="font-display font-bold text-lg text-foreground mb-1">{course.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">Course Progress</p>
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
              <div className="h-full bg-primary rounded-full" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="text-xs text-muted-foreground mb-6">{completedCount} of {course.lessons.length} lessons completed</p>
            <nav className="space-y-1">
              {course.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${slug}/${lesson.id}`}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                    lesson.id === currentId
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  {lesson.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : lesson.id === currentId ? (
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
          <div className="flex-1">
            {/* Video */}
            <div className="bg-gray-900 rounded-xl overflow-hidden aspect-video mb-4 flex items-center justify-center">
              <video controls className="w-full h-full" poster="/videos/variables-tutorial.mp4#t=0.1">
                <source src="/videos/variables-tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Lesson {currentId}: {currentLesson.title}
            </h1>
            <p className="text-muted-foreground mb-6">{currentLesson.description}</p>

            {/* Navigation */}
            <div className="flex gap-4">
              {prevLesson ? (
                <Link to={`/courses/${slug}/${prevLesson.id}`}>
                  <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-1" /> Previous</Button>
                </Link>
              ) : (
                <Link to={`/courses/${slug}`}>
                  <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-1" /> Back to Course</Button>
                </Link>
              )}
              <Link to="/exercise">
                <Button variant="outline">Practice Exercise</Button>
              </Link>
              {nextLesson ? (
                <Link to={`/courses/${slug}/${nextLesson.id}`}>
                  <Button>Next Lesson <ChevronRight className="w-4 h-4 ml-1" /></Button>
                </Link>
              ) : (
                <Link to="/courses">
                  <Button>Complete Course 🎉</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Transcript */}
          <Card className="w-full lg:w-96 flex-shrink-0 h-fit">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">Transcript</h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed max-h-96 overflow-y-auto">
                {currentLesson.transcript.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CourseLesson;
