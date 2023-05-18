function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
}) {
  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
  }

  function pause() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
  }

  function reset() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonStop.classList.add("hide")
  }

  function getMinutes() {
    let newMinutes = prompt("How many minutes?")

    if (!newMinutes || newMinutes == 0 || isNaN(newMinutes)) {
      prompt("Please, use only numbers (don't use standalone zero)")
      return
    }

    return newMinutes
  }

  function toggleSound() {
    buttonSoundOn.classList.toggle("hide")
    buttonSoundOff.classList.toggle("hide")
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
    toggleSound,
  }
}

export default Controls
