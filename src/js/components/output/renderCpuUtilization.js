export default function renderCpuUtilization(ganttChartInfo){
    let time = [];
    let wasteTime = 0;
    let totalTime = 0;

    const chartContainer = document.createElement('div');
    chartContainer.classList.add('cpu-utilization-container');

    ganttChartInfo.forEach((item, index) => {
        if (index === 0) {
          time.push(item.start, item.stop);
        } else if (time.slice(-1)[0] === item.start) {
          time.push(item.stop);
        } else if (time.slice(-1)[0] !== item.start) {
          console.log('wasteTime = ',item.start, '-',time.slice(-1)[0],' = ', item.start - time.slice(-1)[0])
          wasteTime += item.start - time.slice(-1)[0]
          time.push(item.start, item.stop);
        }
        totalTime = item.stop;
      });

      const cpuUtilization = (((totalTime - wasteTime) / totalTime) * 100).toFixed(0);
      const idleTime = ((wasteTime / totalTime) * 100).toFixed(0)

    chartContainer.innerHTML = `<div class="chart">
    <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle-bg"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path class="circle"
        stroke-dasharray="${cpuUtilization}, 100"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage">${cpuUtilization}%</text>
    </svg>
</div>

<div class="chart-details">
    <div class="cpu-utilization detial">
        <div class="dot dot-cpu-utilization"></div>
        <p>CPU Utilization</p>
        <div class="value">${cpuUtilization}%</div>
    </div>
    <div class="idle-time detial">
        <div class="dot dot-idle-time"></div>
        <p>Idle Time</p>
        <div class="value">${idleTime}%</div>
    </div>
</div>`;  

return chartContainer;
}