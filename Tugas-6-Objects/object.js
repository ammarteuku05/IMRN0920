console.log("Soal no. 1")
function arrayToObject(arr) {
    if (arr.length <= 0) {
        return console.log("")
    }
    for (var i = 0; i < arr.length; i++) {
        var newObj = {}
        var birthYear = arr[i][3];
        var now = new Date();
        var thisYear = now.getFullYear();
        var umur;
        if (birthYear && thisYear - birthYear > 0) {
            umur = thisYear - birthYear
        } else {
            umur = "invalid Birth Year"
        }
        newObj.firstName = arr[i][0]
        newObj.lastName = arr[i][1]
        newObj.gender = arr[i][2]
        newObj.age = umur

        var Output = (i + 1) + ' .' + newObj.firstName + ' ' + newObj.lastName + ' : '

        console.log(Output)
        console.log(newObj)
    }
}
// Driver Code
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

console.log(" soal no. 2")
function shoppingTime(memberId, money) {
    if (!memberId) {
        return " Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000) {
        return "Mohon Maaf , uang tidak cukup"
    } else {
        var newObj = {}
        var moneyChange = money;
        var purcList = [];
        var sepatuStacattu = "Sepatu stacatu";
        var bjZoro = "Baju zoro";
        var bjHn = "Baju H&N"
        var swUniklooh = "Sweater Unikloh";
        var csHandphone = "Casing Handphone";

        var check = 0;
        for (var i = 0; moneyChange >= 50000 && check == 0; i++) {
            if (moneyChange >= 1500000) {
                purcList.push(sepatuStacattu)
                moneyChange -= 1500000
            } else if (moneyChange >= 500000) {
                purcList.push(bjZoro)
                moneyChange -= 500000
            } else if (moneyChange >= 250000) {
                purcList.push(bjHn)
                moneyChange -= 250000
            } else if (moneyChange >= 175000) {
                purcList.push(swUniklooh)
                moneyChange -= 175000
            } else if (moneyChange >= 50000) {
                for (var j = 0; j <= purcList.length - 1; j++) {
                    if (purcList[j] == csHandphone) {
                        check += 1
                    }
                } if (check == 0) {
                    purcList.push(csHandphone)
                    moneyChange -= 50000
                } else {
                    purcList.push(csHandphone)
                    moneyChange -= 50000
                }
            }

        }
        newObj.memberId = memberId
        newObj.money = money
        newObj.listPurch = purcList
        newObj.changeMoney = moneyChange
        return newObj
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
console.log()

console.log("Soal no.3")
function naikAngkot(arrPenumpang) {
    var rute = ["A", "B", "C", "D", "E", "F"]
    var arrOutput = []
    if (arrPenumpang.length <= 0) {
        return []
    }

    for (var i = 0; i < arrPenumpang.length; i++) {
        var objOutput = {}
        var asal = arrPenumpang[i][1]
        var tujuan = arrPenumpang[i][2]

        var indexAsal;
        var indexTujuan;

        for (var j = 0; j < rute.length; j++) {
            if (rute[j] == asal) {
                indexAsal = j
            } else if (rute[j] == tujuan) {
                indexTujuan = j
            }
        }
        var bayar = (indexTujuan - indexAsal) * 2000

        objOutput.penumpang = arrPenumpang[i][0]
        objOutput.naikDari = asal
        objOutput.tujuan = tujuan
        objOutput.bayar = bayar

        arrOutput.push(objOutput)
    }
    return arrOutput
}
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]))
console.log(naikAngkot([]))
