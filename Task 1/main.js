let hidden=document.querySelectorAll(".hidden");
let observer= new IntersectionObserver((entry)=>{
    entry.forEach(e => {
        if(e.isIntersecting){
            e.target.classList.add('show');
        }
        else{
            e.target.classList.remove('show');
        }
    })
});
hidden.forEach((en) => observer.observe(en));
let logo1=document.querySelector(".logo1");
observer.observe(logo1);
let logo2=document.querySelector(".logo2");
observer.observe(logo2);
let para1=document.querySelector("#para1");
observer.observe(para1);