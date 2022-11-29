const buttons = document.querySelectorAll('button');
let ans = "";
let buttonSound = new Audio('s.wav');

Array.from(buttons).forEach((button)=> {
     button.addEventListener( 'click' ,(e)=>{
      buttonSound.play();
      if(e.target.innerHTML=='='){
         ans=eval(ans);
         document.querySelector('input').value=ans;

      }
      else if(e.target.innerHTML=='C'){
         ans="";
         document.querySelector('input').value=ans;

      }
      else if(e.target.innerHTML=='CE'){
         ans=document.querySelector('input').value;
         ans = ans.slice(0,ans.length-1);
         document.querySelector('input').value=ans;
      }
      else{
         ans = ans + e.target.innerHTML;
         document.querySelector('input').value=ans;
      }
     })
})
