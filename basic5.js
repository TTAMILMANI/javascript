var n="tamil mani";
var m=n.split(" ");
for(let i=0;i<m.length;i++)
{
    if(i==m.length-1)
    {
console.log('"'+m[i]+'"');
    }else
    {
console.log('"'+m[i]+'"'+",");
}
}