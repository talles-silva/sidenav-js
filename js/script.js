var sidenav = document.querySelector(".sidenav-opened");

function toggleSideNav() {
  sidenav.classList.toggle("sidenav-closed");
  if (sidenav.classList.contains("sidenav-closed")) {
    document.querySelectorAll(".sidenav-text").forEach((e) => {
      e.style.display = "none";
    });
  } else {
    document.querySelectorAll(".sidenav-text").forEach((e) => {
      e.style.display = "inline";
    });
  }

  console.log("funcionou");
}
