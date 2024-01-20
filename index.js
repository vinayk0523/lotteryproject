var count=0;
var startgame = [];

function resetPage() {
  location.reload(); 
}

function checkResult() { 
    if (count==0){
    var usernumber = parseInt(document.getElementById("input").value);
    
    if( usernumber >= 100  || usernumber <= 0){
        alert('enter a number between 1 and 99');
        return;
    }

   startgame.push(usernumber);

   for (var i = 0; i < 9; i++) {
    var generatednumbers = Math.floor(Math.random()*100); 
    startgame.push(generatednumbers);
}  

startgame.sort();
   
if(startgame[count]==usernumber){
    alert("CONGRATS YOU WON THE GAME");
}else{
    alert("YOU LOSE, TRY AGAIN");
}



count++;
    }else{  
        if(count>9){
            alert(' Better Luck Next Time');
            const erase=document.getElementById("input");
            erase.value='';
            return;
        }
        var usernumber = parseInt(document.getElementById("input").value);

       
        if(startgame[count]==usernumber){
            alert("CONGRATS YOU WON THE GAME");
        }else{
            alert("YOU LOSE, TRY AGAIN");
        }
        count++;
      
   }   
}


// METHOD 2 PROBABILITY:-

//var win=0;
//var lose=0;

// function checkResult() { 
//   if (count==0){
//     var usernumber = parseInt(document.getElementById("numberInput").value);
  
//     if( usernumber >= 100  || usernumber <= 0){
//         alert('enter a number between 1 and 99');
//         return;
//     }


// if (Math.random() <= 0.1) {

//   alert("CONGRATS YOU WON THE GAME");
//   win++;
// } else {
//   alert("YOU LOSE, TRY AGAIN");
//   lose++;
// }

// count++;
//   }else{  
//       if(count>9){
//           alert(' Better Luck Next Time');
//           const erase=document.getElementById("input");
//           erase.value='';
//           return;
//       }
//     if(lose ==9){
//       alert("CONGRATS YOU WON THE GAME");
//     }

//      if (win == 1){
//       alert("YOU LOSE, TRY AGAIN");   
      
//      }else{
//       if (Math.random() <= 0.1) {
          
//           alert("CONGRATS YOU WON THE GAME");
//           win++;
//         } else {
//           alert("YOU LOSE, TRY AGAIN");
//           lose++;
//         }        
//       } 
//       count++;

//  }   
// }