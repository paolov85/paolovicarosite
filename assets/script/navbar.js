window.onload = function() {
 
  var mobileNav = document.getElementsByClassName("mobileNav");
  var mobileNavLink = document.getElementsByClassName("mobileNavLink");

  if (window.innerWidth > 768) {
      for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].removeAttribute("data-bs-toggle");
        mobileNav[i].setAttribute("style", "display: inline-block; width: 100%;");
        mobileNavLink[i].removeAttribute("style");
      }
    } else {
        for (var i = 0; i < mobileNav.length; i++) {
          mobileNav[i].setAttribute("data-bs-toggle", "collapse");
          mobileNav[i].setAttribute("style", "display: inline-block; width: 100%; height: 40px");
          mobileNavLink[i].setAttribute("style", "padding: 0;");
        }
      }

  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].removeAttribute("data-bs-toggle");
        mobileNav[i].setAttribute("style", "display: inline-block; width: 100%;");
        mobileNavLink[i].removeAttribute("style");
      }
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
      for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].setAttribute("data-bs-toggle", "collapse");
        mobileNav[i].setAttribute("style", "display: inline-block; width: 100%; height: 40px");
        mobileNavLink[i].setAttribute("style", "padding: 0;");
      }
    }
  });

};