# PHP Companion — practice and quiz bank

BCA Semester VI · Website Development Using PHP

New companion exercises aligned to the supplied ten-chapter edition.


## Chapter 1 — Introduction to Server-Side Scripting and PHP

### Practice questions


1. [Explain] Trace a request for http://localhost/course/index.php from the browser to the displayed page.

   Hint: Name the browser, web server and interpreter.

   Suggested answer: The browser sends an HTTP request to the local web server. The server maps the URL to index.php, passes it to PHP, and returns the generated response. The browser renders the HTML response.


2. [Apply] A PHP file opens as text when double-clicked. Give a diagnosis and a correction.

   Hint: Examine the URL scheme.

   Suggested answer: It was opened with file:// or a server without PHP support. Start the PHP-capable web server and request the file through http://localhost/project/file.php.


3. [Compare] Can a static page contain an interactive menu? Explain.

   Hint: Separate response generation from browser behaviour.

   Suggested answer: Yes. A prewritten HTML response can include JavaScript that handles a menu in the browser. That interaction does not require server-side generation.


4. [Debug] localhost returns 404 for hello.php even though Apache is running. What should you check?

   Hint: Check the mapping between disk and URL.

   Suggested answer: Verify the configured document root, project folder, filename including case, and URL path. Also check that the request is reaching the intended server and port.


5. [Build] Create a course welcome page with a fixed heading and a PHP-generated student greeting.

   Hint: Use HTML around a PHP block.

   Suggested answer: Keep the fixed heading in HTML. Read a name with a default, escape it with htmlspecialchars, and echo it inside the greeting. Test a missing name and a name containing <.


6. [Viva] Why does View Source usually not show the original PHP statements?

   Hint: Consider where execution happens.

   Suggested answer: PHP executes on the server before the response is sent. View Source shows the response body, which normally contains generated HTML rather than PHP source.


### Quick quiz


1. Which component executes PHP in a typical Apache setup?
   A. The visitor’s CSS engine
   B. The PHP interpreter on the server
   C. The HTML validator
   D. The DNS resolver

   Answer: B. The web server passes PHP scripts to a PHP interpreter and returns their output.


2. Which URL normally executes a local XAMPP project?
   A. file:///project/index.php
   B. http://localhost/project/index.php
   C. mailto:index.php
   D. php://localhost/project

   Answer: B. An HTTP request reaches the running local server. A file URL bypasses it.


3. A dynamically generated page must change on every refresh.
   A. True
   B. False

   Answer: B. The server can generate the same response repeatedly from unchanged data.


4. What does a document root define?
   A. The browser download folder
   B. The folder mapped to the web server’s URL root
   C. The MySQL password
   D. The PHP variable scope

   Answer: B. The server maps URL paths to files under its configured document root.


5. What does a normal client receive after PHP runs?
   A. The generated response body
   B. The original PHP password variables
   C. The entire server filesystem
   D. The PHP interpreter binary

   Answer: A. Only the response produced by the application is sent to the client.


## Chapter 2 — PHP Basics

### Practice questions


1. [Predict] What does echo 7 + 2 * 3; display? What if it is echo (7 + 2) * 3;?

   Hint: Multiplication binds first.

   Suggested answer: The first expression displays 13. The parenthesised expression displays 27.


2. [Debug] Repair: name = "Asha"; echo $Name;

   Hint: Check variable syntax and case.

   Suggested answer: $name = "Asha"; echo $name; Variable names need $ and must use consistent letter case.


3. [Build] Calculate a bill for 3 items at ₹125.50 each with 5% GST. Display two decimal places.

   Hint: Compute subtotal, tax, then total.

   Suggested answer: Subtotal = 376.50; GST = 18.825; total = 395.325. number_format($total, 2) displays 395.33 with normal PHP rounding. Keep unrounded values until display.


4. [Explain] Compare echo and print in terms of return value and arguments.

   Hint: Both are language constructs.

   Suggested answer: echo has no return value and accepts multiple comma-separated expressions. print accepts one expression and returns 1. Both write output.


5. [Apply] Define a fixed maximum score and calculate a percentage from a variable mark.

   Hint: Use const for the maximum.

   Suggested answer: const MAX_SCORE = 80; $mark = 60; $percentage = $mark / MAX_SCORE * 100; gives 75. Validate that marks are within range before calculation.


6. [Viva] Why should a form value "0" not be checked only with if ($value)?

   Hint: Consider falsy values.

   Suggested answer: The string "0" is falsy in PHP. Test whether the key exists and validate its value explicitly rather than treating false-like values as missing.


### Quick quiz


1. Which variable name is valid?
   A. $2name
   B. $student_name
   C. student$name
   D. $student-name

   Answer: B. A variable name cannot begin with a digit; an underscore is allowed.


2. What is the result of "5" === 5?
   A. true
   B. false
   C. 5
   D. A syntax error

   Answer: B. The types differ, so strict equality is false.


3. Which operator concatenates strings?
   A. +
   B. &
   C. .
   D. ::

   Answer: C. The dot operator joins strings in PHP.


4. How is const MAX = 100; referenced?
   A. $MAX
   B. MAX
   C. const(MAX)
   D. @MAX

   Answer: B. Constants are used without a dollar sign.


5. Which comment can span several lines?
   A. // comment
   B. # comment
   C. /* comment */
   D. <!-- PHP -->

   Answer: C. The /* ... */ syntax supports block comments inside PHP.


## Chapter 3 — Control Structures

### Practice questions


1. [Trace] Trace $i=1; while($i<5){ echo $i; $i+=2; }

   Hint: List $i before every condition test.

   Suggested answer: Tests occur with 1, 3 and 5. The body prints 1 and 3, so the output is 13.


2. [Build] Classify a mark: 75+ Distinction, 60–74 First, 40–59 Pass, below 40 Fail. Reject values outside 0–100.

   Hint: Reject invalid values before grade selection.

   Suggested answer: Check $mark < 0 || $mark > 100 first. Then use descending thresholds >=75, >=60, >=40, else Fail. Test -1, 0, 39, 40, 59, 60, 74, 75, 100 and 101.


3. [Debug] Why does if ($marks = 40) always appear to pass?

   Hint: An assignment expression also has a value.

   Suggested answer: = assigns 40, whose truth value is true. Use $marks >= 40 for a pass threshold or $marks === 40 for strict equality.


4. [Build] Find the sum of even integers from 1 to 20 using a loop.

   Hint: Either step by 2 or test the remainder.

   Suggested answer: Set $sum=0; for($i=2;$i<=20;$i+=2){$sum+=$i;} The result is 110.


5. [Compare] When can do-while run once while while runs zero times?

   Hint: Consider an initially false condition.

   Suggested answer: while checks first and skips its body when false. do-while executes the body first and checks afterwards, so it performs at least one iteration.


6. [Viva] How would you recognise and repair an infinite while loop?

   Hint: Identify what changes the condition.

   Suggested answer: Trace the variables used in the condition. Ensure the body updates them toward termination on every relevant path; a continue before the update can prevent this.


### Quick quiz


1. Which loop always executes its body at least once?
   A. for
   B. while
   C. do-while
   D. foreach

   Answer: C. do-while tests its condition after the body.


2. Which statement skips the current iteration?
   A. break
   B. continue
   C. return true
   D. switch

   Answer: B. continue moves to the next loop iteration.


3. How many times does for($i=0;$i<3;$i++) run?
   A. 2
   B. 3
   C. 4
   D. 0

   Answer: B. The body runs with 0, 1 and 2.


4. What should test a pass mark of at least 40?
   A. $mark = 40
   B. $mark > 40
   C. $mark >= 40
   D. $mark < 40

   Answer: C. At least includes the boundary value 40.


5. What normally prevents switch fall-through?
   A. continue 0
   B. break
   C. default at the top
   D. A comma

   Answer: B. break exits the switch after the selected case.


## Chapter 4 — Functions

### Practice questions


1. [Build] Write a function that converts Celsius to Fahrenheit and returns the result.

   Hint: Use F = C × 9/5 + 32.

   Suggested answer: function fahrenheit(float $c): float { return $c * 9 / 5 + 32; } Check 0 → 32 and 100 → 212.


2. [Explain] Distinguish formal and actual parameters using add(4, 6).

   Hint: One belongs to the definition; one to the call.

   Suggested answer: In function add($a,$b), $a and $b are formal parameters. In add(4,6), the supplied arguments 4 and 6 are actual parameters.


3. [Debug] A function echoes a total, but $result = total(2,3) gives null. Why?

   Hint: A displayed result is not a returned result.

   Suggested answer: Without return, a function normally returns null. Replace echo with return $a + $b; and display the returned value at the call site.


4. [Apply] A required database configuration is missing. Choose include or require and justify.

   Hint: Should the application continue without configuration?

   Suggested answer: Use require (usually require_once) because the application cannot work correctly without its configuration. Handle failures at an appropriate boundary rather than silently proceeding.


5. [Build] Use a shared footer on two PHP pages. Make the path independent of the current working directory.

   Hint: Build the path with __DIR__.

   Suggested answer: Place footer.php beside the pages and use include __DIR__ . "/footer.php"; in each page. __DIR__ is the directory of the file containing that expression.


6. [Viva] When should a function return a value instead of printing it?

   Hint: Think of testing and reuse.

   Suggested answer: Return when callers need to calculate with, validate, test or format the result. Printing ties the function to one output format and makes reuse harder.


### Quick quiz


1. What sends a result back to a caller?
   A. echo
   B. return
   C. include
   D. global

   Answer: B. return ends the current function and supplies its result.


2. A variable defined inside a function is normally…
   A. available everywhere
   B. local to that function
   C. a constant
   D. a superglobal

   Answer: B. Function scope is local unless a sharing mechanism is explicitly used.


3. Which construct prevents loading a required file twice?
   A. require_once
   B. include_all
   C. load_once
   D. require_many

   Answer: A. require_once checks whether the file has already been included.


4. What is strlen("BCA")?
   A. 2
   B. 3
   C. 4
   D. BCA

   Answer: B. strlen counts bytes; these three ASCII letters occupy three bytes.


5. Which is a stable path to a sibling file?
   A. $_GET["file"]
   B. "http://localhost"
   C. __DIR__ . "/helpers.php"
   D. PHP_VERSION

   Answer: C. __DIR__ anchors the path to the containing file.


## Chapter 5 — Arrays

### Practice questions


1. [Build] Store three products with name and price, then print a total.

   Hint: Use a list of associative arrays.

   Suggested answer: Create $products = [["name"=>"Notebook","price"=>50], ...]; start $total=0 and add each row’s price inside foreach. Use number_format for display.


2. [Modernise] Replace while (list($key,$value) = each($data)) { echo "$key: $value"; }.

   Hint: The replacement needs no internal pointer.

   Suggested answer: foreach ($data as $key => $value) { echo "$key: $value"; } each() is unavailable in PHP 8.


3. [Debug] A largest-value function starts with $largest=0 and receives [-9,-2,-5]. Why is its answer wrong?

   Hint: Does the initial candidate belong to the input?

   Suggested answer: Zero is larger than every input but is not an input element. Initialise from the first existing value and reject or otherwise handle an empty array. The correct result is -2.


4. [Predict] After $a=[10,20,30]; next($a); end($a); prev($a); what does current($a) return?

   Hint: Track the internal pointer.

   Suggested answer: 20. next selects 20, end selects 30, and prev returns to 20.


5. [Compare] Choose sort, asort or ksort for student-name keys ordered by ascending marks.

   Hint: The relationship between names and marks must remain intact.

   Suggested answer: Use asort. sort reindexes the values and loses the name keys; ksort orders by names rather than marks.


6. [Viva] Why is if(array_search("PHP",$subjects)) unreliable?

   Hint: Consider a match at index 0.

   Suggested answer: Index 0 is falsy, so the condition misclassifies the first element as missing. Store the result and compare it with !== false, preferably using strict search mode.


### Quick quiz


1. Which is an associative array entry?
   A. 0, 1, 2
   B. "name" => "Asha"
   C. "name" := "Asha"
   D. name::Asha

   Answer: B. The => syntax maps a key to a value.


2. Which function resets the internal pointer?
   A. first()
   B. reset()
   C. rewind_array()
   D. start()

   Answer: B. reset moves to the first element and returns its value.


3. What replaces each() in PHP 8 traversal code?
   A. foreach
   B. goto
   C. mysql_fetch_array
   D. echo

   Answer: A. foreach directly exposes each key and value without each().


4. Which sort preserves associations and orders by values?
   A. sort
   B. asort
   C. ksort
   D. shuffle

   Answer: B. asort sorts values while keeping their original keys.


5. How many top-level elements are in [[1,2],[3,4]]?
   A. 2
   B. 4
   C. 1
   D. 0

   Answer: A. There are two outer elements; each contains a two-element inner array.


## Chapter 6 — Strings

### Practice questions


1. [Predict] What does strlen("BCA PHP") return?

   Hint: Spaces also occupy bytes.

   Suggested answer: 7 for this ASCII string: three letters, one space, and three letters.


2. [Build] Normalise "  bca-vi  " to "BCA-VI".

   Hint: Clean the ends before changing case.

   Suggested answer: $code = strtoupper(trim("  bca-vi  ")); The result is BCA-VI.


3. [Debug] Why does if(strpos($text,"PHP")) fail when $text begins with PHP?

   Hint: The successful result can be zero.

   Suggested answer: strpos returns integer 0 for a match at the beginning, which is falsy. Use strpos($text,"PHP") !== false.


4. [Build] Split "PHP,SQL,HTML" and display one subject per line.

   Hint: Turn the string into a collection first.

   Suggested answer: foreach (explode(",", $text) as $subject) { echo trim($subject) . "\n"; } Trim handles optional spaces around separators.


5. [Explain] Does trim make a submitted name safe to insert inside HTML?

   Hint: Cleaning and output encoding solve different problems.

   Suggested answer: No. trim only removes specified edge characters. Use htmlspecialchars($name, ENT_QUOTES, "UTF-8") when inserting the name into an HTML text or quoted attribute context.


6. [Viva] Why might strlen report more bytes than the number of letters in an Indian-language name?

   Hint: Recall UTF-8 representation.

   Suggested answer: UTF-8 encodes many characters using multiple bytes. strlen counts bytes rather than letters or grapheme clusters. Choose mb_strlen or a grapheme-aware function for the actual requirement.


### Quick quiz


1. Which form interpolates $name?
   A. 'Hello $name'
   B. "Hello $name"
   C. Both always
   D. Neither

   Answer: B. Double quotes interpolate variable values.


2. Which removes edge whitespace?
   A. stripos
   B. trim
   C. strtoupper
   D. implode

   Answer: B. trim removes leading and trailing whitespace by default.


3. What indicates no match from strpos?
   A. 0
   B. -1
   C. false
   D. An empty array

   Answer: C. false means absent; 0 means found at the beginning.


4. Which joins an array of strings?
   A. explode
   B. implode
   C. substr
   D. strlen

   Answer: B. implode takes a separator and combines array elements.


5. What does strtoupper("php") return?
   A. php
   B. Php
   C. PHP
   D. true

   Answer: C. For these ASCII letters, strtoupper returns uppercase PHP.


## Chapter 7 — Working with Forms and User Input

### Practice questions


1. [Compare] Choose a method for a shareable catalogue search and for submitting a registration.

   Hint: One retrieves; the other changes state.

   Suggested answer: Use GET for a bookmarkable retrieval query and POST for registration. Use HTTPS for both when carrying sensitive data. POST alone does not encrypt data.


2. [Debug] Why is an input with id="email" but no name absent from $_POST?

   Hint: The label connection and submitted key are different attributes.

   Suggested answer: Successful form controls are submitted using their name attribute. Add name="email"; id only identifies the element in the document.


3. [Build] Validate an age as an integer from 18 to 60, including both endpoints.

   Hint: Distinguish false from integer zero.

   Suggested answer: Use filter_var($raw, FILTER_VALIDATE_INT, ["options"=>["min_range"=>18,"max_range"=>60]]) and compare the result with === false. Reject invalid data before storage.


4. [Explain] Why must validation still run in PHP when the HTML input has required and type="email"?

   Hint: A request can be made without your form.

   Suggested answer: Users and tools can bypass or alter client-side constraints. Only the server can enforce the application’s validation rules for all incoming requests.


5. [Test] Design six upload tests for the image handler.

   Hint: Include failures at different stages.

   Suggested answer: Test a small valid JPEG, valid PNG, no file, file above 2 MB, text renamed .jpg, and an unwritable storage directory. Verify clear failure messages and no partial saved file.


6. [Viva] What is the difference between validating a name and escaping it?

   Hint: Meaning versus output context.

   Suggested answer: Validation decides whether the name satisfies application rules. Escaping represents accepted text safely in its output context; HTML escaping prevents input from becoming markup.


### Quick quiz


1. Which attribute supplies the submitted field key?
   A. id
   B. class
   C. name
   D. placeholder

   Answer: C. The name attribute becomes the request key.


2. Where are GET query parameters normally read?
   A. $_POST
   B. $_GET
   C. $_FILES
   D. $_SESSION

   Answer: B. PHP parses the URL query string into $_GET.


3. Does POST by itself encrypt a password?
   A. Yes
   B. No

   Answer: B. HTTPS provides transport encryption; POST only changes how data is carried.


4. Which encodes user text for HTML output?
   A. trim
   B. htmlspecialchars
   C. strtolower
   D. intval

   Answer: B. htmlspecialchars encodes HTML-significant characters.


5. Which form encoding is required for file uploads?
   A. text/plain
   B. application/json
   C. multipart/form-data
   D. text/csv

   Answer: C. multipart/form-data carries uploaded files and other fields.


## Chapter 8 — Database Connectivity

### Practice questions


1. [Explain] Why is SELECT * FROM students WHERE name = '$name' unsafe with request input?

   Hint: Input can become SQL syntax.

   Suggested answer: A crafted name may alter the query structure. Use SELECT ... WHERE name = ? with a prepared statement and bind the name as a string. Validate according to the application’s rules as well.


2. [Build] Write a prepared INSERT for roll_no, name and email.

   Hint: Use one placeholder per value.

   Suggested answer: $stmt=$db->prepare("INSERT INTO students (roll_no,name,email) VALUES (?,?,?)"); $stmt->bind_param("sss",$roll,$name,$email); $stmt->execute(); Validate all three values first and handle a duplicate roll number.


3. [Debug] A connection succeeds but Indian-language text appears corrupted. What should be checked?

   Hint: Consider the entire encoding path.

   Suggested answer: Use utf8mb4 for database/table columns and call $db->set_charset("utf8mb4"). Serve HTML as UTF-8 and verify the source data was stored correctly rather than merely changing its display.


4. [Apply] An update reports affected_rows = 0. Give two possible explanations.

   Hint: A successful query need not change a record.

   Suggested answer: No row matched the WHERE condition, or the matching row already contained the supplied value. Check whether the row exists if the interface must distinguish these cases.


5. [Test] Design tests for a student registration form backed by a UNIQUE roll number.

   Hint: Include input failures and database constraints.

   Suggested answer: Test a valid registration, missing name, invalid email, duplicate roll, an HTML-like name, and a database outage. Check stored values, safe output and useful messages without credential leakage.


6. [Viva] Why should a database exception be logged instead of echoed in full?

   Hint: Think about the audience for technical details.

   Suggested answer: A raw exception can reveal schema, hostnames and operational details. Log it for diagnosis and return a general user-facing message with an appropriate response status.


### Quick quiz


1. Which PHP database API is supported in PHP 8?
   A. mysql_connect
   B. MySQLi
   C. mysql_query
   D. mysql_fetch_row from the removed extension

   Answer: B. MySQLi and PDO are supported alternatives to the removed mysql_* extension.


2. What does a placeholder protect?
   A. The separation of SQL syntax and bound values
   B. All possible dynamic table names automatically
   C. The user’s network connection
   D. HTML output

   Answer: A. Prepared statement placeholders represent values, not arbitrary SQL identifiers.


3. Which retrieves a row with column-name keys?
   A. fetch_assoc
   B. fetch_text
   C. get_record_keys
   D. echo_row

   Answer: A. fetch_assoc returns an associative row.


4. Which bind_param type string suits an email then an integer id?
   A. is
   B. ss
   C. si
   D. ii

   Answer: C. s binds the email as a string and i binds the id as an integer.


5. Which should encode a database name before HTML display?
   A. htmlspecialchars
   B. mysqli_connect
   C. bind_param
   D. sort

   Answer: A. Database content can also contain untrusted HTML-significant characters.


## Chapter 9 — Sessions and Cookies

### Practice questions


1. [Explain] Why does $_COOKIE["theme"] not immediately contain a value just passed to setcookie?

   Hint: Requests and responses are separate.

   Suggested answer: $_COOKIE contains cookies received with the current request. setcookie adds a response header for the browser to process and return with a later matching request.


2. [Build] Create a cookie that lasts 7 days and is available across the site.

   Hint: Seconds determine the expiry; path determines scope.

   Suggested answer: Use setcookie("preference", "compact", ["expires"=>time()+7*24*60*60,"path"=>"/","httponly"=>true,"samesite"=>"Lax","secure"=>true]) on HTTPS, before output. For plain localhost, Secure requires adjustment.


3. [Debug] Why does echo "Welcome"; session_start(); risk a headers-already-sent warning?

   Hint: The session may need to send a cookie.

   Suggested answer: Output may commit HTTP response headers before session_start tries to send session headers. Start the session before any output, including whitespace in included files.


4. [Compare] Where is a typical session value stored, and where is an ordinary cookie value stored?

   Hint: Distinguish the session identifier from its data.

   Suggested answer: Session values are stored on the server using the configured handler. The browser usually holds only their session identifier. Ordinary cookie values are stored in the browser and returned in matching requests.


5. [Apply] A cookie created with path=/course remains after deletion with path=/. Explain.

   Hint: Cookie identity includes scope.

   Suggested answer: Those paths identify different scoped cookies. Expire the cookie using its original name, path and domain; the browser must receive that deletion response.


6. [Viva] What should happen to the session identifier after a successful login?

   Hint: A pre-login identifier should not carry over unchanged.

   Suggested answer: Regenerate it, commonly with session_regenerate_id(true), after authentication to reduce session fixation risk. Also use appropriate session cookie attributes and access controls.


### Quick quiz


1. Which starts or resumes a PHP session?
   A. session_open_page()
   B. session_start()
   C. start_cookie()
   D. $_SESSION()

   Answer: B. session_start activates the session and reads its stored data.


2. Where do typical PHP session values live?
   A. In the CSS file
   B. In server-side session storage
   C. Only in the URL
   D. Inside every HTML element

   Answer: B. The browser generally carries the identifier, not the full session data.


3. When should setcookie normally be called?
   A. After all HTML
   B. Before output is sent
   C. Only in JavaScript
   D. After closing the database

   Answer: B. It sets response headers, which must precede the response body.


4. Does session_encode encrypt data?
   A. Yes
   B. No

   Answer: B. It serialises the session using the configured format; serialisation is not encryption.


5. How is a cookie normally deleted?
   A. Set its expiry in the past with matching scope
   B. Unset a local variable only
   C. Refresh the page
   D. Call trim on its value

   Answer: A. A matching expired Set-Cookie response instructs the browser to remove it.


## Chapter 10 — Error and Exceptional Handling

### Practice questions


1. [Classify] A script has a missing semicolon, reads an absent array key, then divides by zero. Do these all fail in the same way?

   Hint: Consider parsing versus execution.

   Suggested answer: No. A missing semicolon can cause a parse error before execution. An absent array key normally raises a warning in PHP 8. Division by zero can throw DivisionByZeroError. The first encountered failure may prevent later statements from running.


2. [Build] Throw a custom InvalidAgeException for an age below 18, then catch it.

   Hint: Extend Exception and throw an instance.

   Suggested answer: class InvalidAgeException extends Exception {} if($age<18){throw new InvalidAgeException("Minimum age is 18");} Put the check in try and catch InvalidAgeException to display a suitable message.


3. [Debug] Why is catch(Throwable $e) before catch(InvalidArgumentException $e) a problem?

   Hint: The first compatible handler wins.

   Suggested answer: Throwable already matches InvalidArgumentException, so the later specific catch cannot handle it. Put specific types first and a broad fallback last.


4. [Explain] Will catch(Exception $e) automatically catch an undefined array key warning?

   Hint: A warning is not an exception object by default.

   Suggested answer: No. Ordinary warnings are not automatically Exception objects. Prevent the missing-key access with a deliberate default or existence check. An explicit error handler can convert selected warnings when appropriate.


5. [Test] List tests for a division function that rejects a zero divisor.

   Hint: Cover successful and exceptional paths.

   Suggested answer: Test positive divisor, negative divisor, zero numerator with non-zero divisor, zero divisor, and fractional values. Verify returned results, exception type, message and cleanup behaviour.


6. [Viva] What is a useful debugging sequence after a student reports a blank page?

   Hint: Collect evidence before changing unrelated code.

   Suggested answer: Reproduce with the same input and environment, inspect the server error log, locate the failing line, isolate a small case, fix the cause, and retest the failing case plus nearby valid and invalid cases.


### Quick quiz


1. Which is the common interface of Error and Exception?
   A. Throwable
   B. Warning
   C. Catchable
   D. Failure

   Answer: A. Throwable covers both main throwable hierarchies in PHP.


2. Which keyword raises an exception?
   A. try
   B. throw
   C. catch
   D. finally

   Answer: B. throw transfers control using a Throwable object.


3. Which catch belongs first?
   A. Throwable
   B. Exception
   C. The most specific expected type
   D. Any order is identical

   Answer: C. The first matching catch runs, so specific types should precede broad ones.


4. When does finally normally run?
   A. Only if no exception occurs
   B. After try/catch on normal completion or exception handling
   C. Only before try
   D. Only for warnings

   Answer: B. finally handles common cleanup during normal structured control flow.


5. What should a public page show for a database outage?
   A. The password and raw stack trace
   B. A controlled message, with details logged privately
   C. All environment variables
   D. The connection source code

   Answer: B. Detailed diagnostics belong in private logs; the user needs a useful general response.
