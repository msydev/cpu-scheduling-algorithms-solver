const renderGanttChart = (ganttChartInfo)=>{


    // generate elements
    const ganttChartSection = document.createElement('div');
    const ganttChartContainer = document.createElement('div');
    const jobsContainer = document.createElement('div');

    // add classes
    ganttChartSection.classList.add('ganttchart-section');
    ganttChartContainer.classList.add('ganttchart-container');
    jobsContainer.classList.add('jobs-container');


    // reset jobsContainer
    ganttChartSection.replaceChildren();



    const colors = ['pink', 'blue', 'green', 'orange', 'purple'];
    let colorIndex = 0;
    let color = colors[colorIndex];

    const time = [];
    const jobs = [];
    
    ganttChartInfo.forEach((item, index) => {
        if (index === 0) {
          jobs.push(item.job);
          time.push(item.start, item.stop);
        } else if (time.slice(-1)[0] === item.start) {
          jobs.push(item.job);
          time.push(item.stop);
        } else if (time.slice(-1)[0] !== item.start) {
          jobs.push('_', item.job);
          time.push(item.start, item.stop);
        }
      });

    jobs.forEach((job, index, arr) => {

        // create job element
        const jobElement = document.createElement('span');


        jobElement.setAttribute('data-startTime',`${time[index]}`);
        jobElement.setAttribute('data-stopTime',`${time[index+1]}`);
        jobElement.classList.add('job');
        jobElement.innerHTML = job;

        // colorizing
        if(job === '_'){
            jobElement.classList.add('wasteTime')
        } else{
            jobElement.style.setProperty('background-color',`var(--${color})`)
            colorIndex = (colorIndex + 1) % colors.length;
            color = colors[colorIndex];
        }   
        jobsContainer.append(jobElement);
    });

    ganttChartSection.innerHTML = '<h1>Gantt Chart</h1>';
    ganttChartContainer.append(jobsContainer);
    ganttChartSection.append(ganttChartContainer);

    return ganttChartSection;
}


export default renderGanttChart