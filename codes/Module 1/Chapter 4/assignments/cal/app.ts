var t1: HTMLInputElement =<HTMLInputElement>document.getElementById("t1");
var t2 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t2");
var t3 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t3");
 function add()
 {
    var c:number=parseFloat(t1.value)+parseFloat(t2.value);
    t3.value=c.toString();
 }
var t4: HTMLInputElement =<HTMLInputElement>document.getElementById("t4");
var t5 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t5");
var t6 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t6");
function sub()
{
    var d:number=parseFloat(t4.value)-parseFloat(t5.value);
    t6.value=d.toString();
}
var t7: HTMLInputElement =<HTMLInputElement>document.getElementById("t7");
var t8 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t8");
var t9 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t9");
 function mul()
 {
    var c:number=parseFloat(t7.value)*parseFloat(t8.value);
    t9.value=c.toString();
 }
var t10: HTMLInputElement =<HTMLInputElement>document.getElementById("t10");
var t11 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t11");
var t12 :    HTMLInputElement =<HTMLInputElement>document.getElementById("t12");
function div()
{
    var d:number=parseFloat(t10.value)/parseFloat(t11.value);
    t12.value=d.toString();
}