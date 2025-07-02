//  ! Mengakses Data Array of Object
// * Dalam mengakses data pada struktur array of object, sama seperti mengakses array pada umumnya, yaitu menggunakan perulangan. 

const fruits = [
  {
    name: "strawberry",
    color: "red",
    qty: 5
  },
 {
    name: "blueberry",
    color: "blue",
    qty: 10
  },
  {
    name: "orange",
    color: "orange",
    qty: 5
  },
  {
    name: "grape",
    color: "purple",
    qty: 2
  }
];

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].qty);


// !Lalu jika kita ingin mendapatkan seluruh nama buah, kita bisa menggunakan beberapa metode berikut:

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i].name)
}


// & Menggunakan .map()

fruits.map(data => console.log(data.name));