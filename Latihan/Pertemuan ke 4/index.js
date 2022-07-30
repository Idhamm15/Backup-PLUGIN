//variable

//var nama = "Idham"
// console.log(nama);
// prompt (nama);
// alert(nama)

//keyword let
// let a = 10
//console.log(a)

//keyword const
//const hobby = "catur"
//console.log(hobby);

//operator aritmatika (+)
let c = 10
let b = 5
console.log(c+ b)

//operator aritmatika (%)
let x = 20
let y = 2
console.log(x % y);

//operator aritmatika (=)
//let a = 10
//if (a === "10"){
//    console.log("a adalah benar")
//} else {
//    console.log("a adalah salah")
//}

//var angka = prompt("Masukan angka")

//if (angka % 2 === 0){
//    alert(angka + "yang anda masukan bilangan genap")
//} else if (angka % 2 === 1){
//    alert(angka + "yang anda masukan bilangan ganjil")
//} else {
//    alert("yang anda masukan bukan angka")
//}

let angka = prompt("Masukan angka")

if (angka >0 && angka< 5 ){
    alert("anda masih balita")
}else if ( angka >=5 && angka <12){
    alert ("anda masih anak-anak")
}else if ( angka >12 && angka <=20){
    alert ("anda masih remaja")
}else if ( angka >21 && angka <=45){
    alert ("anda masih dewasa")
}else if ( angka >46 && angka <=65){
    alert ("anda masih lansia")
}else{
    alert ("rehat")          
}    