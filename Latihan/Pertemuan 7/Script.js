// // memanggil array multi dimensi
// let arr = ['web','16','true',['faisal','asrop','agil',['kucing','kuda']]];

// //misal ingin memanggil kuda dalam array
// console.log(arr[3][3][1]);

// let nama = []
// //cara menambah array manual
// nama[0] = 'ali'
// nama[1] = 'cendy'
// //menggunakan push
// nama.push('idham')
// //menggunakan unshift
// nama.unshift('lana')
// //menggunakan splice
// nama.splice(2,0,'asrop','agil')
// console.log(nama);

// //nama[1] = undifined
// //menghapus array menggunakan pop
// // nama.pop()
// //menggunakan shift
// // nama.shift()
// nama.splice(2,2)
// console.log(nama);



// membuat object

//membuat objek literal
// let mhs = {
//     nama : 'faisal',
//     nim : 20090154,
//     alamat : 'tandugunting'
// }
// let mhs2 = {
//     nama : 'asrop',
//     nim : 2039742,
//     alamat : 'talang'
// }    
// console.log(mhs.nama +" " + mhs.nim);
// console.log(mhs2.nama +" " + mhs2.nim);

// menggunakan function declaration
// function mahasiswa(nama, nim, alamat) {
//     let mhs3 = {}
//         mhs3.nama = nama,
//         mhs3.nim = nim,
//         mhs3.alamat = alamat

//     return mhs3    
// }

// let newMhs = mahasiswa ('faisal',2108008,'randugunting')
// let newMhs1 = mahasiswa ('ali',21028083,'cempaka')
// console.log(newMhs);
// console.log(newMhs1);


//menggunakan function constructor
// function data(nama, nim, alamat) {
//     this.nama = nama,
//     this.nim = nim,
//     this.alamat = alamat
// }
// let newMhs2 = new data ('ragil' , 12133, 'pemalang')
// console.log(newMhs2);

// penggunaan Spreed Operator
// menambahkan isi array dengan Spreed Operator
// let angka = [1,2,3]
// let newAngka = [...angka,4,5]
// console.log(newAngka);

// let angka2 =[...angka,'huruf','kapital']
// console.log(angka2);

// let nama1 = ['faisal','asrop']
// let nama2 = ['ragil','idham','lana']
// let gabungan = [...nama1,...nama2]
// console.log(gabungan);

//array of object
// let arr = [
//     {nama:'faisal',nim:1279201,alamat:'randugunting',age:20 },
//     {nama:'ragil',nim:2103103,alamat:'talang',age:20},
//     {nama:'asrop',nim:3239247,alamat:'pemalang'age:21}
// ]

// console.log(array[1].nim);


// function newData() {
//     let databaru = array.filter(function(){
//         return array.age === 20        
//     })
//     return databaru
// }
// console.log(newData());

//Destructuring
// let nmuber = [1,2]
// let [a,b] = number;
// console.log(number);
[1]

// function penjumlahanperkalian(a, b) {
//     return [a+b, a*b, a/b]
// }
// const [tambah, kali, bagi] = penjumlahanperkalian(2, 3)
// console.log(bagi);
// console.log(kali);


function kalkulator (a,b) {
    return{
        tambah : a+b,
        kurang : a-b,
        kali : a*b,
        bagi : a/b
    }
}
const {kali, kurang, bagi, tambah} = kalkulator(5,8)
console.log(kurang);