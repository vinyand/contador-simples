/*
var preco = 2;
const preco = 2
var desconto = 0.2;
var total = preco - desconto;*/

function returnEvenValues(array) {
    let evenNums = []
    for (let i = 0; i < array.length;) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(array[i])
        }
    }
    console.log('evensNums')
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]

returnEvenValues(array);