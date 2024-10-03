/**
1) Declare a string variable and assign it to the value "You have received this message because you have been chosen to open an important vault."
2) Declare and assign three variables, one for each number in the combination
3) Code1 will be using addition 
4) Code2 will be using subtraction
5) Code 3 will be using multiplication
6) Display the string and the codes to the user
*/


const userMessage = "You have received this message because you have been chosen to open an important vault."

let code1 = 1 + 1
let code2 = 10 - 5
let code3 = 7 * 3

function button1() { alert(code1) }
function button2() { alert(code2) }
function button3() { alert(code3) }

alert(userMessage + "\n" + code1 + " " + code2 + " " + code3)