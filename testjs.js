console.log("hey");
const five = "101";
console.log(parseInt(five, 2));


var addbtnclick = 0;
var subbtnclick = 0;
var mulbtnclick = 0;
var divbtnclick = 0;

var btn1value = document.getElementById("btn1");
var btn0value = document.getElementById("btn0");
var resultvalue = document.getElementById("res");
var btnclear = document.getElementById("btnClr");
var btnequal = document.getElementById("btnEql");
var btnsum = document.getElementById("btnSum");
var btnsub = document.getElementById("btnSub");
var btnmul = document.getElementById("btnMul");
var btndiv = document.getElementById("btnDiv");
btn1value.onclick = function () {
  resultvalue.innerHTML = resultvalue.innerHTML + btn1value.innerHTML;
};
btn0value.onclick = function () {
  resultvalue.innerHTML = resultvalue.innerHTML + btn0value.innerHTML;
};
btnclear.onclick = function () {
  resultvalue.innerHTML ="";
  addbtnclick = 0;
  subbtnclick = 0;
  mulbtnclick = 0;
  divbtnclick = 0;
};
btnsum.onclick = function () {
  resultvalue.innerHTML = resultvalue.innerHTML + btnsum.innerHTML;
  addbtnclick++;
};

btnsub.onclick = function(){
    resultvalue.innerHTML = resultvalue.innerHTML + btnsub.innerHTML;
    subbtnclick++;
};
btnmul.onclick = function(){
    resultvalue.innerHTML = resultvalue.innerHTML + btnmul.innerHTML;
    mulbtnclick++;
};
btndiv.onclick = function(){
    resultvalue.innerHTML = resultvalue.innerHTML + btndiv.innerHTML;
    divbtnclick++;
};


function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

btnequal.onclick = function () {
  var expression = resultvalue.innerHTML;
  if (addbtnclick == 1) {
    var exp = expression.split("+");
    var firstexp = parseInt(exp[0], 2);
    var secondexp = parseInt(exp[1], 2);
    var sum = firstexp + secondexp;
    //console.log(sum);
    resultvalue.innerHTML = dec2bin(sum);
    addbtnclick = 0;
  }
  else if(subbtnclick==1){
    var exp = expression.split("-");
    var firstexp = parseInt(exp[0], 2);
    var secondexp = parseInt(exp[1], 2);
    var sub = firstexp - secondexp;
    //console.log(sum);
    resultvalue.innerHTML = dec2bin(sub);
    subbtnclick = 0;

  }
  else if(mulbtnclick==1){
    var exp = expression.split("*");
    var firstexp = parseInt(exp[0], 2);
    var secondexp = parseInt(exp[1], 2);
    var mul = firstexp * secondexp;
    //console.log(sum);
    resultvalue.innerHTML = dec2bin(mul);
    mulbtnclick = 0;

  }
  else if(divbtnclick==1){
    var exp = expression.split("/");
    var firstexp = parseInt(exp[0], 2);
    var secondexp = parseInt(exp[1], 2);
    var div = firstexp / secondexp;
    //console.log(sum);
    resultvalue.innerHTML = Math.floor(dec2bin(div));
    divbtnclick = 0;

  }


};
