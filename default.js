//  ! Export Default

// * Dengan menggunakan export default, kode yang kita export akan bersifat lebih spesial pada module tersebut.

//  !  Namanya juga spesial, berarti dalam satu module hanya boleh terdapat satu export default.

// ? Biasanya export default digunakan untuk membuat salah satu variabel menjadi data utama yang akan di-export pada sebuah module. export default juga bisa digunakan jika hanya ada satu variabel pada suatu module.

// * kamu cukup menambahkan kata kunci default setelah export.

// ^export default data;

// cth
function sayHello(user){
    console.log(`Heloo, ${user}!`);
}
export default sayHello;

// ? Cara import-nya pun sedikit berbeda ketika menggunakan export default. Kurung kurawalnya atau { } dihilangkan dan langsung memanggil nama data yang sudah di-export sebelumnya.

// ^ import data from "./namaModul.js";

// &  kita juga dapat menggunakan export dan export default bersamaan dalam satu file module:

