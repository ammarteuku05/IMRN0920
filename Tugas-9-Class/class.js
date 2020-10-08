// 1. Animal Class 
// Release 0
class Animal {
    // Code class di sini
    constructor(name) {
        this.name = name;
    }
    get legs() {
        return 4;
    }
    get cold_blooded() {
        return true;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


// Realese 1
class Ape extends Animal {
    constructor(name) {
        super(name);
    }
    get legs() {
        return 2;
    }
    yell() {
        console.log("Auooo")
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    get legs() {
        return 2;
    }
    jump() {
        console.log("hop hop")
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

// 2. Function to Class

// function Clock({ template }) {

//     var timer;

//     function render() {
//       var date = new Date();

//       var hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       var mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       var secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       var output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }

//   var clock = new Clock({template: 'h:m:s'});
//   clock.start(); 

class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }
    render() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    start() {
        this.render();
        let i = this;
        this.timer = setInterval(function () { i.render(); }, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();

setTimeout(function () {
    clock.stop()
}, 1000);

