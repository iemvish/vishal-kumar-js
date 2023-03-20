let n= 5;
let string = "";
for(let i = 1; i <= n; i++)
{
    //print white space
   for(let j = i-1; j <= n-1; j++)
   {
    string += " ";
   }
   //print star
   for(let k = 0; k < 2 * i -1; k++){
    string += "*";
   }
   string += "\n";
}
console.log(string);