// imports
import createRipple from "./animations/ripple.js";
import handleSelectBox from "./components/input/handleSelectBox.js";
import selectedAlgorithm, { updateInputUi } from "./components/input/algoSelect.js";
import { solve } from "./components/output/solve/index.js";
import getData from "./components/input/gatheringData.js";
import renderGanttChart from "./components/output/renderGanttchart.js";
import renderTable from "./components/output/renderTable.js";
// const
const solveBtn = document.querySelector('.solve-btn');

algoType.onchange = selectedAlgorithm


handleSelectBox();
solveBtn.addEventListener("click", createRipple);


solveBtn.addEventListener("click",function(){
        const data = getData();
        if(data === undefined || data === null){
            return;
        } else{
            const [selectedAlgo, arrivalTime, burstTime, quantumTime, priorities] = data;
            const solvvv = solve(selectedAlgo ,arrivalTime, burstTime, quantumTime, priorities);
            console.log(solvvv)
            renderGanttChart(solvvv.ganttChartInfo);
            renderTable(solvvv.solvedProcessesInfo)
        }
    
});