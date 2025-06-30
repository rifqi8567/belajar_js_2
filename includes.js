// ! .includes()
// ? .includes() digunakan untuk memeriksa apakah terdapat salah satu data yang kita ingikan dalam elemen array yang kita terima, jika tidak ada maka .includes() akan membalikan nilai false dan menjadi true jika sebaliknya.

// struktur kode
//! array.includes("--data yang kita cari--");

const foods = ['siomay', 'dimsum', 'gyoza', 'pangsit'];
const dimsum = foods.includes("dimsum")
const pizza = foods.includes("pizza")
console.log(dimsum)
console.log(pizza)

//  ** Dari contoh di atas, kita melakukan pengecekan makanan dari list data array foods, apakah ada pizza atau dimsum di dalam array foods. Dapat kita lihat bahwa .includes() hanya me-return nilai boolean. 


// ! 📝  Catatan:

// !Sebagai info tambahan, dari kode di atas, kita dapat melihat penulisan tanda double negasi !!, ini adalah trik penulisan kode JavaScript yang artinya, tanda seru pertama (negasi pertama) mengubah data (tipe data apapun) ke bentuk boolean, lalu tanda seru kedua (negasi kedua), mengubah boolean menjadi nilai boolean yang kita harapkan.

// operator double nigasi
const pizza1 = foods.find(data => data === 'pizza'); 

console.log(pizza); 
// Output: undefined

// Jika undefined diberi negasi
console.log(!undefined);
// Output: true --> sedangkan kita mengharapkan jika undefined, berarti kondisi false.

// maka agar hasilnya negatif, kita beri double negasi
console.log(!!undefined);
// Output: false


