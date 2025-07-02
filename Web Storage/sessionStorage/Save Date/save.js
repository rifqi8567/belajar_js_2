// ! Session Storage - Menyimpan Data

// ? Berbeda dengan local storage, walaupun masuk ke dalam web storage, data yang tersimpan pada session storage akan hilang ketika session dari sebuah laman berakhir.

// ^ Session storage mempunyai beberapa karakteristik, yaitu

// Data yang disimpan pada session storage akan terus tersimpan selama browser terbuka dan tidak hilang jika laman di-reload.
// Membuka banyak tab/window dengan URL yang sama, akan menciptakan session storage yang berbeda di masing-masing tab/window.
// Menutup tab/window akan mengakhiri session dan menghapus data yang tersimpan di session storage pada tab/window tersebut.
// Data yang tersimpan dalam session storage harus berbentuk string.
// Hanya dapat menyimpan data sebanyak 5MB

// *cth studi kasus
// Pada umumnya kita memanfaatkan session storage untuk menyimpan data keranjang belanja (cart) pada sebuah situs e-commerce. Kita tentu pernah memasukkan beberapa barang ke keranjang belanja pada sebuah situs dalam keadaan belum login, namun setelah kita tutup window / tab nya, keranjang belanja yang tadi telah kita isi menjadi kosong lagi.



// *Sama dengan local storage, sintaks untuk menyimpan data pada session storage adalah sebagai berikut:

// menambah session storage
// ^sessionStorage.setItem('key', value);

// let cartList = [];

// function addToCart(name, qty){
//     cartList.push({
//         name,
//         qty
//     });
//     sessionStorage.setItem("carts", JSON.stringify(cartList));  // array object diubah menjadi string
// }

// !Namun, pada fungsi addToCart terdapat masalah dimana saat kita mengklik kembali tombol Add to cart pada masing-masing item, maka akan terjadi duplikasi data seperti gambar di atas. Maka untuk mengatasi masalah tersebut, kita dapat memodifikasi fungsi addToCart di langkah selanjutnya.


let cartList = [];

function addToCart(name, qty){
    const indexItem = cartList.findIndex(data => data.name === name) // memeriksa apakah item name sudah ada atau belum pada cartList
    if(indexItem > -1){
        cartList[indexItem].qty +=1
    } else{
        cartList.push({
        name,
        qty
    });
    }
    sessionStorage.setItem("carts", JSON.stringify(cartList));  // array object diubah menjadi string
}