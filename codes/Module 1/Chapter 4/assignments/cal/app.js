var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
function add() {
    var c = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
function sub() {
    var d = parseFloat(t4.value) - parseFloat(t5.value);
    t6.value = d.toString();
}
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");
function mul() {
    var c = parseFloat(t7.value) * parseFloat(t8.value);
    t9.value = c.toString();
}
var t10 = document.getElementById("t10");
var t11 = document.getElementById("t11");
var t12 = document.getElementById("t12");
function div() {
    var d = parseFloat(t10.value) / parseFloat(t11.value);
    t12.value = d.toString();
}
//# sourceMappingURL=app.js.map