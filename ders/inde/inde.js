      
       var secret = Math.floor(Math.random() * 100) + 1;
       
       function check() {
           
           var input = document.getElementById("input");
           var guess = input.value;
         
           var message = document.getElementById("message");
           
           if (guess >= 1 && guess <= 100) {
              
               if (guess < secret) {
                   
                   message.innerHTML = "daha böyük ədəd daxil edin";
               } else if (guess > secret) {
                   
                   message.innerHTML = "daha kiçik ədəd daxil edin";
               } else {
                  
                   message.innerHTML = "Təbriklər, ədədi tapdinz";
               }
            } else
             {
               
               message.innerHTML = " 1 ilə 100 arasinda bir ədəd elave ele";
             }}
