// let total_rows=5;
// for(let i=1;i<total_rows;i++){
//     for(let j=1;j<total_rows;j++)
//     {
//         process.stdout.write("*")

//     }
//     console.log()
// }

// Add All element of the given question..

let x = 5321;
let sum = 0;
while (x > 0) {
    let lastdigits = x % 10;
    sum += lastdigits;

    x = Math.floor(x / 10);
}
console.log(sum)

