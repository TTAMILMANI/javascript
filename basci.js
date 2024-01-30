var n=prompt();
var m=prompt();
var num1=n.length;
var num2=m.length;
let c=0;

if(num1!==num2)
{
console.log("Invalid output");
}
else{
for(let i=0;i<num1;i++){
for(let j=0;j<num2;j++){
if(n.charAt(i)==m.charAt(j)){
c++;}
}
}
    if(c==num1)
    console.log("anagram");
    else
    consloge.log("not a anagram");
}