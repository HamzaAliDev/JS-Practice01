//3. Write a ts program to print all alphabets from a to z. - using while loop
document.getElementById('alphabets').onclick = function () {
    let num1 = 97;
    let output = "";
    while (num1 <= 122) {
        let h = String.fromCharCode(num1)
        // console.log(h);
        output+= h + "  "
        num1++
    }
    document.getElementById('show-output').innerHTML = output;
}

// 6. Write a ts program to find sum of all natural numbers between 1 to n.
document.getElementById('natural').onclick = function (){
let num2=parseInt(prompt("Enter the number:"));
console.log(num2);
let n=0;
let i=1;
let output = ""
while (i<=num2) {
    n=n+i
    output += i + " + " 
    i++
}
console.log(n);
document.getElementById('show-output').innerHTML = "You entered : " + num2 + "<br />" + "Program to find sum of all natural numbers between 1 to n. <br />" + output + "<br />" + "The answer is : " + n;

}

// 9. Write a ts program to print multiplication table of any number.
document.getElementById('table').onclick = function () {
let no1=parseInt(prompt("Which table you want to print: "));
let no2=parseInt(prompt("table upto:"));
let display = "";
for (let index = 1; index <= no2; index++) {
    let table=no1 * index;
    console.log(no1,"  *  ",index,"  =  ",table);
    display += no1 + "  *  " + index + "  =  " + table + "<br />"

}
document.getElementById('show-output').innerHTML = display 
}

// clear function
document.getElementById('clear').onclick = function () {
    document.getElementById('show-output').innerHTML = ""
}