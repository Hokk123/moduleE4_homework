
function showElem(){
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('четных элементов: ', even)
    console.log('нечетных элементов: ', odd)
    console.log('нулей: ', zero)
}

showElem()

function searchPrimeNum(num) {
    if (num > 1 && num <= 1000){
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                return "composite number"
            }
        }
        return "prime number"
    } else {
        if (num == 1){
            return "number = 1"
        }else{
            return "No correct parameters!"
        }
    }
}

console.log(searchPrimeNum(997));

function numA(num_a) {
    return function(num_b) {
        return num_a + num_b
    }
};

let getNumA = numA(3);
let getSum = getNumA(4);
console.log(getSum);


function getInterval(start, stop) {
    let i = start;
    let id = setInterval(function () {
        console.log(i);
        if (i == stop) {
            clearInterval(id);
        }
        i++;
    }, 1000);
}

getInterval(5, 15);

const involutionA = (num, i) => num**i;
console.log(involutionA(5, 2));