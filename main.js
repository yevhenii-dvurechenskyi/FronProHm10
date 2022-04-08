const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(arr, chunkSize) {
    if(chunkSize === 0 || chunkSize < 0){
        return `Your value: ${chunkSize} is invalid!`;
    }
    if(chunkSize === 1){
        return arr;
    }
    mainArr = [];
    chunkArr = [];
    let j = 0;
    for(let i = 1; i <= arr.length; i++){
        let l = i % chunkSize;
        if(l === 0 || arr.length === i){
            while(j < i){
                chunkArr[j] = arr[j];
                chunkArr = chunkArr.filter(item => item !== undefined)
                j++
            }
            mainArr.push(chunkArr);
            chunkArr = [];
        }
    }
    return mainArr;
}

const result1 = chunk(arr, 3); // 3 - размер каждого кусочка
console.log(result1); // [[1,2,3], [4,5,6], [7,8,9], [10]]

const result2 = chunk(arr, 5); // 5 - размер каждого кусочка
console.log(result2); // [[1,2,3,4,5], [6,7,8,9,10]]

const result3 = chunk(arr, 1); // 1 - размер каждого кусочка
console.log(result3); // [1,2,3,4,5,6,7,8,9,10] - то есть исходный массив

const result4 = chunk(arr, 0); // 0 - размер каждого кусочка
console.log(result4); // написать пользователю в консоль что он не прав