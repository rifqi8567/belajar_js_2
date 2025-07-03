// !Match & Flags


// !Match
// ? .match() sama seperti .exec() yaitu sebuah method bawaan (built-in) dari JavaScript. Namun .match() jika disisipkan suatu flag akan menghasilkan hasil yang beda dengan .exec(). Contoh penggunaan .match():

const regex = /i/
const word = "indonesia";
console.log(word.match(regex));

// !Flag

// **Special Character yang sering digunakan untuk flag adalah:

// g, untuk mencari ke dalam seluruh string yang ingin dicari.
// i, untuk mengabaikan aturan case-sensitive. Tidak mempermasalahkan besar kecilnya sebuah karakter. Tidak membedakan antara A dan a

// cth penggunaan flag

