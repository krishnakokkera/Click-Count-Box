let count=1;

function increment()

{
    count++;
   //document.getElementsByClassName("add").innerHTML=count;
   document.getElementById("countdata").innerHTML=count;
    
}
function decrement()
{
    if(count>1)
    {
        count--;
   // document.getElementsByClassName("add").innerHTML=count;
    document.getElementById("countdata").innerHTML=count;
    
    }
    
}