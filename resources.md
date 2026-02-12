- console -> log, warn, error 
- varibales -> declaration, initialization, updataion/reinitialization
- print variables
- arthemetic operation (+,-,*,/,%)
- alert, confirm, prompt
- typeOf


DataTypes in JS 

1. Premitive 
    - Number (10,20.56,0.565,-50)
    - String ('a', "Hello", 'Hi I am Sarthak')
    - Boolean (true, false)
    - undefined (varible ke declare karne pe koi value nahi initialize ki to default value hogi undefined.)
    - null (nothing)
    - NaN (Not a number)

2. Reference 
    - Array 
    - Object 
    - Functions 

- Type Coercion
- Type Conversion
- Conditionals (if, else, else if)
- switch case statement
- ternary operator

Logical Operators

|| (OR Operator) + (dono me se koi ek condition bhi agar true hui to chal jana)

0   0 = 0
0   1 = 1
1   0 = 1
1   1 = 1

|| (AND Operator) * (dono condition bhi agar true hui to chal jana)

0   0 = 0
0   1 = 0
1   0 = 0
1   1 = 1

Loops 

- while
- do While
- for


Functions 
parameter and arguments
return statement

function a1(a) {
    console.log('hello 1',a);
    return 10
}

var a2 = function (b) {
    console.log('hello 2',b);
    return 20
}

var a3 = (c)=>{
    console.log('hello 3',c);
    return 30
}

var a4 = (d)=> console.log('hello 4',d);

console.log(a1('Sarthak'));

console.log(a2('Danish'));

console.log(a3('Bixi'));

a4('Swaraj')

hoisting 
variable hoisting, function hoisting.  


Arrays 
index, you can put any datatype, length

arr.push() - last me new element add karta hai 
arr.pop() - last index ke element ko bahar karta hai 

arr.unshift() - starting me element add karega
arr.shift() - starting ke element ko hatayega

arr.splice()


What is Array 
what is Index 
Array ke andar kya kya ho sakta hai?
Length property
Value read aur update kaise karte hain?
Add aur remove ka basic tareeka
    - push
    - pop
    - shift
    - unshift
    - splice
Loop kaise karte hain array pe?
High order Functions (HOF)
    - forEach            
    - map
    - filter
Reference behavior
mutating vs non mutating
Sort, reverse, concat, find, some, 
Destructuring

What is object
how to create object 
how to access object 
kya kya ho skta hai object me?
add/update delete 
Object Methods 
- Object.keys()
- Object.values()
- Object.entries()
this Keyword inside Object
Object Destructuring
Freezing and Sealing Objects
JSON and Objects


String kya hoti hai?
String create karne ke tareeke
Length property
Character access
Common String Methods
    - trim
    - slice
    - substring
    - includes
    - indexOf
    - replace
    - replaceAll
    - split
    - join
    - toUpperCase
    - toLowerCase
    