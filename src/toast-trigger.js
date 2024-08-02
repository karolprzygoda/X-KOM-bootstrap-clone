document.addEventListener("DOMContentLoaded", function () {
  let myToast = document.getElementById("liveToast");
  let toast = new bootstrap.Toast(myToast);
  toast.show();
});
