

// Part 1
function findPrimeNumbers() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let primeNumbers = document.getElementById('prime-numbers')
    console.log(a, b);
    let primeNumbersArr = []
    for (let number = a; number <= b; number++){
        let isPrime = true;
        if (number === 1) {
            primeNumbersArr.push(number)   
        }

        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime === true){
                primeNumbersArr.push(number)
            }
        }
    }
    console.log(primeNumbersArr);
    primeNumbers.innerHTML = primeNumbersArr.toString()
}
// Part 2
function numberOneTriangle(){
let $lineNumber = document.getElementById('line-number').value
for (let i = 1; i <= $lineNumber; i++){
    let $line = document.createElement('p')
    let str = ''
    for (let j = 1; j <= i; j++){
        str += '*'
    }
    $line.innerHTML = str
    document.body.appendChild($line)
}
}