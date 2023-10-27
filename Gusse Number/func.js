let range = document.getElementById("range")
let output = document.getElementById("Rvalue");
let updates = document.getElementById("updates");
let text=document.getElementsByClassName("text");


let ClickAudio=new Audio('audio/1.wav')
let WrongAudio=new Audio('audio/2.wav')
let WinAudio=new Audio('audio/3.wav')
let GUAudio=new Audio('audio/4.wav')
let ScrollAudio=new Audio('audio/5.wav')


output.innerHTML = range.value;
range.oninput = function() {
  ScrollAudio.play();
    output.innerHTML = this.value;
  }
  let NewRn=document.getElementById("button3")
  let input1=document.getElementById("inputE");
  let input2=parseInt(input1)
  let count=0;

  NewRn.onclick=function(){
    ClickAudio.play();
    a=Math.round(Math.random()*range.value);
    console.log(a);
    updates.innerHTML=`YOUR NEW NUMBER LIES BETWEEN ====> 0 TO ${range.value}`
    

  }
  let card1=document.querySelector(".innerCard1")
  let card2=document.querySelector(".innerCard2")
  let card3=document.querySelector(".innerCard3")
  let Enter=document.getElementById("button2");
  Enter.onclick=function(){
    ClickAudio.play();
    count++
      console.log(count)
      if(innerWidth>750){
        if(a<parseInt(input1.value)){
          WrongAudio.play()
    
          card1.classList.toggle("is-fliped");
        }
        else if(a>parseInt(input1.value)){
          WrongAudio.play()
          card3.classList.toggle("is-fliped");
        }
        else{
          card2.classList.toggle("is-fliped");
          WinAudio.play();
          updates.innerHTML=`CONGRATULATION !! YOUR SCORE ====> ${parseInt(range.value)-count}`
         }
      }
      else if(innerWidth<751){
        if(a<parseInt(input1.value)){
          WrongAudio.play()
    
          card2.classList.toggle("is2-fliped");
          card2.innerHTML=`   <div class="innerCard2">
          <div class="front_card2"></div>
          <div class="back_card2"><h1 style="text-align: center; font-size: 25px; margin-top: 100px;" class="text">Choose Lesser Number</h1></div>
      </div>`
        }
        else if(a>parseInt(input1.value)){
          WrongAudio.play()
          card2.classList.toggle("is2-fliped");
          card2.innerHTML=`<div class="innerCard2">
          <div class="front_card2"></div>
          <div class="back_card2"><h1 style="text-align: center; font-size: 25px; margin-top: 100px;" class="text">Choose Greater Number</h1></div>
      </div>`
        }
        else{
          card2.classList.toggle("is2-fliped");
          WinAudio.play();
          card2.innerHTML=`<div class="innerCard2">
          <div class="front_card2"></div>
          <div class="back_card2"><h1 style="text-align: center; font-size: 25px; margin-top: 100px;" class="text">Congretulation</h1></div>
      </div>`
       updates.innerHTML=`Congretulation!! <br>YOUR SCORE ====> ${parseInt(range.value)-count}`
        
         }
      }
    
     
    }
    

    let show=document.getElementById("button1");
    show.onclick=function(){
      ClickAudio.play();
      GUAudio.play();
      updates.innerHTML=`YOU LOSE NUMBER IS ====>${a} (Click on > Generate Number < to continue)`
    }



    // music parts------>
  