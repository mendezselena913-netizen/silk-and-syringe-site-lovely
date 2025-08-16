document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your booking request has been submitted.");
      form.reset();
    });
  }
});

