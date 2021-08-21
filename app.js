

// set date
const date =document.getElementById("date")
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navtoggle = document.querySelector(".nav-toggle")
const linkscontainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navtoggle.addEventListener("click",()=>{
  
const containerheight = linkscontainer.getBoundingClientRect().height
const linksheight = links.getBoundingClientRect().height 
if(containerheight === 0){
    linkscontainer.style.height = `${linksheight}px`
}
else{
    linkscontainer.style.height 
}
})
const navbar = document.getElementById("nav")
const toplink = document.querySelector(".top-links")
// fixed navbar

window.addEventListener("scroll",()=>{

   const scrollheight = window.pageYOffset;
   const navheight = navbar.getBoundingClientRect().height;

   if(scrollheight > navheight){
       navbar.classList.add("fixed-nav")
   }
   else{
       navbar.classList.remove("fixed-nav")
   }
})





