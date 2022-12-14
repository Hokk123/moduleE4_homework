const obj = {
    a: 1,
    f: function() {
        console.log(1);
    },
    c: "23456",
    name: "VVS"
};

console.log(obj);
delete obj.c;
console.log(obj);
console.log(obj.f())


// Задание 1
const func1 = function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key])
        }
    }
}

console.log(func1(obj));

// Задание 2
const func2 = function (obj, str) {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
}

console.log(func2(obj, 'c'));

// Задание 3
const func3 = function () {
    const obj2 = {};
    return obj2
}

console.log(func3());


// Задание 4

function ElectricalDevice(onOff, name){
    this.onOff = onOff;
    this.name
}

function Pentium(name, power) {
    this.name = name;
    this.power = power;
    this.processor = 'Intel'
}

function OldLamp(name, light) {
    this.name = name;
    this.light = light
}

Pentium.prototype = new ElectricalDevice('On');
OldLamp.prototype = new ElectricalDevice('On');

const lamp = new OldLamp('LampOne', 'Bright');
const comp = new Pentium('CompOne', 650);

console.log(Pentium);
console.log(lamp);
console.log(comp)


// Задание 5

class ElectricalDevice2 {
    constructor(onOff) {
        this.onOff = onOff;
    }
}

class Pentium2 extends ElectricalDevice2 {
    constructor(name, power, onOff) {
        super(onOff);
        this.name = name;
        this.power = power;
        this.processor = 'Intel'
    }
}

class OldLamp2 extends ElectricalDevice2 {
    constructor(name, light, onOff) {
        super(onOff);
        this.name = name;
        this.light = light
    }
}


const lamp2 = new OldLamp2('LampOne', 'Bright', 'On');
const comp2 = new Pentium2('CompOne', 650, 'On');

console.log(Pentium2);
console.log(lamp2);
console.log(comp2)
