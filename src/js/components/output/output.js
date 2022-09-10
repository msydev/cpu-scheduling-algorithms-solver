import renderCpuUtilization from "./renderCpuUtilization.js";
import renderGanttChart from "./renderGanttChart.js";
import renderTable from "./renderTable.js";

const output = (ganttChartInfo, solvedProcessesInfo, selectedAlgo) => {
    const outputBody = document.querySelector('.output-body')
    const algorithmBadge = document.querySelector('#output header span')

    //reset
    outputBody.replaceChildren();
    

    algorithmBadge.innerHTML = selectedAlgo;
    algorithmBadge.classList.add('algorith-badge');
    
    outputBody.append(renderGanttChart(ganttChartInfo));
    outputBody.append(renderCpuUtilization(ganttChartInfo));
    outputBody.append(renderTable(solvedProcessesInfo));
    
}

export default output;