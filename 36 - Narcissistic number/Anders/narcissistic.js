
function isNarcissistic(numberStr) {
    const isNegative = numberStr[0] === "-"

    const narcissisticSum = numberStr.split("").reduce(
        (sum, current) => current === "-" ? sum : sum + Math.pow(current, numberStr.length),
        0)
    return narcissisticSum * isNegative ? -1 : 1 === parseInt(numberStr, 10)
}

function checkIfArgumentNumberIsNarcissistic() {
    const candidateNumber = process.argv[2]
    console.log(`The number ${candidateNumber} is ${isNarcissistic(candidateNumber) ? '' : 'not '}narcissistic`)
}


checkIfArgumentNumberIsNarcissistic()
