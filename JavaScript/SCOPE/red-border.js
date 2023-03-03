(() => {
  const divElements = document.querySelectorAll("div");
  divElements.forEach((el) => {
    el.style.border = "1px solid red";
    el.style.marginTop = ".5rem";
  });
})();
