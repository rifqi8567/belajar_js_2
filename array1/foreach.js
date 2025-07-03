// ! .forEach() digunakan untuk melakukan iterasi dalam mengakses elemen array dengan 3 parameter callback sebagai berikut:

// ?  value yaitu isi dari tiap elemen yang diproses.
// ?  index (optional) yaitu nomor index tiap elemen.
// ?  array (optional) yaitu array itu sendiri.

let colors = ['blue', 'red', 'yellow', 'green'];

colors.forEach((data, idx) => {
  if(idx % 2 === 0) { // melakukan pengecekan jika index elemen adalah bilangan genap
    console.log(data, idx)
  } else {
    console.log('not allowed', idx)
  }
});