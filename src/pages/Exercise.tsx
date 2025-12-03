import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Play, Save } from "lucide-react";

const Exercise = () => {
  const [code, setCode] = useState(`# This is your first Beyond Sound Academy exercise!
# Create variables for different data types.

# 1. Create a string variable called 'my_name' with your name
my_name = ""

# 2. Create an integer variable called 'my_age' with your age
my_age = 0

# 3. Create a float variable called 'my_height' (in meters)
my_height = 0.0

# 4. Create a boolean variable called 'is_student'
is_student = True

# Print all your variables
print("Name:", my_name)
print("Age:", my_age)
print("Height:", my_height)
print("Student:", is_student)`);

  const [output, setOutput] = useState("");
  const [testsPassed, setTestsPassed] = useState(false);

  const runCode = () => {
    setOutput(`Running code...

Name: 
Age: 0
Height: 0.0
Student: True

⚠️ Don't forget to fill in your name!`);
    setTestsPassed(false);
  };

  const submitCode = () => {
    setOutput(`Running tests for variables exercise...

✓ Test 1: my_name is a string (Passed)
✓ Test 2: my_age is an integer (Passed)
✓ Test 3: my_height is a float (Passed)
✓ Test 4: is_student is a boolean (Passed)

All tests passed! Great job! 🎉`);
    setTestsPassed(true);
  };

  return (
    <Layout hideFooter>
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="border-b border-border p-4 flex items-center justify-between bg-card">
            <div>
              <h1 className="font-display font-semibold text-lg text-foreground">
                Exercise: Python Variables
              </h1>
              <p className="text-sm text-muted-foreground">main.py (Python)</p>
            </div>
            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Editor */}
            <div className="flex-1 bg-code">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 bg-transparent text-code-foreground font-mono text-sm resize-none focus:outline-none"
                spellCheck={false}
              />
            </div>

            {/* Output */}
            <div className="lg:w-96 border-t lg:border-t-0 lg:border-l border-border bg-card">
              <div className="border-b border-border p-3 flex items-center justify-between">
                <span className="font-medium text-sm text-foreground">Test Output</span>
                {testsPassed && (
                  <Badge className="bg-success text-success-foreground">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Success
                  </Badge>
                )}
              </div>
              <pre className="p-4 text-sm font-mono text-muted-foreground whitespace-pre-wrap h-48 lg:h-auto overflow-auto">
                {output || "Click 'Run Code' to see output"}
              </pre>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-border p-4 flex justify-end gap-3 bg-card">
            <Button variant="outline" onClick={runCode}>
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
            <Button onClick={submitCode}>Submit</Button>
          </div>
        </div>

        {/* Help Panel */}
        <aside className="w-96 border-l border-border bg-card hidden xl:flex flex-col">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-lg">Understanding Variables</CardTitle>
            <p className="text-sm text-muted-foreground">Contextual help for your exercise</p>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Variables in Python are used to store data values. Unlike other programming languages, Python has no command for declaring a variable – a variable is created the moment you assign a value to it.
              </p>
              <div className="bg-muted p-3 rounded-lg font-mono text-xs">
                <p className="text-foreground mb-1"># Example:</p>
                <p>name = "Alex"  # String</p>
                <p>age = 25       # Integer</p>
                <p>height = 1.75  # Float</p>
                <p>active = True  # Boolean</p>
              </div>
              <p>
                <strong className="text-foreground">Tips:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Variable names are case-sensitive</li>
                <li>Use descriptive names (my_age vs x)</li>
                <li>Cannot start with a number</li>
                <li>Use underscores for multi-word names</li>
              </ul>
            </div>

            {/* Video Help */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">Watch the tutorial:</p>
              <div className="rounded-lg overflow-hidden aspect-video bg-code">
                <video
                  controls
                  className="w-full h-full"
                  poster="/videos/variables-tutorial.mp4#t=0.1"
                >
                  <source src="/videos/variables-tutorial.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Signer demonstrating Python variables
              </p>
            </div>

            {/* Progress */}
            <Card className="mt-6">
              <CardContent className="pt-4">
                <h4 className="font-medium text-foreground mb-2">Your Progress</h4>
                <p className="text-xs text-muted-foreground mb-3">Keep up the great work!</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Level 3</span>
                  <span className="text-xs text-muted-foreground">Next: Unlock 'Variables' Badge</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "75%" }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  75% towards next milestone
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </aside>
      </div>
    </Layout>
  );
};

export default Exercise;
