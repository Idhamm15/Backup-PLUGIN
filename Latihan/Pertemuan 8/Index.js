//callback
// function callback1(param1,param2,callback){
//     console.log(param1+param2)
//     callback()
// }
// function callback2(){
//     console.log('memanggil callback')
// }
// callback1(1,2,callback2)

// //calback asynchronous
// function proses(){
//     console.log('proses1');
// }
// function proses2(){
//     setTimeout(function(){
//         console.log('proses2');

//     },2000)
// }
// function proses3(){
//     console.log('proses3');
// }
// proses()
// proses2()
// proses3()

//promise
// let promes = new Promise ((resolve,reject) =>{
//     resolve('diterima')
//     reject('ditolak')
// })

// // promes
//     .then((result) => {console.log(result)})
//     .catch((error) => {console.log(error)})

 
fetch('https://bukuprojek.herokuapp.com/buku/')

        .then(function(response){   
            return response.json()

        })
        .then(data => {console.log(data.data[0].nama,data.data[0].harga,data.data[0].tahun,data.data[0])})
        



//async await
// async function a(){
//     let promise = new Promise ((resolve,reject) => {
//         setTimeout(() => resolve('selesai'),1000)
//     })
//     let result = await promise
//     console.log(result) 
// }
// a()       