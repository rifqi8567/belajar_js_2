// ! Quantifiers

// ^Quantifiers digunakan untuk mengidentifikasi jumlah karakter.

// * Beberapa karakter spesial yang sering digunakan dalam quantifiers adalah:

// ~ x*: Karakter yang diikuti dengan * dibolehkan tidak tampil sama sekali atau boleh tampil satu kali dan seterusnya.
// ~ x+: Karakter yang diikuti dengan + harus minimal tampil 1 kali dan seterusnya.
// ~ x?: Karakter yang diikuti dengan ?sifatnya menjadi optional, dibolehkan tidak tampil sama sekali atau boleh tampil hanya satu kali.
// ~ x{n}: Karakter yang diikuti dengan {n} (n adalah integer positif) dibolehkan muncul sebanyak minimal n kali.
// ~ x{n,}: Karakter yang diikuti dengan {n,} (n adalah integer positif) dibolehkan minimal tampil n kali dan seterusnya.
// ~ x{n,m}: Karakter yang diikuti dengan {n,m} (n & m adalah integer positif dan m > n) dibolehkan minimal tampil n kali dan maksimal m kali.

// !Quantifiers bersifat greedy. Jika ada quantifiers roa{3,7}r lalu dilakukan string matching dengan pola yang mendekati seperti "roaaar", "roaaaar", dan "roaaaaaaar". Maka hasil yang didapatkan adalah karakter a yang kuantitasnya terbesar yaitu "roaaaaaaar". Untuk membuatnya menjadi non-greedy, kita bisa menggunakan karakter ?.

// ! Contoh penggunaan x?:
const regex = /roa?r/gi;
const word = "Ror";
console.log(word.match(regex)); // Output: ["Ror"]

const regex2 = /roa?r/gi;
const word2 = "Roar";
console.log(word2.match(regex2)); // Output: ["Roar"]

const regex3 = /roa?r/gi;
const word3 = "Roaaar";
console.log(word3.match(regex3)); // Output: null

// !Contoh penggunaan x{n}:

const regex4 = /roa{1,}/gi;
const word4 = "Roaaar";
console.log(word4.match(regex4)); // Output: ["Roaaa"]

const regex5 = /roa{1,}/gi;
const word5 = "Roaaaaaar";
console.log(word5.match(regex5)); // Output: ["Roaaaaaa"]

const regex6 = /roa{1,}/gi;
const word6 = "Ror";
console.log(word6.match(regex6)); // Output: null

// ^Contoh di atas akan mengambil karakter a minimal 1 dan seterusnya.

// !Contoh penggunaan x{n,m}:

const regex7 = /roa{1,2}/gi;
const word7 = "Roaaar";
console.log(word7.match(regex7)); // Output: ["Roaa"]
//* Contoh di atas akan mengambil karakter a minimal 1 dan maksimal 2.