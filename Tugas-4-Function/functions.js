// soal no.1

function teriak(){
    let result = 'Halo Sanbers';
    return result;
  }
  console.log(teriak());
  console.log('\n');

  //no. 2

  function kalikan(num1 , num2){
    kalikan= num1 * num2;
    return kalikan;
  }
    var num1 = 12;
    var num2 = 4;
    var hasilKali = kalikan(num1 , num2)
  console.log(hasilKali);

  console.log('\n')

  //no.3 
  function introduce(name, age, address, hobby){
    introduce= "Nama saya "+ name + " , umur saya "+age+ " tahun, alamat saya di "+address + ", dan saya punya hobby yaitu "+ hobby+"!" ;
    return introduce;
  }

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 