const showNavbarItem = (e) => {
  console.log(e);
  const i = event.target.id.split("-").pop();
  document.getElementsByClassName("display")[i - 1].classList.toggle("active");
};

const toggleBurgerMenu = (e) => {
  document.querySelector(".responsive-navbar-items").classList.toggle("active");
};

const toggleResponsiveNavbarItems = (e) => {
  e.nextElementSibling.nextElementSibling.classList.toggle("d-block");
};
