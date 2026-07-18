// Fade in sections

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// Navbar animation

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

});
