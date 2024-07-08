// for loop
for(let i=0; i<=10;i++){
//code to be printed
console.log(i)
}
//Using for loops to print data of an array
let languages=["Javascript","Java","Python","HTML&CSS"]
//Now I create a forloop to print this
for(i=0; i<languages.length;i++)
    console.log(languages[i])
//Creating a loop inside a loop
for(let i=0; i<=5;i++){
    for(let a=1;a<=2;a++)
        console.log("Inner Loop"+a)
}
//while loop
let i=0;
while(i<=8){
    console.log(i)
    i++;
}
// do while loop
let x=1;
do{
    console.log(x)
x++
} while(x<=5)
    //Break/continue a statement
