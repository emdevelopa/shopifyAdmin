const showDropdownIcon = document.getElementById("dropdown-show-icon");
const hideDropdownIcon = document.getElementById("dropdown-hide-icon");

const removePlan = document.getElementById("remove-plan-icon");
const planPopUp = document.getElementById("plan-popup-container");

const dropdown = document.getElementById("dropdown");

removePlan.addEventListener("click", () => {
    planPopUp.style.display = "none"
})

showDropdownIcon.addEventListener("click", () => {
  showDropdownIcon.style.display = "none";
  hideDropdownIcon.style.display = "block";
  dropdown.style.display = "block";
});

hideDropdownIcon.addEventListener("click", () => {
  hideDropdownIcon.style.display = "none";
  showDropdownIcon.style.display = "block";
  dropdown.style.display = "none";
});
