// Convertendo Celsius para Fahrenheit
//Convert Celsuis to Fahrenheit

function convertToFahrenheit(value) {
    return value * 1.8 + 32
}

let result = convertToFahrenheit(15)
console.log(`O Valor em Fahrenheit é ${result}`)

function convertToCelsius (value1) {
    return (value1 - 32) / 1.8
}

let result1 = convertToCelsius (100)
console.log(`O valor em Celsius é ${result1}`)