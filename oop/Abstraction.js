//  ! Abstraction
// ? Abstraction adalah konsep untuk menyembunyikan suatu detil proses yang tidak perlu diketahui oleh pengguna.

// *Abstraction mengatur kompleksitas sistem dengan menyembunyikan detail dari internal sistem dan membuatnya ke dalam beberapa sistem kecil. Sehingga pengguna hanya perlu memberi suatu input untuk mendapatkan output yang diinginkan.


// cth
class Person {
  constructor({firstName, lastName, job}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job; 
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

const salah = new Person({
    firstName: 'Muhammad',
    lastName: 'Salah',
    job: new Job('Liverpool', 'striker', 200000)
});

const christ = new Person({
    firstName: 'Christiano',
    lastName: 'Ronaldo',
    job: new Job('Juventus', 'striker', 1000000)
});

//  *Dari contoh di atas, dapat kita lihat bahwa detil properti pada job disembunyikan ke dalam class Job. Dari sisi programmer, hal ini dilakukan agar kode terlihat lebih rapih dan terstruktur karena properti pada job dipisahkan ke dalam sistem yang lebih kecil, yaitu class Job. Namun dari segi pengguna, pengguna tidak dapat melihat dan tidak perlu mengetahui properti apa saja yang terdapat pada class Job.

// ? Selain itu, abstraction dalam konteks yang berbeda memiliki arti lain yaitu tidak mendefinisikan isi dari suatu method. Ini berarti method tersebut masih bersifat abstrak (tidak jelas). Konsep ini sering digunakan pada bahasa pemrograman yang kental OOP-nya.


// !📝  Catatan:

// !JavaScript tidak memiliki fitur khusus untuk membuat class atau method menjadi abstrak.