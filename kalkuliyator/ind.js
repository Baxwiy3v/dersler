var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var result = document.getElementById("result");

add.addEventListener("click", function() {
    
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var c = a + b;
    
    result.textContent = c;
  });


  sub.addEventListener("click", function() {

  

    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var c = a - b;
    
    result.textContent = c;

   });
   div.addEventListener("click", function() {
  
     if(num2===0){
        alert("olmaz")
     }
     else{

        var a = parseFloat(num1.value);
        var b = parseFloat(num2.value);
        var c = a / b;
        
        result.textContent = c;
     }
    

   });
   mul.addEventListener("click", function() {

  

    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var c = a * b;
    
    result.textContent = c;

   });


   
    
    
   
  
     
 