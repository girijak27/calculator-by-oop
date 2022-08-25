// function showresult(choise){
//      var n1=parsefloat(document.getElementById('num1').value);
//      var n2=parsefloat(document.getElementById('num2').value);
//      var r;
//      var c=choise;
  
//      switch(c)
//          {
//          case '1':
//              r=n1+n2;
//              break;
//          case '2':
//              r=n1-n2;
//              break;
//          case '3':
//              r=n1*n2;
//              break;
//          case '4': 
//              r=n1/n2;
//              break;
//          case '5':
//             r=n2*100/n1;
//              break;
//          default:
//              break;
                
//          }
//          document.getElementById('btn1').innerHTML=r;

// }




    // function sum(){
//     var add=0;
//     for(i=0;i<arguments.length; i++){
//         add=add+arguments[i];
//     }
//     return add;
// }
//  document.getElementById("btn1"). value="";
// function sum(){
//     x=document.getElementById("btn1").value += value;
//     y=document.getElementById("btn1").value += value;
//     z=x+y;

// }
// document.getElementById("sum").innerHTML=z;
// // var instance = new sum();
// console.log(instance.sum());



// function clearscreen(){
//     document.getElementById("btn1").value = "";
// }

// function display(value){
//     document.getElementById("btn1").value += value;
// }

//  function perc() {
//      var value = document.getElementById("btn1").value;
//      q = value / 100;
//      document.getElementById("btn1").value= q;

//  }
//  function add(){
//      var x = document.getElementById("btn1").value;
//      var y = document.getElementById("btn1").value;
//      z = x+y;
//      document.getElementsById("btn1").value = z;
//  }
// function calculate() {
//        var p = document.getElementById("btn1").value;
//        var q = eval(p);
//        document.getElementById("btn1").value = q;
//    }



// function perc() {
//     var value = document.getElementById("btn1").value;
//     q = value / 100;
//     document.getElementById("btn1").value= q;

// }
// function add(){
//     var x = document.getElementById("btn1").value;
//     var y = document.getElementById("btn1").value;
//     z = x+y;
//     document.getElementsById("btn1").value = z;

// }
 class cal{
  clearscreen(){
     document.getElementById("btn1").value = "";
 }

  display(value){
     document.getElementById("btn1").value += value;
 }
 calculate(){
     var p = document.getElementById("btn1").value;
     var q = eval(p);
     document.getElementById("btn1").value = q;
 }

 }
  var mycls = new cal();
