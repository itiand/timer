const timers = process.argv.slice(2);

const makeSound = (nTimes) => {
  for (let i = 0; i < nTimes; i++) {
    process.stdout.write('\x07');
  }
};

const setTimer = (arrOfTimers) => {
  if (!arrOfTimers) return;
  for (let timer of arrOfTimers) {

    let timerInMs = Number(timer) * 1000;
    if (timerInMs <= 0 || !timerInMs) continue;

    setTimeout(() => {
      console.log(`${timer}s done - BEEP BEEP!`);
      makeSound(2);
    }, timerInMs);
  }
};

setTimer(timers);
