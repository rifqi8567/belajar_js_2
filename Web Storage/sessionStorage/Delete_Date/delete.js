// ! Session Storage - Menghapus Data

// *Syntax untuk menghapus data dari session storage ada 2, yaitu:

// menghapus session storage satu persatu berdasarkan key
sessionStorage.removeItem('key');

// menghapus seluruh session storage sekaligus
sessionStorage.clear();

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

function removeFromCart(name) {
    const indexItem = cartList.findIndex(data => data.name === name)
    if(indexItem > -1) {
        if(cartList[indexItem].qty > 1) {  // Jika qty barang lebih dari 1
            cartList[indexItem].qty -=1  // maka qty barang dikurangi 1
        }else{  // tapi jika qty barang = 1
            cartList.splice(indexItem, 1)  // maka hapus barang dari cart

        }
    }
    sessionStorage.setItem('carts', JSON.stringify(cartList)); // memperbaharui data keranjang
}

function emptyCart() {
    sessionStorage.removeItem('carts'); // menghapus session storage 'carts'
    cartList = []; // menjadikan cartList sebagai array kosong kembali
}

// ! 📝  Catatan:

// !Penggunaan web storage ditentukan berdasarkan kebutuhan produk dan pengguna dengan mempertimbangkan karakteristik masing-masing pada cookie, local storage dan session storage.
