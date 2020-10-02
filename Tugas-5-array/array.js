//soal no.1(Range)

function range(startNum, finishNum) {
    let nilai = [];
    if (startNum <= finishNum) {
        for (let i = startNum; i <= finishNum; i++) {
            nilai.push(i);
        }
    }
    else if(startNum>=finishNum){
        for(let i=startNum; i>=finishNum; i--){
            nilai.push(i);
                }
    }
    else{
        nilai.push(-1);
    }
    return nilai;
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log('\n');

// Soal No. 2 (Range with Step)

function rangeWithStep(startNum, finishNum, step) {
    let nilai = [];
    if (startNum <= finishNum) {
        for (let i = startNum; i <= finishNum; i+=step) {
            nilai.push(i);
        }
    }
    else if(startNum>=finishNum){
        for(let i=startNum; i>=finishNum; i-=step){
            nilai.push(i);
                }
    }
    else{
        nilai.push(-1);
    }
    return nilai;
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log('\n')

// Soal No. 3 (Sum of Range)

function sum(startNum, finishNum, step=1) {
    let nilai =[],total=0;
    if (startNum <= finishNum) {
        for (let i = startNum; i <= finishNum; i+=step) {
            nilai.push(i);
            total = total + i;
        }
    }

    else if(startNum>=finishNum){
        for(let i=startNum; i>=finishNum; i-=step){
            nilai.push(i);
            total = total + i;
                }
    }
    else{
        for(let i=startNum; i>=startNum; i-=step){
            nilai.push(i);
            total = total + i;
                }
    }
    return total;
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0
console.log('\n')

// Soal No. 4 (Array Multidimensi)

 function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];
    for (let i = 0; i < 4; i++) {
        console.log ("Nomor ID: " + input[i][0]);
        console.log("Nama Lengkap: " + input[i][1]);
        console.log("TTL: " + input[i][2]+ " "+input[i][3]);
        console.log ("Hobi: " + input[i][4]);
        console.log('\n');
    }
} 
dataHandling();

// Soal No. 5 (Balik Kata)

function balikKata(word){
    var balik = "";
    for(var i = word.length-1; i>=0; i--){
        balik += word[i];
    }
    return balik;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 
console.log("\n")

// Soal No. 6 (Metode Array)
function dataHandling2() {
    var input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    input2.splice(1, 2, "Roman Alamsyah Elsarawy", "Provinsi Bandar Lampung");
    input2.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input2);
    let sorting, sorting2, hasil2=[];
    hasil = "21/05/1989";
    sorting = hasil.split("/");
    bulan = sorting[1];
    switch (bulan) {
        case "01":
            {
                console.log("Januari");
                break;
            }
        case "02":
            {
                console.log("Februari");
                break;
            }
        case "03":
            {
                console.log("Maret");
                break;
            }
        case "04":
            {
                console.log("April");
                break;
            }
        case "05":
            {
                console.log("Mei");
                break;
            }
        case "06":
            {
                console.log("Juni");
                break;
            }
        case "07":
            {
                console.log("Juli");
                break;
            }
        case "08":
            {
                console.log("Agustus");
                break;
            }
        case "09":
            {
                console.log("September");
                break;
            }
        case "10":
            {
                console.log("Oktober");
                break;
            }
        case "11":
            {
                console.log("November");
                break;
            }
        case "12":
            {
                console.log("Desember");
                break;
            }
        default: {
            console.log("Error")
        }

    }
    sorting2 = sorting.join('-');
    sorting.sort(function (value1, value2) { return value2 - value1 });
    console.log(sorting);
    console.log(sorting2);
    console.log(input2[1].slice(0,15));
}
dataHandling2();