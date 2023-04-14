const screen = document.getElementById("screen")
const btns = document.querySelectorAll(".btn")
const opBtn = document.querySelectorAll(".operator-btn")

let arr = []
let equalElement

const eachBtn = btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const mathOperation = arr += btn.innerHTML
    screen.value = mathOperation
    console.log(screen.value)

    // if(index === 3 || index === 7 || index === 11 || index === 14) {
    //   screen.value = arr + btn.innerHTML
    //   console.log(screen.value)
    // }
    // else {
    //   screen.value = arr += btn.innerHTML
    //   console.log(screen.value)
    // }
  })
})

const deleteElement = function() {
  screen.value = ""
  arr = []
}

const equal = function() {
  equalElement = eval(screen.value)
  screen.value = equalElement
  arr = equalElement
}