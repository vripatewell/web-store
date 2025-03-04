var a = document.getElementById('tampil');
		function putarmusic(){
			a.style.display = "none";
			var audio = new Audio('https://b.top4top.io/m_3348sr4ia0.mp3');
			audio.play();
		}
		
		function toggleDarkMode() {
  let isDark = document.body.classList.toggle('dark-mode');
  let texttitle = document.querySelector(".title p")
  let cardtitle = document.querySelector(".title")
  let navbar = document.querySelector(".navbar")
  let menuNav = document.querySelector(".mobile-menu")
  let foter = document.querySelector("footer")
  let icont = document.querySelector(".mode-terang")
  let icong = document.querySelector(".mode-gelap")
  
  icont.style.display = isDark ? "block" : "none"
  icong.style.display = isDark ? "none" : "block"
  foter.style.backgroundColor = isDark ? "#171717" : ""
  menuNav.style.backgroundColor = isDark ? "#171717" : ""
  navbar.style.backgroundColor = isDark ? "#171717" : ""
  cardtitle.style.backgroundColor = isDark ? "rgba(23, 23, 23, 1" : ""
  texttitle.style.color = isDark ? "#e3e3e3" : ""
}

  // Mobile menu functionality
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });