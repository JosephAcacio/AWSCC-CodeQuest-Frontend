let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").style.top = "0";
  } else {
    document.getElementById("nav_bar").style.top = "-75px"; // 
  }
  prevScrollpos = currentScrollPos;
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav_check').checked = false; 
      document.querySelector(".nav").style.left = "-300px"; 
    });
  });

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector(".nav").style.left = "0";}
);