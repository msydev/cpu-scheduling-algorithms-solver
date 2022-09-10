const precisionRound = (number, precision) => {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };
  
  const renderTable = ( solvedProcessesInfo ) => {

    const tableSection = document.createElement('div');
    const tableContainer = document.createElement('div');

    tableSection.classList.add('table-section');
    tableContainer.classList.add('table-container');

    const total = (array) =>
      array.reduce((acc, currentValue) => acc + currentValue, 0);
  
    const numberOfProcesses = solvedProcessesInfo.length;
    const turnaoundTime = solvedProcessesInfo.map((process) => process.tat);
    const waitingTime = solvedProcessesInfo.map((process) => process.wat);
  
    const totalTAT = total(turnaoundTime);
    const averageTAT = totalTAT / numberOfProcesses;
  
    const totalWAT = total(waitingTime);
    const averageWAT = totalWAT / numberOfProcesses;
  
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tableFooter = document.createElement('tfoot');

    tableHead.innerHTML = `
        <tr>
          <th>Process</th>
          <th>Arrival Time</th>
          <th>Burst Time</th>
          <th>Finish Time</th>
          <th>Turnaround Time</th>
          <th>Waiting Time</th>
        </tr>`;

      
      solvedProcessesInfo.forEach(item => {
        tableBody.innerHTML += 
          `
          <tr>
            <td>${item.job}</td>
            <td>${item.at}</td>
            <td>${item.bt}</td>
            <td>${item.ft}</td>
            <td>${item.tat}</td>
            <td>${item.wat}</td>
          </tr>
          `
        
        
      });


      tableFooter.innerHTML = `
              <tr>
                <td colspan="4" >
                  Average
                </td>
                <td>
                  ${totalTAT} / ${numberOfProcesses} = ${precisionRound(averageTAT, 2)}%
                </td>
                <td>
                  ${totalWAT} / ${numberOfProcesses} = ${precisionRound(averageWAT, 2)}%
                </td>
                </tr>`;   

      table.append(tableHead);
      table.append(tableBody);
      table.append(tableFooter);
      tableContainer.append(table);
      tableSection.append(tableContainer);
      return tableSection;
  };
  
  export default renderTable;