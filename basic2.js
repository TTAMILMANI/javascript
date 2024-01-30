var a=[1,2,3,4,5];
var m=3;
let p=1;
while(p<=m)
{
    var last=a[0];
for(let i=0;i<a.length;i++)
{
    a[i]=a[i+1];
    
}
a[a.length-1]=last;
p++;
}
for(let i=0;i<a.length;i++)
{
    console.log(a[i]+" ");
}