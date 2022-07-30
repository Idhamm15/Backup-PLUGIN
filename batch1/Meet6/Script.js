//lanjutan kemarin

//let hewan = ['rusa','sapi','kuda','monyet']
//method splice
//hewan.splice(2, 0, 'landak');
//rumus splice (index awal, mau di hapus berapa)
//console.log(hewan.join(','))


//method slice
//let hewan2 = hewan.slice(1,4)
//rumus slice (indexawal , indexakhir)
//console.log(hewan2.join('-'));

//method forEach
let mahasiswa = ['faisal','ali','muhamad']

mahasiswa .forEach(function(e, i){
    console.log('mahasiswa '+ (i) + 'adalah' + e);
})

//method filter
//let angka1 = [1,4,9,8,7,3,2,0,7,6,5,4,45,11]

//let angka2 = angka1.filter(function(x){
//    return x > 4 && x < 7
})
//console.log(angka2.join(', '));

//method slice
function hilangkanhuruf(x) {
    let a = x.split('a')
    return a.join()
}
console.log( hilangkanhuruf('faisal ali muhamad'))