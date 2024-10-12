 var navLinks=document.querySelectorAll(".nav-links a")
 for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(el) {  
      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove("active");
      }
  
      el.target.classList.add("active");
    console.log("haloo")
    });
  }