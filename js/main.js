const numberGrid = document.querySelector('.number-grid')
const inputNum = document.querySelector('#number')
const generateNum = document.querySelector('.btn')
const message = document.querySelector('.message')

inputNum.addEventListener('focus', e => {
  message.style.visibility = 'hidden'
})

inputNum.addEventListener('blur', e => {
  if (inputNum.value.trim() == 0) {
    message.style.visibility = 'visible'
  }
})

generateNum.addEventListener('click', e => {
  e.preventDefault()
  numberGrid.innerHTML = ''
  const userInput = inputNum.value
  let reg = /^\d+$/

  if (userInput.trim().length == 0) {
    message.style.visibility = 'visible'
  } else if (!userInput.match(reg)) {
    message.style.visibility = 'visible'
    message.textContent = 'Input should only be a number'
  } else {
    const input = Number(userInput)
    for (let i = 0; i <= input; i++) {
      const number = document.createElement('div')
      number.className = 'number-item'
      number.textContent = i
      if (isPrime(i)) {
        number.style.background = '#eb695b'
      } else if (i % 2 == 0) {
        number.style.background = '#5bbc7a'
      } else {
        number.style.background = '#f7dc5c'
      }
      numberGrid.appendChild(number)
    }
  }

})