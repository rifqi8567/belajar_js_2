// !Membuat Rekursif

// ? Algoritma rekursif mempunyai 2 komponen utama, yaitu:

// Base Case
// Kasus dasar untuk menyelesaikan permasalahan. Base case akan dikunjungi jika rekursi berakhir (kondisi untuk berhenti terpenuhi), serta mengembalikan nilai tanpa melakukan rekursi kembali.

// Recursion Call
// Permasalahan yang ada tentunya akan diperkecil dengan melakukan pemanggilan function itu sendiri (recursion call). Permasalahan dapat diperkecil dengan mengurangi atau memecahkan data input pada setiap pemanggilannya hingga mencapai base case.

// !Struktur dasar function rekursif adalah sebagai berikut
function namaFunRecrusif () {
    if(codition) {

    }else{
        namaFunRecrusif();
    }
}


// cth

function factorial(n) {
    if(n == 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5))  // 5 * 4 * 3 * 2 * 1

function balikKata(str) {
    // 2. Base case: jika string kosong, kembalikan string kosong
    if (str === "") {
        return "";
    } else {
        // 3. Recursive call + gabungkan dengan str[0]
        return balikKata(str.substr(1)) + str[0];
    }
}

// 4. Uji hasilnya dengan console.log
console.log(balikKata("Skilvul")); // Output yang diharapkan: "luvlikS"
