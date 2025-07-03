// !Data Type Prototyping
// *Setiap tipe data di JavaScript memiliki prototype bawaannya masing-masing berupa property dan method.

// cth
// Digunakan untuk melihat properti apa saja yang dimiliki oleh prototype String
console.log(String.prototype);

//  menambahkan type data

// dataType.prototype.namaMethod = function(n){
//     // kode
// }

// * Tipe data string memiliki prototype method repeat(). Sekarang kita akan membuat method baru dengan menggunakan method repeat() :

// Kita membuat properti tambahan untuk String
// Method untuk mengulang string selama yang kita butuhkan

String.prototype.repeatString = function(n) {
    return this.repeat(n);
};

console.log("Skilvul". repeatString(3));