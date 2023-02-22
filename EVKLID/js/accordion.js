document.addEventListener("DOMContentLoaded", () => {
  $(".faq__list").accordion({
    header: ".question__accordion-header",
    active: "false",
    heightStyle: "content",
  });
});
