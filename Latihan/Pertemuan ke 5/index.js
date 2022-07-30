//setiap loop harus ada increment(+) dan decrement(-)
// for (let i = 1; i < 10; i++){
//     console.log("hello world" + i);
// }

// // while
// var ulang = true;
// while (ulang) {
//     console.log("hello world")
// }
// while
// var coba = 1;
// while (coba < 10){
//     console.log("while loops ke-" + coba);
//     coba++
// }

// // Do  ... while
// let a = 1 
// do {
//     console.log("pertemuan ke -" +a)
//     a++
// }
// while ( a < 8)

// //while
// let angka = false;

// do{
//     console.log("Hello world")
// }
// while(angka)

//Nested loop
// for (let i = 1; i <= 2; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(i + " , " + j);
//     }
// }

// //looping segitiga
// let n = 7;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "#"
//     }
//     string += "\n";
// }
// console.log(string);

// //looping pengkondisian 
// for (i = 1; i <= 4; i++){
//     if (i % 2 == 0) {
//         console.log(i + " adalah genap")
//     }else{
//         console.log(i + " adalah ganjil")
//     }
// }

//looping persegi
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < n; j++) {
        string += "*"
    }
    string += "\n";
}
console.log(string);


