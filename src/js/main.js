// imports
import createRipple from "./animations/ripple.js";
import handleSelectBox from "./components/input/handleSelectBox.js";
import { solve } from "./components/output/solve/index.js";
import getData from "./components/input/gatheringData.js";
import output from "./components/output/output.js";
import { themeToggle } from "./components/themeToggle.js";
import renderCpuUtilization from "./components/output/renderCpuUtilization.js";

const solveBtn = document.querySelector(".solve-btn");

// init UI
solveBtn.addEventListener("click", createRipple);
handleSelectBox();
themeToggle();

solveBtn.addEventListener("click", function (e) {
  const data = getData();
  if (data === undefined || data === null) {
    return;
  } else {
    const [selectedAlgo, arrivalTime, burstTime, quantumTime, priorities] =
      data;
    const solved = solve(
      selectedAlgo,
      arrivalTime,
      burstTime,
      quantumTime,
      priorities
    );
    output(solved.ganttChartInfo, solved.solvedProcessesInfo, selectedAlgo);
    if (window.innerWidth <= 768) {
      let activeEl = document.activeElement;
      if (activeEl.classList.contains("input"))
        hideKeyboard(document.activeElement);
      setTimeout(function () {
        document.getElementById('output').scrollIntoView();
      }, 500);
    }
  }
});

function hideKeyboard(element) {
  element.attr("readonly", "readonly"); // Force keyboard to hide on input field.
  element.attr("disabled", "true"); // Force keyboard to hide on textarea field.
  setTimeout(function () {
    element.blur(); //actually close the keyboard
    // Remove readonly attribute after keyboard is hidden.
    element.removeAttr("readonly");
    element.removeAttr("disabled");
  }, 100);
}
