
 document.querySelector("#form1").addEventListener("submit", signUp);
 var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
 var flag = false;
    let username= JSON.parse(localStorage.getItem("username"))||[];
 
 
 function signUp(event) {
   
  event.preventDefault();
  console.log(1)
   let email = document.querySelector("#email").value;
   let c_password = document.querySelector("#create-pass").value;
   let password = document.querySelector("#confirm-pass").value;
 //   localStorage.setItem("userName", username);
   let userData = {
     userEmail: email,
     user_c_password: c_password,
     userPassword: password,
   };
   if (userDataBase.length != 0) {
     let arr = JSON.parse(localStorage.getItem("userDataBase")) || [];
     for (let i = 0; i < arr.length; i++) {
       if (arr[i].userEmail === email) {
         flag = true;
         break;
       }
     }
     if (flag) {
       alert("user already exists!!!");
     } else {
       userDataBase.push(userData);
       localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
       alert("Signup Successful!!!");
       window.location.href = "#";
       document.querySelector("#email").value = "";
       document.querySelector("#create-pass").value = "";
       document.querySelector("#confirm-pass").value = "";
     }
   } else {
     userDataBase.push(userData);
     localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
     alert("Signup Successful!!!");
     window.location.href = "#";
     document.querySelector("#email").value = "";
     document.querySelector("#create-pass").value = "";
     document.querySelector("#confirm-pass").value = "";
   }
   
 }
 
 //  signin part start
  document.querySelector("#form2").addEventListener("submit", login);
 // let flag = false;
 // let isLogin = localStorage.getItem("isLogin") || false;
 function login(event) {
   event.preventDefault();
   let email = document.querySelector("#sign-in-email").value;
   let password = document.querySelector("#password").value;
 
   let arr = JSON.parse(localStorage.getItem("userDataBase"));
   if (email == "admin" && password == "admin") {
     alert("Admin User!!!");
     window.location.href = "index.html";
   } else {
     for (let i = 0; i < arr.length; i++) {
       if (
         arr[i].userEmail === email  &&
         arr[i].userPassword === password
       ) {
         var name=email[0]+email[1]+email[2]+email[3]+email[4]+email[5]+email[6]+email[7]+email[8]
      
         username.push(name)
         localStorage.setItem("username",JSON.stringify(username));
        //  document.getElementById("H-username").innerHTML=username
 
          flag = true;
         
         alert('Login Success');
         setTimeout(()=>{
         window.location.href = "/index.html"
         },1000)
         
         break;
       }
     }
     if (flag == false) {
       alert("unregistered user");
       
      // isLogin = false;
      // localStorage.setItem("isLogin", "false");
     } 
    // else {
     //   console.log("registered user");
     //   document.querySelector("#username").value = "";
     //   document.querySelector("#password").value = "";
     //   alert("Login Successful!!!");
     //   isLogin = true;
     //   localStorage.setItem("isLogin", "true");
     //   window.location.href = "Landing.html";
     // }
   }
 }
 
 
 
