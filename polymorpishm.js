// ! Polymorphism

//  * Pada child class, selain mewarisi semua sifat dari parent-nya, child class juga bisa memiliki kemampuan yang berbeda dengan parent-nya. Dengan kata lain, child class memiliki metode yang sama dengan parent-nya namun bisa jadi berbeda output dengan sibling atau parent-nya, hal ini dikenal dengan sebutan polymorphism.

// ? Secara bahasa, Polymorphism berasal dari dua kata, yaitu poly yang berarti banyak dan morphism yang berarti bentuk.
// ? Polymorphism ini juga dikenal pada konsep OOP yang berarti kemampuan dari suatu objek untuk memiliki banyak bentuk. 

//  cth

class hewan{
    constructor(nama){
        this.nama = nama;
    }
    suara(){
        console.log('ini suara hewan');
    }
}

class Kucing extends hewan{
    constructor(nama){
        super(nama);
    }
    suara(){
        console.log('miaww');
    }
}

let kucing = new Kucing("tom");
kucing.suara();
// hewan.suara();