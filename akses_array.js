// ! Mengakses Array Multidimensi
//  cth
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

console.log(inventory[0][0]); // Output: Kaos Polos
console.log(inventory[2][0]); // Output: Topi
console.log(inventory[1][1]); // Output: 13

let inventory1 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory.push(["Celana Jeans", 18]);

console.log(inventory1);

let inventory2 = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

let removed = inventory.splice(1, 1); 

let item = removed[0][0];          
let jumlahTerjual = removed[0][1];  
item = inventory2[1][0];           // "Topi"
jumlahTerjual = inventory2[1][1]; 

console.log(inventory2);     
console.log(item);         
console.log(jumlahTerjual); 
console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);

