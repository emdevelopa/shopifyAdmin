const showDropdownIcon = document.getElementById("dropdown-show-icon");
const hideDropdownIcon = document.getElementById("dropdown-hide-icon");
const dropdown = document.getElementById("dropdown");

const removePlan = document.getElementById("remove-plan-icon");
const planPopUp = document.getElementById("plan-popup-container");

const progressBar = document.getElementById("progress-completed");
const progressText = document.getElementById("progress-text");

const notification = document.getElementById("notification");
const notificationPopUp = document.getElementById("notification-pop-up");

const userDp = document.getElementById("userDP");
const UserDpPopUp = document.getElementById("userDp-pop-up");

let isPopupVisible = false;

userDp.addEventListener("click", () => {
  //   userDp.style.border = "1px solid blue";

  if (isPopupVisible) {
    UserDpPopUp.style.display = "none";
    // userDp.style.border = "none";
    userDp.style.background = "#303030";
  } else {
    UserDpPopUp.style.display = "block";
    // userDp.style.border = "2px solid blue";
    userDp.style.background = "#656266";
  }

  // Toggle the popup visibility state
  isPopupVisible = !isPopupVisible;
});

notification.addEventListener("click", () => {
  if (isPopupVisible) {
    notification.style.background = "#303030";
    notificationPopUp.style.display = "none";
    // notification.style.border = "none";
  } else {
    notification.style.background = "#656266";
    notificationPopUp.style.display = "block";
    // notification.style.border = "2px solid blue";
  }

  // Toggle the popup visibility state
  isPopupVisible = !isPopupVisible;
});

// First Step checkBox
const checkboxEmpty1 = document.getElementById("dropdown-checkbox-empty");
const checkboxChecked1 = document.getElementById("dropdown-checkbox-checked");

// Second Step CheckBos
const checkboxEmpty2 = document.getElementById("dropdown-checkbox-empty-2");
const checkboxChecked2 = document.getElementById("dropdown-checkbox-checked-2");

// Third Step CheckBox
const checkboxEmpty3 = document.getElementById("dropdown-checkbox-empty-3");
const checkboxChecked3 = document.getElementById("dropdown-checkbox-checked-3");

// Fourth Step CheckBox
const checkboxEmpty4 = document.getElementById("dropdown-checkbox-empty-4");
const checkboxChecked4 = document.getElementById("dropdown-checkbox-checked-4");

// Fifth Step CheckBox
const checkboxEmpty5 = document.getElementById("dropdown-checkbox-empty-5");
const checkboxChecked5 = document.getElementById("dropdown-checkbox-checked-5");

// First Step
const stepGuideClick1 = document.getElementById("step-guide-click");
const showGuide1 = document.getElementById("show-guide");
const firstStepGuide = document.getElementById("first-step-guide-parent-el");

// Second Step
const stepGuideClick2 = document.getElementById("step-guide-click-2");
const showGuide2 = document.getElementById("show-guide-2");
const secondStepGuide = document.getElementById("second-step-guide-parent-el");

//Third Step
const stepGuideClick3 = document.getElementById("step-guide-click-3");
const showGuide3 = document.getElementById("show-guide-3");
const thirdStepGuide = document.getElementById("third-step-guide-parent-el");

// Fourth Step
const stepGuideClick4 = document.getElementById("step-guide-click-4");
const showGuide4 = document.getElementById("show-guide-4");
const fourthStepGuide = document.getElementById("fourth-step-guide-parent-el");

// Fifth Step
const stepGuideClick5 = document.getElementById("step-guide-click-5");
const showGuide5 = document.getElementById("show-guide-5");
const fifthStepGuide = document.getElementById("fifth-step-guide-parent-el");

let completedCount = 0;
const totalTasks = 5;

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

// X-icon Event-Listener
removePlan.addEventListener("click", () => {
  planPopUp.style.display = "none";
});

function updateProgress() {
  const percentage = (completedCount / totalTasks) * 100;
  progressBar.style.width = percentage + "%";
  progressText.textContent = `${completedCount} / ${totalTasks} completed`;
}

checkboxEmpty1.addEventListener("click", () => {
  checkboxChecked1.style.display = "block";
  secondStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide2.style.display = "block";
  showGuide1.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount++;
  updateProgress();
});

checkboxChecked1.addEventListener("click", () => {
  checkboxChecked1.style.display = "none";
  firstStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "block";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";

  completedCount--;
  updateProgress();
});

checkboxEmpty2.addEventListener("click", () => {
  checkboxChecked2.style.display = "block";
  thirdStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide3.style.display = "block";
  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount++;
  updateProgress();
});

checkboxChecked2.addEventListener("click", () => {
  checkboxChecked2.style.display = "none";
  secondStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "block";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount--;
  updateProgress();
});

checkboxEmpty3.addEventListener("click", () => {
  checkboxChecked3.style.display = "block";
  fourthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "block";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount++;
  updateProgress();
});

checkboxChecked3.addEventListener("click", () => {
  checkboxChecked3.style.display = "none";
  thirdStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "block";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount--;
  updateProgress();
});

checkboxEmpty4.addEventListener("click", () => {
  checkboxChecked4.style.display = "block";
  fifthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "block";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  completedCount++;
  updateProgress();
});

checkboxChecked4.addEventListener("click", () => {
  checkboxChecked4.style.display = "none";
  fourthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "block";
  showGuide5.style.display = "none";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
  completedCount--;
  updateProgress();
});

checkboxEmpty5.addEventListener("click", () => {
  checkboxChecked5.style.display = "block";

  showGuide5.style.display = "none";
  fifthStepGuide.style.backgroundColor = "transparent";

  completedCount++;
  updateProgress();
});

checkboxChecked5.addEventListener("click", () => {
  checkboxChecked5.style.display = "none";
  fifthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "block";

  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  completedCount--;
  updateProgress();
});

// Add click event listeners for each guide
stepGuideClick1.addEventListener("click", () => {
  showGuide1.style.display = "block";
  firstStepGuide.style.backgroundColor = "#f3f3f3";

  // Hide other guides if needed
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
});

stepGuideClick2.addEventListener("click", () => {
  showGuide2.style.display = "block";
  secondStepGuide.style.backgroundColor = "#f3f3f3";
  // Hide other guides if needed
  showGuide1.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";
  firstStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
});

stepGuideClick3.addEventListener("click", () => {
  showGuide3.style.display = "block";
  thirdStepGuide.style.backgroundColor = "#f3f3f3";

  // Hide other guides if needed
  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";
  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
});

stepGuideClick4.addEventListener("click", () => {
  showGuide4.style.display = "block";
  fourthStepGuide.style.backgroundColor = "#f3f3f3";

  // Hide other guides if needed
  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide5.style.display = "none";
  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";
});

stepGuideClick5.addEventListener("click", () => {
  showGuide5.style.display = "block";
  fifthStepGuide.style.backgroundColor = "#f3f3f3";

  // Hide other guides if needed
  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  firstStepGuide.style.backgroundColor = "transparent";
  secondStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
});
