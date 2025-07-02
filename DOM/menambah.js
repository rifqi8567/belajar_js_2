// ! Menambah Elemen Event - Event Listener

//* Syntax dalam menggunakan event listener adalah:


//^ element.addEventListener(event, function, useCapture);

// ?event (required) adalah tipe event yang kita butuhkan seperti click, mouseover, atau HTML DOM event lainnya.

// ? function (required) adalah fungsi yang kita panggil saat event sedang terjadi.

// ? useCapture (optional) merupakan nilai boolean yang menentukan apakah event dieksekusi secara bubbling (*event element parent * dieksekusi setelah * event element child * dieksekusi) atau capturing (*event element child * dieksekusi setelah *event element parent * dieksekusi).

// ^ Langkah 2: Kita akan membuat file bernama elemen.js. Lalu tambahkan kode berikut ini untuk mendapatkan elemen div dengan id bernama test-event:

const boxPink = document.getElementById("test-event");
//^ Langkah 3: Buat fungsi untuk mengganti teks dan warna background:

function mouseOver() {
    boxPink.innerHTML ="Hai"; // mengganti teks ketika mouse diarahkan ke dalam box
    boxPink.style.backgroundColor = "blue"; // mengganti warna background ketika mouse diarahkan ke dalam box
}

function mouseOut() {
    boxPink.innerHTML = "Mouse over ME!"; // mengganti teks ketika mouse diarahkan ke luar box
    boxPink.style.backgroundColor = "pink";  // mengganti warna background ketika mouse diarahkan ke luar box
}

//  ^ Langkah 4: Panggil fungsi pada langkah ketiga dengan method .addEventListener()

boxPink.addEventListener("mouseover", mouseOver);
boxPink.addEventListener("mouseout", mouseOut);


// ! 📝  Catatan:

// ! Program di atas dijalankan menggunakan web browser Chrome