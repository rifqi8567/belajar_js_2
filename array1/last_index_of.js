// !.lastIndexOf()
// ? melakukan iterasi elemen array dari kanan ke kiri kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.

// ** .lastIndexOf() memiliki 2 argumen yang dapat digunakan sesuai kebutuhan:
// value yaitu nilai elemen pada array yang ingin dicari
// startIndex (optional) yaitu titik awal pencarian

// setruktur
// ! arr.lastIndexOf(value, startIndex);

// !Secara fungsionalitas, hampir sama seperti .indexOf(). Perbedaannya terletak pada titik mulai iterasinya. .lastIndexOf() akan melakukan iterasi dari elemen yang paling belakang atau terakhir. 

// ver.index_of
let buahSaya = ["mangga", "pisang", "manggis", "jeruk", "pisang"]
let indexPisang = buahSaya.indexOf("pisang", 2)
console.log(indexPisang)

// ver.last_index_of
let buahKamu = ["mangga", "pisang", "manggis", "jeruk", "pisang"]
let indexPisang1 = buahKamu.lastIndexOf('pisang')
console.log(indexPisang1)

// ? Pada kode di atas, nilai index yang akan dikembalikan adalah nilai index dari elemen yang paling terakhir yaitu index

// !  Ini disebabkan oleh .lastIndexOf() yang melakukan iterasi dari kanan ke kiri. Nilai index akan langsung dikembalikan ketika data yang dicari sudah ditemukan.
