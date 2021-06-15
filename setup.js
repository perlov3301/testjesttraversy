var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    textfield = select("#input");
    textfield.changed(newText);
    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

function newText() {
    let s = textfield.value();
    let r = /\w+@\w+\.(net|com|org)/;
    createP(r.test(s));
}