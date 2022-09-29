
   //2.paytm


   let openPopup=document.querySelector("#wallet1");
   let walletcloseBtn=document.querySelector(".wallet-close-btn");
   
   openPopup.addEventListener("click",function(){
       document.body.classList.add("walletPaytm1-active")
   })
   
   walletcloseBtn.addEventListener("click",function(){
       document.body.classList.remove("walletPaytm1-active")
   })
   
   
   let time=30;
   let countdown=document.getElementById("countdown")
   
   let a=setInterval(updatcount,500)
   
   function  updatcount(){
       let minutes=Math.floor(time/60)
   
       let sec=time%60
   
       countdown.innerHTML=`${minutes}:${sec}`;
       time-- ;
       if(sec===0){
        clearInterval(a);
        alert("time ended retry again")
       }
         
   }

   let paytmverify=document.getElementById("paytmverify")

   paytmverify.addEventListener("click" ,subpaytm)

     function subpaytm(){
        let userpass=document.querySelector(".userpass").value
        if(userpass.length<1){
            alert("please Enter Valid Data")
        }else{
            alert("Payment done successfully")
            window.location.href="homepage.html"
        }
        
     }
