// !Introduction
// !RECURSIFE

// ? Mudahnya, rekursif adalah suatu teknik pemrograman yang menggunakan function atau fungsi. Sederhananya adalah fungsi yang memanggil fungsi tersebut atau dirinya sendiri, seolah-olah terjadi suatu perulangan. Proses pemanggilan inilah yang disebut sebagai recursion (rekursi) dan akan terus dilakukan sampai pada kondisi yang sudah ditentukan.

function rekursif() {
    rekursif();
}

// **Dengan menggunakan rekursif, memungkinkan kamu untuk dapat merancang suatu logika penyelesaian menjadi lebih baik dan mudah dibaca.*/ 
// //!Namun dari kelebihannya itu, rekursif menggunakan banyak memori sehingga membuat aplikasi menjadi lambat jika data yang diuji sangat banyak.

// **Ada 3 hal yang perlu diperhatikan untuk memutuskan kapan menggunakan rekursif dan kapan menggunakan iteratif:

// Jika fokus kamu adalah kecepatan pada aplikasi dan menghemat memori, kamu harus menggunakan iteratif.
// Jika data yang diuji tidak banyak, kamu dapat menggunakan rekursif.
// Beberapa algoritma secara natural lebih cocok menggunakan rekursif.