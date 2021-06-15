const regex1 = {
    train: () => {
        let s = "hello";
let r = /hello/; // literal=a patern that is enclosed between slashes
let as1 = new String("hello");
let ar1 = new RegExp("hello");
let as2 = as1.indexOf("e");
let as3 = as1.length;
console.log("e in as2:", as2, " length:", as3);
let ar21 = r.test("e"); // returns boolean: pattern exists or not
let as21 = s.match(/e/); //returns array as result of search
console.log("ar21 for e:", ar21);
console.log("as21 for/e/:", as21);
let ar22 = r.exec();
// let ar23 = s.split();
// let ar25 = s.replace();
// let ar26 = s.matchAll()
// let ar27 = s.search()
let r10 = /\d{3}/;
console.log("r10:", r10);
let r11 =  r10.test("hello");
let r12 = r10.test("123");
let r13 = r10.test("123ABC");
console.log("r11:", r11, "r12:", r12, "r13:", r13);
let r20 = /^\d{3}$/;
let r21 = r20.test("123");
console.log("r21:", r21);
    },
};

module.exports = regex1;