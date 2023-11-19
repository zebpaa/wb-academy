document.querySelectorAll(".accordion__box").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    // console.log(content);

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".accordion__content")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".accordion__content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function toggle(source) {
  var inputs = document
    .getElementsByClassName("cart-list")
    .getElementsByTagName("input");
  var i, input;

  for (i = 0; (input = inputs[i]); i++) {
    if ((" " + input.className + " ").indexOf(" custom-checkbox ") > -1) {
      input.checked = source.checked;
    }
  }
}
