/* Add your JavaScript to this file */
window.onload = function () {
  document
    .querySelector(".newsletter form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.querySelector(".form-group input");
      if (!input.value.trim())
        return (document.getElementsByClassName("message")[0].innerHTML =
          "Please enter a valid email address.");
      document.getElementsByClassName(
        "message"
      )[0].innerHTML = `Thank you! Your email address ${input.value.trim()} has been added to our mailing list!`;
    });
};
