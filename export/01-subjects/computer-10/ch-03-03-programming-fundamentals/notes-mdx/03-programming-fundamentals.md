<!-- note kx79z7anzz77q4126v1r35nsz58f4z1n | topic ms7317cdf2x0x4q8hjbx6eqbbd8bv2xr | status published -->
# Website Development

Every website you open has a visible part you tap and a hidden part that stores data. This topic shows how the two parts divide the work and how a plan becomes a launched site.

This topic teaches how websites move from plan to launch, how front-end and back-end divide the work, and how requests, responsive layouts and a store example bring them together.

## Website Development: front-end and back-end

Think of an online shop that looks neat on a phone and still remembers prices and stock. To understand it, start with the two sides of every website and the path from an early plan to launch.

### The part you see and tap

The front-end is everything you see and interact with on a website, such as buttons and images. It is built to be user-friendly, and front-end developers make it attractive and easy to use. They work with HTML, CSS and JavaScript, and this side is also called client-side.

### The part that stores and manages data

The back-end holds the data and shows it on demand. Because that data generally lives on a server, this side is also called server-side. Back-end developers keep everything working behind the website, especially the data management that visitors cannot see. They use a variety of coding languages, such as Ruby, Python and PHP.

<MediaAnchor occurrence="media:47855a2a0b2b7aa8cf4c4143" width="half" />

<CaptionedImage src="kg2d63bnn179a1eq3xt2j5bv5s8f463r" alt="Split comparison graphic labeled Front-end vs Back-end; left side shows website UI mockups with HTML 5, JS and CSS 3 logos; right side shows desktop monitor with code, server/database icons and php and Python logos" caption="Fig.1: Languages used for website development" />

### Why the two parts are kept separate

Teams keep the two sides apart because building and maintaining a website becomes easier. The split also lets people focus on what they do best, since front-end and back-end developers work independently. Front-end developers concentrate on an attractive and user-friendly appearance, while back-end developers handle databases and server logic.

| Aspect | Front-end | Back-end |
| --- | --- | --- |
| Where it runs | On the client that you use | On the server that stores data |
| What you notice | Buttons, images and layout | Data handling you cannot see |
| Main work | Attractive and user-friendly pages with HTML, CSS and JavaScript | Databases and server logic with languages such as Ruby, Python and PHP |

### From plan to launch and working together

A website starts with a plan and ends with a launch that everyone can reach:

1. Understand the purpose of the website and the actions you want visitors to do.
2. Design the navigation, layout and appearance.
3. Choose and gather the tools and resources.
4. Create the website with code to meet your goals and test the system to ensure proper functioning.
5. Launch the website so it is accessible to everyone.

When you act on a page, the front-end sends a request to the back-end. The back-end processes the request, works with the database and builds dynamic content.

<MediaAnchor occurrence="media:b6b30490dd6e4ae87e37931e" width="half" />

<CaptionedImage src="kg2ctt2pk9anfdytv1srqwrx958f4wzt" alt="Client-server architecture diagram with Web Server linked to Central Data Source at top, connected through Internet cloud to a desktop computer, a mobile phone, and a kiosk terminal below" caption="Fig.2: Client-Server architecture" />

An online store shows why both sides are needed. The shop that visitors use is built with HTML, CSS and JavaScript so items can be viewed and purchased. Item details, cost and stock live in a database on the back-end. When a customer places an order, the front-end sends the order information to the back-end, which checks the data, updates the database and manages the stock. The same store must also fit many screens. Responsive design lets the layout and function adjust for desktop computers, tablets and mobile phones. Older one-size-fits-all designs looked awkward on smaller devices. Responsive layouts use adaptable designs where items are sized in proportion to the screen with percentages rather than fixed pixel values, so a desktop menu can become a stacked menu on a mobile device.


---

<!-- note kx78cvebjrajjdkyh5mrr212jd8f5c4a | topic ms76bk6ky483w2dhcpxjrrvsz58bt7ta | status published -->
# Additional Features of HTML/CSS

Forms, tables and animation turn plain pages into pages that collect input, organize records and highlight key notes. This topic builds those three skills through the doctor visit example.

This topic teaches how to collect user input with HTML forms, organize data with HTML tables and CSS styling, and add movement with CSS animations.

## Forms in HTML

The form that is used to gather user input is defined within the form tag pair.

### What a form contains

A form is defined within the form tag pair. Inside it, the label element gives a clear title for each input field, and the for attribute ties a label to the matching form element. The input element can establish several types of fields such as text fields, checkboxes and buttons, while select builds a drop down list and textarea creates a large box for longer writing.

```html
<form>
<label for="studentName">Student Name:</label>
<input type="text" id="studentName" name="studentName"><br><br>
```

The label here tells the user to enter the student name, and the input with the matching id provides the text box. A drop down for grade limits the user to the supplied choices only.

```html
<label for="grade">Grade:</label>
<select id="grade" name="grade">
<option value="1">8</option>
<option value="2">9</option>
<option value="3">10</option>
</select><br><br>
```

### One answer or many answers

Radio buttons are for mutually exclusive choices where only one option can be true at a time. A list field lets users choose one or more items from available options, and it is often used for checkbox groups or drop down menus. All the related radio buttons share the same name, with a different value for each choice. Checkboxes are for preferences where the user may pick more than one item from a group. To create checkboxes, set the input type to checkbox with an id, name and value, and place the matching label beside each box.

```html
<label for="gender">Gender:</label>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label><br><br>
```

```html
<label for="sports">Sports Participated:</label><br>
<input type="checkbox" id="cricket" name="sports" value="cricket">
<label for="cricket">Cricket</label><br>
<input type="checkbox" id="badminton" name="sports" value="badminton">
<label for="badminton">Badminton</label><br>
<input type="checkbox" id="hockey" name="sports" value="hockey">
<label for="hockey">Hockey</label><br>
<input type="checkbox" id="basketball" name="sports" value="basketball">
<label for="basketball">Basketball</label><br><br>
```

### Sending and clearing a form

The submit button is the typical control for transferring information from a form to a server. The reset button clears every field in the form when the user clicks it. The doctor visit form uses action to state where the input data will be submitted and method to state the way of submission, and it collects different sorts of data with matching input types for names, email addresses, phone numbers, dates and times.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Doctor's Visit Form</title>
</head>
<body>
  <h1>Doctor's Visit Form</h1>
  <form action="submit_form.html" method="post"> <p>Patient Information:</p>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required> <br>
    <input type="radio" id="male" name="Gender" value="Male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="Gender" value="Female">
    <label for="female">Female</label><br><br>
    <input type="checkbox" id="visit1" name="visit1" value="First">
    <label for="visit1"> First Visit </label>
    <input type="checkbox" id="visit2" name="visit2" value="Second">
    <label for="visit2"> Follow up Visit </label>
    <input type="checkbox" id="visit3" name="visit3" value="Regular">
    <label for="visit3"> Regular Check-up Visit</label><br> <br>
    <label for="email">Email Address:</label>
    <input type="email" name="email" id="email" required> <br>
    <label for="phone">Phone Number:</label>
    <input type="tel" name="phone" id="phone" required> <br>
    <p>Appointment Details:</p>
    <label for="date">Date of Appointment:</label>
    <input type="date" name="date" id="date" required> <br>
    <label for="time">Time of Appointment:</label>
    <input type="time" name="time" id="time" required> <br>
    <p>Reason for Visit:</p>
    <textarea name="reason" id="reason" rows="5" cols="30" placeholder="
      Describe your reason for visit here..."></textarea> <br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

The completed form collects patient particulars and appointment details, then shows a submit button and a confirmation message in the output.

<SideActivity kind="activity" title="Activity">
Extend the student form output to show five records with different names, grades and sports choices.
</SideActivity>

<SideActivity kind="activity" title="Activity">
Design and create a travel reservation form that collects passenger details and journey details and submits them.
</SideActivity>

<MediaAnchor occurrence="media:ea4185f1c97bb7cee555c056" width="full" />

<CaptionedImage src="kg272ssvwb6t0m4dwwggxrh5jx8f5nb2" alt="Two-panel browser output screenshots of a Doctor's Visit Form. Panel (a) shows Patient Information with name field, Male/Female radio buttons, First Visit / Follow up Visit / Regular Check-up Visit checkboxes, Email Address and Phone Number fields, Appointment Details with Date of Appointment, Time of Appointment, Reason for Visit text area with Mild fever Body Pain, time-picker dropdown grid, and Submit button. Panel (b) shows a confirmation box reading Form Submitted !!! Thank You for Submitting Your Information. OUTPUT label badge at top-left of the composite." caption="Fig.4: Output of form for Doctor's visit" />

## Tables in HTML and basic CSS styling

Tables organize information on webpages in an easy to read and ordered manner.

### Rows, columns and headers

A cell is the basic rectangular building block of a table and can hold text or graphics. Cells arranged across one line form a row, while the vertical classification forms a column. A header is a special cell that names or classifies the information in the same column, and header contents are bold and centered to highlight their significance.

The table element marks the beginning and end of a table. Inside it, tr creates a row, th marks a header cell, td marks an ordinary cell with the real data, caption puts a heading on the table, thead, tbody and tfoot divide rows into header, main data and summary parts, and colspan and rowspan let a cell span several columns or rows for complicated layouts.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Doctor's Visit Appointments</title>
</head>
<body>
<h1>Doctor's Visit Appointments</h1>
<table>
<thead>
<tr>
<th>Patient Name</th>
<th>Date</th>
<th>Time</th>
<th>Doctor</th>
<th>Reason for Visit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Adil</td>
<td>2024-05-10</td>
<td>10:00 AM</td>
<td>Dr. Shams</td>
<td>Follow-up</td>
</tr>
```

```html
         <tr>
            <td>Zaki</td>
            <td>2024-05-15</td>
            <td>2:00 PM</td>
            <td>Dr. Qamar</td>
            <td>Check-up</td>
         </tr>
      </tbody>
   </table>
</body>
</html>
```

The head section places patient name, date, time, doctor and reason for visit as labels on the top row. The tbody section holds the actual appointments, with one tr for each appointment and one td for each piece of information.

<MediaAnchor occurrence="media:dcee8edf57717a39a22d33b7" width="half" />

<CaptionedImage src="kg29ak74xnqcp89jg3v6yarwv98f49h9" alt="rendered appointments table titled Doctor's Visit Appointments with columns Patient Name, Date, Time, Doctor, Reason for Visit and two rows for Adil and Zaki, with an OUTPUT label" caption="Fig.6: List of appointments" />

### Single lines or separate borders

A plain table can look congested and hard to read. The link between the borders of neighbouring cells is controlled by border-collapse. The collapse setting combines neighbouring borders into a single line so the table looks neater and more compact, while the separate setting keeps the edges distinct so the table looks larger.

| Setting | Borders | Appearance |
| --- | --- | --- |
| collapse | Combine into a single line | Neater and more compact |
| separate | Stay distinct | Larger with visible gaps |

```html
<h4>Table with border-collapse: collapse</h2>
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
<h4>Table with border-collapse: separate</h2>
<table border="1" border-collapse="separate">
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

<MediaAnchor occurrence="media:b8bf5af368b75b604071f241" width="half" />

<CaptionedImage src="kg25f1cftans5xjej4jacb74ps8f5g8z" alt="code screenshot lines 1 to 14 comparing border-collapse collapse versus separate, with inset rendered output showing Cell 1 Cell 2 with collapsed single-line borders versus distinct separate borders" caption="Fig.7: Border-Collapse" />

### Captions, spacing and color

The caption tag gives an overview of the data by placing a caption on top of the table. Padding is the distance between a cell border and its content, and it can be set for all four sides or for one side only. Cell spacing is the space among the borders of neighbouring cells, and adjusting it makes the table appear lengthened.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Doctor's Visit Appointments</title>
<style>
table {
border-collapse: collapse;
}
th, td {
padding: 10px;
text-align: left;
}
th {
background-color: gray;
}
</style>
</head>
<body>
<h1>Doctor's Visit Appointments</h1>
<table>
<caption>List of upcoming appointments</caption>
<thead>
<tr>
<th>Patient Name</th>
<th>Date</th>
<th>Time</th>
<th>Doctor</th>
<th>Reason for Visit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Adil</td>
<td>2024-05-10</td>
<td>10:00 AM</td>
<td>Dr. Shams</td>
<td>Follow-up</td>
</tr>
<tr>
<td>Zaki</td>
```

```html
<td>2024-05-15</td>
<td>2:00 PM</td>
<td>Dr. Qamar</td>
<td>Check-up</td>
</tr>
</tbody>
</table>
</body>
</html>
```

<MediaAnchor occurrence="media:babdd07236bf13739df3bc2a" width="half" />

<CaptionedImage src="kg2afnmy78eetbd76sswd06bkx8f4vc0" alt="rendered HTML table titled Doctor's Visit Appointments with subtitle List of upcoming appointments and columns Patient Name, Date, Time, Doctor, Reason for Visit with two rows for Adil and Zaki" caption="Fig.9: Refined layout-list of appointments" />

<SideActivity kind="activity" title="Activity">
Design the timetable of your class in HTML with a caption that reads Timetable for Grade 10.
</SideActivity>

```html
<table border="1"
border-collapse="border-collapse">
<tr>
<td style="padding: 10px">Cell Number 1</td>
<td style="padding: 20px">Cell 2</td>
<td style="padding: 5px">Cell 3</td>
</tr>
</table>
```

<MediaAnchor occurrence="media:869ffabafc868239c2c498d6" width="half" />

<CaptionedImage src="kg2eef6cn191ctvmqphwqrjw058f4akt" alt="side-by-side code pane showing table with padding styles and output pane rendering three cells labeled Cell Number 1, Cell 2 and Cell 3 with different padding" caption="Fig.10: Padding" />

```html
<table border="1" cellspacing="20">
<tr>
<td>Cell Number 1</td>
<td>Cell No. 2</td>
<td>Cell 3</td>
</tr>
</table>
```

<MediaAnchor occurrence="media:b59ce2aadecc8cffe3c63722" width="half" />

<CaptionedImage src="kg22aqz8t87dv0z5fk8b542vas8f5cjn" alt="side-by-side code pane showing table with cellspacing attribute and output pane rendering three separated cells labeled Cell Number 1, Cell No. 2 and Cell 3" caption="Fig11: Cell Spacing" />

### Width, borders and header color

Background color can be set for a whole table, a row or a single cell. In the refined appointment table, border-collapse removes the extra lines between cells, padding adds space so the text is easier to read, text-align lines the cell text to the left, and a gray background makes the headers prominent. A later style fills the whole breadth of the available area with width set to full, and adds a thin light gray line around each cell so each cell stands out clearly.

```html
<table border="1" style="background-color: yellow;">
<tr>
<td>Cell 1</td>
<td style="background-color: cyan;">Cell 2</td>
<td>Cell 3</td>
</tr>
</table>
```

<MediaAnchor occurrence="media:47accfc7f6acdf27e57b1697" width="half" />

<CaptionedImage src="kg28jpgdt28x4x6kc29thjfxs98f4xz3" alt="Side-by-side panels: left panel lists HTML table code using background-color styles; right panel labeled OUTPUT shows a one-row three-cell rendered table reading Cell 1, Cell 2, Cell 3." caption="Fig.12: Background Color" />

```html
<IDOCTYPE html>
<html lang="en">
<head>
<title>Doctor's Visit Appointments</title>
<style>
table {
border-collapse: collapse;
width: 100%;
}
th, td {
padding: 10px;
text-align: left;
border: 1px solid lightgray;
}
th {
background-color: gray;
}
</style>
</head>
```

```html
<body>
<h1>Doctor's Visit Appointments</h1>
<table cellspacing="0">
<thead>
<tr>
<th>Patient Name</th>
<th>Date</th>
<th>Time</th>
<th>Doctor</th>
<th>Reason for Visit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Adil</td>
<td>2024-05-10</td>
<td>10:00 AM</td>
<td>Dr. Shams</td>
<td>Follow-up</td>
</tr>
<tr>
<td>Zaki</td>
<td>2024-05-15</td>
<td>2:00 PM</td>
<td>Dr. Qamar</td>
<td>Check-up</td>
</tr>
</tbody>
</table>
</body>
</html>
```

<MediaAnchor occurrence="media:89f97b7836dd1ce1ea744ffc" width="half" />

<CaptionedImage src="kg2d0tpseptmh6jm4c71b2q2fx8f51ge" alt="rendered appointments table" caption="Fig.14: Alternative layout displaying list of oppointments" />

## Animations in CSS

CSS animation changes the appearance and movement of elements by defining styles at intermediate moments in a sequence.

### Keyframes, containers and style

An animation is built from keyframes that specify the styles of an item at different moments. The style of the element during animation is specified by the keyframes rule, and each keyframe position on the timeline is given a percentage from 0 percent to 100 percent. The div tag acts as a container that groups and styles other components as a single unit for layout purposes. Formatting for HTML elements is defined with the style element, which sits in the head portion and applies its rules to the matching page elements.

### Spinning box

A basic animation spins a red box repeatedly. An element with the animated-box id is created with a div, and its size, position and red background are set in the style element. The spin animation runs for two seconds, repeats indefinitely with linear speed, and moves the element from 0 degrees to a full 360 degree turn.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Simple Animation</title>
<style>
#animated-box {
margin-top: 50px;
margin-left: 50px;
width: 100px;
height: 100px;
background-color: red;
animation: spin 2s infinite linear;
}
@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}
</style>
</head>
<body>
<div id="animated-box"></div>
</body>
</html>
```

<MediaAnchor occurrence="media:e663b4dea4bdeab833e8b291" width="inline" />

<CaptionedImage src="kg269qn395z907w4973v0vf1d98f4eax" alt="Three dark solid squares shown in successive rotation positions from upright to tilted, demonstrating a 360-degree spinning box animation output, with an OUTPUT label at top-left of the frame" caption="Fig.16: Spinning box" />

### Text color change

Another animation changes the color of text. The keyframes rule called colorChange sets the order in which the color change takes place, smoothly moving the text assigned the animated-text id from blue to green every two seconds.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Color Change Animation</title>
<style>
#animated-text {
font-size: 20px;
color: blue;
animation: colorChange 2s infinite alternate;
}
@keyframes colorChange {
from { color: blue; }
to { color: green; }
}
</style>
</head>
<body>
<p id="animated-text">This text will change color!</p>
</body>
</html>
```

<MediaAnchor occurrence="media:78110d868ae50787a8ea7113" width="half" />

<CaptionedImage src="kg29fcg33t19yesybsqr12m8d98f5bye" alt="Two side-by-side bordered boxes labeled (A) and (B), each containing the sentence This text will change color!" caption="Fig.18: Chaining color of Text from (a) blue to (b) green" />

### Background highlight

A paragraph with the highlighted-text id starts with a translucent background and is changed to yellow to emphasize the content. The highlight animation repeats endlessly for two seconds, and the keyframes rule outlines the actual animation sequence.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Text Highlighting Animation</title>
<style>
#highlighted-text {
font-size: 20px;
color: black;
background-color: transparent;
animation: highlight 2s ease-in-out alternate infinite;
}
@keyframes highlight {
from { background-color: transparent; }
to { background-color: yellow; }
}
</style>
</head>
<body>
<p id="highlighted-text">This text will be highlighted!</p>
</body>
</html>
```

<MediaAnchor occurrence="media:75a44df4ccd0bc04437025fb" width="inline" />

<CaptionedImage src="kg2c0a9fj4q364xyrdg89fkhv58f4v5y" alt="A bordered box containing the bold centered sentence This text will be highlighted!" caption="Fig.20: Repeated color change of text background" />

<SideActivity kind="activity" title="Activity">
Create a rectangle that changes color from red to orange and then from orange to blue, with an interval of five seconds.
</SideActivity>

### Animated table footnote

The doctor appointment table adds animation style as a footnote. The whole table keeps uniform borders, padding and alignment for a well organized layout. Every alternate row gets a different background through the nth-child odd rule, so all the odd numbered rows stand out. A footnote rule styles the cell with the footnote id for font size and animation, and its highlight keyframes move the background from translucent to yellow and back.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Doctor's Visit Appointments</title>
<style>
table {
border: 2px solid lightgray;
border-collapse: collapse;
}
th, td {
padding: 10px;
text-align: left;
}
th {
background-color: lightblue;
color: white;
}
tr:nth-child(odd) {
background-color: gray;
}
#footnote {
font-size: 12px;
animation: highlight 2s ease-in-out alternate infinite;
}
@keyframes highlight {
from { background-color: transparent; }
to { background-color: yellow; }
}
</style>
```

```html
</head>
<body>
<h1>Doctor's Visit Appointments</h1>
<table>
<caption>List of upcoming appointments</caption>
<thead>
<tr>
<th>Patient Name</th>
<th>Date</th>
<th>Time</th>
<th>Doctor</th>
<th>Reason for Visit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Adil</td>
<td>2024-05-10</td>
<td>10:00 AM</td>
<td>Dr. Shams</td>
<td>Follow-up</td>
</tr>
<tr>
<td>Zaki</td>
<td>2024-05-15</td>
<td>2:00 PM</td>
<td>Dr. Qamar</td>
<td>Check-up</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="5" id="footnote">* The
appointments may subject to change.</td>
</tr>
</tfoot>
</table>
</body>
</html>
```

A single table cell with the footnote id spans all five columns, so the highlighted footnote projects the important note that appointments may be subject to change.

<MediaAnchor occurrence="media:062798a0778c5bbd3a8ce8ba" width="half" />

<CaptionedImage src="kg289c051pt5r3r4c4s6k5fgbh8f4a04" alt="Screenshot of a Doctor's Visit Appointments table showing List of upcoming appointments with rows for Adil and Zaki, dates, times, doctors and Follow-up/Check-up, with a footnote line about appointments subject to change" caption="Fig.22: Animated footnote for a table" />


---

<!-- note kx73p2e8a48aaxn3ycqpwr565d8f46ye | topic ms7c7fvn9bjgznzkmnk9c1mt0d8bth0q | status published -->
# Advanced Programming Constructs in JavaScript

A page built only with HTML and CSS shows the same content on every visit. This topic builds the JavaScript tools that add response, memory and partial refresh to such pages.

This topic teaches why JavaScript is needed for dynamic pages and how arrays, loops, functions and bullet lists are used to store data and show it on the page.

## JavaScript arrays, loops and functions for dynamic pages

A page built only with HTML and CSS shows the same content on every visit, which suits a basic informative page.

### Why pages need JavaScript

Interaction means code that answers clicks, scrolling and form submission. A button that changes colour and a form that checks data before sending are typical examples.

<MediaAnchor occurrence="media:60b71f0492117b50b4639c90" width="half" />

Data handling means keeping and changing sets of information such as product details or user comments. Loops list items from a store of data and functions carry out calculations from user input, including drawing the result as a graph.

<MediaAnchor occurrence="media:3c73cc6cd76c414595b96b56" width="half" />

<CaptionedImage src="kg20bz4frkwnbj56nyms7632s58f5805" alt="3D pie chart with one slice separated, labeled DATA HANDLING at top" caption="Fig.24: Sample data handling in the form of a pie chart" />

Dynamic update means changing part of a page without reloading the whole page, which improves involvement and performance. A news feed that adds new stories without a refresh click shows the idea and reduces repeated manual clicks for new content.

<MediaAnchor occurrence="media:7422fdf50f2a5814d942b80f" width="half" />

Complex interfaces such as drop-down menus, picture slideshows and live chat are built by changing the page structure with JavaScript. Adding features without attention to layout and navigation creates redundancy, when every option appears in both a main menu and a side menu.

<MediaAnchor occurrence="media:03824c5f758284665c7620c1" width="half" />

<CaptionedImage src="kg2dzbpcamhngsfnz3dgfyqvgs8f5enb" alt="Software settings window with left menu listing Mail, Calendar, Notes highlighted, Library, Contacts, Resources, Documents, middle icon column, and right panel listing font names Arial, Clarendon, Georgia, Helvetica" caption="Fig 26: Instance of a sample complex user interfaces" />

### Storing many values in one array

Separate variables for each fruit soon become awkward, with one variable for apple, one for banana and one for orange. An array keeps all the fruits in a single variable, which is a better way to organise a set of similar data.

```javascript
const fruits = ["apple", "banana", "orange"];
```

Each position has an index number that starts at 0, so apple is at 0, banana is at 1 and orange is at 2. An array can hold words, numbers or a mixture of both, and it can grow or shrink as items are added or removed.

### Reading an array with a loop

A loop visits each element in turn when the same operation must be applied to every item. The loop below prints each fruit to the console, giving apple, banana and orange on separate lines.

```javascript
for (let i = 0; i < fruits.length; i++)
{
console.log(fruits[i]);
}
```

The end of the array can be extended with push and shortened from the end with pop. The length property tells how many items are stored, and a for loop can walk through them all.

### Adding the first ten numbers

The next program stores the first ten positive integers in an array and adds them. A function called calculateSum holds a variable sum that starts at zero, then a for loop runs from 1 to 10, adds the counter to sum and pushes the counter into the numbers array.

```html
<IDOCTYPE html>
<html>
<head>
  <title>Sum of First 10 Integers</title>
</head>
<body>

<script>
  function calculateSum() {
    let sum = 0;
    let numbers = [];

    for (let i = 10; i <= 10; i++) {
      sum += i;
      numbers.push(i);
    }
```

The second half finishes the function, builds the display strings and closes the page. It writes the list of integers into one paragraph and the total into another, and it provides a Calculate Sum button to run the function.

```html

document.getElementById("sumDisplay").textContent = "The sum of the first 10 integers is: " + sum;

let output = "The first 10 integers are: [ ";
for (let i = 0; i < numbers.length; i++) {
output += numbers[i];
if (i < numbers.length - 1) {
output += ", ";
}
}
output += "]";
document.getElementById("numberDisplay").textContent = output;
}
</script>

<button onclick="calculateSum()">Calculate Sum</button>
<br>
<p id="numberDisplay"></p>
<p id="sumDisplay"></p>

</body>
</html>
```

After the calculation the first paragraph lists 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 and the second paragraph shows that their sum is 55.

<MediaAnchor occurrence="media:bcde010489e6fc7dbc8710ec" width="half" />

<CaptionedImage src="kg23krgzy508s21k4038dcr6k58f54jt" alt="rendered browser output box with a Calculate Sum button showing the list of first 10 integers and their sum as 55, labeled OUTPUT" caption="Fig.28: Sum of first 10 numbers using array" />

<SideActivity kind="activity" title="Activity 3">

Change the first program so that it stores the next ten integers, from 11 to 20, and shows their list with their sum of 155.

</SideActivity>

### Keeping a shopping list in a table

The shopping list page has a heading, a text box for the product name, an Add Item button and a table that shows the list. A shoppingList array holds the item names, and two functions manage adding and display.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Shopping List</title>
<style>
table {
border-collapse: collapse;
width: 100%;
}
th, td {
padding: 10px;
border: 1px solid lightgray;
text-align: left;
}
</style>
</head>
<body>
<h1>My Shopping List</h1>
<input type="text" id="newItem" placeholder="Enter item name">
<button onclick="addItem()">Add Item</button>
<br>
<table id="shoppingListTable"></table>

<script>
let shoppingList = [];

function addItem() {
const newItemName = document.getElementById
("newItem").value;

if (newItemName !== "") {
shoppingList.push(newItemName);

document.getElementById("newItem").value = "";

updateShoppingListTable();
} else {
alert("Please enter an item name!");
}
}

function updateShoppingListTable() {
const table = document.getElementById
("shoppingListTable");
```

The continuation clears the table, writes a header row called Shopping List Items and then adds one row for each entry. Clicking Add Item checks the box, pushes non empty text into shoppingList, clears the box and refreshes the table, while empty input shows a prompt to enter an item name.

```html
table.innerHTML = "";
const headerRow = document.createElement("tr");
const headerItem = document.createElement("th");
headerItem.textContent = "Shopping List Items";
headerRow.appendChild(headerItem);
table.appendChild(headerRow);
for (let i = 0; i < shoppingList.length; i++) {
const itemRow = document.createElement("tr");
const itemCell = document.createElement("td");
itemCell.textContent = shoppingList[i];
itemRow.appendChild(itemCell);
table.appendChild(itemRow);
}
}
</script>
</body>
</html>
```

<MediaAnchor occurrence="media:5bd5b00d0dadf0b24523ac19" width="half" />

<CaptionedImage src="kg22t592c0c9he8ry0h72mvr0s8f4yzm" alt="Two side-by-side webpage mockups titled My Shopping List, each with a text box labeled Enter item name and an Add Item button; left panel shows empty list, right panel shows a Shopping List Items table listing Bread, Butter, Milk, Sugar, Eggs" caption="Fig.30: Shopping list" />

<SideActivity kind="tidbit" title="Do you know?">

In JavaScript the dot operator is used to reach the properties and methods of an object, either to read a property value or to call a function.

</SideActivity>

### Five methods you will reuse

The major functions associated with arrays in JavaScript are push, indexOf, toString, concat and slice.

| Method | What it does | Example result |
| --- | --- | --- |
| push | Adds a value at the end of the array | 1, 3, 5, 7, 9, 11 |
| indexOf | Returns the index where a value is found | 5 |
| toString | Joins all elements into one comma separated string | 1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10 |
| concat | Merges two arrays into one | 1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10 |
| slice | Creates a new subset array from the original | 5, 7 |

```javascript
oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.push(11);
```

```javascript
oddNumbers.indexOf(11);
```

```javascript
combinedArray.toString();
```

```javascript
evenNumbers = [2, 4, 6, 8, 10];
combinedArray = oddNumbers.concat(evenNumbers);
```

```javascript
oddNumbers.slice(2, 4);
```

## Bullet points in HTML

The doctor appointment example is modified to use an unordered list for several pricing packages.

### Two kinds of bullet lists

An unordered list uses the ul element and shows bullets such as squares or circles. An ordered list uses the ol element and numbers the items as 1, 2, 3 and so on.

### Fee packages inside an appointment table

The doctor appointment example keeps its earlier rows and adds pricing in the footnote area. The footnote highlights the fee package, and an unordered list follows it, with one li element for each fee package.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Doctor's Visit Appointments</title>
<style>
table {
border: 2px solid black;
border-collapse: collapse;
}
th, td {
padding: 10px;
text-align: left;
}
th {
background-color: lightblue;
color: white;
}
tr:nth-child(odd) {
background-color: lightyellow;
}
</style>
</head>
<body>
<h1>Doctor's Visit Appointments</h1>
<table>
<caption>List of upcoming appointments</caption>
<thead>
<tr>
<th>Patient Name</th>
<th>Date</th>
<th>Time</th>
<th>Doctor</th>
<th>Reason for Visit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Adil</td>
<td>2024-05-10</td>
<td>10:00 AM</td>
<td>Dr. Shams</td>
<td>Follow-up</td>
</tr>
```

The closing part adds the second patient row, closes the body of the table and writes the footnote inside tfoot across all five columns. A line break separates the words Fee Packages from the list marker to make the footnote easier to read.

```html
<tr>
<td>Zaki</td>.
<td>2024-05-15</td>
<td>2:00 PM</td>
<td>Dr. Qamar</td>
<td>Check-up</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="5">
* This table displays a sample list of appointments. <br>
**Fee Packages:
<ul>
<li>Standard Consultation: Rs.500</li>
<li>Follow-up Visit: Rs.300</li>
<li>Comprehensive Check-up: Rs.1,000</li>
</ul>
</td>
</tr>
</tfoot>
</table>
</body>
</html>
```

The rendered page keeps the appointment table and shows the three fee packages as bullets under the footnote.

<MediaAnchor occurrence="media:bef6220e7cec40b7dda22a97" width="half" />

<CaptionedImage src="kg2f3fjzxfw2za4ejf0tv4dq3n8f57j9" alt="rendered browser output titled Doctor's Visit Appointments with List of upcoming appointments table showing Adil and Zaki rows and footnote with Fee Packages as bullet points, labeled OUTPUT" caption="Fig.32: Fee package in bullet points" />

## Bullet points as values from arrays

The next example uses a JavaScript array to create a shopping list whose items appear as bullets.

### Showing array values as bullets

The shoppingItems array holds Milk, Bread, Eggs and Apples. An empty ul element holds the bullets, and the updateList method builds one li element for each array entry, so any change to the array appears in the list.

```html
<IDOCTYPE html>
<head>
<title>Shopping List</title>
</head>
<body>
<h1>My Shopping List</h1>
<ul id="shoppingList"></ul>
<script>
const shoppingItems = ["Milk", "Bread", "Eggs", "Apples"];

function addItem() {
const newItem = document.getElementById("newItemInput").value;
shoppingItems.push(newItem);
updateList();
}

function updateList() {
const listElement = document.getElementById("shoppingList");
listElement.innerHTML = "";

for (let i = 0; i < shoppingItems.length; i++) {
const item = shoppingItems[i];
const listItem = document.createElement("li");
listItem.textContent = item;
listElement.appendChild(listItem);
}
}
updateList();
</script>
<br>
<input type="text" id="newItemInput" placeholder="Enter new item">
<button onclick="addItem()">Add Item</button>
</body>
</html>
```

The page shows the heading My Shopping List, the bullet list, a box for new items and an Add Item button. Clicking the button adds the typed text to shoppingItems through addItem and then calls updateList so the new item appears as a bullet.

<MediaAnchor occurrence="media:11baa8b50ad350cb866685ad" width="half" />

<CaptionedImage src="kg239z3d64mkyrwch142v94bkh8f5ksa" alt="Two side-by-side webpage mockups under OUTPUT label, both titled My Shopping List with Enter new item input box and Add Item button; left panel empty, right panel showing bullet list with Milk, Bread, Eggs, Apples" caption="Fig.34: Shopping list items In bullet points" />

### What a function is

A function is a block of code used repeatedly for one operation. It is defined once and called many times, which simplifies code and reduces the number of lines.

The definition uses the function keyword followed by the function name and parentheses for any input parameters. The code of the function sits inside curly brackets. In this example updateList first clears what is already shown, then moves through shoppingItems in turn, converts each item to a bullet point and appends it to the list on the page.


---

<!-- note kx75f8ks2qmnkkpeparw75q6gn8f5ex2 | topic ms77gwqt3c0j1cdkzdyah9ddp98bva20 | status published -->
# Complex Algorithms in JavaScript

Many pages keep several values together in an ordered list and later need to find one entry. This topic compares arrays with lists and then builds a JavaScript search that shows the full list and reports whether a wanted item is present.

This topic teaches how arrays and lists store ordered values and how a JavaScript program searches a list and reports the result.

## Array and list similarities and differences

Arrays and lists are JavaScript data structures that can hold and manage collections of data. Every element is stored and reached through an index number that starts at 0 and shows its position.

### What makes a list an abstract data type

An ordered sequence of elements is called a list. A list is an Abstract Data Type, which means it acts only through its defined operations, so its definition and the matching operations are stated explicitly. JavaScript supplies basic data types and also allows newer abstract types to be introduced in this explicit way.

### Shared ways to store and reach items

Arrays and lists both hold and manage collections of data in ordered fashion for a set of elements. Every element is stored and reached through an index number that starts at 0 and shows its position, and values can be searched and updated through that number. Both can hold words, numbers or a combination of the two, and both can expand or contract as items are added or removed. In its simplest form, a list is implemented with an array.

### Where arrays and lists part ways

The two structures differ in memory, language support, resizing effort, ready made operations and typical choice.

| Aspect | Array | List |
|---|---|---|
| Memory layout | Items rest at contiguous locations | Memory locations are not necessarily contiguous |
| Language support | Shown with square brackets [ ] as a built in JavaScript tool | Not a component of JavaScript, and tools like arrays are often used to build one |
| Change cost | Fixed arrangement, so adding or deleting may need rearranging | Resizing can be easier, depending on construction |
| Ready operations | Functions to add and remove an item are already available | May need extra steps and can accept newer functions, such as getElement() to view the current element |
| Typical choice | Best suited for working with numbers | Chosen for general usage |

### Picking the simpler or the flexible option

Arrays suit most simple JavaScript tasks because they are simple to use. Lists suit a need for something more versatile.

## Find an element in a list

A shopping list with bread, apples, milk and cheese shows the standard search pattern of checking the entire list until the wanted item is located. The program then reports in the result whether that item is included.

### Stages of the shopping list search

The search builds the visible list first and then looks for one name, with separate outcomes for a match and for no match.

1. Initialize to store shopping goods by creating an array called shoppingList, to assemble the list for display with a string called listContent, and to hold the item to search for with a string called itemName.
2. Enlist the shopping list in an initial loop by passing over the shoppingList array.
3. Inside that loop, add the current item to the listContent string, add a comma and a space when the item is not final, and write the full listContent string into the HTML section with the ID list.
4. Run a second loop that passes over every entry in shoppingList, compares the current entry with itemName, ends the search with return and writes a found message into the HTML section with the ID result when a match appears, and writes a not found message into that same result section when the loop ends with no match.
5. Use the algorithm by calling the findItem method with the wanted itemName.

### Reading the complete program

The implementation creates a shopping list array with some items and defines findItem to take an itemName and search within the array.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Finding Element in Array</title>
</head>
<body>
<h1>Shopping Cart</h1>
<p id="list"></p>
<p id="result"></p>

<script>
const shoppingList = ["apples", "bread", "milk", "cheese"];
function findItem(itemName) {
let listContent = "Shopping List: ";

for (let i = 0; i < shoppingList.length; i++) {
listContent += shoppingList[i];
if (i < shoppingList.length - 1) {
listContent += ", ";
}
}
document.getElementById("list").textContent = listContent;
for (let i = 0; i < shoppingList.length; i++) {
if (shoppingList[i] === itemName) {
document.getElementById("result").textContent = `"${itemName}" is in your shopping list!`;
return;
}
}
```

The first loop traverses every item and builds a readable string that is printed, while the second loop searches for the wanted item. Line 12 creates the shopping list array, line 13 defines findItem with itemName, line 16 traverses the list, line 22 prints the assembled string, line 23 starts the search, and line 29 reports when the item was not found.

```html
document.getElementById("result").textContent = `"${itemName}" is not in your shopping list.`;
}
findItem("milk");
</script>
</body>
</html>
```

The page shows two paragraphs, one for the whole shopping list and one for the search result. A variable named listContent holds the goods, the loop adds each item to listContent with commas between items for readability, the list section is updated from the full listContent after the loop, and another loop over the shopping list finds the item.

<MediaAnchor occurrence="media:dbb6a8bf86f3136419bcd864" width="half" />

<CaptionedImage src="kg2c81mbjx6m1c8j01dthf3gg98f5kzm" alt="Webpage output screenshot labeled OUTPUT, with large heading Shopping Cart, line Shopping List: apples, bread, milk, cheese, and line \"milk\" is in your shopping list!" caption="Fig.36: list-1.html" />

A course list task uses the same idea of displaying offered courses and letting the user search for one course.

<SideActivity kind="activity" title="Search a course list">
Design an algorithm which displays a list of 10 courses offered, and allows user to search for a course.
</SideActivity>


---

<!-- note kx733ygv6hfqdh91t74szcy00d8f44vc | topic ms76deewmz54d0tsqcvzezmd498bv9ex | status published -->
# Advanced techniques for testing and debugging

Large programs fail in small places. This topic shows how to check each small unit with tests and how to pause a running page to inspect its values.

This topic teaches unit tests that check functions and single lines early, and debugging with breakpoints and watchpoints to find and fix a wrong loop start.

## Unit test

A search that works for one item can still fail for another. Testing each line early prevents a small mistake from growing into a serious failure later.

### Why test one small unit at a time

In software development, a unit test checks that every module of code functions properly, so the code performs as desired. The aim is to test each line of code, because finding an error early prevents more serious issues later.

A unit test also outlines what each section of code does, which helps developers understand and maintain the code. When the tests keep passing after changes or rearrangement, the team gains confidence that the main functionality still works.

### What a unit test can cover

A unit test can be applied to a function, a module or even a single line of code. A formula for Zakat on yield from agricultural land is tested with different values for different possible cases until the line passes several unit tests. Such tests improve code quality by building confidence in making changes, catching errors early and making code management easier.

<SideActivity kind="activity" title="Mini Project-1">Write code that starts with two arrays of five numbers: Arr1 = [1, 3, 5, 7, 9] and Arr2 = [2, 4, 5, 6, 8]. Check every number in the first array against every number in the second array, and display for each number of the first array whether it was found in the second array. Then add two unit tests, one for a common element present in both arrays and one for an uncommon element present in Arr1 but not in Arr2.</SideActivity>

### How two checks test a search function

The example uses a shopping list containing apples, bread, milk and cheese, with a function called `findItem` that returns true when the item is present and false otherwise. The first test searches for milk, which exists, and expects true. The second test searches for eggs, which does not exist, and expects false. The outcomes are shown on the page based on the return value of `findItem`. The page layout stays simple, with a title and a paragraph that displays the results, and `findItem` itself is left unchanged for clarity.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Unit Tests for Array Search</title>
</head>
<body>
<h1>Unit Tests for `findItem` Function</h1>
<p id="testResults"></p>
<script>
const shoppingList = ["apples", "bread", "milk", "cheese"];

function findItem(itemName) {
for (let i = 0; i < shoppingList.length; i++) {
if (shoppingList[i] == itemName) {
return true;
}
```

The second half closes the search, then builds a result string and writes it into the page. It checks milk against true and eggs against false, and stores Passed or Failed for each case.

```html
}
return false;
}

let testResults = "";
testResults += "Test 1 (Existing Item): ";
if (findItem("milk") == true) {
testResults += "Passed \n";
} else {
testResults += "Failed \n";
}
testResults += "\n Test 2 (Non-Existing Item): ";
if (findItem("eggs") == false) {
testResults += "Passed\n";
} else {
testResults += "Failed\n";
}
document.getElementById("testResults").textContent = testResults;
</script>
</body>
</html>
```

When the page runs, both checks pass, so the paragraph shows a passed message for the existing item and for the non-existing item.

<MediaAnchor occurrence="media:db1ed8c05f68ee175856f644" width="full" />

<CaptionedImage src="kg27cgj5hb9dtbqw0rnab3j38d8f4ax2" alt="screenshot of code editor showing lines 17-37 of HTML/JavaScript unit test code for findItem function, with line numbers in left margin" caption="Fig 37: Code with unit test" />

<MediaAnchor occurrence="media:e2378f15b8c1c83d88456c3c" width="half" />

<CaptionedImage src="kg2a4jg840kvc16fqbvc7jmzt18f4mk3" alt="rendered browser output box labeled OUTPUT showing heading Unit Tests for findItem Function and two lines Test 1 (Existing Item): Passed and Test 2 (Non-Existing Item): Passed" caption="Fig.38:Unit Test-1.html" />

## Debugging with breakpoints and watchpoints

A total that looks complete can still be wrong. Observing the code step by step shows flaws that affect layout or functionality, and correcting them at once builds the page more quickly.

### Why run code step by step

Debugging identifies flaws that might affect the layout or functionality of a page. It lets the developer observe the operation of the code step by step, and building the site becomes quicker when mistakes are found and corrected at once. In tools such as Visual Studio.NET, this work centres on breakpoints and watchpoints.

### How a breakpoint pauses one line

A breakpoint is set where a line looks doubtful. When the program reaches that line, it pauses and lets the developer examine variable values and data flow.

### How a watchpoint watches a rule

In a watchpoint, the developer sets a rule on variables or expressions, for example whether the value is used or changed. The program pauses at that watchpoint when the rule is met. Both tools can point to issues that affect how the site works.

### How a wrong starting value is found and fixed

The example returns to adding the first 10 integers. A bug was placed in the loop on line 13 for discussion, of the kind that happens through typing errors.

1. Set a breakpoint on the doubtful loop line and add the next two lines as watchpoints.
2. Run the code in debug mode and use Step-Over for line by line execution.
3. Read the variable and watch panes to find the wrong start, then correct it.

As the loop started, the value of $i$ was shown as 10 in the variables pane, and the same starting problem appeared for $sum$ in the watch pane. Because the task is adding the first 10 integers, the loop must start at the first integer. The fault was therefore a loop that began with $i = 10$ instead of $i = 1$. After the correction the loop ran from the first integer, and the bug was identified and fixed.

<MediaAnchor occurrence="media:fe87a5b277c0e81076b674cb" width="full" />

<MediaAnchor occurrence="media:ba55300632cb708eed7b098c" width="full" />

<CaptionedImage src="kg22z5pyz3yj2ybjwdca28qhgs8f5ywd" alt="VS Code Run and Debug window showing Array-1.html code for function calculateSum with Variables pane showing i = 1, numbers = (1) [1], sum = 0, Watch pane, Call Stack, Breakpoints panes, and breakpoint highlighted on line 13 for (let i = 1; i <= 10; i++) with sum += i; and numbers.push(i); lines, and document.getElementById lines below" caption="Fig.40: Debugged Code" />
