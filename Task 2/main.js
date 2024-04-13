let bar=document.querySelector("#bar");
let submit=document.querySelector("#submit");
let list=document.querySelector(".box");
let important=document.querySelector("#important");
submit.addEventListener('click',()=>{
    let text=bar.value;
    if(important.checked){
        list.innerHTML+="<p style='background-color:red;'>"+text+"</p><br>";
        text.style="font-style=sans-serif; font-size:0.48cm; margin:1cm; border: 2cm solid black";
    }
    else{
        list.innerHTML+="<p>"+text+"</p><br>";
        text.style="font-style=sans-serif; font-size:0.48cm; margin:1cm; border: 1cm solid black";
    }
});