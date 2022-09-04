const addAnim = (
  el,
  name,
  duration = 0,
  delay = 0,
  timingFunction = 'ease',
  iterationCount = 1,
  direction = "normal",
  fillMode = "none",
  playState = "running"
) => {
  el.style.animation = `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`;
  el.style.WebkitAnimation = `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`;

  console.log(`${name} ${duration}, ${delay}, ${iterationCount}, ${direction}, ${fillMode}, ${playState}`)
  // name duration timing-function delay iteration-count direction fill-mode play-state;
  // mymove 5s infinite;
  // 	none 0 ease 0 1 normal none running
};

export default addAnim;