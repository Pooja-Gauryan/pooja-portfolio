// ==========================================
// Active Navigation
// ==========================================
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// ==========================================
// Smooth Button Hover Animation
// ==========================================
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px)";
    });
});

/*=====================================
      SCROLL REVEAL ANIMATION
======================================*/
const reveals = document.querySelectorAll(".reveal");
function revealElements(){
    reveals.forEach((element)=>{
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;
        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/*=====================================
    SCROLL PROGRESS BAR
======================================*/
const progressBar = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
});

/*=====================================
      SCROLL TO TOP
======================================*/
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if(window.scrollY > 350){
        scrollBtn.classList.add("show");
    }
    else{
        scrollBtn.classList.remove("show");
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

/*==============================
    CERTIFICATE MODAL
===============================*/
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("certificateImage");
const downloadBtn = document.getElementById("downloadCertificate");
const zoomBtn = document.getElementById("zoomCertificate");
const closeBtn = document.querySelector(".close-modal");
document.querySelectorAll(".view-certificate").forEach(btn=>{
    btn.onclick=()=>{
        const img=btn.dataset.image;
        modal.classList.add("show");
        modalImg.src=img;
        downloadBtn.href=img;
    };
});
closeBtn.onclick=()=>{
    modal.classList.remove("show");
    modalImg.classList.remove("zoomed");
};
modal.onclick=(e)=>{
    if(e.target===modal){
        modal.classList.remove("show");
        modalImg.classList.remove("zoomed");
    }
};
zoomBtn.onclick=()=>{
    modalImg.classList.toggle("zoomed");
};

/*=====================================
      PROJECT PREVIEW MODAL
======================================*/
const projectModal = document.getElementById("projectModal");
const projectImage = document.getElementById("projectModalImage");
const previews = document.querySelectorAll(".project-preview");
const closeProject = projectModal.querySelector(".close-modal");
previews.forEach(img=>{
    img.addEventListener("click",()=>{
        projectModal.classList.add("show");
        projectImage.src = img.dataset.image;
    });
});
closeProject.addEventListener("click",()=>{
    projectModal.classList.remove("show");
});
projectModal.addEventListener("click",(e)=>{
    if(e.target===projectModal){
        projectModal.classList.remove("show");
    }
});