// ! Fetch

// ? Dalam JavaScript kita bisa mengirimkan network request dan juga bisa mengambil informasi data terbaru dari server jika dibutuhkan.


// * Contoh network request yang biasa kita lakukan:

// Mengirimkan data dari sebuah form.
// Mengambil data untuk ditampilkan dalam list/table.
// Mendapatkan notifikasi.

// ? Proses melakukan fetch() adalah salah satu proses asynchronous di JavaScript sehingga kita perlu menggunakan salah satu diantara promise atau async/await

// !Fetch dengan Promise
// cth

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response) {
    response.json();
})
.then(function(post){
console.log([post])
})

// ! Fetch dengan async/await

const tesFetchAsync = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  response = await response.json();
  console.log(response);
};
tesFetchAsync();


function ambilDataUser() {
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();  // mengubah response jadi data JSON
})
.then((users) => {
    console.log(users);   // tampilkan data user di console
})
.catch((error) => {
    console.error("terjadi error :", error);
});
}

ambilDataUser();