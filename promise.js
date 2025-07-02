//  ! Promise

//  * Konsep promise hadir untuk memecahkan masalah yang bertele-tele dengan callback, semakin banyak kita menggunakan callback untuk proses asynchronous semakin kompleks dan sulit kode kita untuk dibaca dan dipelihara. Kita juga akan sering menghadapi callback di dalam callback dan seterusnya. Masalah seperti ini disebut dengan Callback Hell.

// Contoh dari callback hell :

const verifyUser  = (username, password, callback) => {
    dataBase.verifyUser(username, password, (error, userInfo, roles) => {
        if(error) {
            callback(error);
        }else{
            dataBase.logAccess(username,(error) => {
                if(error){
                    callback(error);
                }else{
                    callback(null, userInfo, roles);
                }
            });
        }
    });
};


// ! Konsep Promise
// * Promise sesuai dengan artinya adalah janji. Seperti ketika kita berjanji, jika apa yang kita janjikan bisa kita lakukan maka kita harus melakukannya, jika janjinya ada halangan maka kita tidak bisa melakukannya atau jika janji tersebut belum pada waktunya kita juga harus menunggunya.

// cth 
// ^ Kita berjanji untuk menonton di bioskop dengan teman pada malam minggu besok

// *Batas waktu dilaksanakan : Malam minggu besok
// *Rencana : Menonton di bioskop

// !Maka hasilnya rencana kita:
// Batas waktu dilaksanakan : Malam minggu besok.
// Rencana : Menonton di bioskop.
// Rencana jika gagal : streaming film.
// Rencana selanjutnya apapun yang terjadi : tidur.


// !Jika disesuaikan dengan analogi promise pada JavaScript menjadi

// *Pending / tertunda = Jika kita belum melewati batas waktu dilaksanakan dan belum mengetahui janji tersebut bisa ditepati atau tidak.
// *Fulfilled / terpenuhi = Jika janji berhasil dipenuhi sebelum batas waktu yang ditentukan.
// *Rejected / gagal = Jika janji gagal ditepati karena suatu hal dan kita melakukan rencana lain.
// *Settled / terselesaikan = Jika semua janji sudah selesai terpenuhi kita sudah bebas melakukan hal lainnya.

// !Contoh menggunakan promise
let newPromise = new Promise((resolve, rejet) => {
    if(true){
         // apa yang dilakukan jika promise fulfilled
         resolve("berhasil");
    }else{
         // apa yang dilakukan jika promise rejected
         rejet("gagal");
    }
});

// ?Kita bisa membuat sendiri apa yang akan dilakukan pada sebuah promise. Di dalam promise ada 2 keyword yaitu resolve() dan reject().

// resolve(), jika proses berhasil atau fullfilled.
// reject(), jika proses gagal atau rejected.


// ! Contoh penggunaan promise fullfilled

//  ^ Untuk fulfilled hanya bisa tereksekusi jika kita kondisi berhasil pada saat kita melakukan async. Kita set condition menjadi true untuk simulasi fulfilled

const condition = true;

let newPromise1 = new Promise((resolve, reject) =>{
    if(condition) {
        // apa yang dilakukan jika promise 'fulfilled'
        resolve("Berhasil")
    }else{
        // apa yang dilakukan jika promise 'rejected'
        reject(new Error("Error Gagal"));
    }
});

// ^ Untuk bisa mengeksekusi promise yang sudah dibuat kita bisa memanggil promise tersebut menggunakan .then():

newPromise.then((result) => {
    console.log(result);
});

//  ^Selain itu kita juga bisa memanggil .then() lebih dari satu kali ketika dibutuhkan seperti contoh di bawah:
newPromise.then((result) => {
    return(result);
})
.then((result2) => {
    console.log(result2 + "!!");
})

// ! Contoh penggunaan promise rejected

// ? Untuk rejected hanya bisa tereksekusi jika kita mengalami error pada saat kita melakukan proses asynchronous. Kita set condition menjadi false untuk simulasi rejected.:

const condition1 = false;

let newPromise2 = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject(new Error("Error Gagal"));
  }
});

// ? Untuk bisa mengantisipasi jika terjadi error kita bisa menambahkan .catch() pada promise. Sehingga, kita bisa memberi tahu pengguna jika terjadi suatu error:

const condition3 = false;

let newPromise3 = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject(new Error("Error Gagal"));
  }
});

newPromise.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error.message); // Output: "Error Gagal"
});


// ! .finally() adalah fungsi callback yang pasti tereksekusi dalam kondisi apapun (fullfield ataupun rejected).


const condition4 = true;

let newPromise4 = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject(new Error("Error Gagal"));
  }
});

newPromise
  .then((result) => {
    console.log(result); // Output: Berhasil
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
    ); // Output: Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
  });
