// ! Groups & Ranges

// ? Group adalah pengelompokkan karakter yang di-capture ke dalam regex menggunakan tanda kurung ().

// *Group memberikan 2 hasil, yaitu:
// ^Menghasilkan suatu bagian dari fungsi .match() menjadi item terpisah.
// ^Ketika kita menambahkan quantifier seperti tanda + setelah tanda kurung (), maka semua yang di dalam tanda kurung akan dianggap menjadi satu bagian.

// ? Beberapa karakter spesial yang sering digunakan dalam group adalah:
// (x): Digunakan untuk mencocokan karakter dalam ()menjadi beberapa grup.
// (?<Name>x): Digunakan untuk mencocokan karakter dalam ()menjadi beberapa grup yang diberi nama.

// !Contoh penggunaan (x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup ()
const regex = /First_Name: (\w+), Last_Name: (\w+)/;
const word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match =word.match(regex);
console.log(match);
console.log(`hello, ${match[1], match[2]}`);


// !Contoh penggunaan (?<Name>x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup () dengan nama 'firstname', 'lastname'

const regex1 = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g; 
const word1 = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match1 = regex1.exec(word1)
console.log(match1.groups)  //Dari kode di atas, kita dapat mengambil kata yang terdapat dalam tanda kurung (firstname, lastname) dengan menggunakan objek groups.




// !Apa itu Range?
// ? Range adalah pengelompokkan karakter yang memiliki rentang, seperti a-z (a sampai z) atau 1-4 (1 sampai 4), yang kemudian di-capture ke dalam regex menggunakan tanda [].

// Beberapa karakter spesial yang sering digunakan dalam range adalah:

//^ x|y: Digunakan untuk memberikan alternatif pilihan, jika tidak cocok dengan X maka pilih Y, begitu juga sebaliknya.
//^ [xyz] atau [x-z]: Digunakan untuk membuat kumpulan karakter. Di topik sebelumnya kita telah membahas character classes, karakter \d adalah kumpulan karakter angka dari 0-9.
//^ [^xyz] atau [^x-z] : Digunakan untuk mencari karakter selain dari kumpulan karakter yang telah kita definisikan.


// ! Contoh penggunaan x|y:

const regex2 = /PS5|XBOX/gi;
const word2 = "PS5 berwarna hitam";
console.log(word2.match(regex2)); // Output: ['PS5']

const regex3 = /PS5|XBOX/gi;
const word3 = "XBOX berwarna hijau";
console.log(word3.match(regex3)); // Output: ['XBOX']


// !Contoh penggunaan [xyz]:

const regex4 = /[aiueo]/gi;
const word4 = "PS5 berwarna hitam";
console.log(word4.match(regex4)); // Array ["e", "a", "a", "i", "a"]

// !Contoh penggunaan [^xyz]:

const regex5 = /[^aiueo]/gi;
const word5 = "PS5 berwarna hitam";
console.log(word5.match(regex5)); // Array ["P", "S", "5", " ", "b", "r", "w", "r", "n", " ", "h", "t", "m"]

// & Pada umumnya kita menggunakan range untuk mencocokan password, seperti apakah password tersebut memiliki panjang minimum 6 karakter yang terdiri dari angka, simbol, huruf besar dan sebagainya


// tugas
const regex6 = /[^aiueo]/gi;
const name = "ahmad fadhillah";
const result = name.match(regex6);
console.log(result);

const newName = result.join('');
console.log(newName)