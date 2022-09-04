export default function createRipple(event) {
    const button = event.currentTarget;
    console.log(button.clientWidth, button.clientHeight)
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    console.log('#'.repeat(10))

    console.log('radius = ',radius);
    console.log('diameter = ',diameter);

    console.log('#'.repeat(10))

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    console.log('left',button.offsetLeft)
    console.log('top',button.offsetTop)
    console.log('X',event.clientX);
    console.log('Y',event.clientY);

    
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  