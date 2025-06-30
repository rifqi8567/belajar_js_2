// ! Looping pada Array Multidimensi
// cth
let inventory = [
    ['kaos polos',13],
    ['jaket hody',7],
    ['topi',10]
];

for(let i = 0; i < inventory.length; i++) {
    for(let j = 0; j < inventory[i].length; j++){
        console.log(inventory[i][j]);
    }
}

// Menggunakan .forEach():
let inventory1 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory1.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});


// Menggunakan .map():
let inventory2 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory2.map((baris) => {
  baris.map((kolom) => {
    console.log(kolom);
  });
});