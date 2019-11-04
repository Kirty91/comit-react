let sum=0;
console.log("Sum of numbers using for loop:");
for (let i = 0; i < 1000; i++) 
{
 sum+=i;
 if (sum > 400)
  break;  
}
console.log(sum);

console.log("0-10 numbers using while loop:");
let i = 0;
let ans="";
while (i<10)
{
 i++;    
 ans+=i+" ";
}
console.log(ans);

console.log("100-0 numbers using while loop:"); 
let j = 100;
ans="";
while (j>=0)
{
 ans+=j+" ";
 j--;
}
console.log(ans);  

console.log("even numbers using while loop:"); 
let k = 0;
let evenNum="";
while (k<=100)
{
    if (k % 2 == 0)
    {
        evenNum+=k+" ";
    }
    k++;
}
console.log(evenNum);
console.log("* using while loop:");

i = 1;
let l=1; 
while (i<=13)
{
l=1;  
let pattern="";
while(l<=i)
{
  pattern+="*";
  l++;
}
console.log(pattern);
i++;
}

/////////////////
console.log("0-10 numbers using do while loop:");
let di = 0;
let dans="";
do
{
 di++;    
 dans+=di+" ";
}
while (di<10);
console.log(dans);

console.log("100-0 numbers using do while loop:"); 
let dj = 100;
dans="";
do
{
 dans+=dj+" ";
 dj--;
}
while (dj>=0);
console.log(dans);  

console.log("even numbers using while loop:"); 
let dk = 0;
let devenNum="";
do
{
    if (dk % 2 == 0)
    {
        devenNum+=dk+" ";
    }
    dk++;
}while (dk<=100);
console.log(devenNum);
console.log("* using do while loop:");

i = 1;
let dl=1; 
do
{
dl=1;  
let dpattern="";
do
{
  dpattern+="*";
  dl++;
}while(dl<=i);
console.log(dpattern);
i++;
}while (i<=13);

/////////////////
console.log("0-10 numbers using for loop:");
ans="";
for(let a=1; a<=10; a++)
{  
 ans+=a+" ";
}
console.log(ans);

console.log("100-0 numbers using for loop:"); 
ans="";
for(let b=100; b>=0;b--)
{
 ans+=b+" ";
}
console.log(ans);  

console.log("even numbers using while loop:");
evenNum="";
for(let c=0;c<=100;c++)
{
    if (c % 2 == 0)
    {
        evenNum+=c+" ";
    }
}
console.log(devenNum);
console.log("* using do while loop:");

for(let p=1;p<=13;p++)
{
let dpattern="";
for(let s=1;s<=p;s++)
{
  dpattern+="*";
}
console.log(dpattern);
}
 