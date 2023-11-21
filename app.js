const showDropdownIcon = document.getElementById("dropdown-show-icon");
const hideDropdownIcon = document.getElementById("dropdown-hide-icon");
const dropdown = document.getElementById("dropdown");

const removePlan = document.getElementById("remove-plan-icon");
const planPopUp = document.getElementById("plan-popup-container");

// const stepGuideClick = document.getElementById("step-guide-click");
// const showGuide = document.getElementById("show-guide");

// X-icon Event-Listener
removePlan.addEventListener("click", () => {
  planPopUp.style.display = "none";
});

// Dropdown Event-Listener
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


// stepGuideClick.addEventListener("click", () => {
//     showGuide.style.display = "block"
// })

const stepGuideClick1 = document.getElementById("step-guide-click");
const showGuide1 = document.getElementById("show-guide");
const firstStepGuide = document.getElementById("first-step-guide-parent-el");

const stepGuideClick2 = document.getElementById("step-guide-click-2");
const showGuide2 = document.getElementById("show-guide-2");
const secondStepGuide = document.getElementById("second-step-guide-parent-el");


// Add click event listeners for each guide
stepGuideClick1.addEventListener("click", () => {
    showGuide1.style.display = "block";
    firstStepGuide.style.backgroundColor = "#f3f3f3";
    
  // Hide other guides if needed
    showGuide2.style.display = "none";
    secondStepGuide.style.backgroundColor= "transparent"
  // Hide other guides by updating their display property accordingly
  // showGuide3.style.display = "none";
  // ...
});

stepGuideClick2.addEventListener("click", () => {
    showGuide2.style.display = "block";
    secondStepGuide.style.backgroundColor = "#f3f3f3";
  // Hide other guides if needed
    showGuide1.style.display = "none";
    firstStepGuide.style.backgroundColor = "transparent";
    
  // showGuide3.style.display = "none";
  // ...
});