
      
      var countsec=0;
      var countmin=0;
      var count=0; 
      
      function timer(){
            function counter(){
                count ++;
                countsec=count%60;
                countmin=Math.floor(count/60);
                /*timer.html(`${countermin}:${counter}`);*/
                console.log(`${countmin}:${countsec}`);
                document.getElementById('typingDuration').innerHTML=`${countmin}:${countsec} seconds`;
                               
            };
          setInterval(counter, 1000);
      };



      var inputMsg = document.getElementById('inputReturn');
      document.addEventListener("keydown", keypress =>{
          let string=`Your have pressed ${keypress.key} just now\r\n`;
          console.log(string);
          inputMsg.insertAdjacentHTML('afterbegin', string);


      })

      timer();
 

