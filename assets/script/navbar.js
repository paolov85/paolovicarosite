//prova

window.onload = function () {

  let mobileNav = document.getElementsByClassName("mobileNav");
  let mobileNavLink = document.getElementsByClassName("mobileNavLink");
  let contactLink = document.getElementById("contactLink");

  if (window.innerWidth > 768) {
    for (var i = 0; i < mobileNav.length; i++) {
      mobileNav[i].removeAttribute("data-bs-toggle");
      mobileNav[i].setAttribute("style", "display: inline-block; width: 100%;");
      mobileNavLink[i].removeAttribute("style");
    }
    contactLink.removeAttribute("style");
  } else {
    for (var i = 0; i < mobileNav.length; i++) {
      mobileNav[i].setAttribute("data-bs-toggle", "collapse");
      mobileNav[i].setAttribute("style", "display: inline-block; width: 100%; height: 40px");
      mobileNavLink[i].setAttribute("style", "padding: 0;");
    }
    contactLink.setAttribute("style", "padding: 0;height:40px;");
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].removeAttribute("data-bs-toggle");
        mobileNav[i].setAttribute("style", "display: inline-block; width: 100%;");
        mobileNavLink[i].removeAttribute("style");
      }
      contactLink.removeAttribute("style");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
      for (var i = 0; i < mobileNav.length; i++) {
        mobileNav[i].setAttribute("data-bs-toggle", "collapse");
        mobileNav[i].setAttribute("style", "display: inline-block; width: 100%; height: 40px");
        mobileNavLink[i].setAttribute("style", "padding: 0;");
      }
      contactLink.setAttribute("style", "padding: 0;height:40px;")

    }
  });
};