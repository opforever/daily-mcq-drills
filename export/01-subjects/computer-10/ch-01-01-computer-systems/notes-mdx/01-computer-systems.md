<!-- note kx7e30rf120s5v73p36a4gcmrx8bt4fz | topic ms7fa8zxs45wjagbmxewcx9wwx8btjh2 | status published -->
# 1.1 Machine Level Representation of Data


<CaptionedImage src="kg2b0986r1jj85r1427wczy4398bvevn" alt="" caption="" /> 01010101011000 - 11020217/11101001020201010201010 1020 - 110102010102 ,0101000
,0000/10/20/710000/20
1.1010

親
<CaptionedImage src="kg26gtcvvx6n1jnm1myr43d9x18btz8d" alt="" caption="" />
1.1011
5001110117

100010
$=$ T
1

A computer system is an essential part of modern life. It has changed how we work, communicate, learn, and have fun. A computer system isn't just one device; it's a mix of hardware (physical parts) and software (programs) that work together to process information, solve problems, and do many tasks.
Understanding computer systems is very important today, whether you're just using it for basic things or working as a professional in technology. Knowing how they work helps us use computers for many purposes, like business, science, creativity, and entertainment.

"Machine level representation of data" refers to how information is encoded and stored in a computer's memory, which is understood by the machine's hardware. At this level, data is represented using binary digits (bits), which are either 0 s or 1 s .

## Binary Representation:

At the machine level, all data is represented using binary digits. A binary digit, or a bit, can have one of two states: 0 or 1 . These bits are the fundamental units of information in a computer. For example:

The decimal number 5 is represented in binary as 101.
The ASCII character ' $A$ ' is represented as 01000001 in binary.
A color in an image might be represented as a combination of binary values for red, green,
<CaptionedImage src="kg257aj52qptmqd7na77k34wg58e882z" alt="1.1 Machine Level Representation of Data" caption="1.1 Machine Level Representation of Data" />
and blue components.
## Data Types:

Different types of data are represented in different ways at the machine level. Common data types include integers, floating-point numbers, characters, and Boolean values.
Integers: Integers are represented using a fixed number of bits, with the most significant bit (leftmost bit) indicating the sign (positive or negative). For example, an 8 -bit integer can represent values from -128 to 127 (signed) or 0 to 255 (unsigned).
Floating-Point Numbers: A floating point number, is a positive or negative whole number with a decimal point. For example, $15.5,0.45$, and -203.345 are all floating point numbers.
Characters: Characters are represented using character encoding schemes such as ASCII or Unicode, where each character is assigned a unique binary code. For example, the ASCII code for the letter ' $A$ ' is 65 (01000001 in binary).
Boolean Values: Boolean values, representing true or false, can be represented using a single bit, where 0 typically represents false and 1 represents true.


---

<!-- note kx70jrbjzsz9zsqc370cnhwcah8bt3fj | topic ms720rhk83kdy81dckyzypv2zh8bt8bs | status published -->
# 1.2 Numbering Systems


## Number System:

<CaptionedImage src="kg29dg7ars8m3drgyhfxez1mtd8c9g2z" alt="Number line diagram" caption="Number line showing the position of a value within a range" />


A number system is a way of writing and showing numbers. It uses specific digits or symbols to represent numbers. It helps us organize and understand numbers within a certain group. Number systems also make it easier to do basic math operations like addition, subtraction, multiplication, and division.

## ANumber:

A number is a mathematical value used for counting or measuring or labelling objects. Numbers are used to perform arithmetic calculations. Examples include: $20,45,-10,3.4,11.5,-75.6$, etc.

## Types of Number Systems

There are various types of number systems in mathematics. The four most common number system types are:

Decimal number system (Base- 10)
Binary number system (Base- 2)
Octal number system (Base-8)
Hexadecimal number system (Base- 16)
<CaptionedImage src="kg2dt98tcwdb5eg1wteypn6c4d8btt50" alt="" caption="" />

## Decimal Number System

The decimal (also called Denary) number system is composed of the 10 symbols: $0,1,2,3,4,5,6$, 7, 8 and 9. Using these symbols we can express any quantity. The decimal number system is called base 10 system because it has 10 digits. The decimal number system is a positional-value system, in which the value of a digit depends on its position in the number. For example, consider the decimal number 964. Here:

> 9 represents 9 hundreds
> 6 represents 6 tens
> 4 represents 4 units

The 9 carries the most weight. It is called the Most Significant Digit (MSD). The 4 carries the least weight and is called the Least Significant Digit (LSD). Each digit of a number carries weight that can be expressed as powers of 10. This is shown below, where the number 2745.214 is represented. The decimal point separates the positive powers of 10 from the negative powers.

$$
\begin{aligned}
(8745.215)_{10} & =8 \times 10^{3}+7 \times 10^{2}+4 \times 10^{1}+5 \times 10^{0}+2 \times 10^{-1}+1 \times 10^{-2}+5 \times 10^{-3} \\
& =8000+700+40+5+0.2+0.01+0.005 \\
& =8745.215
\end{aligned}
$$

In general, any number is simply the sum of the products of each digit value times its positional value.

## Binary Number System

In binary number system there are only two symbols or digits, 0 and 1 . The base of binary number system is 2 . All the statements made earlier about the decimal number system are equally applicable to the binary number system as well. The binary system is also a positional-value system, wherein each bit has its own value or weight expressed as power of 2 .

$$
\begin{aligned}
(1011.101)_{2} & =1 \times 2^{3}+0 \times 2^{2}+1 \times 2^{1}+1 \times 2^{0}+1 \times 2^{-1}+0 \times 2^{-2}+1 \times 2^{-3} \\
& =8+0+2+1+0.5+0+0.125 \\
& =(11.625)_{10}
\end{aligned}
$$

The binary number $(1011.101)_{2}$ is represented above and its equivalent decimal value can be found by taking the sum of the products of each bit value ( 0 or 1 ) times its positional value. The left most bit carries the most weight and it is called the Most Significant Bit (MSB). The positions to the right of the binary point are negative powers of 2 . The right most bit carries the least weight and is referred to as the least significant bit (LSB).

## Octal Number System

The Octal number system has a base of 8 , meaning it has eight possible digits; $0,1,2,3,4,5,6$, and 7. Thus, each digit of an octal number system can have any value from 0 to 7. The digit positions in an octal number system have weight with powers of 8 . An octal number can be easily converted to its decimal equivalent by multiplying each digit by its positional weight.

For example,

$$
(672)_{8}=6 \times 8^{2}+7 \times 8^{1}+2 \times 8^{0}=384+56+2=(442)_{10}
$$

Another example:

$$
(25.6)_{8}=2 \times 8^{1}+5 \times 8^{0}+6 \times 8^{-1}=16+5+0.75=(21.75)_{10}
$$

## Hexadecimal Number System

The hexadecimal number system uses base 16. Thus it has 16 possible digits. It uses the digits 0-9 and letters A, B, C, D, E and F as the 16 digit symbols. The table shows the relationship among hexadecimal and decimal numbers. It is important to remember that hexadecimal digits A through $F$ are equivalent to the decimal values 10 through 15.

| Hexadecimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |

A hexadecimal number can be converted to its decimal equivalent by using the fact that each digit position has a weight that is power of 16 . The LSD has a weight of $16^{\circ}=1$ the next higher digit has a weight of $16^{1}=16$, the next higher digit has a weight of $16^{2}=256$, and so on.
The conversion process is shown below.

$$
\begin{aligned}
& (3 A F)_{16}=3 \times 16^{2}+10 \times 16^{1}+15 \times 16^{0}=768+160+15 \\
& =(943)_{10}
\end{aligned}
$$

## Conversions from one Number system to the other

## Conversion from any Base to Base-10(Decimal)

To convert a number from any base to base-10 (decimal), you need to convert each digit of the number to its decimal equivalent. Then, you use base-10 arithmetic to expand the number by multiplying each digit by the base raised to the power of its position (starting from 0 on the right). Finally, add the results together to get the decimal value.

## i. Conversion from Binary to Decimal

<CaptionedImage src="kg2fajg22g1fffxsz5hzct42fs8btbep" alt="" caption="" />

| Example2: (100101.1011), to ( |  | ? J10 |
| :--- | :--- | :--- |
| (100101.1011) ${ }_{2}$ | = | $\begin{aligned} & \left(1 \times 2^{5}\right)+\left(0 \times 2^{4}\right)+\left(0 \times 2^{3}\right)+\left(1 \times 2^{2}\right)+\left(0 \times 2^{1}\right) \\ & \left(1 \times 2^{0}\right)+\left(1 \times 2^{-1}\right)+\left(0 \times 2^{-2}\right)+\left(1 \times 2^{-1}\right)+\left(1 \times 2^{-4}\right) \end{aligned}$ |
|  | = | $32+0+0+4+0+1+(1 / 2)+(0)+(1 / 8)+$ (1/16) |
|  | " | $\mathbf{3 7} \boldsymbol{+} \boldsymbol{(} \mathbf{1 1} \boldsymbol{/} \mathbf{1 6} \boldsymbol{)}$ |
|  | " | $\mathbf{3 7} \boldsymbol{+} \mathbf{0 . 6 8 7 5}$ |
|  | = | (37.6875)10 |

ii. Conversion from Octal to Decimal

| Exampl - (ce) ${ }^{4}$ s |  |  |
| :--- | :--- | :--- |
| (437) ${ }_{\text {a }}$ | $=$ | $\left(4 \times 8^{2}\right)+\left(3 \times 8^{2}\right)+\left(7 \times 8^{0}\right)$ |
|  | = | $(4 \times 64)+(3 \times 8)+(7 \times 1)$ |
|  | = | $\mathbf{2 5 6} \boldsymbol{+} \mathbf{2 4} \boldsymbol{+} \mathbf{7}$ |
|  | = | $(287)_{10}$ |

## iii. Conversion from Hexadecimal to Decimal

| Example: (18E8) ${ }_{16}$ to ( | ? 10 |
| :--- | :--- |
|  | $\begin{aligned} (1 \mathrm{BE} 8)_{16} & =\left(1 \times 16^{3}\right)+\left(\mathrm{B} \times 16^{2}\right)+\left(\mathrm{E} \times 16^{1}\right)+\left(8 \times 16^{0}\right) \\ & =\left(1 \times 16^{3}\right)+\left(11 \times 16^{2}\right)+\left(14 \times 16^{1}\right)+\left(8 \times 16^{0}\right) \\ & =(1 \times 4096)+(11 \times 256)+(14 \times 16)+(8 \times 1) \\ & =4096+2816+224+8 \\ & =(7144)_{10} \end{aligned}$ |

## Activity-1

a. Convert the following Binary numbers to Decimal
i. 11100011
ii. 101010101
iii. 11001.1001
iv. 10001.111
b. Convert the following Octal numbers to Decimal
i. 3452
ii. 1256
iii. 7454
iv. 2743
c. Convert the following Hexadecimal numbers to Decimal
i. AB01F
ii. FE162B
iii. 9C17D
iv. 8D00A -

## Conversion from Base-10(Decimal) to any other Base

To convert a decimal number to any other number:

- Divide the decimal number to be converted by the value of the new base and record the remainder as the LSD of the new base number.
- Divide the quotient of the previous division by the new base again and record the remainder as the next digit to the left of the new base number.
- Repeat this process, until the quotient becomes zero or not divisible by the base.
- Note that the last remainder obtained will be the MSD of the new base number.

The following examples will demonstrate the above method by converting the decimal numbers to their binary, octal and hexadecimal equivalents, respectively.

## i. From Decimal to Binary

## Converting the Integer Part:

- Divide the integer part by 2 .
- Record the remainder (0 or 1).
- Update the integer part to the quotient.
-) Repeat steps 1-3 until the integer part is 0 .
-) The binary representation is the remainders read in reverse order.

## Converting the Fractional Part:

-> Multiply the decimal part by 2 .
-) Record the integer part (0 or 1). This becomes the next binary digit.
-) Remove the integer part from the product, leaving only the decimal part.

- Repeat the process with the new decimal part.
-) Continue until the decimal part becomes 0 or until you have reached the desired precision.
-) The binary representation is the sequence of recorded integers.

| Example1: (179.257) ho to ( ? ) |  |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Stepit: Converting integer part 179 to binary |  |  |  | Step2: Converting fractional part 0.257 to binary |  |  |
| 2 179 Remainder |  |  |  | Blnary |  |  |
|  |  |  |  | $0.257 \times 2$ | = | 0.514 |
| 2 <br> 2 <br> 2 | 89 | 1 |  | $0.514 \times 2$ | = | 1.028 |
|  | 44 | 1 |  | $0.028 \times 2$ | = | 0.056 |
|  | 22 | 0 |  | $0.056 \times 2$ | = | 0.112 |
| 2 <br> 2 | 11 | 0 |  | $\mathbf{0 . 1 1 2} \boldsymbol{\times} \mathbf{2}$ | = | 0.224 |
|  | 5 | 1 |  | $0.224 \times 2$ | = | 0.448 |
| 2 <br> 2 | 2 | 1 |  | $0.448 \times 2$ | = | 0.896 |
| $(179)_{10}=(10110011)_{2}$ <br> $179)_{10}=(10110011)_{2}$ |  |  |  | $(0.257)_{10}=(0.0100001)_{2}$ |  |  |
| So, $(179.257)_{10}=(10110011.0100001)_{2}$ |  |  |  |  |  |  |

| Example1: (179.257)io to ( $?,)_{2}$ |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Step1: Converting Integer part 179 to binary |  |  |  | Step2: Converting fractional part 0.257 to binary |  |
| 2 179 Remainder |  |  |  | Binary |  |
|  |  |  |  | $\mathbf{0 . 2 5 7} \boldsymbol{\times} \mathbf{2}$ | = |
| 2 | 89 | 1 |  | $\mathbf{0 . 5 1 4} \boldsymbol{\times} \mathbf{2}$ | = |
|  | 2 <br> 2 <br> 2 |  | 1 |  | $\mathbf{0 . 0 2 8} \boldsymbol{\times} \mathbf{2}$ | = |
|  |  |  | 0 |  | $0.056 \times 2$ | = |
| 2 |  |  | 0 |  | $\mathbf{0 . 1 1 2} \boldsymbol{\times} \mathbf{2}$ | = |
|  | 5 | 1 |  | $0.224 \times 2$ | = |
| 2 <br> 2 | 2 | 1 |  | $0.448 \times 2$ | = |
|  | 1 | ., <br> 0 |  | $0.896 \times 2$ | = |
| $(179)_{10}=(10110011)_{2}$ |  |  |  | $(0.257)_{10}=(0.0100001)_{2}$ |  |
| So, $(179.257)_{10}=(10110011.0100001)_{2}$ |  |  |  |  |  |

ii. From Decimal to Octal

| Example 1: | (165)io to ( | ? | Example 2: | (331) 10 to ( | ? |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  |  | 8 165 Remainder <br> 8 20 5 <br> 8 2 4 |  | $(331)_{10}=(513)_{2}$ | 8 331 Remainder <br> 8 41 3 <br> 8 5 1 |

iii. From Decimal to Hexadecimal

|  <br> Example 1: (739)io to ( ? )i6 Example 2: (365)io to ( ? )2 <br> (739)io to ( ? )i6  <br> Example 2: <br> (365)io to ( ? )2 <br> Example 2: (365)io to ( ? )2 |  |
| :--- | :--- |
| 16 739 Remainder <br> 16 46 3 <br> 16 2 14 <br> $\begin{array}{lll}2 & 14 & 3\end{array}$ <br> 2 E 3 <br> $(738)_{10}=(2 E 3)_{16}$ | 16 3501 Remainder <br> 16 218 13 <br> 16 13 10 <br>    <br> 131013 <br> D A D <br> $\boldsymbol{(} \mathbf{3 5 0 1} \boldsymbol{)}_{\mathbf{1 0}} \boldsymbol{=} \boldsymbol{(}$ DAD) $_{\mathbf{2}}$ |
## Activity-2

a. Convert the following Decimal numbers to Binary

1. 786.345
II. 943.095
iii. 6300.586
iv. 4732.7834
b. Convert the following Decimal numbers to Octal
i. 759
II. 1256
iii. 9454
iv. 2743
c. Convert the following Decimal to Hexadecimal numbers
2. 7802
H. 4923
iii. 3678
iv. 6401

## Conversion from Octal to Binary and vice versa

The conversion from Octal to Binary and vice versa is performed by converting each octal digit to its 3-bit binary equivalent. The eight possible digits are converted as follows:

| Octal digit | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Binary | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |

Using these conversions, any octal number can be converted to binary and vice versa.

## i. From Octal to Binary

<CaptionedImage src="kg2a3z9437a8hrg6dn90m5m93n8btmap" alt="" caption="" />

## ii. From Binary to Octal

<CaptionedImage src="kg2a5y4e0f0b2m74n2k3vgyhax8bvwsv" alt="" caption="" />

## Activity-3

a. Convert the following Octal numbers to Binary
i. 765
II. 1430
iii. 63005
iv. 4232
b. Convert the following Binary numbers to Octal
i. 10011110 il. 11000010110 ill. 1000001101 iv. 1110001001101010

## Conversion from Hexadecimal to Binary and vice versa

The conversion from Hexadecimal to Binary and vice versa is performed by converting each octal digit to its 4-bit binary equivalent. The eight possible digits are converted as follows:

| Hexadecimal | Binary |
| :--- | :--- |
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |

| 3 | 0011 |
| :--- | :--- |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |
| A (10) | 1010 |
| B(11) | 1011 |
| C(12) | 1100 |
| D (13) | 1101 |
| E (14) | 1110 |
| F(15) | 1111 |

Using these conversions, any Hexadecimal number can be converted to binary and vice versa.

## i. From Hexadecimal to Binary

<CaptionedImage src="kg244xs244ded31v34bxs6146d8bttwj" alt="" caption="" />

## ii. From Binary to Hexadecimal

## Example: (110011100100110101), to ( ? )is

- Take group of 4 binaries from the right side.
<CaptionedImage src="kg23db1g40b8hx6gfr5bqj80r58bt3pd" alt="" caption="" />
- If any one or two or three bits are left alone, add zeros to the left to make them group of 4.

00110011001 01101

- Convert each binary group to its equivalent Hexadecimal digit.
<CaptionedImage src="kg26jd2aj9dgaxapjj4waqym6h8bv6m2" alt="" caption="" />
a. Convert the following Hexadecimal numbers to Binary
I. AF765
II. D14C0
III. B300E
iv. C42F2
b. Convert the following Binary numbers to Hexadecimal
i. 1001100001000110 ii. 11011100010110 iii. 10001100001101 iv. 111000100000110101110

## Conversion from Octal to Hexadecimal and vice versa

## i. From Octal to Hexadecimal

## Method 1: Octal to Hexadecimal
Convert Octal to Decimal number
Then convert the decimal number to Hexadecimal

## Method 2: Octal to Hexadecimal
Convert Octal to Binary number
Then convert the binary number to Hexadecimal
<CaptionedImage src="kg29aadd80xh1vxzq1h78vbn7d8bvz2k" alt="" caption="" />

## ii. From Hexadecimal to Octal

## Method 1: Hexadecimal to Octal
Convert Hexadecimal to Decimal number
-) Then convert the decimal number to Octal

## Method 2: Hexadecimal to Octal
-> Convert Hexadecimal to Binary number

- Then convert the binary number to Octal

| Example: (A09D) is to ( ? )n |  |  |  |
| :--- | :--- | :--- | :--- |
| Method 1: | (A09D) ${ }_{16}$ | $(41117)_{10}$ | (Method Is already Explained) |
|  | $(41117)_{10}$ | (120235) ${ }_{\mathrm{a}}$ | (Method is already Explained) |
| So, (A09D) ${ }_{16}$ to (120235) ${ }_{4}$ |  |  |  |
| Method 2: | (A09D) ${ }_{16}=$ | (1010000010011101), | (Method Is already Explained) |
| $(1010000010011101)_{2}=$ <br> (120235) ${ }_{\mathrm{G}}$ \{ Method is already Explained) |  |  |  |
| So, (A09D) ${ }_{16}$ to (120235) ${ }_{6}$ |  |  |  |

## Activity-5

a. Convert the following Hexadecimal numbers to Octal
i. AF65
ii. D1C0
iii. B30E
iv. C2F2
b. Convert the following Octal numbers to Hexadecimal
i. 765 ii. 1430 iii. 63005 iv. 4232

## Binary Arithmetic

Computers use binary arithmetic as their fundamental way of performing arithmetic operations because digital electronic circuits inherently operate in binary (base-2) rather than in decimal (base-10) like humans do. In binary arithmetic, there are only two digits: 0 and 1.
Basic Arithmetic Operations: Computers perform addition, subtraction, multiplication, and division in binary just like in decimal, but with binary digits (bits) instead of decimal digits.

## Binary Addition:

- Binary addition is performed much like decimal addition, but with only two possible digits: 0 and 1.
-> When adding two binary digits (bits), the possible outcomes are:

$$
\begin{aligned}
& 0+0=0 \\
& 0+1=1 \\
& 1+0=1 \\
& 1+1=10 \text { (carry } 1 \text { to the next higher bit) }
\end{aligned}
$$

Some Examples of Binary Addition:
<CaptionedImage src="kg2bm01x38b5rx4k4qnv8mf3rx8bvxpk" alt="" caption="" />
<CaptionedImage src="kg290bkqcehmheegfq6nsq2jqx8btk4p" alt="" caption="" />

## HINT!

To verify your answer you can convert the binary number to decimal and perform decimal arithmetic, like in Example 1 (Addition).

## Binary Subtraction:

- Binary subtraction is performed much like decimal subtraction, but with only two possible digits: 0 and 1.
- Borrowing is used when subtracting a larger number from a smaller one.

When subtracting two binary digits (bits), the possible outcomes are:

$$
\begin{aligned}
& 0-0=0 \\
& 1-0=1 \\
& 1-1=0 \\
& 0-1=1 \text { with borrowing (borrow } 1 \text { from the next higher bit) }
\end{aligned}
$$

Some Examples of Binary Subtraction:
<CaptionedImage src="kg2647dkdwphjyxyy4cyyg521s8bvdj7" alt="" caption="" />
<CaptionedImage src="kg217xr6xcxz9k5sgn2yjcqnax8bv3cj" alt="" caption="" />

## Activity-6

a. Perform the following Binary Additions
I. $11100001+10110001$
II. $10100111+11110101$
III. 11111101 + 10110111
iv. 10101011 + 10110001
b. Perform the following Binary Subtractions
I. 11100001-1011001
ii. $10100111+1000101$
iii. 11111101-101101
iv. $10101011+10111$

## Overflow and Underflow

In computers, overflow and underflow are problems that occur when calculations produce results that are too large or too small to' be represented within the allowed number of bits. These conditions are important because they can cause errors in programs and lead to unexpected behavior or bugs. Overflow happens when a value is too large to fit in the available space, while underflow occurs when a value is too small to be represented properly. Understanding these issues is important to prevent problems in software. Overflow is being explained as follows at that level.

Overflow: Overflow happens when a calculation produces a result that is larger than the maximum value that can be stored or represented with the available number of digits or bits in a system. This causes the system to be unable to properly show or handle the result.

## Example: 8-bit Unsigned Integer Overflow

An 8 -bit unsigned integer can represent values from 0 to 255 . If user attempts to add 1 to 255, the result is 256, which cannot be represented with just 8 bits.
<CaptionedImage src="kg29pd5gwwvd0smtwp1xcjtvch8btray" alt="" caption="" />

Since an 8 -bit register can only store 8 bits, the ninth bit (1) is the overflow bit, which will be lost and the overall result becomes wrong. This situation can be overcome by introducing 16-bit register.

## Handling Overflow and Underflow:

To handle overflow and underflow, programmers can:
-> Use Larger Data Types: Switching to a larger data type (e.g., from an 8-bit integer to a 16-bit integer) can help avoid overflow and underflow for larger ranges of values.
-) Perform Range Checking: Before performing an arithmetic operation, check if the operation will result in a value outside the representable range and handle it appropriately.

- Use Libraries or Built-in Functions: Some programming languages provide built-in functions or libraries that can detect and handle overflow and underflow conditions.

## Compliments (1's and 2's)

## Complements:

In digital logic, 'Complements' are used to perform logical operations, especially the subtraction operation. The binary number system contains two types of complements, i.e., 1's complement and 2's complement.

## 1's Complements

The binary numbers can be easily converted into the 1's complement with the help of a simple technique. According to this algorithm, if we toggle or invert all bits of a binary number, the generated binary number wil I become the 1's complement of that binary number. That means we have to transform 1 bit into the 0 bit and 0 bit into the 1 bit in the 1 's complement.
<CaptionedImage src="kg26cvcfjwy6421q1mv01v3s4s8btmfj" alt="" caption="" />
<CaptionedImage src="kg2bbesyqnqm140zn2mw7natp58bttmv" alt="" caption="" />

## 2's Complements

The binary numbers can be converted into the 2's complement with the help of a very simple technique.

- Take the 1's complement of the binary number
- Add 1 to the LSB (least significant bit)

Example1: 2's complement of binary number 01010001

01010001 (Number)
10101110 (1's Complement)
+1 (Adding 1)
10101111 (2's Complement)
So the 2's Complement of 01010001 is 10101111

Example2: 2's complement of binary number 10101110
<CaptionedImage src="kg275shbv75ce7vfpsp0y9z6m98bt27k" alt="" caption="" />

## Activity-7

a. Convert the following Binary numbers to their 1's Complement forms.
ii. 11001100
iii. 11100011
iv. 01010101
l. 00111001
b. Convert the following Binary numbers to their 2's Complement forms.
j. 01111001
ii. 10001101
iii. 11101011
iv. 01011101

## Binary Subtraction using 1's Complement

The following steps are used to perform binary subtraction using 1's Complement.

- Make the number of bits in both minuend and subtrahend the same by adding additional zeros(Os) to left side.
Convert the subtrahend to the 1's complement.
Add the 1's complement of the subtrahend with the minuend.
- If the result has a carry, then add that carry in the least significant bit.
- If there is no carry, then take the 1's complement of the resultant to find the answer. In this case the answer will be negative(-ve).
<CaptionedImage src="kg29r3chqsvqpw9w7xpjkcqgcd8bt7jz" alt="" caption="" />

## Example 1: Subtract 100110 from 111000 using 1's complement

- Number of bits are the same.

111000 (Minuend)
100110 (Subtrahend)

- Convert the subtrahend to the 1 's complement.

011001

- Add the 1's complement of the subtrahend with the minuend.

111000

$$
\text { + } 011001
$$

1-010001

- Carry is generated, add it to the LSB of the result

$$
\begin{array}{r}
010001 \\
+\quad 1 \\
\hline 010010
\end{array}
$$

- So the final answer is 010010
<CaptionedImage src="kg20pcwr29argry3n6q7hms00n8btqwn" alt="" caption="" />

## Binary Subtraction using 2's Complement

The following steps are used to perform binary subtraction using 2's Complement.

- Make the number of bits in both minuend and subtrahend the same by adding additional zeros(Os) to left side.
-> Convert the subtrahend to the 2's complement.
-> Add the 2's complement of the subtrahend with the minuend.
If the result has a carry, ignore it and take the remaining part as answer.
If there is no carry, then take the 2's complement of the resultant to find the answer. In this case the answer will be negative (-ve).

## Example: Subtract 100110 from 111000 using 2's Complement

* Number of bits are the same.

111000 (Minuend)
100110 (Subtrahend)

- Convert the subtrahend to the 2's complement.

011001

$$
\frac{+}{011010}
$$

- Add the 2's complement of the subtrahend with the minuend. 111000

$$
\text { + } 011010
$$

1-010010

- Ignore the Carry and take 010010 as the answer
\& So the final answer is 010010

## Activity-8

a. Convert the following Binary numbers to their 1's Complement forms.
i. 00111001
ii. 11001100
iii. 11100011
iv. 01010101
b. Convert the following Binary numbers to their 2's Complement forms.
i. 01111001
ii. 10001101
iii. 11101011
iv. 01011101

## Signed and Unsigned Numbers Representation

Binary numbers can be represented in signed and unsigned way. Unsigned binary numbers do not have sign bit, whereas signed binary numbers uses signed bit as well or these can be distinguishable between positive and negative numbers.

## Unsigned Numbers Representation:

Unsigned numbers don't have any sign, these can contain only magnitude of the number. So, representation of unsigned binary numbers are all positive numbers only. For example, representation of positive decimal numbers are positive by default. We always assume that there is a positive sign symbol in front of every number. The range of unsigned binary number is from 0 to $\left(2^{n}-1\right)$, where $n$ is the number of bits. For example in 8 -bits form the range will be from 0 to 255 (decimal) and 00000000 to 11111111 (binary)
Example: Represent decimal number 105 in unsigned binary number.
Simply convert 105 into Binary number.

$$
105=(01101001)_{2}
$$

Signed Numbers Representation:
Signed numbers can represent both positive and negative integers. There are several methods to
represent signed numbers, but the most common one used in modern computers is Two's Complement.

## Two's Complement Representation:

To get the 2's complement of a number, flip all the bits and then add 1 to the least significant bit (LSB). We use regular binary for positive numbers and 2's complement for negative numbers.
If the sign bit is 0 , the number is positive and we can just use its regular binary form.
If the sign bit is 1 , the number is negative, and we need to use the 2 's complement of the binary number to get its value.

## Example1: Represent-13 in a computer using 8-bit 2's complement.

- Convert 13 to binary: 13 in 8-bit binary form is 00001101
- Invert all the bits: 111100101
- Add 1 to get 2's complement: 11110010+1=11110011
* So,-13 Is represented as 11110011 using 2's Complement

## Example2: Represent - $\mathbf{5 5}$ in a computer using 8-bit 2's complement.

- Convert 55 to binary: 55 in 8-bit binary form is 00110111
- Invert all the bits; $\mathbf{1 1 0 0 1 0 0 0}$
- Add 1 to get 2 's complement: $11001000+1=11001001$
- So,--55 Is represented as 11001001 using 2's Complement

## Activity-9

Represent the following numbers using 8 -bit 2 's complement.
i. -90
ii. -122
iii. -150
iv. -200
v. -240

## Floating-point Numbers Representation:

Floating point numbers are a way to represent real numbers that can have fractional parts. They are used in computers to handle very large and very small numbers efficiently, as well as to perform arithmetic operations on them.

## Representation of Floating Point Numbers:

Floating point numbers are represented in a computer using a standard format defined by the IEEE (Institute of Electrical and Electronics Engineers). The most common format is IEEE 754, which specifies how floating point numbers should be stored in binary.

## Components of a Floating Point Number

A floating point number in the IEEE 754 format is divided into three parts:
Sign Bit: Indicates whether the number is positive or negative.
Exponent: Represents the power of 2 by which the fraction (or mantissa) is multiplied.
Mantissa (or Significand): Represents the significant digits of the number.

For example, in a 32-bit (single precision) floating point representation is shown in Figure.
1 bit for the sign
8 bits for the exponent
23 bits for the mantissa
<CaptionedImage src="kg26zmp38s288r5b8tncxppk4s8btptr" alt="" caption="" />

Note: Further details about how floating point numbers are represented are beyond the scope of grade 10 students.


---

<!-- note kx71wkpexv2x6dzb83mf5dvr158btbpd | topic ms77007rebd7b20me7xgevfjeh8bt358 | status published -->
# 1.3 Common Coding Schemes (Ascii and Unicode)


Coding schemes are standards that computers use to convert and represent data in a format they can understand, such as binary digits (1's and 0's). Since computers cannot interpret humanreadable characters like letters, numbers, and symbols directly, they need to translate this data into a machine-readable format. Different coding schemes are used for this purpose, among then ASCII and Unicode are common.

## Why Coding Schemes are used

Data Representation: Computers use binary (0s and 1s) to represent all data. Coding schemes map human-readable characters to binary codes, making it possible for computers to store and manipulate text and other data.
Standardization: Coding schemes provide a consistent way to represent characters across different platforms and devices, ensuring compatibility and accurate data exchange.
Efficiency: They optimize the storage and processing of data by providing a fixed-length binary representation for each character.
Communication: They enable different computer systems to communicate with each other by using a common representation for characters and symbols.

## ASCII Coding Scheme

ASCII stands for American Standard Code for Information Interchange. It is a standard data coding scheme in computers. It assigns standard numeric values to alphabets, numerals, punctuation marks and other characters used in computers. Before ASCII was developed, different makes and models of computers could not communicate with one another. Each computer manufacturer represented alphabets, numerals and other characters in its own way.
On June 17, 1963 ASCII was approved as the American standard code. However, it did not gain wide acceptance because IBM chose to use EBCDIC (Extended binary coded decimal interchange
code) in its computers. Initially ASCII used 7-bit codes of various combinations of 0's and 1's to represent 128 different characters $\left(2^{7}=128\right)$. ASCII-7 could not able to represent newly developed characters so it underwent further developments and revisions and ASCII-8 was developed.

## Extended ASCII Code (ASCII-8 bit Code):

ASCII was extended to an 8-bit code that can represent ( $2^{8} =256$ ) different characters. ASCII-8 became popular in 1981 when it was used first time in IBM's Personal Computer (PC) and soon it became industry standard for personal computers. Many Windows systems use an 8 -bit ASCII encoding and this Microsoft specific encoding is known as ANSI code. ANSI stands for American National Standards Institute, In extended ASCII-8, 32 code combinations are used for machine and control

| Just to Remember! |  |
| :--- | :--- |
| Characters | ASCII-8 Value in <br> Decimal |
| 0-9 | 48-57 |
| A-7 | $65-90$ |
| a-z | $97-122$ |

commands, such as "start of text," "carriage return," and "form feed", etc. Control commands do not represent printable information, but rather they help control devices, such as printers. Table 1 (Annexure 1) shows non-printable ASCII control codes. Table 2 (Annexure 2) shows printable ASCII characters and Table 3 (Annexure 3) shows extended ASCII printable characters.

## Unicode Coding Scheme

Even extended ASCII (ASCII-8) does not include enough code combinations to support all written languages. Asian languages, for instance, require thousands of characters. This limitation gave rise to new encoding standard known as Unicode (Universal coding system) that can support all the written languages. It was published by Unicode Consortium (a group of multilingual software manufacturers). The first version of Unicode was introduced in 1991.
Unicode is an international character-encoding system designed to facilitate the electronic exchange, processing, and display of written texts from diverse modern and classical languages. The Unicode Standard encompasses letters, digits, accents, punctuation marks, technical symbols for the world's major written languages, as well as emoji and other symbols, all using a uniform encoding scheme. The latest version of Unicode includes over 100,000 characters. Unicode assigns a unique number to each character that remains consistent across all systems that support Unicode.
Unicode defines multiple encodings of its single character set: UTF-7, UTF-8, UTF-16, and UTF32. UTF stands for Unicode Transformation Format. Conversion of data among these encodings is lossless, means do not lose the quality. Unicode was originally a 2-byte (16-bits) character set. Unicode version 3, however, is a 4-byte (32-bits) code and is fully compatible with ASCII. These all support encoding the same set of characters. Table 4 (Annexure 4) shows a part of Unicode character set after ASCII-8.


---

<!-- note kx733atgvt2br02xn699e5nf218btj17 | topic ms70jqjj5vbew0dffsxym62qnh8btphf | status published -->
# 1.4 Operating System


An operating system (OS) is essential software that manages a computer's memory, processes, hardware, and software, enabling user interaction. It loads into RAM when the computer is turned on and is necessary to run any programs. OS has evolved since the first computer generation and is present in all devices like desktops, tablets, and smartphones, with common examples being Windows, Mac OS, Linux, iOS, and Android.

## Main Tasks/Functions of an Operating System

Operating system performs the following main tasks or functions.
<CaptionedImage src="kg25583bafzcwvs6fyherwa0j58e8d4n" alt="1.4 Operating System" caption="1.4 Operating System" />

- Process Management
- Memory Management
- File Management
- Device Management
- Network Management
- Security management

Process Management
A process is a program in execution, and process management in an operating system allocates resources like CPU time to various processes in memory. For example, with three processes (A, B, and C ), each having different CPU cycles ( $\mathrm{A}=5 \mathrm{~ms}, \mathrm{~B}=2 \mathrm{~ms}, \mathrm{C}=1 \mathrm{~ms}$ ), the OS manages execution times. In Case 1 (ABC order), the total time is 6.67 ms , while in Case 2 (BCA order), it's 4.33 ms , showing that Case 2 is more efficient.
## Memory Management

Memory management is the part of operating system that controls and manages the operation of main memory during the operation of computer. It allocates space to programs that are loaded in main memory for execution. It keeps track of freed memory when a program is closed and updates the memory status.

<CaptionedImage src="kg2e19tzk97trwxr9wspf5fjzs8dnqm3" alt="" caption="Diagram showing memory management swapping between Main Memory and Backing Store: the operating system occupies the top partition of main memory, user space is below, and two processes (P1 and P2) are swapped out and in from the backing store." />

Example: In this example the OS is
managing memory for two processes PC and $\mathrm{P1}$. $\mathrm{P1}$ is being loaded (swap in) and PO is being taken out (swap out) from the main memory (RAM). The whole process is shown in Fig 1.5.
## File Management

File management is the part of operating system that manages files and folders on storage devices such as hard disk, USB flash drive and DVD. It allows computer user to perform operations such as creating, copying, moving, renaming, deleting, and searching files and folders. It also allows the user to perform read, write, open and close operations on files and folders. Fig 1.6 shows the management of files in various folders by OS.

<CaptionedImage src="kg21hyrgkwtcpjapqjjfc270xd8dmmvg" alt="" caption="Windows 7 File Explorer showing the Libraries folder structure, illustrating the file management feature of an operating system." />
## Device Management

Device management is the part of operating system that controls input and output devices, such as keyboards, mouse, printers, and network interfaces. Efficient I/O management improves the performance of the computer. As shown in Fig. 1.7.
<CaptionedImage src="kg2cf14k2gk9pfg9pzkwz1wkmx8e9z7f" alt="1.4 Operating System" caption="1.4 Operating System" />

Example: There are three programs A , B and C which are using the printer. Now the OS will decide which program to use the printer first. A queue will be set by the $O S$ and each program will get the printer by its turn.
## Network Management

Network management is the part of network operating system that monitors and manages the resources of a network. It allows to create user groups and assigns privileges to them. It shares the network resources among users and detects and fixes network problems.

<CaptionedImage src="kg217a7rsqrj0f2cermr9fxet58bt9rq" alt="" caption="Network management" />

## Security management

Security management in an operating system ensures resources are used according to user privileges set by the system administrator. It creates user accounts, enforces security policies, controls access to resources, and protects the system from unauthorized access and malware.
<CaptionedImage src="kg2by89m2tezzheta13vhb2ncs8e9vz5" alt="1.4 Operating System" caption="1.4 Operating System" />
## Types of Operating Systems

The following are the important types of operating systems that are commonly used on various computer systems.

## Batch Processing Operating System

A batch processing operating system groups similar tasks into batches and executes them sequentially. It is ideal for repetitive tasks, such as payroll processing or generating bank statements, where the same operation is applied to multiple users or jobs. While this system provides efficiency in handling large volumes of similar tasks, it may introduce delays as jobs are processed one after another.
<CaptionedImage src="kg2dnxkfztm2yznk7samxb2vex8e8y12" alt="1.4 Operating System" caption="1.4 Operating System" />
## Multiprogramming Operating System (RTOS)

A multiprogramming operating system allows multiple programs to be loaded into the main memory simultaneously. Although the CPU can execute only one program at a time, it switches between programs when one is waiting for input or output, thus maximizing CPU utilization. This system is designed to improve the efficiency of the computer by ensuring that the CPU is rarely idle.
<CaptionedImage src="kg2cn5rb8ewqbkqx87d0e8mp9d8e98f9" alt="1.4 Operating System" caption="1.4 Operating System" />
## Multitasking Operating System

A multitasking operating system enables multiple tasks to be performed concurrently on a single CPU. The system rapidly switches between tasks, creating the impression that all tasks are running simultaneously. This capability is essential for modern personal computers and mobile devices, where users often run several programs at once.
<CaptionedImage src="kg27jb76qcjexg5rndx12m9z7h8e99hj" alt="1.4 Operating System" caption="1.4 Operating System" />
## Time-sharing Operating System

A time-sharing operating system divides CPU time into short intervals, known as time slices, and allocates each program a time slice in turn. This method allows multiple users or programs to interact with the system simultaneously, giving the appearance that all are being processed at the same time. Time-sharing systems are commonly used in environments such as banks, universities, and large organizations that require multiple users to access the

<CaptionedImage src="kg23d1aahfqfm5s4zxp8yqjdjx8bv704" alt="" caption="Time-sharing Operating System" />

system concurrently.

## Real-time Operating System (RTOS)

A real-time operating system is designed to process data and provide immediate responses. It is used in environments where timing is critical, such as medical equipment, traffic control systems, and industrial automation. Real-time systems must operate within strict time constraints to ensure that tasks are completed within a specified deadline, making them highly reliable and responsive.
<CaptionedImage src="kg2455705dnxbhmt4sqa2pgxh58e92gn" alt="1.4 Operating System" caption="1.4 Operating System" />
## Multiprocessor Operating System

A multiprocessor operating system controls the operation of multiple CPUs within a single computer system. By distributing tasks among several processors, the system can handle large amounts of data more efficiently and increase the overall processing speed. Multiprocessor systems are used in environments requiring high performance, such as data centers, servers, and scientific research applications.
<CaptionedImage src="kg24z2hfger76fazrfy107a5858e945d" alt="1.4 Operating System" caption="1.4 Operating System" />
## Distributed Operating System

A distributed operating system manages a network of computers, allowing programs to run on multiple machines simultaneously. In a distributed system, the operating system distributes tasks across different computers in the network, balancing the load and providing fast execution of application software. Users do not need to know which machine is processing their tasks, as the distributed OS manages this transparently. This system is widely used in cloud computing and other networked environments.
<CaptionedImage src="kg23cf2m4m8fv8t0r99959ved58e9mta" alt="1.4 Operating System" caption="1.4 Operating System" />
## Embedded Operating System

An embedded operating system is integrated into the hardware of a specific device, such as a microwave oven, TV, or camera. It is designed to perform specialized tasks and operates automatically when the device is turned on. Embedded operating systems are optimized for the specific functions of the device and provide reliable performance with minimal resource requirements. They are commonly used in consumer electronics and industrial machines.
<CaptionedImage src="kg248cgx9zr3evpwqcjqm04dth8e9rmk" alt="1.4 Operating System" caption="1.4 Operating System" />
## . How OS manages to run Applications?

Application programs run on top of operating systems by utilizing the resources and services provided by the operating system. The operating system serves as an intermediary between the hardware and the application programs, managing tasks such as memory allocation, process scheduling, and device management.
For example, when a user opens a word processing program such as Microsoft Word, the operating system allocates memory for the program to run, manages input/output operations such as reading and writing files, and schedules the program to run on the CPU. The operating system also provides access to system resources such as printers and network connections that the application program may need to use.
Overall, the operating system acts as a platform on which application programs can run, providing a layer of abstraction that allows programs to interact with the hardware without needing to know the specific details of the underlying hardware. As shown in Fig 1.18.
<CaptionedImage src="kg215ky7zcv9k6kmpyk0vbpqvn8e885y" alt="1.4 Operating System" caption="1.4 Operating System" />
## Process Management

Process management is an important task of operating system. It allocates systems resources to various processes so that they can run efficiently.

## Process:

A process is a program in execution. For example, when we write a program in C or $\mathrm{C}++$ and compile it, the compiler creates a binary code. The original code and Binary code, both are programs. When we actually run the binary code, it becomes a process. Process is a part of program under execution
<CaptionedImage src="kg2f89z85ergkm84v5dpzbkcsn8e86w1" alt="1.4 Operating System" caption="1.4 Operating System" />
that is scheduled and controlled by operating system. When a program is loaded in memory for execution, it becomes a process. A program is an executable code that is stored in disk as a text file whereas a process is a dynamic instance of a program during its execution in RAM. It represents basic unit of work. It uses various resources of computer such as CPU time, files, I/O devices, memory, etc.
## Various States of a Process:

There are five states of a process which are start, ready, running, waiting and terminated as shown in Figure.

<CaptionedImage src="kg2btwjzyfnwy9nfzqgc1smk0x8dnxxg" alt="" caption="Diagram of process state showing transitions between new, ready, running, waiting, and terminated states, with labelled transitions (admitted, interrupt, scheduler dispatch, I/O or event wait, I/O or event completion, exit)." />

Start/New State: This is the first state of a process when it is created. Any new operation or service that is requested by a program for execution by the processor is known as new state of process.
Ready State: A process is said to be in ready state when it is ready for execution but it is waiting to be assigned to the processor by the operating system.
Running State: A process is said to be in running state when it is being executed by the processor. A process is assigned to a processor for execution by operating system.
Blocked State/Waiting State: A process is in blocked or waiting state when it is not under execution. It is waiting for a resource to become available.
Terminated State: A process is in terminated state when it completes its execution.
## Thread and Process:

In programming, there are two basic units of execution: processes and threads. They both execute a series of instructions. A Process is an instance of a program that is being executed. A process may be made up of multiple threads. A Thread is a basic ordered sequence of instructions within a process that cannot be executed independently. The threads are made of and exist within a process; every process has at least one thread. Multiple threads can also exist in a process and share resources.

<CaptionedImage src="kg20vg7xgwp53zp4cka1tyn1hn8e8r83" alt="1.4 Operating System" caption="1.4 Operating System" />
Comparison between Process and Thread

Comparison between Process and Thread
|  | Process | Thread |
| :--- | :--- | :--- |
| 1 | An executing instance of a program is called a process. | A thread is a subset of the process. |
| 2 | It has its own copy of the data segment of the parent process. | It has direct access to the data segment of its process. |
| 3 | Any change in the process does not affect other processes. | Any change in the thread may affect the behavior of the other threads of the process. |
| 4 | Processes run in separate memory spaces. | Threads run in shared memory spaces. |
| 5 | Process is controlled by the operating system. | Threads are controlled by programmer in a program. |
| 6 | Processes are independent. | Threads are dependent. |
## Process Scheduler:

A process scheduler is part of the operating system that manages the execution order of processes by the CPU. It ensures efficient and fair use of CPU time by allocating processing time based on specific scheduling algorithms.

## Process Synchronization:

<CaptionedImage src="kg2e5rszeaczzqv1g6qzxfp6758bvsp0" alt="" caption="" />

<CaptionedImage src="kg27p4gdhe5be26srjkckr7wwx8bvtp7" alt="" caption="" />
Shared Resource

Fig.1.22: Process Synchronization

Process synchronization is a method used to coordinate multiple processes or threads that share resources. It prevents issues like race conditions, which occur when processes try to access the same memory at the same time. The operating system controls the execution order to avoid conflicts.

## Interrupts:

Interrupts are signals that alert the CPU to events that need immediate attention. When an interrupt occurs, the CPU stops its current task, saves its state, and runs a special program called an Interrupt Service Routine (ISR) to handle the event. For example, when you receive an email, the system interrupts the CPU to process the email quickly.

## Deadlock:

A deadlock happens when two or more processes are stuck, each waiting for a resource held by the other. For example, as shown in Fig. 1.23, if Process P1 needs Resource R2 held by Process P2, while P2 needs Resource R1 held by P1, neither can proceed. The operating system must detect and resolve these deadlocks to keep processes running smoothly.

<CaptionedImage src="kg2eyr0f5nkr86ypy8dhn2apg18e9gfd" alt="Deadlock" caption="Deadlock" />
## . Computer System Resources managed by an Operating System

The four main computer system resources managed by an operating system are:

## CPU (Central Processing Unit) Management:

The operating system manages the CPU by scheduling processes, ensuring efficient utilization of the CPU, and prioritizing tasks. This involves process scheduling algorithms, deadlock resolution, and handling interrupts.

## Memory Management:

The operating system is responsible for managing the system's memory, which includes RAM. This involves allocation and deallocation of memory spaces to various programs, managing memory hierarchy, and ensuring that each process has adequate memory while optimizing the use of available memory.

## Storage Management:

The operating system manages data storage, including hard drives, SSDs, and other storage
devices. This involves file system management, managing read/write operations, ensuring data integrity, and providing an interface for file and directory management.

## I/O (Input/Output) Management:

The operating system manages input and output devices such as keyboards, mice, printers, and network interfaces. This includes managing device communication, buffering, and handling device drivers to ensure that the I/O operations are carried out smoothly and efficiently.

## Organization of the File System

The file system is a critical component of an operating system, responsible for organizing, storing, retrieving, and managing data on storage devices like hard drives, SSDs, and USB drives. Here's a detailed explanation of the structure and organization of a file system:

## File System Components

A file system is composed of several key components:
Files: The smallest unit of data storage, representing a collection of bytes stored on a disk. Files can be of various types, such as text files, executables, images, etc.
Directories/Folders: Also known as folders, directories are containers that hold files and other directories, providing a hierarchical structure.
Metadata: Information about files and directories, such as their names, sizes, types, permissions, and timestamps (creation, modification, and access times).

## Directory/Folder Structure

The directory/folder structure can be organized in different ways, commonly used directory/folder structures are shown in Fig. 1.24.

<CaptionedImage src="kg22e7nz0y6btge6s38d65yn1n8btv4q" alt="" caption="Directory/Folder Structure" />

Single-Level Directory/Folder: All files are contained in a single directory/folder. This structure is simple but becomes inefficient as the number of files grows. Figure A shows single level directory/folder structure.

Two-Level Directory/Folder: Each user has their own directory under the root directory, solving some of the limitations of the single-level structure. Figure B shows two level directory/folder structure.
Tree-Structured Directory/Folder: The most common structure, allowing a hierarchy of directories and subdirectories, resembling a tree. This structure is flexible and scalable. Figure Cshows tree-structured directory/folder structure.

## File Allocation Methods

Files can be stored in different ways:
Contiguous Allocation: Files occupy consecutive blocks, which speeds up access but can cause fragmentation.
Linked Allocation: Files are stored in linked lists, allowing flexibility but possibly slower access due-to pointer traversal.
Indexed Allocation: Uses an index to point to the actual data blocks, allowing faster access while balancing storage efficiency.

## File System Types

Various file systems are designed to meet different needs and have unique features. Some common file systems include:

FAT (File Allocation Table): An older file system used by DOS and Windows. Simple but limited in features and scalability.

- NTFS (New Technology File System): Used by Windows NT and later versions. Supports large files, security features, and disk quotas.
- ext3/ext4 (Extended File System 3/4): Common in Linux environments. ext4 offers improved performance and features like journaling, which helps recover from crashes.

## File Operations

File systems provide various operations to manage files and directories. Common file operations are:
Create: Making new files and directories.
Open: Accessing files for reading or writing.
Read: Retrieving data from files.
Write: Adding or modifying data in files.
Delete: Removing files and directories.
Rename: Changing the names of files and directories.


---

<!-- note kx7ass9nrs0a8rwanx3e8bkr1s8bvs26 | topic ms76c7q7yfenwrkvfav45r5jr58btf50 | status published -->
# 1.5 Computer Software


## Software and Its Main Types

Computer software, often referred to simply as "software," is a collection of programs, data, and instructions that tell a computer how to perform specific tasks or functions. It is an important component of any computer system, enabling it to process data, run applications, and interact
with users. Software is typically categorized into the following main types:
-> System Software
-> Application Software

- Programming software
-> Driver software

1.5.1 Comparing Different Software Types
| Software Type | Purpose \& Function | Examples |
| :--- | :--- | :--- |
| System Software | - Manages hardware and system resources. <br> - Controls overall system operations and provides a platform for applications to run. <br> - Essential for the computer's overall functioning. | Windows, macOS, Linux, Android |
| Programming <br> Software | - Provides tools for writing, testing, and debugging code. <br> -) Translates programming languages into machine-readable code, helping developers create software. | Eclipse for Java, Coda for Mac, Visual Studio for multiple languages, GitHub for source code |
| Application Software | - Performs specific tasks for the user, like writing, streaming, or browsing. <br> - Designed to meet user needs for specific activities. | Microsoft Word, Spotify, Google Chrome |
| Driver Software | - Acts as a bridge between the operating system and hardware devices. <br> - Ensures proper communication and functionality between the system and external devices. | Printer drivers, NVIDIA graphics drivers, Wi-Fi drivers |

## 1,5.2 Offline and Online Applications

## Offline Applications

Offline applications are programs that can run without an internet connection. They rely entirely on the device's local resources, such as storage and processing power, to function. These apps are useful when there's no access to the internet, but they can still perform tasks.

## Offline Application Examples
Microsoft Word- used for writing and editing documents.
Adobe Photoshop - used for image editing and graphic design.
VLC Media Player - plays media files like videos and music stored locally on the device.

## Online Applications

Online applications require an internet connection to function because they access resources, data, or services hosted on remote servers. These apps often provide real-time data and collaborative features.

## Online Application Examples
- Google Docs - for creating and sharing documents in real-time.
- Spotify- for streaming music.
- Gmail - for sending and receiving emails.

1.5.3 Uses of Common Productivity Application Soltwat.
| Software Type | Examples | Uses |
| :--- | :--- | :--- |
| Word Processors | Microsoft Word, Google Docs | Writing essays, reports, letters, resumes, and professional documents. |
| Spreadsheets | Microsoft Excel, Google Sheets | Budgeting, financial analysis, tracking inventory, data charts. |
| Presentation Software | Microsoft PowerPoint, Google Slides | Business presentations, educational lectures, and project proposals. |
| Database Management Systems (DBMS) | Microsoft Access, MySQL | Managing customer data, inventory, employee records, and large datasets. |
| Email Clients | Microsoft Outlook, Mozilla Thunderbird | Organizing emails, scheduling appointments, managing contacts. |
| Note-Taking <br> Applications | Evernote, Microsoft OneNote | Keeping track of tasks, lecture notes, organizing projects and ideas. |
| Calendar/Task <br> Management | Google Calendar, Microsoft To-Do | Managing time, setting reminders, planning meetings, tracking tasks. |
| PDF Editors | Adobe Acrobat, Foxit Reader | Editing PDFs, signing documents, converting documents to/from PDF. |
| Graphic Design Software | Adobe Photoshop, Canva | Designing posters, flyers, social media content, and marketing materials. |
| Graphic Design Software | Microsoft Project, Trello | Organizing tasks, tracking project timelines, team collaboration. |
| Video Conferencing <br> Tools | Zoom, Microsoft Teams | Conducting meetings, webinars, virtual classrooms, and online collaboration. |

## Application Patch

An application patch is a piece of software designed to update, fix, or improve an existing program or its supporting data. Patches address issues such as security vulnerabilities, bugs, or performance problems and can also add new features or functionalities to the application.
Key Functions of Application Patches:
Fix bugs: Resolve software glitches or errors.
Improve security: Patch vulnerabilities to prevent attacks.
Enhance performance: Optimize the program to run more smoothly.
Add features: Introduce new functionalities or improvements to the existing software.
Examples:
Security Patch for Windows: Microsoft regularly releases security patches to fix vulnerabilities in its operating systems to prevent malware attacks.
Game Updates: Games like World of Warcraft and Call of Duty often release patches that fix bugs, balance gameplay, and add new content.
Adobe Acrobat Patch: Adobe frequently provides patches to fix issues or add security updates to its PDF editing software.

## Software Hosting

Software hosting refers to the process of deploying, managing, and providing access to software applications on servers. These servers can be located on-premises, in data centers, or in the cloud. The primary objective of software hosting is to make applications accessible to users over a network, typically the internet.
Some common types of Software Hosting are:

On-Premises Hosting: On-premises hosting involves installing and running software on servers located
within an organization's physical premises. This setup offers complete control over the hardware, software, and data security, making it ideal for organizations with strict compliance and security requirements. However, it comes with high upfront costs for purchasing and setting up the hardware, as well as ongoing maintenance and operational expenses. As shown in Fig. 1.25.
## On-Premises Hosting Pros
You have complete control over hardware and data security.
It is customizable to specific needs and compliance requirements.

## On-Premises Hosting Cons
It has high initial and ongoing costs.
-) It requires in-house technical expertise, It has limited scalability.

## Shared Hosting:

Shared hosting involves multiple websites or applications sharing the same server resources provided by a hosting company. This is a costeffective solution, making it suitable for small websites and applications with moderate traffic. The hosting provider handles server maintenance, updates, and security. However, shared resources can lead to performance issues, and there are potential security risks due to neighboring sites on the same server. As

<CaptionedImage src="kg27dc10gw9qj6x6m5p8mm8js18bv2ac" alt="" caption="Shared hosting" />

shown in Fig. 1.26.

## Shared Hosting Pros
It is cost-effective.
It is easy to set up and manage.

## Shared Hosting Cons
You have limited control and customization. There are potential performance issues.

- There are security risks from other sites on the server.

## Dedicated Hosting:

Dedicated hosting provides an entire physical server for the exclusive use of a single user or organization. This setup ensures high performance, reliability, and security, making it suitable for resource-intensive applications and high-traffic websites. Users have full control over the server configuration. However, dedicated hosting is costly and requires significant technical expertise for server management and
<CaptionedImage src="kg29pq213b0q4xevgz8vfdt3fd8e8b9m" alt="1.5 Computer Software" caption="1.5 Computer Software" />
maintenance. As shown in Fig. 1.27.
## Dedicated Hosting Pros
It provides high performance and reliability.
You have complete control over server configuration.
It offers enhanced security.

## Dedicated Hosting Cons
It has a high cost.
It requires technical expertise for management.

## Cloud Hosting:

Cloud hosting uses a network of virtual and physical servers to provide scalable and flexible resources on demand. Managed by cloud providers like AWS, Google Cloud, and Microsoft Azure, it offers high scalability, cost-efficiency with a pay-as-you-go model, and excellent reliability. Cloud hosting is ideal for applications with variable or unpredictable traffic. However, it depends on internet connectivity, and there may be concerns over data security and
compliance. As shown in Fig. 1.28.
## Cloud Hosting Pros
It is highly scalable and flexible.
It is cost-efficient with pay-as-you-go pricing. It is reliable and supports global reach.

## Cloud Hosting Cons
It is dependent on internet connectivity.

- There are potential data security and compliance concerns.

## Programming Software

Programming software, often referred to as Integrated Development Environments (IDEs), text editors, and compilers, helps programmers write, debug, and compile code efficiently. The following is a detailed explanation of how these tools assist programmers in the coding and compilation process.

## Components of Programming Software:

Text Editors: Text editors are basic tools that allow programmers to write and edit code. Examples include Notepad++, Sublime Text, and Visual Studio Code.
Integrated Development Environments (IDEs): IDEs are comprehensive tools that combine atext editor, debugger, and compiler in one interface. Examples include IntelliJ IDEA, Eclipse, and Visual Studio.
Compilers: Compilers translate code written in a high-level programming language into machine code that the computer can execute. Examples include GCC (GNU Compiler Collection) for C/C++ and javac for Java.

## How Programming Software Helps:

Writing Code: Text Editors and IDEs provide a platform for writing code with features like syntax highlighting, which colors the code according to its syntax, making it easier to read and understand. For example, keywords in a programming language might appear in blue, while comments are in green.

Example: In Visual Studio Code, typing if in a Python file automatically highlights it and suggests possible completions, making coding faster and reducing errors.
Code Completion: IDEs offer advanced code completion, where the software predicts and suggests the next part of the code you are typing. This feature helps in writing code faster and with fewer errors.

Debugging: IDEs come with

<CaptionedImage src="kg26akxs1z33g16t25jbvcvsk98dm6qd" alt="" caption="Python's IDLE (Integrated Development and Learning Environment) showing the interactive shell, code editor, and settings dialog, illustrating a Python programming language IDE." />

integrated debuggers that allow programmers to run their code step- by-step, inspect variables, and understand the flow of execution to find and fix bugs (errors). Fig.1.29 shows Python programming language IDE.
## Error Checking and Syntax Highlighting:

Text Editors and IDEs provide real-time error checking, underlining syntax errors and other issues as you type. This immediate feedback helps in quickly identifying and correcting mistakes. Fig 1.30 shows syntax error in a program.
Example: In Visual Studio Code, if you forget a semicolon in a JavaScript file, it highlights the error and provides suggestions for fixing it.
Compiling Code: Compilers take the code written by programmers and translate it into executable machine code. They also perform various optimizations to make the code run

<CaptionedImage src="kg2cp47setwsh1n779gf1dp50n8btzz5" alt="" caption="Syntax error" />

more efficiently.

## Project Management:

IDEs offer project management features that help organize code files, manage dependencies, and streamline the build process.
Example: In Visual Studio Code, creating a new project sets up a directory structure with folders for source files, libraries, and dependencies, making it easier to manage complex applications.

## Learning Activity

## "Hello World! Project"

By following these detailed steps, you can create and run a simple "Hello World!" project using HTML, CSS, and JavaScript directly in Visual Studio Code using your default browser, like google Chrome. This setup allows you to see real-time updates as you make changes to your code.
Setting Up Visual Studio Code for HTML, CSS, and JavaScript
Before you begin, ensure you have Visual Studio Code installed.

## Step-by-Step Guide

1. Open Visual Studio Code program. As Shown in Fig 1.31.
<CaptionedImage src="kg2bpsz37q059aw8p36dqazh8x8btw0d" alt="" caption="" />

## 2. Create the Project Files:

Create a new folder on your computer and name it HelloWorldProject. As shown in Fig 1.32.

<CaptionedImage src="kg20x4f7ah8hn8f5thcz39nwdd8dn030" alt="" caption="Windows File Explorer ribbon toolbar showing the 'New folder' button in the New group, used to create a new project folder." />

3. Open the Project Folder in Visual Studio Code:

- In Visual Studio Code, click on File > Open Folder....
-> Navigate to and select your HelloWorldProject folder.

4. Create HTML, CSS, and JavaScript Files:

- In the Explorer pane on the left side of VS Code, right-click on the folder name (HelloWorldProject).
- Select New File and create the following files:
index.html
styles.css
script.js

5. Add the Code to the Files

HTML (index.html):

- Open index.html and type the following code. As Shown in Fig 1.33.

<CaptionedImage src="kg2b4rhswj4cnyrtwenzfsdfmh8bt0mz" alt="" caption="index.html" />

- This is the main HTML file that will structure your webpage.
## CSS (styles.css):

Open styles.css and type the following code. As Shown in Fig 1.34.

- This file contains the CSS styles for your HTML elements.
<CaptionedImage src="kg2aj4km4hxyq7f82wwjxa059n8btrs8" alt="" caption="" />

## JavaScript (script.js):

Open script.js and type the following code. As Shown in Fig 1.35.
This file contains the JavaScript code that adds interactivity to your webpage.
<CaptionedImage src="kg2c22ztkpzpbm77x1nhxewdad8bvxsj" alt="" caption="" />

## Running the Example

## View in Browser:

- Your default browser (like Google Chrome) should open a new tab displaying your HTML file. You should see a "Hello, World!" heading and a "Change Message" button. As Shown in Fig 1.36.

## Hello World!

- Clicking the Change Message button will activate a JavaScript alert saying "I Love my country, Pakistan". As Shown in Fig 1.37.

Fig.1.36: Running the Example
<CaptionedImage src="kg21tgjrth0zzqfdvayp30cmwx8btdmy" alt="" caption="" />

## Unit Summary

-) Machine-Level Representation of Data: Data is stored in binary (bits) and represented in various data types.
Numbering Systems: Include decimal, binary, octal, and hexadecimal systems for number representation and conversions.

- Decimal System: Uses base 10 with symbols 0-9
- Binary System: Base 2, using 0 and 1 for data representation.
- Octal System: Base 8, with symbols 0-7.
-) Hexadecimal System: Base 16, using symbols 0-9 and A-F for compact data representation.
- Number System Conversions: Methods to convert between decimal, binary, octal, and hexadecimal.
- Binary Arithmetic: Computers perform addition, subtraction, multiplication, and division in binary.
- Overflow/Underflow: Occurs when a calculation exceeds or falls below the representable range.
- Complements (1's and 2's): Used in binary operations, especially for subtraction.
-) Binary Subtraction: Done using 1's or 2's complement to simplify operations.
- Signed/Unsigned Numbers: Binary numbers can be represented with or without a sign bit to indicate positive or negative values.
- Floating-Point Representation: Uses the IEEE 754 standard for storing real numbers, dividing them into sign, exponent, and mantissa.
Common Coding Schemes (ASCII/Unicode): Convert characters into binary; ASCII uses 7 or 8-bit codes, Unicode supports global languages.
- Operating System (OS) Overview: Manages memory, processes, devices, and software, enabling user interaction.
Main OS Tasks: Includes managing processes, memory, files, devices, networks, and security.

Process Management: Allocates CPU time and optimizes resource use.
Memory Management: Allocates and manages memory for programs.
File Management: Handles file creation, deletion, and organization.
Device Management: Controls and optimizes input/output devices.
Network Management: Manages network resources and resolves network issues.
Security Management: Enforces security policies and manages user accounts.

- Batch Processing OS: Processes tasks in batches, improving efficiency.
- Multiprogramming OS: Executes multiple programs simultaneously in memory.
- Multitasking OS: Performs multiple tasks at once by quickly switching between programs.
- Time-sharing OS: Shares CPU time across programs, simulating simultaneous processing.
-> Real-time OS: Executes tasks within strict timing constraints, often used in industrial processes.
- Multiprocessor OS: Manages multiple CPUs to improve performance.
-) Parallel Processing OS: Runs multiple processes at once using several processors.
-> Distributed OS: Manages a distributed system, balancing load for fast execution.
-) Embedded OS: Built into devices to manage hardware and perform specific tasks automatically.
- Application Management: OS manages resources for running applications efficiently.
- Process Scheduler: Manages CPU time for process execution, ensuring fairness and efficiency.
-) Process Synchronization: Coordinates access to shared resources, preventing conflicts.
-) Scheduling Algorithms: Includes FCFS, SJN/SJF, priority scheduling, and round-robin.
-) Interrupts: Signals to the CPU that require immediate action, handled by interrupt routines.
-> Deadlock: Occurs when processes block each other indefinitely over shared resources.
- System Resources Managed by OS: CPU, memory, storage, and I/O devices.
- OS Design: Includes kernel, process management, memory management, file systems, device management, security, networking, and user interface.
File System Structure: Files, directories, and metadata organized into single-level, two-level, or tree structures.
-) File Allocation Methods: Contiguous, linked, and indexed methods for storing files.
- File System Types: Examples include FAT, NTFS, and ext3/ext4, each with unique features.
File Operations: Include creating, reading, writing, deleting, and renaming files.
Software Hosting: Involves deploying software on servers for network accessibility.
On-Premises Hosting: Software hosted on internal servers, offering control but with high cost.
- Shared Hosting: Multiple websites share a single server, offering low cost but potential performance issues.

Dedicated Hosting: A server dedicated to one user, providing high performance and security at a higher cost.

Cloud Hosting: Uses cloud servers for scalability and cost-efficiency, though dependent on connectivity.

- Programming Software: IDEs, text editors, and compilers help write, debug, and compile code.
-> Components of Programming Software: Text editors for writing, IDEs for a full coding environment, and compilers for translating code.
-) Writing Code: Tools like syntax highlighting and code completion enhance coding efficiency.

Debugging: IDEs provide tools for finding and fixing bugs by stepping through code.
Error Checking: Real-time error checking and syntax highlighting help avoid coding mistakes.

- System Software: Manages hardware and system resources, controls operations, and provides a platform for applications (e.g., Windows, macOS).
Programming Software: Offers tools for writing, testing, and debugging code; translates code into machine language (e.g., Eclipse, Visual Studio).
- Application Software: Performs specific user tasks such as writing, streaming, or browsing (e.g., Microsoft Word, Spotify).
- Driver Software: Enables communication between the operating system and hardware devices (e.g., printer drivers, Wi-Fi drivers).
Offline Applications: Run without internet, rely on local resources (e.g., Microsoft Word, Adobe Photoshop).
Online Applications: Require an internet connection to access data or services (e.g., Google Docs, Spotify, Gmail).
- Word Processors: Used for writing documents (e.g., Microsoft Word, Google Docs).
- Spreadsheets: For data analysis, budgeting (e.g., Excel, Google Sheets).
-> Presentation Software: Create presentations for business or education (e.g., PowerPoint, Google Slides).
Database Management: Organize large datasets (e.g., Microsoft Access, MySQL).
Email Clients: Manage emails and appointments (e.g., Outlook, Thunderbird).
Note-Taking Apps: Organize notes and tasks (e.g., Evernote, OneNote).
