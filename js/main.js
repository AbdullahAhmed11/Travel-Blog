// navbar menu toggler
let togglerBtn = document.querySelector(".navbar .toggle-btn");
let linksContainer = document.querySelector(".navbar .links");
linksContainer.onclick = (e) => {
  e.stopPropagation();
};

togglerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  linksContainer.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (e.target !== togglerBtn && e.target !== linksContainer) {
    linksContainer.classList.remove("open");
  }
});


//count of hearts

let hearts = document.querySelectorAll(".activities .like .heart");

likeCounter(hearts);

//function
function likeCounter(element) {
  element.forEach((el) => {
    el.addEventListener("click", function(e) {
        e.target.parentElement.parentElement.querySelector(".count").innerHTML++;
    });
  });
}

//add class active 
const navLinks = document.querySelectorAll(".navbar .links li");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((lin) => {
      lin.classList.remove("active")
    });
    e.target.classList.add("active");
  })
})

// scroll top 

const scrollTop = document.querySelector(".scroll-top");

window.onscroll = () => {
  if(this.scrollY > 400) {
    scrollTop.style.display = "block"
  }else {
    scrollTop.style.display = "none"
  }
}

scrollTop.onclick = () => {
  window.scrollTo(0, 0)
}