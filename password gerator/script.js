let inputslider=document.getElementById('inputslider');
let slidervalue=document.getElementById('slidervalue');
let passbox=document.getElementById('passbox');
let uppercase=document.getElementById('uppercase');
let lowercase=document.getElementById('lowercase');
let symbol=document.getElementById('symbols');
let numbers=document.getElementById('numbers');
let genbtn=document.getElementById("genbtn");
letcopyicon=document.getElementById('copyicon');


slidervalue.textContent=inputslider.value; // showing in starting
inputslider.addEventListener('input',()=>{
 slidervalue.textContent=inputslider.value;
});

genbtn.addEventListener("click",()=>{
    passbox.value=generatepassword();
});
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "@#$%^&*";


function generatepassword(){
   
   let genpassword = "";
   let allchars = "";

   if (lowercase.checked) allchars += lowerChars;
   if (uppercase.checked) allchars += upperChars;
   if (symbol.checked) allchars += allSymbols;
   if (numbers.checked) allchars += allNumbers;
   

   if(allchars == ""  || allchars.length == 0)
   {
    return genpassword;
   }

   let i=1;
   while(i<=inputslider.value){
    genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
   }
   return genpassword;
}

copyicon.addEventListener("click",()=>{
    if(passbox.value != "" || passbox.value.length >=1)
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText = "check";
     copyicon.title = "password copied";
     // Reset icon and title after 1.5 seconds
     setTimeout(() => {
        copyicon.innerText = "📋"; // Change back to clipboard icon
        copyicon.title = "Copy password";
    }, 1000);

});

