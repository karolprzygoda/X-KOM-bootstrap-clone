(function () {
  "use strict";
  let forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        const alertPlaceholder = document.getElementById(
          "liveAlertPlaceholder",
        );
        const appendAlert = (message, type) => {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible myAlert-bottom" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            "</div>",
          ].join("");

          alertPlaceholder.append(wrapper);
        };

        const alertTrigger = document.getElementById("liveAlertBtn");
        if (alertTrigger) {
          alertTrigger.addEventListener("click", () => {
            appendAlert("Udało się zarejestrować do newslettera!", "success");
          });
        }
      },
      false,
    );
  });
})();
