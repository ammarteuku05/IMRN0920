//soal no.1 menggunakan while
console.log("Looping Pertama")
angka=2;
while(angka < 20){
    if(angka % 2 == 0){
    console.log(angka +" - I love coding");
    }
    angka++;
}
var angka1=20;
console.log("Looping Kedua")
while(angka1> 0){
    if(angka1 % 2 == 0){
    console.log(angka1+" - I will become a mobile developer");
    }
    angka1--;
}

console.log("\n")
//soal no.2 menggunakan for
var angka2=20;

for(angka2=1;angka2<=20;angka2++){
    if(angka2 % 3 == 0)
    console.log(angka2+" - I Love Coding");
    else if (angka2 % 2 == 0)
    console.log(angka2+" - Berkualitas");
    else if(angka2 % 2 == 1)
    console.log(angka2+" - Santai");
}

console.log("\n")

//No. 3 Membuat Persegi Panjang
printSquare = (num) =>{
    let result = '';
    for(let i=1;i<=num/2;i++){
        for(let j=1;j<=num;j++){
        result += '#';
      }
      result += '\n';
    }
    return result;
}
  console.log(printSquare(8));
  
  
console.log("\n")

printTriangle = (num) =>{
    let result = '';
    for(let i=0;i<=num;i++){
      for(let j=0;j<=i;j++){
        result += '*';
      }
      result += '\n';
    }
    return result;
  }
  
  console.log(printTriangle(7));

  printChess = (num) =>{
    let result = '';
    for(let i=1;i<=num;i++){
      for(let j=1;j<=num;j++){
        if(i % 2 == 0){
          if(j % 2 == 0){
            result+= ' '
         }
         else
         result+='# ';
        }
        else{
            if(j% 2 ==0)
            result += ' ';
            else 
            result += ' #';
        }
      }
      result += '\n';
    }
    return result;
}
  console.log(printChess(8));