//es6
"use strict";
class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    add(complex2) {
        let re = this.re + complex2.re;
        let im = this.im + complex2.im;
        return new Complex(re, im);
    }
    substract(complex2) {
        let re = this.re - complex2.re;
        let im = this.im - complex2.im;
        return new Complex(re, im);
    }
}
let a = new Complex(5, 2);
let b = new Complex(7, 3);
let c = a.add(b);
let d = a.substract(b);
