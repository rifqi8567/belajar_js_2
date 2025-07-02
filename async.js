// ! Async/await

// ? Selain menggunakan callback dan promise, kita juga bisa menggunakan async/await untuk menggunakan asynchronous pada JavaScript. Async/await baru ada ketika update ES8  JavaScript dan dibangun menggunakan promise. Jadi sebenarnya async/await dan promise itu sama saja, namun hanya berbeda dari syntax dan cara penggunaannya.

// *Ada 2 kata kunci yang memiliki pengertian sebagai berikut:

// async, mengubah function synchronous menjadi asynchronous.
// await, menunda eksekusi hingga proses asynchronous selesai.


// ! Sebuah async function bisa tidak berisi await sama sekali atau lebih dari satu await. Keyword await hanya bisa digunakan didalam async function, jika digunakan di luar async function maka akan terjadi error.

// ! Async

// cth

// async menggunakan keyword function 
async function tesAsycAwait() {
    return "Fullfilled";
}

console.log(tesAsycAwait());

// ^ async menggunakan arrow function

// const tesAsycAwait = async () => {
//     return "Fullfilled";
// }

// console.log(tesAsycAwait());

// ! Await

// ?await hanya bisa digunakan dalam async function dan await adalah keyword dalam async yang digunakan untuk menunda hingga proses asynchronous selesai


// ^Berikut ini contoh penggunaan dari async/await :

async function tesAsyncAwait() {
   await 'Fulfilled';
}
// ^Kita juga bisa memberikan error handling pada async/await. Contoh lengkap penggunaan async/await:

// ^ Definisikan dahulu promise yang ingin digunakan
let condition = true;
let tesAsyncAwait1 = async (condition) => {
  if (condition) {
    return "Condition is fulfilled!";
  } else {
    throw "Condition is rejected!";
  }
};

// ^ // Membuat fungsi run menjadi asynchronous menggunakan async/await

const run = async (condition) => {
  try {
    const message = await tesAsyncAwait1(condition);
    console.log(message);  // Output: Condition is fulfilled!
    console.log("After condition is fulfilled"); // Output: After condition is fulfilled
  } catch (error) {
     console.log(error);
  }
};

run(true);


function helloWorld () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

async function messages() {
    const msg = await helloWorld();
    console.log(msg); // Output: Hello World!
}

messages(); // panggilan terakhir

