/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

*/
let count = 0
const countManual = (arr) => {
    // tulis code di sini
    for(let i = 0; arr[i] !== undefined; i++){
      count++
    }

    return count
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countManual(data_array)); // output : 21