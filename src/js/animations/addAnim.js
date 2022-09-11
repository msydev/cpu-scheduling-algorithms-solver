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
};

export default addAnim;