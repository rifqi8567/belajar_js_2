// ! Membuat Elemen

// ^ DOM (Document Object Model) merupakan cara yang dilakukan oleh JavaScript untuk dapat memanipulasi elemen pada HTML. Mulai dari membuat, mengakses, mengubah, dan menghapus elemen HTML melalui JavaScript.

// * DOM (Document Object Model) merupakan cara yang dilakukan oleh JavaScript untuk dapat memanipulasi elemen pada HTML. Mulai dari membuat, mengakses, mengubah, dan menghapus elemen HTML melalui JavaScript.

// * document.createElement("NAMA_ELEMEN");


// Mengakses elemen <body>
let body = document.body;
let heading = document.createElement("h1");
console.log(heading)

// * Langkah 4: Kita akan memasukkan elemen <h1> di dalam elemen <body> menggunakan method appendChild("NODE") yang membutuhkan parameter berupa node object dari elemen atau konten teks yang telah dibuat.

// ^Memasukkan elemen <h1> kedalam elemen <body>
body.appendChild(heading);


//^ Membuat attribut
let id = document.createAttribute('id');

//^ Memasukkan nilai attribut
id.value = "mainHeading";

//^ Set attribute pada <h1>
heading.setAttributeNode(id);

// *  Kita akan membuat konten utama berupa teks "Ini Heading" menggunakan method createTextNode("TEKS") yang membutuhkan parameter berupa teks yang akan dimasukkan kedalam elemen HTML.

// * Lalu konten teks tersebut akan kita masukkan pada elemen <h1> menggunakan method appendChild("NODE") yang membutuhkan parameter berupa node object dari elemen atau konten teks yang telah dibuat:


// Membuat konten pada elemen
let contentHeading = document.createTextNode('Ini heading');

// Memasukkan konten yang telah dibuat kedalam elemen heading <h1>
heading.appendChild(contentHeading);

