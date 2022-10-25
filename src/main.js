import "./css/index.css"

const ccBgcolor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgcolor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    nucard: ["#9747FF"],
    nikecard: ["#6A0136", "#FF3E41", "#FF4D80"],
    default: ["black", "gray"],
  }

  ccBgcolor01.setAttribute("fill", colors[type][0])
  ccBgcolor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
