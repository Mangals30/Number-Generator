const isPrime = num => {
    if(num<=1) {
        return false
    }
    
    else if(num>3) {
        for (let i = 2; i<num; i++) {
            if( num % i == 0) {
                return false
            }
            
        }
        return true
    }
    else {
        return true
    }
}        
const numberContainer = document.createElement('div')
numberContainer.setAttribute('class','number')        
const errorDiv1 = document.createElement('div')        
const flexContainer = document.querySelector('.wrapper')
const searchContainer = document.createElement('div')
searchContainer.style.display = 'flex'
searchContainer.style.marginTop = '1rem'
searchContainer.style.justifyContent = 'center'
const inputField = document.createElement('input')
searchContainer.appendChild(inputField)
inputField.style.width = '15rem'
inputField.style.marginLeft = '1rem'
inputField.style.borderColor = '#35C17E'
inputField.style.borderStyle = 'solid'
inputField.style.borderWidth = '0.05px'
const genButton = document.createElement('button')
genButton.style.marginLeft = '1rem'
genButton.textContent = 'Generate Numbers'
genButton.style.backgroundColor = '#35C17E'
genButton.style.color = 'white'
genButton.style.borderColor = '#35C17E'
genButton.style.borderStyle = 'solid'
searchContainer.appendChild(genButton)
flexContainer.appendChild(searchContainer)

genButton.addEventListener('click',event => {
    validateNumber()
})

const validateNumber = () => {
    let inputValue = inputField.value
    if(inputValue.length == 0) {
      errorDiv1.textContent = 'Enter number value on the input field to generate numbers'
      errorDiv1.style.color = 'red'
      flexContainer.prepend(errorDiv1)
    }
    else if (!inputValue.match(/^[0-9]*$/))  {
      errorDiv1.textContent = ''
      errorDiv1.textContent = 'Input value must be a number'
      errorDiv1.style.color = 'red'
      flexContainer.prepend(errorDiv1)  
    }

    else {
        numberContainer.textContent = '' 
        for (let i = 0; i <=inputValue; i++) {
            const number = document.createElement('h2')
            const numberDiv = document.createElement('div')
            number.textContent = i
            numberDiv.setAttribute('class', 'num')
            if(isPrime(i)) {
                numberDiv.style.background = '#FA5D5E'
            }
            else if (i%2 == 0){
                numberDiv.style.background = '#35C17E'
            }
            else {
                numberDiv.style.background = '#FBDC3A'
            }
                numberDiv.appendChild(number)
                numberContainer.appendChild(numberDiv)
                flexContainer.append(numberContainer)
            }

    }

}

for (let i = 0; i <=50; i++) {
    const number = document.createElement('h2')
    const numberDiv = document.createElement('div')
    number.textContent = i
    numberDiv.setAttribute('class', 'num')
    if(isPrime(i)) {
        numberDiv.style.background = '#FA5D5E'
    }
    else if (i%2 == 0){
        numberDiv.style.background = '#35C17E'
    }
    else {
        numberDiv.style.background = '#FBDC3A'
    }
        numberDiv.appendChild(number)
        numberContainer.appendChild(numberDiv)
        flexContainer.append(numberContainer)
    }