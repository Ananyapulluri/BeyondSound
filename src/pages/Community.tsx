import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, ThumbsUp, MessageSquare, Trophy, Video, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  { label: "All Discussions", active: true },
  { label: "Python" },
  { label: "JavaScript" },
  { label: "React" },
  { label: "Web Development" },
  { label: "Data Science" },
  { label: "Accessibility" },
];

const threads = [
  {
    id: 1,
    author: "Alex Programmer",
    avatar: "AP",
    time: "2 hours ago",
    tags: ["Python", "Beginner", "ASL"],
    title: "Beginner's Guide to Python Variables in ASL",
    content: "Hey everyone! I just finished creating a short video tutorial demonstrating how to declare and use variables in Python, all explained through American Sign Language. It covers basic data types and simple...",
    likes: 15,
    comments: 7,
  },
  {
    id: 2,
    author: "Sarah Dev",
    avatar: "SD",
    time: "Yesterday",
    tags: ["React", "Frontend", "Feedback"],
    title: "Seeking Feedback: My First React Component (Video Walkthrough)",
    content: "I've been learning React through SignCode Academy and built a small counter component. I've recorded a video of myself explaining the code in ASL and showing how it works. Any feedback on best practices...",
    likes: 28,
    comments: 12,
  },
  {
    id: 3,
    author: "CodeMaster Jay",
    avatar: "CJ",
    time: "3 days ago",
    tags: ["Best Practices", "ASL", "Community"],
    title: "Discuss: Best Practices for Code Comments in ASL",
    content: "When writing code, clear comments are crucial. How do you approach explaining complex logic in ASL within your code comments? Are there specific signs or conventions you use? Let's share some tips!",
    likes: 42,
    comments: 19,
  },
];

const events = [
  { title: "Live Q&A: Advanced Data Structures", date: "Mon, Apr 22nd, 7:00 PM EST" },
  { title: "Workshop: Building Your First API", date: "Wed, Apr 24th, 6:30 PM EST" },
  { title: "Study Session: JavaScript Fundamentals", date: "Fri, Apr 26th, 5:00 PM EST" },
];

const achievements = [
  { icon: CheckCircle2, title: "First Code Submitted!", description: "Completed your very first coding exercise." },
  { icon: MessageSquare, title: "Community Contributor", description: "Posted 5 times in the forum." },
  { icon: Trophy, title: "Python Beginner Badge", description: "Finished the 'Introduction to Python' course." },
];

const Community = () => {
  const [activeTopic, setActiveTopic] = useState("All Discussions");

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Creator */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea 
                      placeholder="Share your thoughts, questions, or code snippets with the community..."
                      className="mb-4 resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Upload Video (ASL)
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Post to Community</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Topics */}
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Badge
                  key={topic.label}
                  variant={activeTopic === topic.label ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setActiveTopic(topic.label)}
                >
                  {topic.label}
                </Badge>
              ))}
            </div>

            {/* Threads */}
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-4">
                Recent Forum Threads
              </h2>
              <div className="space-y-4">
                {threads.map((thread) => (
                  <Card key={thread.id} className="card-hover">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>{thread.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-foreground">{thread.author}</span>
                            <span className="text-xs text-muted-foreground">{thread.time}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {thread.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="font-display font-semibold text-foreground mb-2">
                            {thread.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {thread.content}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                {thread.likes}
                              </button>
                              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                                <MessageSquare className="w-4 h-4" />
                                {thread.comments}
                              </button>
                            </div>
                            <Button variant="ghost" size="sm">Read More</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Peer Support Groups */}
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-4">
                Peer Support Groups
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 mb-4 flex items-center justify-center">
                      <span className="text-sm text-primary font-medium">128 members</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Python Enthusiasts (ASL)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A group for learners and experienced developers to discuss Python programming using ASL.
                    </p>
                    <Button className="w-full">Join Group</Button>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-green-200 to-green-400 mb-4 flex items-center justify-center">
                      <span className="text-sm text-green-800 font-medium">92 members</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Web Dev Frontend Crew
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dive into HTML, CSS, JavaScript, and frameworks like React. Share your frontend projects and get peer feedback.
                    </p>
                    <Button className="w-full">Join Group</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
