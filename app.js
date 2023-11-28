// DOM Elements
const showDropdownIcon = document.getElementById("dropdown-show-icon");
const hideDropdownIcon = document.getElementById("dropdown-hide-icon");
const dropdown = document.getElementById("dropdown");

// DOM Elements for remove-plan-X-icon
const removePlan = document.getElementById("remove-plan-icon");
const planPopUp = document.getElementById("plan-popup-container");

// DOM Elements for Progress Bar
const progressBar = document.getElementById("progress-completed");
const progressText = document.getElementById("progress-text");

// DOM Elements for notification
const notification = document.getElementById("notification");
const notificationPopUp = document.getElementById("notification-pop-up");

// DOM Elements for Davii Collection Menu
const userDp = document.getElementById("userDP");
const UserDpPopUp = document.getElementById("userDp-pop-up");

// DOM Elements for First Step
const stepGuideClick1 = document.getElementById("step-guide-click");
const showGuide1 = document.getElementById("show-guide");
const firstStepGuide = document.getElementById("first-step-guide-parent-el");

// DOM Elements for Second Step
const stepGuideClick2 = document.getElementById("step-guide-click-2");
const showGuide2 = document.getElementById("show-guide-2");
const secondStepGuide = document.getElementById("second-step-guide-parent-el");

// DOM Elements for Third Step
const stepGuideClick3 = document.getElementById("step-guide-click-3");
const showGuide3 = document.getElementById("show-guide-3");
const thirdStepGuide = document.getElementById("third-step-guide-parent-el");

// DOM Elements for Fourth Step
const stepGuideClick4 = document.getElementById("step-guide-click-4");
const showGuide4 = document.getElementById("show-guide-4");
const fourthStepGuide = document.getElementById("fourth-step-guide-parent-el");

// DOM Elements for Fifth Step
const stepGuideClick5 = document.getElementById("step-guide-click-5");
const showGuide5 = document.getElementById("show-guide-5");
const fifthStepGuide = document.getElementById("fifth-step-guide-parent-el");

// Counter Variables
let completedCount = 0;
const totalTasks = 5;

// State Variables
let isUserDpPopupVisible = false;
let isPopupVisible = false;

// Function to toggle the Davii Collection menu visibility
function showDaviiCollectionMenu() {
  // Close notification popup first, if open
  if (isPopupVisible) {
    notification.style.background = "#303030";
    notificationPopUp.style.display = "none";
    isPopupVisible = false;
  }

  // Toggle userDp popup
  if (isUserDpPopupVisible) {
    UserDpPopUp.style.display = "none";
    userDp.style.background = "#303030";
  } else {
    UserDpPopUp.style.display = "block";
    userDp.style.background = "#656266";
  }

  // Toggle the userDp popup visibility state
  isUserDpPopupVisible = !isUserDpPopupVisible;
}

// Function to toggle the notification popup visibility
function showNotificationPopup() {
  // Close userDp popup first, if open
  if (isUserDpPopupVisible) {
    UserDpPopUp.style.display = "none";
    isUserDpPopupVisible = false;
  }

  // Toggle notification popup
  if (isPopupVisible) {
    notification.style.background = "transparent";
    notificationPopUp.style.display = "none";
  } else {
    notification.style.background = "#656266";
    notificationPopUp.style.display = "block";
  }

  // Toggle the notification popup visibility state
  isPopupVisible = !isPopupVisible;
}

// Event listeners for userDp and notification icons
userDp.addEventListener("click", () => {
  // Close notification popup first, if open
  showDaviiCollectionMenu();
});

notification.addEventListener("click", () => {
  showNotificationPopup();
});

// Show dropdown when showDropdownIcon is clicked, and hide the icon
function showStepsGuide() {
  showDropdownIcon.style.display = "none";
  hideDropdownIcon.style.display = "block";
  dropdown.style.display = "block";
}
showDropdownIcon.addEventListener("click", () => {
  showStepsGuide();
});

// Hide dropdown when hideDropdownIcon is clicked, and show the original icon
function hideStepsGuide() {
  hideDropdownIcon.style.display = "none";
  showDropdownIcon.style.display = "block";
  dropdown.style.display = "none";
}
hideDropdownIcon.addEventListener("click", () => {
  hideStepsGuide();
});

// Hide the plan popup when removePlan icon is clicked
removePlan.addEventListener("click", () => {
  planPopUp.style.display = "none";
});

// Function to update progress bar and text
function updateProgress() {
  // Calculate the completion percentage based on completedCount and totalTasks
  const percentage = (completedCount / totalTasks) * 100;

  // Update the width of the progress bar and the text content
  progressBar.style.width = percentage + "%";
  progressText.textContent = `${completedCount} / ${totalTasks} completed`;
}

// Functions to show each steps
function showStepOne() {
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
}

function showStepTwo() {
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
}

function showStepThree() {
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
}

function showStepFour() {
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
}

function showStepFive() {
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
}

// Add click event listeners for each guide
stepGuideClick1.addEventListener("click", () => {
  showStepOne();
});
stepGuideClick2.addEventListener("click", () => {
  showStepTwo();
});

stepGuideClick3.addEventListener("click", () => {
  showStepThree();
});
stepGuideClick4.addEventListener("click", () => {
  showStepFour();
});
stepGuideClick5.addEventListener("click", () => {
  showStepFive();
});

// Toggle Checked Functions
function firstGuideToggleChecked() {
  if (event.target.classList.contains("unchecked-circle")) {
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
    isLooping = true;
    loop();
    setTimeout(stopLoop, svgs.length * 200);
  }
}

function secondGuideToggleChecked() {
  if (event.target.classList.contains("unchecked-circle2")) {
    thirdStepGuide.style.backgroundColor = "#f3f3f3";

    showGuide2.style.display = "none";
    showGuide1.style.display = "none";
    showGuide3.style.display = "block";
    showGuide4.style.display = "none";
    showGuide5.style.display = "none";

    firstStepGuide.style.backgroundColor = "transparent";
    secondStepGuide.style.backgroundColor = "transparent";
    fourthStepGuide.style.backgroundColor = "transparent";
    fifthStepGuide.style.backgroundColor = "transparent";
    completedCount++;
    updateProgress();
    isLooping2 = true;
    loop2();
    setTimeout(stopLoop2, svgs2.length * 200);
  }
}

function thirdGuideToggleChecked() {
  if (event.target.classList.contains("unchecked-circle3")) {
    fourthStepGuide.style.backgroundColor = "#f3f3f3";

    showGuide2.style.display = "none";
    showGuide1.style.display = "none";
    showGuide3.style.display = "none";
    showGuide4.style.display = "block";
    showGuide5.style.display = "none";

    firstStepGuide.style.backgroundColor = "transparent";
    thirdStepGuide.style.backgroundColor = "transparent";
    secondStepGuide.style.backgroundColor = "transparent";
    fifthStepGuide.style.backgroundColor = "transparent";
    completedCount++;
    updateProgress();
    isLooping3 = true;
    loop3();
    setTimeout(stopLoop3, svgs3.length * 200);
  }
}

function fourthGuideToggleChecked() {
  if (event.target.classList.contains("unchecked-circle4")) {
    fifthStepGuide.style.backgroundColor = "#f3f3f3";

    showGuide2.style.display = "none";
    showGuide1.style.display = "none";
    showGuide3.style.display = "none";
    showGuide4.style.display = "none";
    showGuide5.style.display = "block";

    firstStepGuide.style.backgroundColor = "transparent";
    thirdStepGuide.style.backgroundColor = "transparent";
    secondStepGuide.style.backgroundColor = "transparent";
    fourthStepGuide.style.backgroundColor = "transparent";
    completedCount++;
    updateProgress();
    isLooping4 = true;
    loop4();
    setTimeout(stopLoop4, svgs4.length * 200);
  }
}

function fifthGuideToggleChecked() {
  if (event.target.classList.contains("unchecked-circle5")) {
    fifthStepGuide.style.backgroundColor = "transparent";

    showGuide5.style.display = "none";

    fifthStepGuide.style.backgroundColor = "transparent";
    completedCount++;
    updateProgress();
    isLooping5 = true;
    loop5();
    setTimeout(stopLoop5, svgs5.length * 200);
  }
}

// Toggle Unchecked Functions
function firstGuideToggleUnChecked() {
  //  checkboxChecked1.style.display = "none";

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

  uncheckedCircleParentElement.innerHTML = `<div class="unchecked-circle unchecked-circle1" id="checkbox"
                                aria-label="step one not checked" tabindex="0"></div>`;
  completedCount--;
  updateProgress();
}

function secondGuideToggleUnChecked() {
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

  uncheckedCircleParentElement2.innerHTML = `<div class="unchecked-circle unchecked-circle2" id="checkbox"
                                aria-label="step two not checked" tabindex="0"></div>`;
  completedCount--;
  updateProgress();
}

function thirdGuideToggleUnChecked() {
  thirdStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "block";
  showGuide4.style.display = "none";
  showGuide5.style.display = "none";

  secondStepGuide.style.backgroundColor = "transparent";
  firstStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";

  uncheckedCircleParentElement3.innerHTML = `<div class="unchecked-circle unchecked-circle3" id="checkbox"
                                aria-label="step three not checked" tabindex="0"></div>`;
  completedCount--;
  updateProgress();
}

function fourthGuideToggleUnChecked() {
  fourthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "block";
  showGuide5.style.display = "none";

  secondStepGuide.style.backgroundColor = "transparent";
  firstStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fifthStepGuide.style.backgroundColor = "transparent";

  uncheckedCircleParentElement4.innerHTML = `<div class="unchecked-circle unchecked-circle4" id="checkbox"  aria-label="step four not checked" tabindex="0"></div>`;
  completedCount--;
  updateProgress();
}

function fifthGuideToggleUnChecked() {
  fifthStepGuide.style.backgroundColor = "#f3f3f3";

  showGuide1.style.display = "none";
  showGuide2.style.display = "none";
  showGuide3.style.display = "none";
  showGuide4.style.display = "none";
  showGuide5.style.display = "block";

  secondStepGuide.style.backgroundColor = "transparent";
  firstStepGuide.style.backgroundColor = "transparent";
  thirdStepGuide.style.backgroundColor = "transparent";
  fourthStepGuide.style.backgroundColor = "transparent";

  uncheckedCircleParentElement5.innerHTML = `<div class="unchecked-circle unchecked-circle5" id="checkbox"  aria-label="step fifth not checked" tabindex="0"></div>`;
  completedCount--;
  updateProgress();
}

const uncheckedCircleParentElement = document.getElementById("check");
const svgs = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004"
            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D"
            stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round" />
        <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                fill="white" />
        </g>
    </svg>`,
  ` <svg class="checkedbox pointer" tabindex="0" aria-label="first-step-completed" id="dropdown-checkbox-checked"  width="24" height="24"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"></path>
    </svg>`,
];

let currentSvgIndex = 0;
let isLooping = false;

// Function to display the current SVG
function displayCurrentSvg() {
  // uncheckedCircleParentElement.innerHTML = `<div class="circc" id="checkbox"></div>`;
  document.getElementById("check").innerHTML = svgs[currentSvgIndex];
}

// Function to handle the loop
function loop() {
  if (isLooping) {
    displayCurrentSvg();
    currentSvgIndex = (currentSvgIndex + 1) % svgs.length;
    setTimeout(loop, 200); // Repeat the loop after 2 seconds
  }
}

function stopLoop() {
  isLooping = false;
  const checkedSVG = document.getElementById("dropdown-checkbox-checked");
  console.log(checkedSVG);

  checkedSVG.addEventListener("click", () => {
    firstGuideToggleUnChecked();
  });
}

uncheckedCircleParentElement.addEventListener("click", (event) => {
  firstGuideToggleChecked();
});

const uncheckedCircleParentElement2 = document.getElementById("check2");
const svgs2 = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004"
            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D"
            stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round" />
        <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                fill="white" />
        </g>
    </svg>`,
  ` <svg class="checkedbox pointer" tabindex="0" aria-label="second-step-completed" id="dropdown-checkbox-checked2" width="24" height="24"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"></path>
    </svg>`,
];

let currentSvgIndex2 = 0;
let isLooping2 = false;

function displayCurrentSvg2() {
  document.getElementById("check2").innerHTML = svgs2[currentSvgIndex2];
}

function loop2() {
  if (isLooping2) {
    displayCurrentSvg2();
    currentSvgIndex2 = (currentSvgIndex2 + 1) % svgs2.length;
    setTimeout(loop2, 200); // Repeat the loop after 2 seconds
  }
}
// Function to stop the loop
function stopLoop2() {
  isLooping2 = false;

  const checkedSVG2 = document.getElementById("dropdown-checkbox-checked2");
  console.log(checkedSVG2);

  checkedSVG2.addEventListener("click", () => {
    secondGuideToggleUnChecked();
  });
}

uncheckedCircleParentElement2.addEventListener("click", (event) => {
  secondGuideToggleChecked();
});

const uncheckedCircleParentElement3 = document.getElementById("check3");
const svgs3 = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004"
            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D"
            stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round" />
        <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                fill="white" />
        </g>
    </svg>`,
  ` <svg class="checkedbox pointer" tabindex="0" aria-label="third-step-completed" id="dropdown-checkbox-checked3" width="24" height="24"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"></path>
    </svg>`,
];

let currentSvgIndex3 = 0;
let isLooping3 = false;

function displayCurrentSvg3() {
  document.getElementById("check3").innerHTML = svgs3[currentSvgIndex3];
}

function loop3() {
  if (isLooping3) {
    displayCurrentSvg3();
    currentSvgIndex3 = (currentSvgIndex3 + 1) % svgs3.length;
    setTimeout(loop3, 200); // Repeat the loop after 2 seconds
  }
}
// Function to stop the loop
function stopLoop3() {
  isLooping3 = false;

  const checkedSVG3 = document.getElementById("dropdown-checkbox-checked3");
  console.log(checkedSVG3);

  checkedSVG3.addEventListener("click", () => {
    thirdGuideToggleUnChecked();
  });
}

uncheckedCircleParentElement3.addEventListener("click", (event) => {
  thirdGuideToggleChecked();
});

const uncheckedCircleParentElement4 = document.getElementById("check4");
const svgs4 = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004"
            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D"
            stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round" />
        <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                fill="white" />
        </g>
    </svg>`,
  ` <svg class="checkedbox pointer" tabindex="0" aria-label="fourth-step-completed"  id="dropdown-checkbox-checked4" width="24" height="24"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"></path>
    </svg>`,
];

let currentSvgIndex4 = 0;
let isLooping4 = false;

function displayCurrentSvg4() {
  document.getElementById("check4").innerHTML = svgs4[currentSvgIndex4];
}

function loop4() {
  if (isLooping4) {
    displayCurrentSvg4();
    currentSvgIndex4 = (currentSvgIndex4 + 1) % svgs4.length;
    setTimeout(loop4, 200); // Repeat the loop after 2 seconds
  }
}
// Function to stop the loop
function stopLoop4() {
  isLooping4 = false;

  const checkedSVG4 = document.getElementById("dropdown-checkbox-checked4");
  console.log(checkedSVG4);

  checkedSVG4.addEventListener("click", () => {
    fourthGuideToggleUnChecked();
  });
}

uncheckedCircleParentElement4.addEventListener("click", (event) => {
  fourthGuideToggleChecked();
});

const uncheckedCircleParentElement5 = document.getElementById("check5");
const svgs5 = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
            stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,

  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004"
            transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D"
            stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round" />
        <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
                fill="white" />
        </g>
    </svg>`,
  ` <svg class="checkedbox pointer" tabindex="0" aria-label="fifth-step-completed" id="dropdown-checkbox-checked5" width="24" height="24"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"></path>
    </svg>`,
];

let currentSvgIndex5 = 0;
let isLooping5 = false;

function displayCurrentSvg5() {
  document.getElementById("check5").innerHTML = svgs5[currentSvgIndex5];
}

function loop5() {
  if (isLooping5) {
    displayCurrentSvg5();
    currentSvgIndex5 = (currentSvgIndex5 + 1) % svgs5.length;
    setTimeout(loop5, 200);
  }
}
// Function to stop the loop
function stopLoop5() {
  isLooping5 = false;

  const checkedSVG5 = document.getElementById("dropdown-checkbox-checked5");
  console.log(checkedSVG5);

  checkedSVG5.addEventListener("click", () => {
    fifthGuideToggleUnChecked();
  });
}

uncheckedCircleParentElement5.addEventListener("click", (event) => {
  fifthGuideToggleChecked();
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    console.log(event.target.id);

    if (event.target.id === "notification") {
      showNotificationPopup();
    }
    if (event.target.id === "userDP") {
      showDaviiCollectionMenu();
    }
    if (event.target.id === "dropdown-show-icon") {
      showStepsGuide();
    }
    if (event.target.id === "dropdown-hide-icon") {
      hideStepsGuide();
    }
    if (event.target.id === "remove-plan-icon") {
      planPopUp.style.display = "none";
    }

    // Using Enter key on  keyboard to Toggle completed and uncompleted steps
    if (event.target.classList.contains("unchecked-circle1")) {
      console.log("yes it contains");
      firstGuideToggleChecked();
    }
    if (event.target.id === "dropdown-checkbox-checked") {
      firstGuideToggleUnChecked();
    }
    if (event.target.classList.contains("unchecked-circle2")) {
      secondGuideToggleChecked();
    }
    if (event.target.id === "dropdown-checkbox-checked2") {
      secondGuideToggleUnChecked();
    }
    if (event.target.classList.contains("unchecked-circle3")) {
      thirdGuideToggleChecked();
    }
    if (event.target.id === "dropdown-checkbox-checked3") {
      thirdGuideToggleUnChecked();
    }
    if (event.target.classList.contains("unchecked-circle4")) {
      fourthGuideToggleChecked();
    }
    if (event.target.id === "dropdown-checkbox-checked4") {
      fourthGuideToggleUnChecked();
    }
    if (event.target.classList.contains("unchecked-circle5")) {
      fifthGuideToggleChecked();
    }
    if (event.target.id === "dropdown-checkbox-checked5") {
      fifthGuideToggleUnChecked();
    }

    // Using Enter key on  keyboard to go through Steps
    if (event.target.id === "step-guide-click") {
      showStepOne();
    }
    if (event.target.id === "step-guide-click-2") {
      showStepTwo();
    }
    if (event.target.id === "step-guide-click-3") {
      showStepThree();
    }
    if (event.target.id === "step-guide-click-4") {
      showStepFour();
    }
    if (event.target.id === "step-guide-click-5") {
      showStepFive();
    }
  }
});
