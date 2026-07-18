const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section,.card").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>60){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

});
