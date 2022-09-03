const renderGanttChart = (ganttChartInfo)=>{

    const jobsContainer = document.querySelector('.jobs-container')

    // reset jobsContainer
    jobsContainer.replaceChildren();

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

    console.log(time,jobs)
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
            console.log('colorIndex',colorIndex)
            jobElement.style.setProperty('background-color',`var(--${color})`)
            colorIndex = (colorIndex + 1) % colors.length;
            color = colors[colorIndex];
        }   
        jobsContainer.append(jobElement);
    });
}


export default renderGanttChart