// collapsible contents
const setCollapsible = () => {
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((item) =>
    item.addEventListener("click", () => {
      item.classList.toggle("collapsible--expanded");
    })
  );
};

// automatically update footer year
const setFooterYear = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").innerHTML = year;
};

window.addEventListener("DOMContentLoaded", () => {
  setCollapsible();
  setFooterYear();
});
