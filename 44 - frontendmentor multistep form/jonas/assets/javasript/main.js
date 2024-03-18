let current_step;

document.addEventListener("DOMContentLoaded", () => {
  current_step = document.localStorage.getItem("current_step");
  console.log("Current step:", current_step);
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Clicked:", event.target);

  const class_list = event.target.classList;
  const next_button = class_list.contains("next");
  const prev_button = class_list.contains("prev");

  if (next_button) {
    current_step++;
  } else if (prev_button) {
    current_step--;
  }

  document.localStorage.setItem("current_step", current_step);
  document.querySelectorAll(".step").forEach((step, index) => {
    step.classList.toggle("active", index === current_step);
  });
  console.log("Current step:", current_step);
});
