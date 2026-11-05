window.BOOK = {
  "title": "Website Development Using PHP",
  "course": "BCA · Semester VI · Panjab University",
  "chapters": [
    {
      "n": 1,
      "title": "Introduction to Server-Side Scripting and PHP",
      "short": "The web & PHP",
      "description": "Follow a request from the browser to the server, then get your first PHP page working.",
      "topics": [
        "Static and dynamic pages",
        "Client and server",
        "HTTP request–response",
        "Web servers",
        "PHP installation"
      ],
      "concepts": [
        [
          "A request has a journey",
          "The browser sends an HTTP request. A web server locates the resource, runs PHP when required, and returns a response. The browser receives generated output, not the PHP source."
        ],
        [
          "Dynamic describes generation",
          "A dynamic page is assembled when requested. It can look identical on consecutive visits. A static HTML page can still have JavaScript interactions."
        ],
        [
          "Localhost needs a running service",
          "With XAMPP or WampServer, place the project under the configured document root and request it through http://localhost/. Opening a PHP file with file:// does not execute PHP."
        ]
      ],
      "pitfalls": [
        "PHP embedded in a page runs before the response reaches the browser.",
        "A .php extension alone does not make a static hosting service execute PHP."
      ],
      "examples": [
        {
          "id": "1-1",
          "title": "A static course notice",
          "level": "Start here",
          "code": "<!doctype html>\n<html lang=\"en\">\n<meta charset=\"utf-8\">\n<title>Course notice</title>\n<h1>BCA Semester VI</h1>\n<p>PHP practical: Monday, 10:00 AM</p>\n</html>",
          "output": "BCA Semester VI\nPHP practical: Monday, 10:00 AM",
          "why": "The text is already present in the HTML file. No PHP interpreter is needed.",
          "change": "Change the notice and rerun. The preview updates from your HTML.",
          "language": "html",
          "mode": "browser"
        },
        {
          "id": "1-2",
          "title": "Your first PHP response",
          "level": "Start here",
          "code": "<?php\necho \"PHP is running.\\n\";\necho \"Course: BCA Semester VI\";",
          "output": "PHP is running.\nCourse: BCA Semester VI",
          "why": "echo writes text into the HTTP response body. The interpreter consumes the PHP tags.",
          "change": "Add a third echo statement with your college name.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "1-3",
          "title": "One template, two visitors",
          "level": "Build on it",
          "code": "<?php\n$student = $_GET['name'] ?? 'Visitor';\n$safe = htmlspecialchars($student, ENT_QUOTES, 'UTF-8');\necho \"<h1>Welcome, $safe</h1>\";\necho '<p>Your PHP practice starts here.</p>';",
          "output": "Welcome, Asha\nYour PHP practice starts here.",
          "why": "The same script generates a different greeting from the request data. Escaping prevents a name being interpreted as HTML.",
          "change": "Change name in the request input to <b>Asha</b> and observe literal text.",
          "language": "php",
          "mode": "browser",
          "input": {
            "get": {
              "name": "Asha"
            }
          }
        },
        {
          "id": "1-4",
          "title": "Inspect the execution environment",
          "level": "Explore",
          "code": "<?php\necho \"PHP major version: \" . PHP_MAJOR_VERSION . \"\\n\";\necho \"Execution interface: \" . PHP_SAPI . \"\\n\";\necho \"Document: \" . basename(__FILE__);",
          "output": "PHP major version: 8\nExecution interface: varies by runtime\nDocument: varies by runtime",
          "why": "PHP_VERSION, PHP_SAPI and __FILE__ describe the execution environment. A browser runtime is different from Apache on localhost.",
          "change": "Download this file, run it on localhost, and compare the interface and path.",
          "language": "php",
          "mode": "browser",
          "variableOutput": true
        }
      ],
      "practice": [
        {
          "type": "Explain",
          "prompt": "Trace a request for http://localhost/course/index.php from the browser to the displayed page.",
          "hint": "Name the browser, web server and interpreter.",
          "answer": "The browser sends an HTTP request to the local web server. The server maps the URL to index.php, passes it to PHP, and returns the generated response. The browser renders the HTML response."
        },
        {
          "type": "Apply",
          "prompt": "A PHP file opens as text when double-clicked. Give a diagnosis and a correction.",
          "hint": "Examine the URL scheme.",
          "answer": "It was opened with file:// or a server without PHP support. Start the PHP-capable web server and request the file through http://localhost/project/file.php."
        },
        {
          "type": "Compare",
          "prompt": "Can a static page contain an interactive menu? Explain.",
          "hint": "Separate response generation from browser behaviour.",
          "answer": "Yes. A prewritten HTML response can include JavaScript that handles a menu in the browser. That interaction does not require server-side generation."
        },
        {
          "type": "Debug",
          "prompt": "localhost returns 404 for hello.php even though Apache is running. What should you check?",
          "hint": "Check the mapping between disk and URL.",
          "answer": "Verify the configured document root, project folder, filename including case, and URL path. Also check that the request is reaching the intended server and port."
        },
        {
          "type": "Build",
          "prompt": "Create a course welcome page with a fixed heading and a PHP-generated student greeting.",
          "hint": "Use HTML around a PHP block.",
          "answer": "Keep the fixed heading in HTML. Read a name with a default, escape it with htmlspecialchars, and echo it inside the greeting. Test a missing name and a name containing <."
        },
        {
          "type": "Viva",
          "prompt": "Why does View Source usually not show the original PHP statements?",
          "hint": "Consider where execution happens.",
          "answer": "PHP executes on the server before the response is sent. View Source shows the response body, which normally contains generated HTML rather than PHP source."
        }
      ],
      "quiz": [
        {
          "question": "Which component executes PHP in a typical Apache setup?",
          "options": [
            "The visitor’s CSS engine",
            "The PHP interpreter on the server",
            "The HTML validator",
            "The DNS resolver"
          ],
          "answer": 1,
          "explanation": "The web server passes PHP scripts to a PHP interpreter and returns their output."
        },
        {
          "question": "Which URL normally executes a local XAMPP project?",
          "options": [
            "file:///project/index.php",
            "http://localhost/project/index.php",
            "mailto:index.php",
            "php://localhost/project"
          ],
          "answer": 1,
          "explanation": "An HTTP request reaches the running local server. A file URL bypasses it."
        },
        {
          "question": "A dynamically generated page must change on every refresh.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "The server can generate the same response repeatedly from unchanged data."
        },
        {
          "question": "What does a document root define?",
          "options": [
            "The browser download folder",
            "The folder mapped to the web server’s URL root",
            "The MySQL password",
            "The PHP variable scope"
          ],
          "answer": 1,
          "explanation": "The server maps URL paths to files under its configured document root."
        },
        {
          "question": "What does a normal client receive after PHP runs?",
          "options": [
            "The generated response body",
            "The original PHP password variables",
            "The entire server filesystem",
            "The PHP interpreter binary"
          ],
          "answer": 0,
          "explanation": "Only the response produced by the application is sent to the client."
        }
      ]
    },
    {
      "n": 2,
      "title": "PHP Basics",
      "short": "Language essentials",
      "description": "Build reliable expressions with variables, types, constants, operators and output.",
      "topics": [
        "Syntax",
        "Variables and constants",
        "Data types",
        "PHP inside HTML",
        "Operators and precedence",
        "echo and print"
      ],
      "concepts": [
        [
          "Variables hold values",
          "A variable begins with $ and its name is case-sensitive. PHP determines its type from the current value unless type declarations constrain an operation."
        ],
        [
          "Equality needs care",
          "== compares with type conversion. === requires both type and value to match. Prefer strict comparisons when a value has a known expected type."
        ],
        [
          "Make intent explicit",
          "Parentheses make mixed arithmetic and concatenation easier to read. The . operator joins strings; + adds numbers."
        ]
      ],
      "pitfalls": [
        "Use $name consistently: $Name is a different variable.",
        "A constant is referenced without $. Division needs a non-zero divisor."
      ],
      "examples": [
        {
          "id": "2-1",
          "title": "Student identity and date",
          "level": "Start here",
          "code": "<?php\ndate_default_timezone_set('Asia/Kolkata');\n$name = 'Asha';\n$course = 'BCA Semester VI';\necho \"$name | $course\\n\";\necho date('d-m-Y H:i');",
          "output": "Asha | BCA Semester VI\nCurrent date and time in Asia/Kolkata",
          "why": "Double-quoted strings interpolate variables. Setting a timezone makes the date display intentional.",
          "change": "Change the name and date format. Compare date(\"Y-m-d\") with date(\"d/m/Y\").",
          "language": "php",
          "mode": "browser",
          "variableOutput": true
        },
        {
          "id": "2-2",
          "title": "Variables, constants and types",
          "level": "Start here",
          "code": "<?php\nconst COURSE = 'BCA';\n$semester = 6;\n$fee = 1250.50;\n$paid = true;\necho COURSE . \" Semester $semester\\n\";\necho gettype($semester) . ', ' . gettype($fee) . ', ' . gettype($paid);",
          "output": "BCA Semester 6\ninteger, double, boolean",
          "why": "COURSE is a constant. The three variables hold an integer, floating-point number and Boolean. gettype uses the historical label double for a float.",
          "change": "Assign \"6\" to $semester and inspect its type.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "2-3",
          "title": "Arithmetic with a zero guard",
          "level": "Build on it",
          "code": "<?php\n$a = 18;\n$b = 4;\necho \"Sum: \" . ($a + $b) . \"\\n\";\necho \"Difference: \" . ($a - $b) . \"\\n\";\necho \"Product: \" . ($a * $b) . \"\\n\";\necho \"Quotient: \" . ($b != 0 ? $a / $b : 'undefined');",
          "output": "Sum: 22\nDifference: 14\nProduct: 72\nQuotient: 4.5",
          "why": "Parentheses group arithmetic before concatenation. The conditional expression avoids dividing by zero.",
          "change": "Set $b to 0. Explain why the last line still runs.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "2-4",
          "title": "Predict strict and loose comparison",
          "level": "Explore",
          "code": "<?php\n$value = '10';\nvar_export($value == 10);\necho \"\\n\";\nvar_export($value === 10);\necho \"\\n\";\necho 'Total: ' . (2 + 3 * 4);",
          "output": "true\nfalse\nTotal: 14",
          "why": "The string and integer compare equal with == but differ in type with ===. Multiplication takes precedence over addition.",
          "change": "Change the value to integer 10, then parenthesise (2 + 3) * 4.",
          "language": "php",
          "mode": "browser"
        }
      ],
      "practice": [
        {
          "type": "Predict",
          "prompt": "What does echo 7 + 2 * 3; display? What if it is echo (7 + 2) * 3;?",
          "hint": "Multiplication binds first.",
          "answer": "The first expression displays 13. The parenthesised expression displays 27."
        },
        {
          "type": "Debug",
          "prompt": "Repair: name = \"Asha\"; echo $Name;",
          "hint": "Check variable syntax and case.",
          "answer": "$name = \"Asha\"; echo $name; Variable names need $ and must use consistent letter case."
        },
        {
          "type": "Build",
          "prompt": "Calculate a bill for 3 items at ₹125.50 each with 5% GST. Display two decimal places.",
          "hint": "Compute subtotal, tax, then total.",
          "answer": "Subtotal = 376.50; GST = 18.825; total = 395.325. number_format($total, 2) displays 395.33 with normal PHP rounding. Keep unrounded values until display."
        },
        {
          "type": "Explain",
          "prompt": "Compare echo and print in terms of return value and arguments.",
          "hint": "Both are language constructs.",
          "answer": "echo has no return value and accepts multiple comma-separated expressions. print accepts one expression and returns 1. Both write output."
        },
        {
          "type": "Apply",
          "prompt": "Define a fixed maximum score and calculate a percentage from a variable mark.",
          "hint": "Use const for the maximum.",
          "answer": "const MAX_SCORE = 80; $mark = 60; $percentage = $mark / MAX_SCORE * 100; gives 75. Validate that marks are within range before calculation."
        },
        {
          "type": "Viva",
          "prompt": "Why should a form value \"0\" not be checked only with if ($value)?",
          "hint": "Consider falsy values.",
          "answer": "The string \"0\" is falsy in PHP. Test whether the key exists and validate its value explicitly rather than treating false-like values as missing."
        }
      ],
      "quiz": [
        {
          "question": "Which variable name is valid?",
          "options": [
            "$2name",
            "$student_name",
            "student$name",
            "$student-name"
          ],
          "answer": 1,
          "explanation": "A variable name cannot begin with a digit; an underscore is allowed."
        },
        {
          "question": "What is the result of \"5\" === 5?",
          "options": [
            "true",
            "false",
            "5",
            "A syntax error"
          ],
          "answer": 1,
          "explanation": "The types differ, so strict equality is false."
        },
        {
          "question": "Which operator concatenates strings?",
          "options": [
            "+",
            "&",
            ".",
            "::"
          ],
          "answer": 2,
          "explanation": "The dot operator joins strings in PHP."
        },
        {
          "question": "How is const MAX = 100; referenced?",
          "options": [
            "$MAX",
            "MAX",
            "const(MAX)",
            "@MAX"
          ],
          "answer": 1,
          "explanation": "Constants are used without a dollar sign."
        },
        {
          "question": "Which comment can span several lines?",
          "options": [
            "// comment",
            "# comment",
            "/* comment */",
            "<!-- PHP -->"
          ],
          "answer": 2,
          "explanation": "The /* ... */ syntax supports block comments inside PHP."
        }
      ]
    },
    {
      "n": 3,
      "title": "Control Structures",
      "short": "Decisions & loops",
      "description": "Select the right branch, repeat work, and test the boundaries of each condition.",
      "topics": [
        "if and else",
        "Nested decisions",
        "switch",
        "for, while, do-while",
        "foreach",
        "break and continue",
        "Tracing"
      ],
      "concepts": [
        [
          "Test boundaries",
          "For a pass mark of 40, test 39, 40 and 41. Boundary values reveal incorrect comparison operators more quickly than typical inputs."
        ],
        [
          "Choose a loop by its condition",
          "for suits counted repetition. while tests before running. do-while runs once before testing. foreach visits array elements without manual index management."
        ],
        [
          "Trace state, not guesses",
          "Record each iteration’s condition, variable values and output. break exits the nearest loop or switch; continue skips the rest of the current iteration."
        ]
      ],
      "pitfalls": [
        "A semicolon immediately after if or a loop header can create an empty statement.",
        "A switch case normally needs break unless fall-through is deliberate."
      ],
      "examples": [
        {
          "id": "3-1",
          "title": "Even, odd and greatest of three",
          "level": "Start here",
          "code": "<?php\n$n = 14;\necho $n % 2 === 0 ? \"Even\\n\" : \"Odd\\n\";\n$a = 12; $b = 29; $c = 29;\nif ($a >= $b) {\n    $largest = $a >= $c ? $a : $c;\n} else {\n    $largest = $b >= $c ? $b : $c;\n}\necho \"Greatest: $largest\";",
          "output": "Even\nGreatest: 29",
          "why": "The remainder tests parity. Nested decisions compare candidates, and >= handles ties.",
          "change": "Test a negative even number and all three values equal.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "3-2",
          "title": "Weekday with switch",
          "level": "Start here",
          "code": "<?php\n$day = 3;\nswitch ($day) {\n    case 1: $name = 'Monday'; break;\n    case 2: $name = 'Tuesday'; break;\n    case 3: $name = 'Wednesday'; break;\n    case 4: $name = 'Thursday'; break;\n    case 5: $name = 'Friday'; break;\n    case 6: $name = 'Saturday'; break;\n    case 7: $name = 'Sunday'; break;\n    default: $name = 'Invalid day';\n}\necho $name;",
          "output": "Wednesday",
          "why": "The selected case assigns a name, then break prevents fall-through. default handles values outside the intended range.",
          "change": "Try 7 and 0. Remove a break and trace what changes.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "3-3",
          "title": "Multiplication table",
          "level": "Build on it",
          "code": "<?php\n$table = 7;\nfor ($i = 1; $i <= 5; $i++) {\n    echo \"$table × $i = \" . ($table * $i) . \"\\n\";\n}",
          "output": "7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35",
          "why": "The counter starts at 1, is tested before each iteration, and increments after the body.",
          "change": "Extend the table to 10 rows and generate tables for 2 through 5 with nested loops.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "3-4",
          "title": "Skip and stop a loop",
          "level": "Explore",
          "code": "<?php\nfor ($i = 1; $i <= 9; $i++) {\n    if ($i === 3) { continue; }\n    if ($i === 6) { break; }\n    echo \"$i \";\n}\necho \"\\n\";\n$count = 0;\ndo {\n    echo \"do-while runs once\";\n} while ($count > 0);",
          "output": "1 2 4 5 \ndo-while runs once",
          "why": "continue omits 3. break exits at 6. A do-while body executes before its first condition test.",
          "change": "Replace do-while with while and explain the missing line.",
          "language": "php",
          "mode": "browser"
        }
      ],
      "practice": [
        {
          "type": "Trace",
          "prompt": "Trace $i=1; while($i<5){ echo $i; $i+=2; }",
          "hint": "List $i before every condition test.",
          "answer": "Tests occur with 1, 3 and 5. The body prints 1 and 3, so the output is 13."
        },
        {
          "type": "Build",
          "prompt": "Classify a mark: 75+ Distinction, 60–74 First, 40–59 Pass, below 40 Fail. Reject values outside 0–100.",
          "hint": "Reject invalid values before grade selection.",
          "answer": "Check $mark < 0 || $mark > 100 first. Then use descending thresholds >=75, >=60, >=40, else Fail. Test -1, 0, 39, 40, 59, 60, 74, 75, 100 and 101."
        },
        {
          "type": "Debug",
          "prompt": "Why does if ($marks = 40) always appear to pass?",
          "hint": "An assignment expression also has a value.",
          "answer": "= assigns 40, whose truth value is true. Use $marks >= 40 for a pass threshold or $marks === 40 for strict equality."
        },
        {
          "type": "Build",
          "prompt": "Find the sum of even integers from 1 to 20 using a loop.",
          "hint": "Either step by 2 or test the remainder.",
          "answer": "Set $sum=0; for($i=2;$i<=20;$i+=2){$sum+=$i;} The result is 110."
        },
        {
          "type": "Compare",
          "prompt": "When can do-while run once while while runs zero times?",
          "hint": "Consider an initially false condition.",
          "answer": "while checks first and skips its body when false. do-while executes the body first and checks afterwards, so it performs at least one iteration."
        },
        {
          "type": "Viva",
          "prompt": "How would you recognise and repair an infinite while loop?",
          "hint": "Identify what changes the condition.",
          "answer": "Trace the variables used in the condition. Ensure the body updates them toward termination on every relevant path; a continue before the update can prevent this."
        }
      ],
      "quiz": [
        {
          "question": "Which loop always executes its body at least once?",
          "options": [
            "for",
            "while",
            "do-while",
            "foreach"
          ],
          "answer": 2,
          "explanation": "do-while tests its condition after the body."
        },
        {
          "question": "Which statement skips the current iteration?",
          "options": [
            "break",
            "continue",
            "return true",
            "switch"
          ],
          "answer": 1,
          "explanation": "continue moves to the next loop iteration."
        },
        {
          "question": "How many times does for($i=0;$i<3;$i++) run?",
          "options": [
            "2",
            "3",
            "4",
            "0"
          ],
          "answer": 1,
          "explanation": "The body runs with 0, 1 and 2."
        },
        {
          "question": "What should test a pass mark of at least 40?",
          "options": [
            "$mark = 40",
            "$mark > 40",
            "$mark >= 40",
            "$mark < 40"
          ],
          "answer": 2,
          "explanation": "At least includes the boundary value 40."
        },
        {
          "question": "What normally prevents switch fall-through?",
          "options": [
            "continue 0",
            "break",
            "default at the top",
            "A comma"
          ],
          "answer": 1,
          "explanation": "break exits the switch after the selected case."
        }
      ]
    },
    {
      "n": 4,
      "title": "Functions",
      "short": "Reusable code",
      "description": "Move repeated logic into functions and shared files with predictable inputs and outputs.",
      "topics": [
        "Built-in functions",
        "User-defined functions",
        "Parameters and returns",
        "Scope",
        "include and require"
      ],
      "concepts": [
        [
          "A function has a contract",
          "Parameters describe the inputs and a return value carries the result back to the caller. Keep calculation separate from output when you want to reuse it."
        ],
        [
          "Local means local",
          "A variable created inside a function is local unless explicitly shared. Passing a value as an argument makes dependencies clearer than relying on global state."
        ],
        [
          "File inclusion has consequences",
          "include issues a warning when a file is missing and execution can continue. require raises an Error for a missing required file; it can be caught as Throwable. Use __DIR__ for stable paths."
        ]
      ],
      "pitfalls": [
        "echo displays a value but does not return it to the caller.",
        "Use require_once for required definitions that must be loaded only once. Never construct include paths directly from user input."
      ],
      "examples": [
        {
          "id": "4-1",
          "title": "A reusable percentage function",
          "level": "Start here",
          "code": "<?php\nfunction percentage(float $scored, float $maximum): float {\n    if ($maximum <= 0) {\n        throw new InvalidArgumentException('Maximum must be positive');\n    }\n    return $scored / $maximum * 100;\n}\necho number_format(percentage(216, 300), 2) . '%';",
          "output": "72.00%",
          "why": "The function receives two values and returns a number. It rejects a denominator that would make the calculation invalid.",
          "change": "Call it for 378 out of 500; then catch the exception for maximum 0.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "4-2",
          "title": "Default parameters and local scope",
          "level": "Build on it",
          "code": "<?php\n$label = 'Outside';\nfunction greet(string $name, string $course = 'BCA'): string {\n    $label = 'Welcome';\n    return \"$label, $name — $course\";\n}\necho greet('Asha') . \"\\n\";\necho $label;",
          "output": "Welcome, Asha — BCA\nOutside",
          "why": "The local $label does not change the outer variable. The default course is used when the second argument is omitted.",
          "change": "Pass \"PHP Lab\" as the second argument and inspect the result.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "4-3",
          "title": "Share a header with include",
          "level": "Build on it",
          "code": "<?php\ninclude __DIR__ . '/header.php';\necho '<p>Functions practice</p>';",
          "output": "PHP Companion\nFunctions practice",
          "why": "include evaluates the shared file at that point. The supplied header.php is available in the lab’s virtual filesystem and in the download.",
          "change": "Change the included heading in the supporting file after downloading.",
          "language": "php",
          "mode": "browser",
          "files": {
            "header.php": "<h1>PHP Companion</h1>"
          }
        },
        {
          "id": "4-4",
          "title": "Load required definitions",
          "level": "Explore",
          "code": "<?php\nrequire_once __DIR__ . '/helpers.php';\nrequire_once __DIR__ . '/helpers.php';\necho add(12, 8);",
          "output": "20",
          "why": "require_once loads helpers.php once, avoiding a duplicate function declaration when the file is requested again.",
          "change": "Rename the required file and inspect the error. Explain why continuing without it would be unsafe.",
          "language": "php",
          "mode": "browser",
          "files": {
            "helpers.php": "<?php\nfunction add(int $a, int $b): int { return $a + $b; }"
          }
        }
      ],
      "practice": [
        {
          "type": "Build",
          "prompt": "Write a function that converts Celsius to Fahrenheit and returns the result.",
          "hint": "Use F = C × 9/5 + 32.",
          "answer": "function fahrenheit(float $c): float { return $c * 9 / 5 + 32; } Check 0 → 32 and 100 → 212."
        },
        {
          "type": "Explain",
          "prompt": "Distinguish formal and actual parameters using add(4, 6).",
          "hint": "One belongs to the definition; one to the call.",
          "answer": "In function add($a,$b), $a and $b are formal parameters. In add(4,6), the supplied arguments 4 and 6 are actual parameters."
        },
        {
          "type": "Debug",
          "prompt": "A function echoes a total, but $result = total(2,3) gives null. Why?",
          "hint": "A displayed result is not a returned result.",
          "answer": "Without return, a function normally returns null. Replace echo with return $a + $b; and display the returned value at the call site."
        },
        {
          "type": "Apply",
          "prompt": "A required database configuration is missing. Choose include or require and justify.",
          "hint": "Should the application continue without configuration?",
          "answer": "Use require (usually require_once) because the application cannot work correctly without its configuration. Handle failures at an appropriate boundary rather than silently proceeding."
        },
        {
          "type": "Build",
          "prompt": "Use a shared footer on two PHP pages. Make the path independent of the current working directory.",
          "hint": "Build the path with __DIR__.",
          "answer": "Place footer.php beside the pages and use include __DIR__ . \"/footer.php\"; in each page. __DIR__ is the directory of the file containing that expression."
        },
        {
          "type": "Viva",
          "prompt": "When should a function return a value instead of printing it?",
          "hint": "Think of testing and reuse.",
          "answer": "Return when callers need to calculate with, validate, test or format the result. Printing ties the function to one output format and makes reuse harder."
        }
      ],
      "quiz": [
        {
          "question": "What sends a result back to a caller?",
          "options": [
            "echo",
            "return",
            "include",
            "global"
          ],
          "answer": 1,
          "explanation": "return ends the current function and supplies its result."
        },
        {
          "question": "A variable defined inside a function is normally…",
          "options": [
            "available everywhere",
            "local to that function",
            "a constant",
            "a superglobal"
          ],
          "answer": 1,
          "explanation": "Function scope is local unless a sharing mechanism is explicitly used."
        },
        {
          "question": "Which construct prevents loading a required file twice?",
          "options": [
            "require_once",
            "include_all",
            "load_once",
            "require_many"
          ],
          "answer": 0,
          "explanation": "require_once checks whether the file has already been included."
        },
        {
          "question": "What is strlen(\"BCA\")?",
          "options": [
            "2",
            "3",
            "4",
            "BCA"
          ],
          "answer": 1,
          "explanation": "strlen counts bytes; these three ASCII letters occupy three bytes."
        },
        {
          "question": "Which is a stable path to a sibling file?",
          "options": [
            "$_GET[\"file\"]",
            "\"http://localhost\"",
            "__DIR__ . \"/helpers.php\"",
            "PHP_VERSION"
          ],
          "answer": 2,
          "explanation": "__DIR__ anchors the path to the containing file."
        }
      ]
    },
    {
      "n": 5,
      "title": "Arrays",
      "short": "Working with collections",
      "description": "Organise related values, traverse records, and replace obsolete array idioms with PHP 8 code.",
      "topics": [
        "Indexed arrays",
        "Associative arrays",
        "Multidimensional arrays",
        "foreach",
        "Pointer functions",
        "PHP 8 compatibility"
      ],
      "concepts": [
        [
          "Keys describe access",
          "Indexed arrays use integer keys. Associative arrays use meaningful keys such as name and marks. A nested array can represent a row inside a collection of records."
        ],
        [
          "Traversal and pointers differ",
          "foreach visits elements directly. current, next, prev, reset and end inspect or move the internal array pointer. foreach does not use that pointer to manage its iteration."
        ],
        [
          "Modernise each()",
          "each() was removed in PHP 8. Replace while(list($key,$value)=each($items)) with foreach($items as $key=>$value). Preserve keys when they carry meaning."
        ]
      ],
      "pitfalls": [
        "sort reindexes numeric keys; asort preserves key associations.",
        "A failed array_search can return false; index 0 is a valid successful result, so test with !== false."
      ],
      "examples": [
        {
          "id": "5-1",
          "title": "Three array shapes",
          "level": "Start here",
          "code": "<?php\n$subjects = ['PHP', 'DBMS'];\n$student = ['name' => 'Asha', 'marks' => 84];\n$rows = [\n    ['name' => 'Asha', 'marks' => 84],\n    ['name' => 'Ravi', 'marks' => 76]\n];\necho $subjects[0] . \"\\n\";\necho $student['name'] . \"\\n\";\nforeach ($rows as $row) {\n    echo $row['name'] . ': ' . $row['marks'] . \"\\n\";\n}",
          "output": "PHP\nAsha\nAsha: 84\nRavi: 76\n",
          "why": "The examples use an indexed list, an associative record and a list of associative records.",
          "change": "Add a third student and calculate the class average.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "5-2",
          "title": "Array pointer tour",
          "level": "Build on it",
          "code": "<?php\n$items = ['PHP', 'SQL', 'HTML'];\necho current($items) . \"\\n\";\necho next($items) . \"\\n\";\necho end($items) . \"\\n\";\necho prev($items) . \"\\n\";\necho reset($items);",
          "output": "PHP\nSQL\nHTML\nSQL\nPHP",
          "why": "current reads without moving. next and prev move one position; end and reset move to the last and first elements.",
          "change": "After reset, inspect key($items). Try a one-element array.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "5-3",
          "title": "Largest value without max",
          "level": "Build on it",
          "code": "<?php\nfunction largest(array $values): int|float {\n    if ($values === []) {\n        throw new InvalidArgumentException('Array must not be empty');\n    }\n    $best = $values[array_key_first($values)];\n    foreach ($values as $value) {\n        if ($value > $best) { $best = $value; }\n    }\n    return $best;\n}\necho largest([-12, -3, -27, -8]);",
          "output": "-3",
          "why": "Initialising from an actual element handles arrays containing only negative numbers. An empty array needs an explicit policy.",
          "change": "Test one element, equal values and an empty array inside try/catch.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "5-4",
          "title": "Preserve keys while sorting",
          "level": "Explore",
          "code": "<?php\n$marks = ['Asha' => 84, 'Ravi' => 76, 'Meera' => 91];\narsort($marks);\nforeach ($marks as $name => $mark) {\n    echo \"$name: $mark\\n\";\n}\n$names = ['Asha', 'Ravi'];\n$position = array_search('Asha', $names, true);\necho $position !== false ? \"Found at $position\" : 'Not found';",
          "output": "Meera: 91\nAsha: 84\nRavi: 76\nFound at 0",
          "why": "arsort sorts values descending while retaining names as keys. A strict false check preserves a valid match at index 0.",
          "change": "Sort by student name instead, using ksort.",
          "language": "php",
          "mode": "browser"
        }
      ],
      "practice": [
        {
          "type": "Build",
          "prompt": "Store three products with name and price, then print a total.",
          "hint": "Use a list of associative arrays.",
          "answer": "Create $products = [[\"name\"=>\"Notebook\",\"price\"=>50], ...]; start $total=0 and add each row’s price inside foreach. Use number_format for display."
        },
        {
          "type": "Modernise",
          "prompt": "Replace while (list($key,$value) = each($data)) { echo \"$key: $value\"; }.",
          "hint": "The replacement needs no internal pointer.",
          "answer": "foreach ($data as $key => $value) { echo \"$key: $value\"; } each() is unavailable in PHP 8."
        },
        {
          "type": "Debug",
          "prompt": "A largest-value function starts with $largest=0 and receives [-9,-2,-5]. Why is its answer wrong?",
          "hint": "Does the initial candidate belong to the input?",
          "answer": "Zero is larger than every input but is not an input element. Initialise from the first existing value and reject or otherwise handle an empty array. The correct result is -2."
        },
        {
          "type": "Predict",
          "prompt": "After $a=[10,20,30]; next($a); end($a); prev($a); what does current($a) return?",
          "hint": "Track the internal pointer.",
          "answer": "20. next selects 20, end selects 30, and prev returns to 20."
        },
        {
          "type": "Compare",
          "prompt": "Choose sort, asort or ksort for student-name keys ordered by ascending marks.",
          "hint": "The relationship between names and marks must remain intact.",
          "answer": "Use asort. sort reindexes the values and loses the name keys; ksort orders by names rather than marks."
        },
        {
          "type": "Viva",
          "prompt": "Why is if(array_search(\"PHP\",$subjects)) unreliable?",
          "hint": "Consider a match at index 0.",
          "answer": "Index 0 is falsy, so the condition misclassifies the first element as missing. Store the result and compare it with !== false, preferably using strict search mode."
        }
      ],
      "quiz": [
        {
          "question": "Which is an associative array entry?",
          "options": [
            "0, 1, 2",
            "\"name\" => \"Asha\"",
            "\"name\" := \"Asha\"",
            "name::Asha"
          ],
          "answer": 1,
          "explanation": "The => syntax maps a key to a value."
        },
        {
          "question": "Which function resets the internal pointer?",
          "options": [
            "first()",
            "reset()",
            "rewind_array()",
            "start()"
          ],
          "answer": 1,
          "explanation": "reset moves to the first element and returns its value."
        },
        {
          "question": "What replaces each() in PHP 8 traversal code?",
          "options": [
            "foreach",
            "goto",
            "mysql_fetch_array",
            "echo"
          ],
          "answer": 0,
          "explanation": "foreach directly exposes each key and value without each()."
        },
        {
          "question": "Which sort preserves associations and orders by values?",
          "options": [
            "sort",
            "asort",
            "ksort",
            "shuffle"
          ],
          "answer": 1,
          "explanation": "asort sorts values while keeping their original keys."
        },
        {
          "question": "How many top-level elements are in [[1,2],[3,4]]?",
          "options": [
            "2",
            "4",
            "1",
            "0"
          ],
          "answer": 0,
          "explanation": "There are two outer elements; each contains a two-element inner array."
        }
      ]
    },
    {
      "n": 6,
      "title": "Strings",
      "short": "Text that behaves",
      "description": "Clean text, control interpolation, and apply the right function for each string task.",
      "topics": [
        "Single and double quotes",
        "Concatenation",
        "Heredoc",
        "Cleanup",
        "Case conversion",
        "Search and replace"
      ],
      "concepts": [
        [
          "Quoting changes interpretation",
          "Double-quoted strings and heredoc interpolate variables and recognise escapes such as \\n. Single-quoted strings keep most content literal; escaped apostrophes and backslashes are special cases."
        ],
        [
          "Cleaning is not validation",
          "trim removes characters from the ends; it does not prove that an email is valid or that text is safe to display. Validate according to meaning and escape according to output context."
        ],
        [
          "Bytes and characters differ",
          "strlen measures bytes. ASCII examples have one byte per character, while many Unicode characters use several. Use an appropriate multibyte function when counting user-visible text."
        ]
      ],
      "pitfalls": [
        "strpos returns 0 for a match at the beginning and false for no match. Test !== false.",
        "String functions generally return a new value; assign it if you want to keep the result."
      ],
      "examples": [
        {
          "id": "6-1",
          "title": "Quoting and heredoc",
          "level": "Start here",
          "code": "<?php\n$name = 'Asha';\necho 'Hello $name' . \"\\n\";\necho \"Hello $name\\n\";\n$message = <<<TEXT\nCourse: BCA\nStudent: $name\nTEXT;\necho $message;",
          "output": "Hello $name\nHello Asha\nCourse: BCA\nStudent: Asha",
          "why": "Single quotes keep $name literal. Double quotes and heredoc substitute the variable’s value.",
          "change": "Add another interpolated variable to the heredoc.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "6-2",
          "title": "Clean a submitted name",
          "level": "Start here",
          "code": "<?php\n$raw = \"  Asha Sharma \\n\";\n$clean = trim($raw);\necho '[' . $clean . \"]\\n\";\necho 'Bytes: ' . strlen($clean);",
          "output": "[Asha Sharma]\nBytes: 11",
          "why": "trim removes leading and trailing whitespace without removing the space between the names.",
          "change": "Compare ltrim and rtrim. Try a name with two internal spaces.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "6-3",
          "title": "Normalise text case",
          "level": "Build on it",
          "code": "<?php\n$course = 'bca php';\n$name = 'ASHA SHARMA';\necho strtoupper($course) . \"\\n\";\necho strtolower($name) . \"\\n\";\necho ucwords(strtolower($name));",
          "output": "BCA PHP\nasha sharma\nAsha Sharma",
          "why": "The ASCII case functions return changed copies. ucwords after strtolower gives simple title-style casing for this example.",
          "change": "Test a mixed-case name and discuss why name capitalisation cannot always be automated correctly.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "6-4",
          "title": "Search at position zero",
          "level": "Explore",
          "code": "<?php\n$text = 'PHP powers dynamic pages';\n$position = strpos($text, 'PHP');\necho $position !== false ? \"Found at $position\\n\" : \"Not found\\n\";\necho str_replace('dynamic', 'personalised', $text) . \"\\n\";\necho implode(' | ', explode(' ', 'PHP SQL HTML'));",
          "output": "Found at 0\nPHP powers personalised pages\nPHP | SQL | HTML",
          "why": "The strict comparison recognises a match at the first byte. explode splits a string; implode joins an array of strings.",
          "change": "Search for \"php\" and compare strpos with stripos.",
          "language": "php",
          "mode": "browser"
        }
      ],
      "practice": [
        {
          "type": "Predict",
          "prompt": "What does strlen(\"BCA PHP\") return?",
          "hint": "Spaces also occupy bytes.",
          "answer": "7 for this ASCII string: three letters, one space, and three letters."
        },
        {
          "type": "Build",
          "prompt": "Normalise \"  bca-vi  \" to \"BCA-VI\".",
          "hint": "Clean the ends before changing case.",
          "answer": "$code = strtoupper(trim(\"  bca-vi  \")); The result is BCA-VI."
        },
        {
          "type": "Debug",
          "prompt": "Why does if(strpos($text,\"PHP\")) fail when $text begins with PHP?",
          "hint": "The successful result can be zero.",
          "answer": "strpos returns integer 0 for a match at the beginning, which is falsy. Use strpos($text,\"PHP\") !== false."
        },
        {
          "type": "Build",
          "prompt": "Split \"PHP,SQL,HTML\" and display one subject per line.",
          "hint": "Turn the string into a collection first.",
          "answer": "foreach (explode(\",\", $text) as $subject) { echo trim($subject) . \"\\n\"; } Trim handles optional spaces around separators."
        },
        {
          "type": "Explain",
          "prompt": "Does trim make a submitted name safe to insert inside HTML?",
          "hint": "Cleaning and output encoding solve different problems.",
          "answer": "No. trim only removes specified edge characters. Use htmlspecialchars($name, ENT_QUOTES, \"UTF-8\") when inserting the name into an HTML text or quoted attribute context."
        },
        {
          "type": "Viva",
          "prompt": "Why might strlen report more bytes than the number of letters in an Indian-language name?",
          "hint": "Recall UTF-8 representation.",
          "answer": "UTF-8 encodes many characters using multiple bytes. strlen counts bytes rather than letters or grapheme clusters. Choose mb_strlen or a grapheme-aware function for the actual requirement."
        }
      ],
      "quiz": [
        {
          "question": "Which form interpolates $name?",
          "options": [
            "'Hello $name'",
            "\"Hello $name\"",
            "Both always",
            "Neither"
          ],
          "answer": 1,
          "explanation": "Double quotes interpolate variable values."
        },
        {
          "question": "Which removes edge whitespace?",
          "options": [
            "stripos",
            "trim",
            "strtoupper",
            "implode"
          ],
          "answer": 1,
          "explanation": "trim removes leading and trailing whitespace by default."
        },
        {
          "question": "What indicates no match from strpos?",
          "options": [
            "0",
            "-1",
            "false",
            "An empty array"
          ],
          "answer": 2,
          "explanation": "false means absent; 0 means found at the beginning."
        },
        {
          "question": "Which joins an array of strings?",
          "options": [
            "explode",
            "implode",
            "substr",
            "strlen"
          ],
          "answer": 1,
          "explanation": "implode takes a separator and combines array elements."
        },
        {
          "question": "What does strtoupper(\"php\") return?",
          "options": [
            "php",
            "Php",
            "PHP",
            "true"
          ],
          "answer": 2,
          "explanation": "For these ASCII letters, strtoupper returns uppercase PHP."
        }
      ]
    },
    {
      "n": 7,
      "title": "Working with Forms and User Input",
      "short": "Forms & validation",
      "description": "Handle request values deliberately, report useful errors, and display input safely.",
      "topics": [
        "HTML forms",
        "GET and POST",
        "Superglobals",
        "Validation",
        "Escaping output",
        "Image uploads"
      ],
      "concepts": [
        [
          "GET and POST have different uses",
          "GET is suitable for retrieval such as a search and places parameters in the URL. POST sends data in the request body and suits state-changing submissions. Neither replaces HTTPS."
        ],
        [
          "Validate before using",
          "Check that a value has the expected shape, type and range. A required name and a valid email require different rules. Treat request values as untrusted even if the HTML form validates them."
        ],
        [
          "Uploads need layered checks",
          "Check the upload error code, maximum size and content-derived MIME type. Generate a filename and use move_uploaded_file. Store files outside the public web root where practical."
        ]
      ],
      "pitfalls": [
        "POST does not automatically encrypt or sanitise data.",
        "Do not trust an uploaded filename, browser MIME type or extension as proof of content."
      ],
      "examples": [
        {
          "id": "7-1",
          "title": "Read a GET search",
          "level": "Start here",
          "code": "<?php\n$query = $_GET['q'] ?? '';\nif (!is_string($query)) { $query = ''; }\n$query = trim($query);\necho $query === ''\n    ? '<p>Enter a search term.</p>'\n    : '<p>Searching for: ' . htmlspecialchars($query, ENT_QUOTES, 'UTF-8') . '</p>';",
          "output": "Searching for: PHP arrays",
          "why": "The missing-value default prevents an undefined-key warning. The type check rejects an unexpected array value. Escaping makes the output safe for HTML.",
          "change": "Try an empty q, then <script>alert(1)</script>.",
          "language": "php",
          "mode": "browser",
          "input": {
            "get": {
              "q": "PHP arrays"
            }
          }
        },
        {
          "id": "7-2",
          "title": "Validate a POST registration",
          "level": "Build on it",
          "code": "<?php\n$name = $_POST['name'] ?? '';\n$email = $_POST['email'] ?? '';\n$name = is_string($name) ? trim($name) : '';\n$email = is_string($email) ? trim($email) : '';\n$errors = [];\nif ($name === '') { $errors[] = 'Name is required.'; }\nif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n    $errors[] = 'Enter a valid email address.';\n}\nif ($errors) {\n    echo implode(\"\\n\", $errors);\n} else {\n    echo 'Registered: ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');\n}",
          "output": "Registered: Asha",
          "why": "Server-side validation rejects empty names and malformed emails independently of the browser form.",
          "change": "Clear the name and set email to \"asha@\". Read both error messages.",
          "language": "php",
          "mode": "browser",
          "input": {
            "post": {
              "name": "Asha",
              "email": "asha@example.com"
            }
          },
          "files": {
            "form.html": "<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><title>Registration practice</title><form action=\"main.php\" method=\"post\"><label>Name <input name=\"name\" required></label><label>Email <input type=\"email\" name=\"email\" required></label><button>Register</button></form></html>"
          }
        },
        {
          "id": "7-3",
          "title": "A form with an accessible label",
          "level": "Start here",
          "code": "<!doctype html>\n<html lang=\"en\">\n<meta charset=\"utf-8\">\n<title>Student search</title>\n<form method=\"get\" action=\"search.php\">\n  <label for=\"roll\">Roll number</label>\n  <input id=\"roll\" name=\"roll\" required inputmode=\"numeric\">\n  <button type=\"submit\">Search</button>\n</form>\n<p>On localhost, search.php receives the roll value through $_GET.</p>\n</html>",
          "output": "A labelled roll-number input and Search button.",
          "why": "name determines the submitted key. id connects the label to its control. The preview displays the form; the paired PHP download processes it on localhost.",
          "change": "Download both files and submit from form.html through a local PHP server.",
          "language": "html",
          "mode": "browser",
          "files": {
            "search.php": "<?php\n$roll = $_GET['roll'] ?? '';\nif (!is_string($roll) || !preg_match('/^[0-9]{1,10}$/', $roll)) {\n    http_response_code(422); exit('Enter 1–10 digits.');\n}\necho 'Roll number: ' . htmlspecialchars($roll, ENT_QUOTES, 'UTF-8');"
          }
        },
        {
          "id": "7-4",
          "title": "Validate an uploaded image",
          "level": "Local server",
          "code": "<?php\n$f = $_FILES['photo'] ?? null;\nif (!$f || $f['error'] !== UPLOAD_ERR_OK) {\n    http_response_code(422); exit('Choose a valid upload.');\n}\nif ($f['size'] > 2 * 1024 * 1024) {\n    http_response_code(422); exit('Maximum size is 2 MB.');\n}\n$mime = (new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']);\n$types = ['image/jpeg' => 'jpg', 'image/png' => 'png'];\nif (!isset($types[$mime])) {\n    http_response_code(422); exit('Only JPEG and PNG are accepted.');\n}\n$folder = getenv('UPLOAD_DIR') ?: dirname(__DIR__) . '/private-uploads';\nif (!is_dir($folder) && !mkdir($folder, 0700, true)) {\n    http_response_code(500); exit('Storage unavailable.');\n}\n$path = $folder . '/' . bin2hex(random_bytes(16)) . '.' . $types[$mime];\nif (!move_uploaded_file($f['tmp_name'], $path)) {\n    http_response_code(500); exit('Could not save upload.');\n}\necho 'Image uploaded.';",
          "output": "Image uploaded. (after a valid JPEG or PNG submission)",
          "why": "This needs a real multipart HTTP upload. Download the handler and form together. The generated filename avoids trusting a user-supplied path. When serving the example folder with PHP’s built-in server, the default upload folder is outside that document root. With XAMPP, set UPLOAD_DIR to a folder outside htdocs.",
          "change": "Test a text file renamed .jpg and an image larger than 2 MB.",
          "language": "php",
          "mode": "local",
          "files": {
            "form.html": "<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><title>Image upload</title><form action=\"main.php\" method=\"post\" enctype=\"multipart/form-data\"><label>Image (JPEG or PNG, 2 MB maximum) <input type=\"file\" name=\"photo\" accept=\"image/jpeg,image/png\" required></label><button>Upload</button></form></html>"
          }
        }
      ],
      "practice": [
        {
          "type": "Compare",
          "prompt": "Choose a method for a shareable catalogue search and for submitting a registration.",
          "hint": "One retrieves; the other changes state.",
          "answer": "Use GET for a bookmarkable retrieval query and POST for registration. Use HTTPS for both when carrying sensitive data. POST alone does not encrypt data."
        },
        {
          "type": "Debug",
          "prompt": "Why is an input with id=\"email\" but no name absent from $_POST?",
          "hint": "The label connection and submitted key are different attributes.",
          "answer": "Successful form controls are submitted using their name attribute. Add name=\"email\"; id only identifies the element in the document."
        },
        {
          "type": "Build",
          "prompt": "Validate an age as an integer from 18 to 60, including both endpoints.",
          "hint": "Distinguish false from integer zero.",
          "answer": "Use filter_var($raw, FILTER_VALIDATE_INT, [\"options\"=>[\"min_range\"=>18,\"max_range\"=>60]]) and compare the result with === false. Reject invalid data before storage."
        },
        {
          "type": "Explain",
          "prompt": "Why must validation still run in PHP when the HTML input has required and type=\"email\"?",
          "hint": "A request can be made without your form.",
          "answer": "Users and tools can bypass or alter client-side constraints. Only the server can enforce the application’s validation rules for all incoming requests."
        },
        {
          "type": "Test",
          "prompt": "Design six upload tests for the image handler.",
          "hint": "Include failures at different stages.",
          "answer": "Test a small valid JPEG, valid PNG, no file, file above 2 MB, text renamed .jpg, and an unwritable storage directory. Verify clear failure messages and no partial saved file."
        },
        {
          "type": "Viva",
          "prompt": "What is the difference between validating a name and escaping it?",
          "hint": "Meaning versus output context.",
          "answer": "Validation decides whether the name satisfies application rules. Escaping represents accepted text safely in its output context; HTML escaping prevents input from becoming markup."
        }
      ],
      "quiz": [
        {
          "question": "Which attribute supplies the submitted field key?",
          "options": [
            "id",
            "class",
            "name",
            "placeholder"
          ],
          "answer": 2,
          "explanation": "The name attribute becomes the request key."
        },
        {
          "question": "Where are GET query parameters normally read?",
          "options": [
            "$_POST",
            "$_GET",
            "$_FILES",
            "$_SESSION"
          ],
          "answer": 1,
          "explanation": "PHP parses the URL query string into $_GET."
        },
        {
          "question": "Does POST by itself encrypt a password?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 1,
          "explanation": "HTTPS provides transport encryption; POST only changes how data is carried."
        },
        {
          "question": "Which encodes user text for HTML output?",
          "options": [
            "trim",
            "htmlspecialchars",
            "strtolower",
            "intval"
          ],
          "answer": 1,
          "explanation": "htmlspecialchars encodes HTML-significant characters."
        },
        {
          "question": "Which form encoding is required for file uploads?",
          "options": [
            "text/plain",
            "application/json",
            "multipart/form-data",
            "text/csv"
          ],
          "answer": 2,
          "explanation": "multipart/form-data carries uploaded files and other fields."
        }
      ]
    },
    {
      "n": 8,
      "title": "Database Connectivity",
      "short": "PHP meets MySQL",
      "description": "Connect, query and update records using MySQLi and prepared statements.",
      "topics": [
        "PHP 8 database APIs",
        "Connections",
        "Creating databases",
        "Queries",
        "Fetching records",
        "Registration and editing",
        "Database safety"
      ],
      "concepts": [
        [
          "Use a supported API",
          "The mysql_* extension is removed. Use MySQLi or PDO. This companion follows the book’s MySQLi approach and sets the connection character set to utf8mb4."
        ],
        [
          "Separate query structure from values",
          "Prepared statements keep values out of SQL syntax. Validation enforces application rules; binding values protects the SQL boundary. Dynamic column or table names still need an allowlist."
        ],
        [
          "A write is more than a query",
          "Validate the request, check authorisation, protect state-changing forms against CSRF, then execute the prepared statement and report a useful outcome. Never expose database credentials or raw errors to users."
        ]
      ],
      "pitfalls": [
        "Escaping HTML is not protection against SQL injection. Use prepared statements for values.",
        "GitHub Pages has no MySQL server. These examples and the complete student register run on your local PHP/MySQL setup."
      ],
      "examples": [
        {
          "id": "8-1",
          "title": "Connect with MySQLi",
          "level": "Local server",
          "code": "<?php\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\ntry {\n    $db = new mysqli(\n        getenv('DB_HOST') ?: '127.0.0.1',\n        getenv('DB_USER') ?: 'root',\n        getenv('DB_PASS') ?: '',\n        'php_companion'\n    );\n    $db->set_charset('utf8mb4');\n    echo 'Database connected.';\n    $db->close();\n} catch (mysqli_sql_exception $e) {\n    error_log($e->getMessage());\n    http_response_code(503);\n    echo 'Database unavailable. Check the local setup.';\n}",
          "output": "Database connected. (with the configured local database running)",
          "why": "Strict MySQLi reporting turns failures into exceptions. The catch logs details privately while the visitor sees a general message.",
          "change": "Stop MySQL and verify the error branch. Configure a dedicated database user before sharing the application.",
          "language": "php",
          "mode": "local"
        },
        {
          "id": "8-2",
          "title": "Create the practice database",
          "level": "Local server",
          "code": "CREATE DATABASE IF NOT EXISTS php_companion\n  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nUSE php_companion;\nCREATE TABLE IF NOT EXISTS students (\n  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n  roll_no VARCHAR(20) NOT NULL UNIQUE,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(254) NOT NULL,\n  course VARCHAR(40) NOT NULL DEFAULT 'BCA'\n);\nINSERT INTO students (roll_no, name, email, course) VALUES\n('BCA601', 'Asha Sharma', 'asha@example.com', 'BCA'),\n('BCA602', 'Ravi Kumar', 'ravi@example.com', 'BCA');",
          "output": "Database php_companion with a students table and two sample rows.",
          "why": "Run the SQL once in phpMyAdmin or a MySQL client. The unique roll number rejects duplicate registrations.",
          "change": "Run SELECT id, roll_no, name FROM students ORDER BY id; after import.",
          "language": "sql",
          "mode": "local"
        },
        {
          "id": "8-3",
          "title": "Fetch and safely display rows",
          "level": "Local server",
          "code": "<?php\nrequire __DIR__ . '/db.php';\n$result = $db->query('SELECT roll_no, name, course FROM students ORDER BY id');\nfunction e(string $s): string {\n    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');\n}\necho '<table><tr><th>Roll</th><th>Name</th><th>Course</th></tr>';\nwhile ($row = $result->fetch_assoc()) {\n    echo '<tr><td>' . e($row['roll_no']) . '</td><td>'\n       . e($row['name']) . '</td><td>' . e($row['course']) . '</td></tr>';\n}\necho '</table>';\n$db->close();",
          "output": "Roll     Name          Course\nBCA601   Asha Sharma   BCA\nBCA602   Ravi Kumar    BCA",
          "why": "fetch_assoc returns a row keyed by column names, or null when no row remains. Every database value is encoded for HTML output.",
          "change": "Add a student whose name contains an apostrophe and verify its display.",
          "language": "php",
          "mode": "local",
          "files": {
            "db.php": "<?php\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$db = new mysqli(getenv('DB_HOST') ?: '127.0.0.1', getenv('DB_USER') ?: 'root', getenv('DB_PASS') ?: '', 'php_companion');\n$db->set_charset('utf8mb4');"
          }
        },
        {
          "id": "8-4",
          "title": "Bind an update value",
          "level": "Local server",
          "code": "<?php\nrequire __DIR__ . '/db.php';\n$id = 1;\n$email = 'asha.new@example.com';\nif ($id < 1 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {\n    exit('Invalid input');\n}\n$stmt = $db->prepare('UPDATE students SET email = ? WHERE id = ?');\n$stmt->bind_param('si', $email, $id);\n$stmt->execute();\necho 'Changed rows: ' . $stmt->affected_rows;\n$stmt->close();\n$db->close();",
          "output": "Changed rows: 1 (or 0 when the stored value is already the same)",
          "why": "The s and i binding types represent string and integer. This focused query example uses fixed inputs; the downloadable student register adds real forms, validation and CSRF checks.",
          "change": "Try a nonexistent id. Explain why zero changed rows does not automatically mean a query failed.",
          "language": "php",
          "mode": "local",
          "files": {
            "db.php": "<?php\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$db = new mysqli(getenv('DB_HOST') ?: '127.0.0.1', getenv('DB_USER') ?: 'root', getenv('DB_PASS') ?: '', 'php_companion');\n$db->set_charset('utf8mb4');"
          }
        }
      ],
      "practice": [
        {
          "type": "Explain",
          "prompt": "Why is SELECT * FROM students WHERE name = '$name' unsafe with request input?",
          "hint": "Input can become SQL syntax.",
          "answer": "A crafted name may alter the query structure. Use SELECT ... WHERE name = ? with a prepared statement and bind the name as a string. Validate according to the application’s rules as well."
        },
        {
          "type": "Build",
          "prompt": "Write a prepared INSERT for roll_no, name and email.",
          "hint": "Use one placeholder per value.",
          "answer": "$stmt=$db->prepare(\"INSERT INTO students (roll_no,name,email) VALUES (?,?,?)\"); $stmt->bind_param(\"sss\",$roll,$name,$email); $stmt->execute(); Validate all three values first and handle a duplicate roll number."
        },
        {
          "type": "Debug",
          "prompt": "A connection succeeds but Indian-language text appears corrupted. What should be checked?",
          "hint": "Consider the entire encoding path.",
          "answer": "Use utf8mb4 for database/table columns and call $db->set_charset(\"utf8mb4\"). Serve HTML as UTF-8 and verify the source data was stored correctly rather than merely changing its display."
        },
        {
          "type": "Apply",
          "prompt": "An update reports affected_rows = 0. Give two possible explanations.",
          "hint": "A successful query need not change a record.",
          "answer": "No row matched the WHERE condition, or the matching row already contained the supplied value. Check whether the row exists if the interface must distinguish these cases."
        },
        {
          "type": "Test",
          "prompt": "Design tests for a student registration form backed by a UNIQUE roll number.",
          "hint": "Include input failures and database constraints.",
          "answer": "Test a valid registration, missing name, invalid email, duplicate roll, an HTML-like name, and a database outage. Check stored values, safe output and useful messages without credential leakage."
        },
        {
          "type": "Viva",
          "prompt": "Why should a database exception be logged instead of echoed in full?",
          "hint": "Think about the audience for technical details.",
          "answer": "A raw exception can reveal schema, hostnames and operational details. Log it for diagnosis and return a general user-facing message with an appropriate response status."
        }
      ],
      "quiz": [
        {
          "question": "Which PHP database API is supported in PHP 8?",
          "options": [
            "mysql_connect",
            "MySQLi",
            "mysql_query",
            "mysql_fetch_row from the removed extension"
          ],
          "answer": 1,
          "explanation": "MySQLi and PDO are supported alternatives to the removed mysql_* extension."
        },
        {
          "question": "What does a placeholder protect?",
          "options": [
            "The separation of SQL syntax and bound values",
            "All possible dynamic table names automatically",
            "The user’s network connection",
            "HTML output"
          ],
          "answer": 0,
          "explanation": "Prepared statement placeholders represent values, not arbitrary SQL identifiers."
        },
        {
          "question": "Which retrieves a row with column-name keys?",
          "options": [
            "fetch_assoc",
            "fetch_text",
            "get_record_keys",
            "echo_row"
          ],
          "answer": 0,
          "explanation": "fetch_assoc returns an associative row."
        },
        {
          "question": "Which bind_param type string suits an email then an integer id?",
          "options": [
            "is",
            "ss",
            "si",
            "ii"
          ],
          "answer": 2,
          "explanation": "s binds the email as a string and i binds the id as an integer."
        },
        {
          "question": "Which should encode a database name before HTML display?",
          "options": [
            "htmlspecialchars",
            "mysqli_connect",
            "bind_param",
            "sort"
          ],
          "answer": 0,
          "explanation": "Database content can also contain untrusted HTML-significant characters."
        }
      ]
    },
    {
      "n": 9,
      "title": "Sessions and Cookies",
      "short": "Remembering state",
      "description": "Understand where state lives and practise safe session and cookie lifecycles.",
      "topics": [
        "Stateless HTTP",
        "Session variables",
        "Encoding and decoding",
        "Ending a session",
        "Creating cookies",
        "Expiry and deletion"
      ],
      "concepts": [
        [
          "The browser carries an identifier",
          "A typical PHP session stores values on the server and gives the browser a session identifier in a cookie. Possession of the identifier can grant access to that session."
        ],
        [
          "Headers precede the body",
          "session_start and setcookie may send HTTP headers. Call them before output. A newly sent cookie appears in $_COOKIE only on a later request after the browser returns it."
        ],
        [
          "Ending state has several steps",
          "Clear session data, remove the session cookie using matching attributes, and destroy stored session data. Cookie deletion requires the same name, path and domain as creation."
        ]
      ],
      "pitfalls": [
        "Do not store passwords in ordinary cookies. Use Secure on HTTPS, HttpOnly where scripts do not need access, and an appropriate SameSite setting.",
        "The lab demonstrates session values inside an isolated runtime. It does not establish a login session with a real PHP web server."
      ],
      "examples": [
        {
          "id": "9-1",
          "title": "Create and retrieve session values",
          "level": "Start here",
          "code": "<?php\nsession_start();\n$_SESSION['student'] = 'Asha';\n$_SESSION['course'] = 'BCA';\necho 'Student: ' . $_SESSION['student'] . \"\\n\";\necho 'Course: ' . $_SESSION['course'];\nsession_write_close();",
          "output": "Student: Asha\nCourse: BCA",
          "why": "session_start opens session storage. Assigning keys creates or changes session values. This isolated run demonstrates access within one request.",
          "change": "Download the example and separate assignment and retrieval into two pages on localhost.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "9-2",
          "title": "Encode and decode session data",
          "level": "Build on it",
          "code": "<?php\nsession_start();\n$_SESSION = ['student' => 'Asha', 'visits' => 3];\n$encoded = session_encode();\n$_SESSION = [];\nsession_decode($encoded);\necho $_SESSION['student'] . ': ' . $_SESSION['visits'];\nsession_write_close();",
          "output": "Asha: 3",
          "why": "session_encode uses the configured session serialisation format; session_decode restores it into the active session. This is not encryption.",
          "change": "Add a cart array, encode it, and inspect the restored value using print_r.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "9-3",
          "title": "Set a preference cookie",
          "level": "Local server",
          "code": "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $theme = $_POST['theme'] ?? '';\n    if (!in_array($theme, ['light', 'dark'], true)) {\n        http_response_code(422); exit('Invalid theme');\n    }\n    setcookie('theme', $theme, [\n        'expires' => time() + 30 * 24 * 60 * 60,\n        'path' => '/',\n        'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',\n        'httponly' => true,\n        'samesite' => 'Lax'\n    ]);\n    echo 'Preference sent. ';\n}\necho 'Cookie received with this request: ';\necho htmlspecialchars($_COOKIE['theme'] ?? '(not received yet)', ENT_QUOTES, 'UTF-8');",
          "output": "First POST on a fresh browser: Preference sent. Cookie received with this request: (not received yet)\nNext GET: Cookie received with this request: dark (if dark was selected)",
          "why": "Only POST sets the preference, so a later GET does not overwrite it. setcookie sends a response header and does not immediately change the current request’s $_COOKIE array. The browser returns the stored cookie with a later request. The allowlist limits accepted preferences.",
          "change": "Run on localhost, post theme=dark, and inspect the next request’s cookie.",
          "language": "php",
          "mode": "local",
          "files": {
            "form.html": "<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><title>Cookie preference</title><form action=\"main.php\" method=\"post\"><label>Theme <select name=\"theme\"><option>light</option><option>dark</option></select></label><button>Save preference</button></form></html>"
          }
        },
        {
          "id": "9-4",
          "title": "End a session and remove its cookie",
          "level": "Local server",
          "code": "<?php\nsession_start();\n$_SESSION = [];\nif (ini_get('session.use_cookies')) {\n    $p = session_get_cookie_params();\n    setcookie(session_name(), '', [\n        'expires' => time() - 3600,\n        'path' => $p['path'],\n        'domain' => $p['domain'],\n        'secure' => $p['secure'],\n        'httponly' => $p['httponly'],\n        'samesite' => $p['samesite'] ?: 'Lax'\n    ]);\n}\nsession_destroy();\necho 'Session ended.';",
          "output": "Session ended.",
          "why": "Clearing $_SESSION, expiring the browser’s identifier cookie, and destroying session storage address different parts of logout.",
          "change": "Create a session on one local page, run this page, then revisit the protected page.",
          "language": "php",
          "mode": "local"
        }
      ],
      "practice": [
        {
          "type": "Explain",
          "prompt": "Why does $_COOKIE[\"theme\"] not immediately contain a value just passed to setcookie?",
          "hint": "Requests and responses are separate.",
          "answer": "$_COOKIE contains cookies received with the current request. setcookie adds a response header for the browser to process and return with a later matching request."
        },
        {
          "type": "Build",
          "prompt": "Create a cookie that lasts 7 days and is available across the site.",
          "hint": "Seconds determine the expiry; path determines scope.",
          "answer": "Use setcookie(\"preference\", \"compact\", [\"expires\"=>time()+7*24*60*60,\"path\"=>\"/\",\"httponly\"=>true,\"samesite\"=>\"Lax\",\"secure\"=>true]) on HTTPS, before output. For plain localhost, Secure requires adjustment."
        },
        {
          "type": "Debug",
          "prompt": "Why does echo \"Welcome\"; session_start(); risk a headers-already-sent warning?",
          "hint": "The session may need to send a cookie.",
          "answer": "Output may commit HTTP response headers before session_start tries to send session headers. Start the session before any output, including whitespace in included files."
        },
        {
          "type": "Compare",
          "prompt": "Where is a typical session value stored, and where is an ordinary cookie value stored?",
          "hint": "Distinguish the session identifier from its data.",
          "answer": "Session values are stored on the server using the configured handler. The browser usually holds only their session identifier. Ordinary cookie values are stored in the browser and returned in matching requests."
        },
        {
          "type": "Apply",
          "prompt": "A cookie created with path=/course remains after deletion with path=/. Explain.",
          "hint": "Cookie identity includes scope.",
          "answer": "Those paths identify different scoped cookies. Expire the cookie using its original name, path and domain; the browser must receive that deletion response."
        },
        {
          "type": "Viva",
          "prompt": "What should happen to the session identifier after a successful login?",
          "hint": "A pre-login identifier should not carry over unchanged.",
          "answer": "Regenerate it, commonly with session_regenerate_id(true), after authentication to reduce session fixation risk. Also use appropriate session cookie attributes and access controls."
        }
      ],
      "quiz": [
        {
          "question": "Which starts or resumes a PHP session?",
          "options": [
            "session_open_page()",
            "session_start()",
            "start_cookie()",
            "$_SESSION()"
          ],
          "answer": 1,
          "explanation": "session_start activates the session and reads its stored data."
        },
        {
          "question": "Where do typical PHP session values live?",
          "options": [
            "In the CSS file",
            "In server-side session storage",
            "Only in the URL",
            "Inside every HTML element"
          ],
          "answer": 1,
          "explanation": "The browser generally carries the identifier, not the full session data."
        },
        {
          "question": "When should setcookie normally be called?",
          "options": [
            "After all HTML",
            "Before output is sent",
            "Only in JavaScript",
            "After closing the database"
          ],
          "answer": 1,
          "explanation": "It sets response headers, which must precede the response body."
        },
        {
          "question": "Does session_encode encrypt data?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 1,
          "explanation": "It serialises the session using the configured format; serialisation is not encryption."
        },
        {
          "question": "How is a cookie normally deleted?",
          "options": [
            "Set its expiry in the past with matching scope",
            "Unset a local variable only",
            "Refresh the page",
            "Call trim on its value"
          ],
          "answer": 0,
          "explanation": "A matching expired Set-Cookie response instructs the browser to remove it."
        }
      ]
    },
    {
      "n": 10,
      "title": "Error and Exceptional Handling",
      "short": "Debugging & recovery",
      "description": "Read failure signals, throw meaningful exceptions, and recover at the right boundary.",
      "topics": [
        "Errors and exceptions",
        "Warnings and parse errors",
        "try, catch and finally",
        "throw",
        "Custom exceptions",
        "Multiple catch blocks",
        "Database failures"
      ],
      "concepts": [
        [
          "Some failures are throwable",
          "PHP 8 has an Error hierarchy and an Exception hierarchy under Throwable. Ordinary warnings are not automatically caught by catch(Exception). Read the actual failure category."
        ],
        [
          "Catch what you can handle",
          "A specific catch can recover from an expected problem. Put more specific exception types before general ones. If recovery is not possible, log details and produce a controlled failure."
        ],
        [
          "Debug systematically",
          "Reproduce the failure, inspect the message and location, reduce the input, test a hypothesis, then verify the correction and relevant boundaries. Show detailed errors during local development; log them privately in production."
        ]
      ],
      "pitfalls": [
        "A parse error in the same file prevents that file from executing its own try block.",
        "finally runs after try/catch during normal exception flow, but is not a guarantee against process termination such as exit or a crash."
      ],
      "examples": [
        {
          "id": "10-1",
          "title": "Throw, catch and finally",
          "level": "Start here",
          "code": "<?php\nfunction divide(float $a, float $b): float {\n    if ($b == 0.0) {\n        throw new InvalidArgumentException('Divisor must not be zero');\n    }\n    return $a / $b;\n}\ntry {\n    echo divide(18, 0);\n} catch (InvalidArgumentException $e) {\n    echo $e->getMessage() . \"\\n\";\n} finally {\n    echo 'Calculation finished.';\n}",
          "output": "Divisor must not be zero\nCalculation finished.",
          "why": "The thrown exception skips the remaining try statements. The matching catch handles it and finally completes the common cleanup path.",
          "change": "Change the divisor to 3 and predict both output lines.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "10-2",
          "title": "A custom exception",
          "level": "Build on it",
          "code": "<?php\nclass InvalidMarkException extends Exception {}\nfunction validateMark(int $mark): void {\n    if ($mark < 0 || $mark > 100) {\n        throw new InvalidMarkException('Mark must be between 0 and 100');\n    }\n}\ntry {\n    validateMark(120);\n    echo 'Mark accepted';\n} catch (InvalidMarkException $e) {\n    echo $e->getMessage();\n}",
          "output": "Mark must be between 0 and 100",
          "why": "The application-specific type identifies a particular validation failure while inheriting the standard exception behaviour.",
          "change": "Test -1, 0, 100 and 101.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "10-3",
          "title": "Choose the matching catch",
          "level": "Explore",
          "code": "<?php\ntry {\n    $mode = 'range';\n    if ($mode === 'range') {\n        throw new OutOfRangeException('Record number is out of range');\n    }\n    throw new RuntimeException('Operation failed');\n} catch (OutOfRangeException $e) {\n    echo 'Range: ' . $e->getMessage();\n} catch (RuntimeException $e) {\n    echo 'Runtime: ' . $e->getMessage();\n} catch (Throwable $e) {\n    echo 'Unexpected failure';\n}",
          "output": "Range: Record number is out of range",
          "why": "PHP selects the first compatible catch. A broad Throwable catch belongs after catches for expected specific failures.",
          "change": "Change mode to \"runtime\" and compare the selected catch.",
          "language": "php",
          "mode": "browser"
        },
        {
          "id": "10-4",
          "title": "Recover from a database outage",
          "level": "Local server",
          "code": "<?php\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\ntry {\n    $db = new mysqli(\n        getenv('DB_HOST') ?: '127.0.0.1',\n        getenv('DB_USER') ?: 'root',\n        getenv('DB_PASS') ?: '',\n        'php_companion'\n    );\n    $db->set_charset('utf8mb4');\n    echo 'Database connected.';\n    $db->close();\n} catch (mysqli_sql_exception $e) {\n    error_log($e->getMessage());\n    http_response_code(503);\n    echo 'Database unavailable. Check the local setup.';\n}",
          "output": "Database unavailable. Check the local setup. (when connection fails)",
          "why": "mysqli_report enables exception-based MySQLi failures. The catch keeps raw connection details out of the response. The same script shows success when the database is available.",
          "change": "Test both a stopped database service and a valid connection. Inspect the PHP error log.",
          "language": "php",
          "mode": "local"
        }
      ],
      "practice": [
        {
          "type": "Classify",
          "prompt": "A script has a missing semicolon, reads an absent array key, then divides by zero. Do these all fail in the same way?",
          "hint": "Consider parsing versus execution.",
          "answer": "No. A missing semicolon can cause a parse error before execution. An absent array key normally raises a warning in PHP 8. Division by zero can throw DivisionByZeroError. The first encountered failure may prevent later statements from running."
        },
        {
          "type": "Build",
          "prompt": "Throw a custom InvalidAgeException for an age below 18, then catch it.",
          "hint": "Extend Exception and throw an instance.",
          "answer": "class InvalidAgeException extends Exception {} if($age<18){throw new InvalidAgeException(\"Minimum age is 18\");} Put the check in try and catch InvalidAgeException to display a suitable message."
        },
        {
          "type": "Debug",
          "prompt": "Why is catch(Throwable $e) before catch(InvalidArgumentException $e) a problem?",
          "hint": "The first compatible handler wins.",
          "answer": "Throwable already matches InvalidArgumentException, so the later specific catch cannot handle it. Put specific types first and a broad fallback last."
        },
        {
          "type": "Explain",
          "prompt": "Will catch(Exception $e) automatically catch an undefined array key warning?",
          "hint": "A warning is not an exception object by default.",
          "answer": "No. Ordinary warnings are not automatically Exception objects. Prevent the missing-key access with a deliberate default or existence check. An explicit error handler can convert selected warnings when appropriate."
        },
        {
          "type": "Test",
          "prompt": "List tests for a division function that rejects a zero divisor.",
          "hint": "Cover successful and exceptional paths.",
          "answer": "Test positive divisor, negative divisor, zero numerator with non-zero divisor, zero divisor, and fractional values. Verify returned results, exception type, message and cleanup behaviour."
        },
        {
          "type": "Viva",
          "prompt": "What is a useful debugging sequence after a student reports a blank page?",
          "hint": "Collect evidence before changing unrelated code.",
          "answer": "Reproduce with the same input and environment, inspect the server error log, locate the failing line, isolate a small case, fix the cause, and retest the failing case plus nearby valid and invalid cases."
        }
      ],
      "quiz": [
        {
          "question": "Which is the common interface of Error and Exception?",
          "options": [
            "Throwable",
            "Warning",
            "Catchable",
            "Failure"
          ],
          "answer": 0,
          "explanation": "Throwable covers both main throwable hierarchies in PHP."
        },
        {
          "question": "Which keyword raises an exception?",
          "options": [
            "try",
            "throw",
            "catch",
            "finally"
          ],
          "answer": 1,
          "explanation": "throw transfers control using a Throwable object."
        },
        {
          "question": "Which catch belongs first?",
          "options": [
            "Throwable",
            "Exception",
            "The most specific expected type",
            "Any order is identical"
          ],
          "answer": 2,
          "explanation": "The first matching catch runs, so specific types should precede broad ones."
        },
        {
          "question": "When does finally normally run?",
          "options": [
            "Only if no exception occurs",
            "After try/catch on normal completion or exception handling",
            "Only before try",
            "Only for warnings"
          ],
          "answer": 1,
          "explanation": "finally handles common cleanup during normal structured control flow."
        },
        {
          "question": "What should a public page show for a database outage?",
          "options": [
            "The password and raw stack trace",
            "A controlled message, with details logged privately",
            "All environment variables",
            "The connection source code"
          ],
          "answer": 1,
          "explanation": "Detailed diagnostics belong in private logs; the user needs a useful general response."
        }
      ]
    }
  ],
  "practicals": [
    {
      "n": 1,
      "chapter": 2,
      "title": "Print name, course, date and time",
      "example": "2-1"
    },
    {
      "n": 2,
      "chapter": 2,
      "title": "Demonstrate variables and constants",
      "example": "2-2"
    },
    {
      "n": 3,
      "chapter": 2,
      "title": "Perform arithmetic operations",
      "example": "2-3"
    },
    {
      "n": 4,
      "chapter": 3,
      "title": "Check whether a number is even or odd",
      "example": "3-1"
    },
    {
      "n": 5,
      "chapter": 3,
      "title": "Find the greatest of three using nested if",
      "example": "3-1"
    },
    {
      "n": 6,
      "chapter": 3,
      "title": "Print the weekday using switch",
      "example": "3-2"
    },
    {
      "n": 7,
      "chapter": 3,
      "title": "Print a multiplication table",
      "example": "3-3"
    },
    {
      "n": 8,
      "chapter": 5,
      "title": "Create and display three array types",
      "example": "5-1"
    },
    {
      "n": 9,
      "chapter": 5,
      "title": "Demonstrate array iteration and pointer functions",
      "example": "5-2"
    },
    {
      "n": 10,
      "chapter": 6,
      "title": "Demonstrate string cleanup functions",
      "example": "6-2"
    },
    {
      "n": 11,
      "chapter": 6,
      "title": "Demonstrate string case functions",
      "example": "6-3"
    },
    {
      "n": 12,
      "chapter": 5,
      "title": "Write a largest-value array function",
      "example": "5-3"
    },
    {
      "n": 13,
      "chapter": 4,
      "title": "Demonstrate include",
      "example": "4-3"
    },
    {
      "n": 14,
      "chapter": 4,
      "title": "Demonstrate require",
      "example": "4-4"
    },
    {
      "n": 15,
      "chapter": 7,
      "title": "Submit and display GET/POST form data",
      "example": "7-2"
    },
    {
      "n": 16,
      "chapter": 8,
      "title": "Connect to MySQL",
      "example": "8-1"
    },
    {
      "n": 17,
      "chapter": 8,
      "title": "Register a student in a database",
      "example": "project"
    },
    {
      "n": 18,
      "chapter": 8,
      "title": "Display records in an HTML table",
      "example": "8-3"
    },
    {
      "n": 19,
      "chapter": 7,
      "title": "Upload an image with validation",
      "example": "7-4"
    },
    {
      "n": 20,
      "chapter": 9,
      "title": "Create a cookie with an expiry",
      "example": "9-3"
    },
    {
      "n": 21,
      "chapter": 9,
      "title": "Set a cookie using form input",
      "example": "9-3"
    },
    {
      "n": 22,
      "chapter": 9,
      "title": "Retrieve and display a session variable",
      "example": "9-1"
    },
    {
      "n": 23,
      "chapter": 10,
      "title": "Handle a database connection exception",
      "example": "10-4"
    },
    {
      "n": 24,
      "chapter": 10,
      "title": "Handle multiple exception types",
      "example": "10-3"
    },
    {
      "n": 25,
      "chapter": 10,
      "title": "Create and throw a custom exception",
      "example": "10-2"
    }
  ]
};
