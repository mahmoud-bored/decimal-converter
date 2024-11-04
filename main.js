import './style.css'

const decimalInput = document.querySelector('.decimal-input')
const binaryInput =  document.querySelector('.binary-input')

decimalInput.addEventListener('input', () => {
    const heighestBinaryValue = getHighestBinaryValue(decimalInput.value)
    binaryInput.value = getHighestBinaryValue(decimalInput.value)
    
})

function getBinaryCompensation(number, startingValue) {
    let isIterationActive = true
    let currentIterationValue = number
    let binaryString = ''

    for(let i = 0; isIterationActive; i++) {

    }
    if(number == startingValue){ 
        binaryString = binaryString + '1'
    }
}


function getHighestBinaryValue(number) {
    let currentValue = 1
    // Handle zero and undefined states + parse value
    if (number === undefined || parseInt(number) === 0) return 0
    else number = parseInt(number)
    // get heighest binary value
    do {
        currentValue = currentValue * 2
    } while (currentValue < number)
    // return smaller operable number
    if(currentValue === number) return currentValue
    else return currentValue / 2
}