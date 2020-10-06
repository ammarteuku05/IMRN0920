console.log("Soal no 1")
const golden = () => console.log("This is golden!");

golden();

console.log("Soal no 2")
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName + " " + lastName)
        }
    }
}
newFunction("William", "Imoh").fullName()

console.log("Soal no 3")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
const{firstName, lastName,destination,occupation,spell} = newObject;
console.log(firstName, lastName, destination, occupation);

console.log("soal no 4")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)
console.log("soal no 5")
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 