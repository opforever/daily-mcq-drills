<!-- note kx74rm0bcar9s8fwer5y24asgn8btfb2 | topic ms7c6hh9phk1qw75m4nvr90aqs8bvcfm | status published -->
# 3.1 Introduction


Arrays Object
Conditional Statements
Attribute Border Color

Root Element Fonts
Promise Basic Vocabulary
Document Object Model Browser Variable script

The World Wide Web's (WWW) development has made it easier to share information and data in many formats, which is becoming more prevalent and essential in our everyday lives. Documents, picture, audio, video are the main types of information but not limited to. Especially, with the rise of social media, the links and tags of information enable you to share and search related information on the internet. Additionally, the dynamic nature allows changing the contents for individuals and group of peoples. For example, the contents of the website remain same whoever visits it, but after logging in as a member customized data is shown. Hyper-Text Markup Language (HTML) is the primary language that is used for the basic website development. Though different software and tools allow you to create a website using a template, but basic knowledge of HTML is necessary to customize it according to your desire.

## Web and Website

A document which exists and is accessible through internet is a webpage, while a set of webpages is a termed as Website. For example a news website Associated Press of Pakistan as shown in figure 1, has different sections and each one of them has at least one webpage in every section. To access a webpage, software namely web browser is used. You just provided in the Universal Resource Locator (URL) in the website which is the generally accessible address of the document. This way, web browser will locate the document and display it.
In case, you are unable to recall the URL of the website you are searching, help of search engines is quite useful. Search engine provides the service to seek relevant information based on the keywords you have entered. The search engine on the basis of keywords creates different combinations and
<CaptionedImage src="kg2bh1sgp4nn4rxad9eaq085v98bta7y" alt="" caption="" />
searches the relevant information. Apart from the relevant matches, auxiliary results are also displayed to help user to explore extra information and viewpoints. Once, the results are collected by the search engine, it displays the website address and little content from every website; in a list fashion as shown in fig. 2. This way, it is easier to select the website, you are looking for.
The point to note is that every website has a 'Homepage'. As soon as a webpage opens up, its homepage is displayed and thereafter you can navigate the website to extract information. Every website and relevant pages need to be uploaded to a web hosting services, which offers web servers that are available round the clock. This way, clients and visitors can access the website on their digital devices.

<CaptionedImage src="kg28w5kpt4az2crpm02mbvqm1x8bvgjk" alt="" caption="Search Results in a search engine (a) Primary result (b) Aux. results" />

## Web Application

On the other hand, a computer program which offers a service or executes tasks via a browser and internet connection by remotely accessing a server is called web application. As shown in fig. 3, through web browser, a web application can be visited by users like a Customer Relations Management (CRM) system which handles retailing, supplies, promotions, customer feedback, etc. At the backend there can be more than one server, for each type of task or a single server handling all the requests and managing it accordingly, while keeping the front-end updated. It all depends on the architecture which is being deployed to facilitate the front-end and transparent to a normal user.

## Website Development

Website is the first step to show your presence in the digital world. Website only shares information and contents and does not allow any changes by the viewer. A website can have single or multiple pages linked together. For example, you can create a personal page of your interest highlighting your hobbies, activities and passion. You can share your ambitions and achievements. Like, if photography is your hobby, you can upload picture albums on the website on a separate page. Anyone who visits the website can view the contents but in no

<CaptionedImage src="kg25jq9dczcb4atqakdn8am7218bthw3" alt="" caption="" />
Fig-3: Communication between Web Server and Web Browser.

manner can manipulate it.

## Static Website

Regardless, how much content and how many pages you increase in your website as discussed above, the contents remain unchanged; unless you change it yourself. In other
words the website is static and once accessed by the user; it will be loaded from the server where you have hosted it. After loading, on the user's computer the link to the server is no more required. Such static websites are easy to create and load on the client's site.

## Dynamic Website

A website is dynamic if the information is changed or adjusted in accordance with user input or choice. For example, alteration of background color of a webpage every time a user clicks a button. So, why a website needs to be dynamic? The intention of every website owner is to have frequent visitors and the visitors should stay long. For example, online shopping sites offer promotions and packages. So that the visitors lengthen their stay on the interested page, get awareness and shop. To achieve this, dynamicity in websites is applied using scripts, like JavaScript, python, PHP, ASP, Net, etc. In the context of online-shopping site, every member of the website can customize its webpage based on his/her interest as shown in fig. 4, while non-members and visitors get the same page to view, every time.

## Front-End Development

A front-end of a website provides the interface which is graphical nowadays and termed as Graphical User Interface (GUI). The person visiting your website views and interacts with GUI. The front-end of a website is developed using Html, CSS and Javascript, etc. A person, who develops such front-end websites and GUIs, is termed as 'Front-end Developer'.

## Back-End Development

Front-end developed websites and GUIs need to communicate with the server for every event which the user generates and corresponding result is to be displayed on the frontend. This bridging between the front-end and the server is taken care by back-end development. A person who writes code about such services that are provided by the website is called a 'Back-end Developer'. Back-end development requires more knowledge and skill level in hand than front-end development, like knowledge of JavaScript, Python, PHP, ASP.Net, etc.


---

<!-- note kx7bnq3ya2pa46tewwff5dz0s98btv9a | topic ms7fa5335016pd8gsrjm3aez898bth80 | status published -->
# 3.2 Html

Hypertext Markup Language (HTML) is the language used to define and display your contents in the form of a webpage. With the help of tags, you will define different contents what they are, correspondingly HTML will display them accordingly. Html identifies and provides support for every object in a webpage on the basis of tags. For example, "This is my first attempt for a webpage." is a sentence which you want to get displayed in a web browser, so you have to put it like this:
<p>"This is my first attempt for a webpage."</p>
Character(s) between angle brackets '<' and '>' are called tags. The said character(s) is as per the defined HTML rules and is one of the elements that we can use. Every component of Html is identified by a starting and terminating tag. Additionally, we have to define from where to start and end the effect of every component. Therefore, we place <p>, the starting marker, in the start of the sentence and </p>, the closing marker, after the sentence. Now, you have put your sentence between two tags with a component to take effect. The 'p' tag is used for paragraph/sentences.
Similarly, there are tags for everything in HTML. But, the main point to note here is that you can write your html code in a notepad and run it in a browser. There are many softwares/IDE environments available that help in minimizing your coding efforts. Visual Studio, Netbeans, etc. For this chapter, we will be using the Visual Studio
version 2022 environment, but the codes mentioned here will be applicable to any other environment, as well.
Installing Visual Studio
For installing the latest Integrated Development Environment (IDE) of Microsoft Visual Studio, visit https://visualstudio.microsoft.com/vs/ and download the installer. The installer is an executable file (.exe extension) and you just need to double click to start the installation.
Microsoft Visual Studio is a wide-ranging IDE which can be used for writing and running code for more than 30 languages. Therefore, it allows you to choose the language environment. Once
selected, click "install" and it will download and install the environment on your system (PC/ Laptop). After the installation, you can run the IDE from your system.
## HTML Document Object Model

The Document Object Model (DOM) is a standard which provides mutual interpretation where grammar of a language can be associated with and can coexist on various operating systems. In HTML, every file is interpreted as a DOM-tree where hierarchy of the said file is defined.
Different elements which comprise of a webpage

<CaptionedImage src="kg22fs2kys3rkw0tfc56trs5zx8btn0t" alt="" caption="" />
Fig-5: General DOM Tree

like text, images, etc. are all part of DOM. So
when browser reads HTML file it creates the respective DOM automatically and correspondingly correctly displays the page.
As discussed in last chapter, a tree consists of nodes and links, so is the case here where every object and component of HTML is treated as node. Hence, the file, components, features, script and even comments which exist in a web page all are treated as objects by HTML as shown in fig 5.
'Document' comes at the top of the tree for whole webpage. Thereafter comes 'html' node which contains the HTML which has two sub-nodes, 'head' node that holds title of page and 'body' node where the content of HTML are placed like heading, paragraph, unordered list, etc.

## . HTML Comments

In programming a good practice is to use comments within the code. This way, not only for the programmer but also for others it becomes easy to understand what the code or program is about. Comments are only visible in the code and are not part of the output, as output is dependent only on the code itself. Anything between '<!-'and '-->' is treated as comments and is ignored by the browser, as shown in Fig-6.

```
</-- This is a comment in HTML. It will not appear on the webpage. -->
<p>This paragraph will be visible on the webpage.</p>
```

<CaptionedImage src="kg23q24j7m5279zcdjcc39e5898btw22" alt="" caption="" />
Fig-6: Displayed text in Html webpage.

## Tags in HTML

Html is a tag based programming language so you should recognize the most important and frequent tags that you will encounter in the development. With a little bit of practice, these tags will be on your fingertips as the tags themselves are quite selfexplanatory. Every tag is used for different task and is easy to recognizable as tags are enclosed in '<' and '>'. Starting tag will look like <tag> while the ending of tag will be recognized with the help of a '/' like </tag>. For example <br> is used for line break, <strong> is used to make text bold, etc.

### HTMLTag

Any html is identified with the <html> tag-pair,i.e. anything written between this tagpair is recognized as a html document. An HTML document is arranged just like a simple document that you write and prepare in Notepad, Wordpad or MS Word, etc., with headings, sub-headings, sentences, etc. Similar to <html> tag-pair, everything is characterized according to its respective tag-pair. The extension of an html file is '.html'.

### HeadTag

The <head> tag-pair is defined, where tags can be placed which are not part of the main body of html, like the title of the webpage.

### Title Tag

Just like every document has a name, the <title> tag-pair allows your webpage a name. In case, even if multiple pages or tabs are open in the browser, a webpage is easily identifiable. The title of the webpage is visible on the browser tag.

```
<html lang="en"> <!-- Start of the HTML document, Language is English -->
<head> <!-- Head section containing meta information -->
    <title> Title-comes-here </title> <!-- Title of the webpage -->
</head>
<body>
    <!-- Body section where webpage content gors. -->
        This text is in the body section
</body>
</html>
        <!-- End of the HTML document
. | Tip
    Tip
        OUTPUT
        OUTPUT
            This text is in the body section
```

Fig.7: Title and Body Sections of a Html Webpage

### Body Tag

The main part of the html is the 'body', all the main constituents html, of the document are arranged in the <body> tag-pair. Fig-7 shows placement of head, title \& body tag \& respective output.

### Tag for Headings

The headings are of different levels provided by html and there are 6 defined levels, 1 being the largest and 6 is the smallest heading. The heading tag pair looks like <h2>...</h2>; for a second level heading. Sample of headings are shown in Fig. 8.

```
<html lang="en">
<head>
    <title>Heading Example</title>
</head>
<body>
    <h1>Welcome to My Website</h1> <!-- Main heading (Largest important) -->
    <h2>About Us</h2> </-- Subheading under main heading -->
    <h3>Our Team</h3> ? </-- Further subheading -->
    <h4>Team Members</h4> : <!-- Even smaller subheading -->
</body>
</html>
```

Welcome to My Website
About Us
OUTPUT
OUTPUT
Our Team
Team Members
Fig-8: Different levels of Headings in Html

### Tag for Line Break

To split a sentence into multiple lines a <br/> tag is used. If this tag is not used between 2 sentences and even you write the second sentence on a new line; html does not recognize this style and will put both the sentences in the same line, one after the other.
The code in Fig. 9 shows how you can setup your web page. The title of the page is between head tag-pair followed by the body and is shown on the browser's tab in the output. Note that everything written in the body is displayed on the webpage. Thereafter, you can assign suitable headings and paras, with necessary line breaks, as we applied in lines 7 and 8.

```
<html lang="en">
<head>
    <title>Line Break Example</title>
</head>
<body>
    <h1>Line Break Example</h1>
    <p>This is the first line.<br>
    Its 2nd line after line break.<br>
    And here is the third line.</p>
</body>
</html>
```

```
OUTPUT
ˋ () Une Preak Example
+ + 0
(i) File
    E/NBF/9th%20dass%20book/after%20pr
Line Break Example
```

This is the first line.
Its 2nd line after line break.
And here is the third line.

Fig-9: Line Break in Html

### Tag The Text

Span is used to provide style and arrangement to a line. For multiple lines you need to assign the <span> tag-pair on every line. Whereas, <div> provides the same effect to a set of lines present in the page. The style and classes, etc. are generally applied in the div tag-pair. The 'i' tag-pair is used for a sentence to be in italics, like a note. The <em> tagpair is for emphasis, whereas <b> and <strong> tag-pair are used for display of bold and strong characters. Frequently used tags are listed in Table 3-1.
Fig. 10 shows result of various text-tags, like "i" tag-pair used in line 7, "u" tag-pair for underline, etc.

```
<html lang="en">
<head>
    <title>Text Styling</title>
</head>
<body>
    <p><b>Bold text</b><p>...................> DON
    <p><i>Italic text</i></p>
    <p><u>Underlined text</u></p>
    <p><em>Emphasized text</em></p>
    <p><strong>Strong text</strong></p>
    <p><sup>Superscript text</sup></p>
    <p><sub>Subscript text</sub></p>
    <p><small>Small text</small></p>.
</body>
</html>
```

```
v Text Styling
Text Styling
x
← →
→
C
(i) File
E/NBF/9th%20c
Bold text
Italic text
Underlined text
Emphasized text
Strong text
Superscript text
Subscript text
Small text
```

Fig-10: Text Tags

Teacher's Guide
W3Schools offers a thorough introduction to HTML which can help students understand the organization of static content by going deeper into the fundamental components of webpages.
(https://www.w3schools.com/ html/)

Table.3.1: List of Frequent Tags used in Text
| Tag-Pair | For the Task |
| :--- | :--- |
| p | Paragraph, sentence |
| b | To make characters bold |
| i | Text is shown in italics |
| em | When you need to emphasize a word but with italics. |
| strong | When emphasize a word but with bold |
| sup | Superscript, helpful in formula and footnotes |
| sub | Subscript, helpful in formula and footnotes |
| u | Underline a text |
| small | Smaller text size, like footnote |

### Image

So, as you have observed so far, that HTML provides support for a document to be presentable just like a word-editor. Additionally, we can insert an image in the webpage by assigning the 'src' meaning the path where the file is located along with the name of the file, as shown in line 7 of Fig-11. The 'alt' parameter provides description of.the image. Additionally, the dimensions of the image can also be mentioned in terms of width and height of the image, otherwise it will load the image in its actual size.

```
<html lang="en">
<head>
    <title>Image Tag Example</title>
</head>
<body>
    <!-- Image Tag Exampie -->
    <img src="html-logo.jpg" alt="Logo of HTML" width="300">
</body>
</html>
```

<CaptionedImage src="kg26xfg18gdp4y5twtz120fdmx8bt5t7" alt="" caption="" />
Fig-11: Loading an image in html

3.2.3.9 Bullets \& Numbering

Html treats bullets and numbering in the form of an unordered <ul> and ordered list <ol>, respectively. Bullets can be of type circle, square or disc. The numbered list have the option of numerals and alphabets to choose from, just like a word-editor.

```
v<html lang="en">
v <head>
        <title>List Items Example</title>
    </head>
v <body>
        <!-- Unordered List Example -->
        <h3>Unordered List</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <!-- Ordered List Example:-->
        <h3>Ordered List</h3>
        <ol>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
        </ol>
    </body>
    </html>
```

In Fig-12, form lines 8-12 an unordered list is described while in lines 14-18 ordered list is stated along with respective output.

Add 5 sentence using an undordered list such that odd-numbered sentences should be bold and even-numbered should be italicized.

## Manipulating Data with Tables

Tables in HTML
Tables are a good way to enlist data which is visually appealing. Html provides 'table' tagpair to allocate and designate data within the table. In Fig-13 a table is created starting from line 7. Further 'tr' tag pair defines the row in a table, like on lines 8,13 and 18. The first row of the table is the header row and is generally used for headings and is defined with the 'th' tag-pair, as on lines 9-11. Whereas data is manipulated through 'td' tag-pair as on lines 14-16 and 19-21.

```
<html lang="en">
<head>
    <title>Table Example</title>
</head>
<body>
    <!-- Table structure -->
    <table>
        <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Fee Dues</th>
        </tr>
        <tr>
            <td>Alia</td>
            <td>9</td>
            <td>200</td>
            </tr>
        <tr>
            <td>Zia</td>
            <td>9</td>
            <td>0</td>
        </tr>
    </table>
</body>
</html>
```

Fig-13: Table of student records with Fee submitted.

## Links to Resources

Links are helpful components of a webpage, via which you can redirect to another webpage or a document. Links are called Hyperlinks in html with 'a' tag-pair. Hyperlinks are easy to identify on a webpage, as the mouse cursor changes as soon as the cursor touches a link element. Hyperlinks can be associated not only to text, but to images as well.

The general syntax for defining a links is like "<a href="url">link text</a>", where href refers to the address alongwith the path and link-text is for user information. Target is an optional parameter but its value defines where to open the webpage. If the value chosen is 'blank', it will open in a new tab or window; however for the value of 'self' the destination address will open in the same tab or window. Fig-14 depicts result of adding the following line of code in the body of the webpage:

```
<a href="https://www.nbf.org/" target="_blank">National Book Foundation </a>
```

```
v<html lang="en">
v <head>
        <title>Link Tag Example</title>
    </head>
v <body>
        <!-- External Link -->
        <a href="https://www.nbf.org.pk">Visit National Book Foundation</a>
    <br>
        <!-- Internal Link -->
        <a href="Headings.html">Go to Headings HTML example</a>
    </body>
    </html>
```

## OUTPUT

✓ (›) Link Tag Example

← → C (1) File E/NBF/9th\%20class\%20book/aft
Visit National Book Foundation Go to Headings HTML example

Visit National Book Foundation Go to Headings HTML exampte

Fig-14: Adding a Resource Link in a webpage


---

<!-- note kx7dx6anyscjv9n6xap24v3mc98bv203 | topic ms7e6zp0grntywgfnk3n381kch8bvzka | status published -->
# 3.3 Cascading Style Sheets (Css)


In the development of HTML webpage the scheme, arrangement and presentation of the whole webpage along with the components are handled by a stylesheet language. There are various stylesheet languages available like Cascading Style Sheets (CSS), Document Style Semantics and Specification Language (DSSSL), Extensible Stylesheet Language (XSL), etc. The most common and frequently used with HTML is CSS. So, this way the contents of the webpage are defined through HTML while the look of different components is handled via CSS. This way, it is easier to manage and troubleshoot your web designing code for extension and digging out the errors.

## Decorating Tables with CSS

By using CSS, you can provide borders in table as well. For this purpose, we initially need to state the 'style' tag-pair just before the start of table and later inside the block, we need to set which style to opt for and where to apply it. As shown in fig 15 we are defining border for table, table header cells and every other cell in the table.

```
<style>
    table, th, td {
    border: 1px solid #black;
    }
</style>
```

Fig-15: Applying Borders to Table
Table 3.2 List of frequently used color names

```
| Color | Color Name 毛olor | Solor
```

We may add background color of the table as well, by adding the following code, as shown in fig-16 in 'style' tag-pair.

```
<style>
    th, td {
    background-color: 口aqua;
    }
</style>
```

Fig-16: Provide table with a background color

## Homepage Decor

As a first step to decor the webpage, we define 'style' tag-pair in the body in line 4 to 25 and add line 29 which results in changing the color of 3rd level headings in the body to green as shown in fig-17. Further we define general decor like background image and centrally aligned text in the body in lines 5-10. However we further distinguish h3 level heading to be displayed in green color while the normal text will be styled as 'underlined in wavy fashion', as mentioned on line 17 and 21 respectively..

```
                Do You Know
                Background-Attachment
        fixed: Background image remains fixed.
        scroll: Background image scrolls along
        with the page.
        local: Background image moves with the
        content of the element.
            Do You Know
                Display
block: used to span element to full width
and starts on a new line.
inline: width of element is based on the
content only.
flex: flexbox is to arrange items in a row or
column such that items expand (flex) to fill
up the additional space.
            Do You Know
flex-start: Aligns items to the start of the
container (default).
center: Items are centered within the
container.
space-between: Distributes items evenly,
l.e. first item at the start and last item at
the end.
Do You Know
center: items are set along the center.
stretch: Stretches items to fill the
container (default behavior).
    <div>
    <h3>Welcome to My Website</h3> <
    <p>This is a sample paragraph with a wavy underline.</p>
    </div>
</body>
</html>
```

<CaptionedImage src="kg2aw6j99vpcn721mwhpdv1dp98bv6g9" alt="" caption="" />
Fig-17: Code for Applying CSS Style to headings and body

## . Adding a Video Clip in Website

To add a video clip in a website, <video> tag is used where you can define the clip size and how the clip should be available at the time when website loads up. Line 6 of the code in fig-18 uses a video tag and specifies width and height of the clip in terms of pixels to adjust the size of the video clip. Additionally, the controls parameter defines that play/pause and volume controls are enabled when the video loads up as shown in fig-19 (a). In the next line, the source and type of the video are specified. Though, Html supports many formats but among different browsers the most commonly supported video type is Mp4.

```
<html>
    <body style="text-align: center">
        <h2 style="color: -Green">Pakistan's First Ever Win in
        International Football</h2>
        <p>Congratulations !!!</p>
        <video width="500px" height="500px" controls>
            <source src="fifa-win.mp4" type="video/mp4" />
        </video>
    </body>
</html>
```

Fig-18: Sample code to load a video clip in a website
Alternatively, autoplay parameter can be used instead of controls. Autoplay automatically loads the video clip as the webpage loads but does not provide any controls for volume or play/pause. Autoplay can be used by specifying additional features like muted, looped, etc. When muted is

A good programming practice is the provision of additional video formats like Ogg in video tag-pair too, like: <source src="fifa-win.mp4" type="video/mp4" /> used, the clip loads but volume is muted and needs to be unmuted manually while looped will keep the clip running, again and again in a loop, unless it is interrupted manually. Options for manual intervention are accessible by right-clicking the mouse. Fig. 19 (b) is the output of following code:

```
<video width="500px" height="500px" autoplay muted>
```

3.3.4 Ways to Use CSS in HTML

There are three ways, via which we can use CSS styles in our HTML webpage.
Inline CSS:
Any CSS attribute that we want to incorporate can be added using a HTML tag (like the ones, we have covered in the last section) and incorporated in the body section, as shown in fig-12.

```
<html lang="en">
<head>
    <title>Inline CSS Example</title>
</head>
<body>
    <!-- This is a paragraph with inline CSS for styling -->
    <p style="color: Dred; font-size:40px; font-style:italic;
    text-align:center;">
        My Teaching Academy
    </p>
</body>
</html>
```

Embedded (Internal) CSS
Instead of assigning styles for every heading and other component at the time of its first occurrence in the code, a better approach is to outline all the styles in the header under the tag-pair of 'style' as shown in fig-21. This way, all the presentation related CSS code is separated and do not indulge with the already written HTML code. Additionally, change in one line in the CSS section will be reflected throughout the respective components.

```
<html lang="en">
    <head>
        <title>Embedded CSS Example</title>
            <style>
            body {
                color: blue;
                }
                    h2 {
                    color: 0red;
                font-size:30px;
                    font-style:italic;
                text-align:center;
            }
                </style>
        </head>
<body>
    <h2>My Teaching Academy</h2>
    <p>My Teaching Academy</p>
                    QUTPUT
</body>
</html>
My Teaching Academy
```

My Tenching Academy

Fig-21: Embedded CSS sample

External CSS
Alternatively, a file with extension '.css' can be made and all relevant CSS code according to your schema can be present there. Once, the contents of HTML are finalized, just attach the CSS file in the head portion of HTML by passing the link. External CSS are used with large projects, like in commercial purposes.

```
<link rel="mystylesheet" href="my_own_SS.css" />
```

NOTE: The priority of Inline is highest, followed by embedded styles and lastly the attributes of external are considered; if all three are present in a webpage.


---

<!-- note kx73fagbt4sk9y6dsq36y4d81x8bvbb9 | topic ms7db4v0mqpnb8ejn6x8nq4sm98bt9v4 | status published -->
# 3.4 Java Script


Javascript is an exciting language primarily used in development of web pages and scripts. It does not consume much of memory and that is why it is used at the client-end in developing websites, for making pages dynamic. It easily works with programming languages like Java and HTML, on any operating system.

## Let's Meet Javascript

Javascript code can be embedded in HTML with starting and ending tag of <script>, in a webpage. There is no limitation of where to place the code inside a HTML file. For example, the following Javascript code embedded in the body, displays a sentence (string) using 'document.write()' function, as shown in fig-22.
<CaptionedImage src="kg2b7r05p1vj3gxcmh10gx5a518btc2a" alt="" caption="" />

In the sentence, displayed above we put additional spaces and tabs, which javascript simply discarded. For example, we will get the same output if the statement is like the one commented on line 5. Try it for yourself.
In programming everything that a user or another program does with your program that can be sensed and triggers some task to be done, is called an 'event'. Events are important and critical in the functioning and flow-control of your program.
Similarly, in website development, easiest way to introduce dynamicity is to allow some event to occur and respond accordingly. Alert is the commonly used functionality that

Javascript provides to inform user，about the result of his action or notification．Event based code like＇onclick＇are put between the start and end of＜head＞tag；unlike the above example，where we put our code within the＜body＞tag．The scenario in fig－23， allows the message to be displayed when the button is clicked．Functionality of button is added on lines 4－6，i．e．the message to be displayed when the buttons gets clicked．

```
<html>
    <head>
        <script type="text/javascript">
            function msgSure(){ <
                alert("Are You Sure???")
        </script>
    </head>
    <body>
            Do You Mind, CLICKING on the Button -
            <input type="button"onclick="msgSure()"value="Be Sure" />
    </body>
    </html>
```

OUTPUT

And after the＇Be Sure＇button is pressed，the generated alert is as follows．

You can try for yourself，by replacing different messages and even arithmetic operations like： alert（2＋2） which results as：

## Variables

A variable is an entity that stores some value for later use. In mathematics, a variable is generally represented by a single character, but not limited to. Similarly, in programming languages, variable should be named in a meaningful manner. Additionally, the type of values the said variable can store is another important aspect. Such that the developer after defining and assigning a variable, is later able to recall about the task and type of values the said variable holds. The basic value that a variable can hold in JavaScript is either a number or set of characters (called string) or a Boolean which is either 'true' or 'false'. It is critical to note that variable naming convention does not support a number to be the first character of the variable name. Since, Javascript is case sensitive; therefore 'reward' and 'Reward' are two different variables. Table 3-3 enlists basic datatypes of JavaScript.

<CaptionedImage src="kg2ebzqw3z8s872vbrrd71tt0n8bvkq5" alt="" caption="" />
Table3-3: Basic datatypes supported by Javascript with sample values.

A variable is declared with the 'var' keyword and multiple variables can be declared in the same line of code, too. The first ever assignment of a value to a variable in the life span of program is called 'initialization'. A good programming practice is to declare and initialize the variable at the same time.
<CaptionedImage src="kg26c5t90wjdqbaw7p6bar69hn8bvdk7" alt="" caption="" />

In the following line of code in fig-24, two variables are defined. One is a boy's name in the variable 'name' while other is 'reward' having value 5000. So, it displays the result in browser.

```
<html>
<body>
<script type="text/javascript">
    var name = "Ahsan";
    // document.write(reward);
    " var reward;
    reward = 5000;
    document.write(name, " gets a reward of Rupees ", reward);
</script>
</body>
</html>
```

<CaptionedImage src="kg2ahhqzr81hb0av577gwsbysx8bv23a" alt="" caption="" />
a logo (or image) should be displayed on the new tab.

Now, let's amend the same program for user input, where we want to change the value 'reward'; by taking input from the user. For input from the user we can use the prompt() function, which pops up a message window like that of alert() function. This input will be assigned to a variable at the

OUTPUT

Fig-25: Use of Variables

Create a list of subjects like 'HTML', 'CSS' and 'JavaScript' when clicked a new tab opens up. Relevant keywords and
<CaptionedImage src="kg248rxc21hgqabtrhp3dwj57x8btze2" alt="" caption="" />
backend which can be used, later. A sample code is as follows.

1. var ip = prompt("Input a number, please.");
2. document.write("Input from the user was, number :", ip)

You can replace these lines in the previous example and will get the outputs, as shown in fig-25.

It is important to note that sequence of instructions in programming matters. For example let's look at the following code, where we defined two variables and keeping the good practice in mind, declared and initialized variable name in line 7. However, just to highlight how things can be alternatively done, we declared the reward variable in line 8 but initial value as assigned to it in the next line. In line 12 we print the statement using both the variables, as shown in fig-26.

Note that, if you take line 7 and put after line 11, then the following message is displayed.
This is due to the reason that the variable is defined after the write statement is using the variable. Unless, the variable is declared and holds a value, only then it can be used as per the programming sequence. Hence, sequence of instructions is important and though you might have written a program syntax-wise correctly, but the change of sequence might lead you to unexpected bugs.
## Operators

Javascript supports arithmetic operators to be used which are Addition (+), Subtraction (-), Multiplication (*) and Division (/). Other than this, the Modulus (\%) operator can also be used which gives remainder of a division operation.

The code shown in fig-27, takes 3 variables namely, 'a', 'b' and reward. Only reward is initialized through a constant value in line 5. In line 6 and 7, remainder of reward divided by 10 is stored in 'a' and 'b' is assigned the value when reward is divided by 10, respectively.

```
<html>
<body>
    <script type="text/javascript">
        var a,b,reward;
        reward = 5555;
        a = reward % 10;
        b = reward / 10;
        document.write('Value of variable a is:',a);
        document.write("<br />")
        document.write('Value of variable b is:',b);)
    </script>
</body>
</html>
```

Fig-27: Handling and Printing multiple variables.

## Conditional Statement

Conditional or selection statement is an essential part of the program where amongst choices, the program chooses on the basis of some constraint. Applying an 'if' statement before one or more lines of code on the basis of some condition is met makes a typical selection scenario. That is, if the condition is met, then those line(s) will be executed otherwise skipped.

Now, to check the condition, Javascript provides set of comparison operators to be used for evaluating the

| Operator | Name | Example |
| :--- | :--- | :--- |
| == | Is equal | $\mathrm{x}==\mathrm{y}$ |
| != | Is not equal | $\mathrm{x}!=\mathrm{y}$ |
| > | Greater than | $\mathrm{x}>\mathrm{y}$ |
| < | Less than | $x<y$ |
| >= | Greater than or equal to | $x>=y$ |
| <= | Less than or equal to | $\mathrm{x}<=\mathrm{y}$ |

Table:3.4: JavaScript Conditional Operators

condition. The conditional operators are listed in table.

For example, the admission office of a Montessori school checks the age of a child, if the kid is of at least 4 years old, then admission is granted. So, the code should look something like, as shown in fig-28.

```
            OUTPUT
                OUTPUT
    </script>
    </body>
    </html>
        Admission Granted !!!
```

Fig-28: 'if' statement.
You may check it for different values of the variable and also for different comparison operators.

A better notion is to align both the scenarios, i.e. if condition is met and vice versa. This is achieved using an 'if-else' statement, as shown in Fig-29. This way, either of the two situations will definitely happen.
<CaptionedImage src="kg24r7y717vmxm4j2fr9f2w4ch8bv72p" alt="" caption="" />

There are scenarios where more than two possibilities exist and for that reason, we can modify our selection statement to be an 'if-else if-else' statement. This way, the set of conditions apply, first with 'if' and thereafter with 'else if' statements. For any other condition that has not been catered for, 'else' will take care of it. In Fig-30 the previous code is extended by checking multiple conditions.
<CaptionedImage src="kg20c5c25jejhgxj7mwr0614ax8bte84" alt="" caption="" />
## Iterative Statement

Iterative statement like 'For Loop' is used to get similar kind of task done. Rather than writing the same line of code multiple times, the same task is achieved in much lesser line of code. The 'for loop' works on the basis of an index, which you can initialize in the loop. Next is the terminating condition which needs to be set for the loop to terminate. Lastly, step-size needs to be defined that how many steps the index will take after each iteration; till the terminating condition is met. In the following example 'for loop', an index is initialized to 0 , the value of index will increment with 1 and loop will execute till index value remains less than 10. Fig-31 depicts start, end and iteration of a for-loop.

<CaptionedImage src="kg2czbjppr7hbps6qpkcqnsf798bvjfx" alt="" caption="" />
Fig-31: A simple For-Loop, shows how index value increases.

Alternatively, we can decrease the index value and set the condition accordingly; in the code of fig-32 we increased the step size, too.

<CaptionedImage src="kg2fs660z956ym6xbqfq3vy5y58btcye" alt="" caption="" />
OUTPUT

## Nested Loops

Multiple iterative tasks, if can be related then they can be incorporated in such a way that one loop can reside inside the other and are termed as 'Nested Loop'. In nested loop, initially the outer loop will start and then the inner loop will run and finish. Thereafter, the index value of outer loop will increment and the inner loop will start and end again, and so forth and so on; till the outer loop terminates. Fig-33 demonstrates a nested loop.

<CaptionedImage src="kg2d1q8bazhw3zemnfqckj9ykn8btds2" alt="" caption="" />
In a similar fashion, the code in fig-34 prints Mathematical Tables from 2 to 5. The outer

loop assigns the value, for which the table is required while the inner loop prints the table.

```
<html>
    <body>
    <script type="text/javascript">
        for (var i = 2; i <= 5; i++)
        {
            document,write("<br /> Table of: ",l,<br />");
            for (var j = 1; j <= 10; j++)
            {
                document,write(i,"x"j,"=",if),"&nbsp");
            }
        document,write("<br /> <br /> ");
        }
    </script>
    </body>
    </html>
```

## Arrays

An array is a datatype which can hold a number of homogenous set of elements. Such that we do not need to define multiple variables of the same type like num1, num2, ... num25. Instead, we can declare an array which contains 25 values. This way, we can directly access any value just by passing the respective array-index number. It is trivial to note that array-index starts with 0. Declaration of an array is of the form as shown in line 7 of fig-35.
<CaptionedImage src="kg2f0h06vtqmynyrq1zrbznefn8bvnt2" alt="" caption="" />

Alternatively, we can declare a null array first and assign values to it later, as shown below:
<CaptionedImage src="kg20y9xwxbfjdazt8wpw5drwrd8bvzyn" alt="" caption="" />

So, rather than assigning values one by one, as highlighted in the lines 8-12 in above code, we can alternatively use for-loop to populate an array. The code in fig-37 initializes a nullarray on line 7. In the next couple of lines a for-loop is taken into account in which user input is taken, via prompt() function.
<CaptionedImage src="kg2d26njb77b915w2fzhrwmhwx8btz84" alt="" caption="" />

Once, the user input is taken and the loop terminates, in line 12 the elements of the array are displayed as in pervious example.

Elements of Array using For-Loop are, after declaring a null array: $5,3,7,1,9$

## Functions

Function is a set of line which occurs in the code quite often that can be segmented once, and called again and again. This way, rewriting the same set of code for similar results can be eliminated. Through functions, different sets of code can be separated resulting in fewer lines of code assigning them meaningful names based on their functionality. This leads to efficiently managing a large computer program. Programming languages provide built-in such functions like earlier we have used functions prompt(), input(), etc. Whenever the function is called, the caller does not necessarily need to know the code behind that function, to use it.

A function has a name through which it is identified and called. Additionally, a function can have arguments which are variables local to that function and their life span is limited to the said function. Variables outside functions are global variables and can be accessed anywhere from the program. Recall the earlier program of fig-23 where we defined a function, namely msgSure() and whenever the button is pressed an alert pops up asking "Are you sure?". In line 4 of the said code, we used the 'function' reserved word to define and named it. However, on line 11, we called the same function just with its name.

We extend the same code, and provide it with values which are assigned to arguments of the function. And thus, we can use them in the function, as shown in Fig-38.
<CaptionedImage src="kg2a07hvybqsntxf0a4vfzkmgs8bvxbq" alt="" caption="" />

Lastly, lets define another function calcBill() which is similar to the above as it accepts 2 arguments, namely bill and 'amount_rcvd'. The function subtracts bill from 'amount_rcvd' and returns the result. An important point to note in fig-39 is the lines 5 and 10, where the former prints inside the function and latter displays the result outside the scope of the function. Similar approach can be used for testing the values of a function, when frequent occurring set of codes are selected to form a new function.
<CaptionedImage src="kg20ztzesvzhcmtfmkg49w424h8bty5f" alt="" caption="" />


---

<!-- note kx7ajb86nder1a77ek5t9egy2d8bveyj | topic ms7e4jdr5kdhh6g87rngamnden8bv1va | status published -->
# 3.5 Debug the Code

Debugging refers to locating an error or a bug in the code. In Visual Studio .Net, Select Run from the menu and apply choose 'Run Debugging'. Thereafter, you will get the Debugging menu with some buttons and a debug console. Rather than every time accessing the menu and choose options from there to debug the code, the debugging menu is quite handy and allows you to 'Pause/Continue' your debugging code with the first button.
'Step Into' will go through the code line by line, as the program will normally execute, so that you have a thorough tracing capability of the code.
To emphasize on lines where you want to check the values of variables, you can assign a breakpoint as shown in fig-40.
<CaptionedImage src="kg258kt7jfks6gzz8t3j67fyd18dry10" alt="" caption="Fig 40: Debugging menu and Console" />
<> html 5.html <> 14.html <

E: > 11 Class Computer Science Book > Chapter 3 > html > <> 14 <IDOCTYPE html> <html> <head> <title> Arrays in javascript</title> </head> <body> <script type= "text/javascript"> var Arr $=[4,2,5,1,3]$; document.write("Array is:", Arr); </script> </body> </html>

Fig-41 : Assigned Breakpoint in code


---

<!-- note kx7bt56drjvqfxjv4pwdgbwnas8bvaq0 | topic ms7d9ycaze8h2n3v2zfrr5fe9d8bv54p | status published -->
# 3.6 Create a Dynamic Website

If a school wants to display the result of each student on their website, it would have to create a different static webpage for each student, and the job of managing those pages only grows as the number of students grows. The solution is a dynamic website: one whose content changes according to user input, rather than a separate static page per case. A dynamic website like this can be created using JavaScript together with HTML and CSS.

## Making content change on a button press

Recall the earlier code that printed the index numbers 0-9 in a loop. That same code can be extended with a new function, `descOrder()`, which prints the index numbers in descending order when it is called. The extended program adds an element with the id `dynamicContent` and a button that calls `descOrder()` when pressed.

```
<html>
    <body>
        <script type="text/javascript">
            var index;
            document.write("For-Loop Starts After This ... <br />");
            for(index = 0; index < 10; index=index+1){
                document.write("Index No. : ", index, "<br />");
            }
            document.write("For-Loop Stopped!");
            function descOrder () {
                for(index = 10; index > 0; index =index -1){
                    document.write("Index No. : ", index, "<br />");
            }}
    </script>
    <p id="dynamicContent">Click the button to change output to Descending Order.</p>
    <button onclick="descOrder()">Descending Order</button>
    </body>
</html>
```

When the webpage first loads, the index numbers are printed in ascending order and the button appears below them. Pressing the button calls `descOrder()`, which reprints the index numbers in descending order instead, replacing the earlier output. This is what makes the page dynamic: the same loaded page changes its own content in response to user input, without reloading from the server.

The page's content can be changed in other ways too, not just its text. Adding a line like:

```
document.body.style.backgroundColor = "peachpuff";
```

after the loop, then saving the file, refreshing the page and pressing the button, changes the background color of the page as well as the index list. `document` refers to the whole HTML page, `body` refers to the visible content, and the `style` property lets a script set an element's properties dynamically, such as changing the page's background color. As an activity, try adding a second button that separates out the background-color change into its own function.

## Key points

This topic builds on the website and JavaScript foundations covered earlier in the chapter, so the recap below spans that whole arc rather than only this topic's own dynamic-content example.

### Websites, webpages and applications

- A document that exists and is accessible through the internet is a webpage, while a set of webpages is called a website.
- A Uniform Resource Locator (URL) is the accessible address of a document, and a search engine helps find relevant documents by keyword.
- A web application is a computer program that executes tasks via a browser and an internet connection, remotely accessing a server.
- A static website, once loaded on the user's computer, no longer needs its connection to the server, whereas a dynamic website contains pages created on the spot, on demand, the kind this topic's example builds.

### HTML, CSS and tags

- The front-end of a website is developed using HTML, CSS and JavaScript, among others, while back-end development needs more knowledge and skill than front-end development, such as JavaScript, Python, PHP or ASP.NET.
- HTML is the language used to define and display content in the form of a webpage. Anything between angle brackets `<` and `>`, together with the characters between them, is called a tag.
- Links are called hyperlinks in HTML and are written with a tag pair; they are easy to identify on a webpage since the mouse cursor changes as soon as it touches a link element.
- The arrangement and presentation of a webpage and its components are handled by a stylesheet language such as CSS, which can be used inline, embedded, or as an external stylesheet.

### JavaScript building blocks used in this topic's example

- JavaScript is used mainly in webpage and script development. It does not consume much memory, which is why it runs on the client end to make pages dynamic, and it works alongside HTML much like CSS does.
- A script can take input from the user with the `prompt()` function, which pops up a message window similar to `alert()`.
- A variable stores a value for later use; it should be named meaningfully, and good practice is to declare and initialize it at the same time.
- In conditional statements, the program's flow is chosen based on some constraint, and a `for` loop starts with an initial index value and iterates until its terminating condition is met, adjusting the index by its step size each time. A loop placed inside another loop is a nested loop.
- An array is a data type that holds a number of homogeneous elements, and a function is a named, reusable block of code that can return a value, useful for anything (like `descOrder()` above) that a program needs to run more than once.