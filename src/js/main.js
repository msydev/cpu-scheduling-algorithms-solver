// imports
import createRipple from "./animations/ripple.js";
import handleSelectBox from "./components/input/handleSelectBox.js";
import { solve } from "./components/output/solve/index.js";
import getData from "./components/input/gatheringData.js";
import output from "./components/output/output.js";
import { themeToggle } from "./components/themeToggle.js";
import renderCpuUtilization from "./components/output/renderCpuUtilization.js";

const solveBtn = document.querySelector('.solve-btn');

// init UI
solveBtn.addEventListener("click", createRipple);
handleSelectBox();
themeToggle();

solveBtn.addEventListener("click",function(e){
    const data = getData();
    if(data === undefined || data === null){
        return;
    } else{
        const [selectedAlgo, arrivalTime, burstTime, quantumTime, priorities] = data;
        const solved = solve(selectedAlgo ,arrivalTime, burstTime, quantumTime, priorities);
        output(solved.ganttChartInfo, solved.solvedProcessesInfo, selectedAlgo);
        if(window.innerWidth <= 768){
            console.log(e.currentTarget)
            scrollTo(
                0,
                document.getElementById('output').offsetTop,
                'smooth'
            )
        }
        }
    
});