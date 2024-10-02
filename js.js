For Fibinocci series


let number = prompt('Enter the number of terms: ');
let a = 0, b = 1, c;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}

num =+prompt("Enter the number: ")
a=0,b=1
while(a<=num){
    console.log(a);
    c=a+b
    a=b
    b=c
}

last number to print the fibinocci series


num =+prompt("Enter the number: ")
a=0,b=1
while(a<=num){
    c=a+b
    a=b
    b=c
}
console.log(a);


Numbers not in fibinocci series:-


num=+prompt("Enter the number: ")
a=0,b=1,nonFib=0;
while(nonFib!=num){
    for(i=a+1;i<b;i++){
        console.log(i)
        nonFib++
        if(nonFib==num)
        break
    }
    c=a+b;
    a=b;
    b=c
}

num = +prompt("Enter the number: ");
a = 0; b = 1; nonfib = 0; z = 0;
nonFibNumbers = [];

while (nonfib != num) {
    let i = a + 1;
    while (i < b) {
        nonFibNumbers.push(i);
        i++;
        nonfib++;
        if (nonfib == num) 
        break;
    }
    c = a + b;
    a = b;
    b = c;
}

console.log(nonFibNumbers.join(" "));  --> o/p will be vertical

Using While loop:-

num=+prompt("Enter the number: ")
a=0;b=1;nonfib=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
        console.log(i)
        i++;
        nonfib++
        if(nonfib==num)
        break
    }
    c=a+b
    a=b
    b=c
}

num=10
a=0;b=1;nonfib=0; z=0;
while(nonfib!=num){
    let i=a+1;
    while(i<b){
        z=i
        i++;
        nonfib++
        if(nonfib==num)
        
        break
    }
    c=a+b
    a=b
    b=c
}
console.log(z) --> to print a last number


num=+prompt("Enter the Number: ")
a=0;b=1;nonfib=0; res=" "
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        // console.log(i)
        nonfib++
        if(nonfib==num){
            break
        }
        if(i<=num){
            res+=i + " "
            
        }
    }
    c=a+b
    a=b
    b=c
}
console.log(res)
