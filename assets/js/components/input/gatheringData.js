// selectedAlgo, arrivalTime, burstTime, quantumTime, priorities
import selectedAlgorithm from "./algoSelect.js";

const getData = () => {
  const selectedAlgo = selectedAlgorithm()
  const arrivalTime = document.getElementById('arrivalTime').value;
  const burstTime = document.getElementById('burstTime').value;
  const quantumTime = document.getElementById('quantumTime').value;
  const priorities = document.getElementById('priorities').value;

  const arrivalTimeArr = arrivalTime
    .trim()
    .split(/\s+/)
    .map((at) => parseInt(at));

  // burstTime
  const burstTimeArr = burstTime
    .trim()
    .split(/\s+/)
    .map((bt) => parseInt(bt));

  // quantumTime
  const quantumTimeInt = parseInt(quantumTime);
  let prioritiesArr = priorities
    .trim()
    .split(/\s+/)
    .map((priority) => parseInt(priority));

  if (burstTimeArr.includes(0)) {
    console.log("0 burst time is invalid");
    return;
  } else if (arrivalTimeArr.length !== burstTimeArr.length) {
    console.log("Number of the arrival times and burst times do not match");
    return;
  } else if (
    arrivalTimeArr.includes(NaN) ||
    burstTimeArr.includes(NaN) ||
    (selectedAlgo === "RR" && isNaN(quantumTimeInt))
  ) {
    console.log("Please enter only integers");
    return;
  } else if (
    arrivalTimeArr.some((t) => t < 0) ||
    burstTimeArr.some((t) => t < 0)
  ) {
    console.log("Negative numbers are invalid");
    return;
  }

  if (selectedAlgo === "NPP" || selectedAlgo === "PP") {
    if (priorities.trim() === "") {
      prioritiesArr = arrivalTimeArr.map(() => 0);
    } else if (
      prioritiesArr.length !== arrivalTimeArr.length ||
      prioritiesArr.length !== arrivalTimeArr.length
    ) {
      console.log(
        "Arrival times, burst times and priorities should have equal length"
      );
      return;
    }
  }
  return ([selectedAlgo, arrivalTimeArr, burstTimeArr, quantumTimeInt, prioritiesArr])
};
export default getData;
