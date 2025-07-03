// ! Session Storage - Mengambil Data

//* Sama seperti local storage, cara mendapatkan data dari session storage juga menggunakan getItem(), seperti berikut ini:

// mendapatkan session storage
//^ sessionStorage.getItem('key');

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


// ! Dapat kita lihat bahwa dari kode di atas, kita mendapatkan apa yang ada di keranjang belanja dengan cara:

  var cartList1 = JSON.parse(sessionStorage.getItem('carts'));
// ! Perlu diketahui, JSON.parse() berfungsi mengembalikan tipe data string yang kita dapat dari session storage kembali menjadi JSON. Lalu untuk merender data dari session storage, kita menggunakan innerHTML, dimana innerHTML menerima string berisikan tag HTML.