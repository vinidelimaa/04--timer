import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js"

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener("click", function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener("click", function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonSoundOff.addEventListener("click", function () {
    controls.toggleSound()
    sound.bgAudio.play()
  })

  buttonSoundOn.addEventListener("click", function () {
    controls.toggleSound()
    sound.bgAudio.pause()
  })
}
