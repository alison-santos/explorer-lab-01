import "./css/index.css"
import Imask from "imask"

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

const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = Imask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: Imask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String (new Date().getFullYear() + 10).slice(2)
    },
    MM: {
      mask: Imask.MaskedRange,
      from: 1,
      to: 12
    }
  }
}

const expirationDateMasked = Imask(expirationDate, expirationDatePattern)
