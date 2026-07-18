// Fade in photos when scrolling

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

photos.forEach(photo=>{

    observer.observe(photo);

});

// Image Lightbox

const images=document.querySelectorAll(".photo img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src=image.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});
