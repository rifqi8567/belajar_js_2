// ! Menambahkan Data Array Multidimensi
//  cth

let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

for (let i = 0; i < inventory.length; i++){
    let stokTersisa = 100 - inventory[i][1];
    inventory[i].push(stokTersisa);
}

// Tampilkan data dengan format rapi
for (let i = 0; i < inventory.length; i++) {
    let namaBarang = inventory[i][0];
    let jumlahTerjual = inventory[i][1];
    let sisaStok = inventory[i][2];

    console.log(`Barang: ${namaBarang} | Terjual: ${jumlahTerjual} | Sisa: ${sisaStok}`);
}

// Menggunakan .forEach():
let inventory1 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory1.forEach((dataInventory) => {
  let stokTersisa = 100 - dataInventory[1];
  dataInventory.push(stokTersisa);
});


// Menggunakan .map():
let inventory2 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory2.map((dataInventory) => {
  let stokTersisa = 100 - dataInventory[1];
  dataInventory.push(stokTersisa);
});