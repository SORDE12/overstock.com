document.querySelector("#order").addEventListener("click", check);


function check(elem){
    event.preventDefault();
    let email=document.getElementById("email").value;
    let f_name=document.getElementById("f_name").value;
    let l_name=document.getElementById("l_name").value;
    let company=document.getElementById("company").value;
    let address=document.getElementById("address").value;
    let c_name=document.getElementById("c_name").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let zip=document.getElementById("zip").value;
    let mobile=document.getElementById("phone").value;
    


    let card = document.getElementById("card-type").value;
    let credit = document.getElementById("credit-input").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("Year").value;
    let code = document.getElementById("secure-code").value;

    if (card === "" || credit === "" || month === "" || year === "" || code ==="" || email=="" || f_name==""||l_name==""||company==""||address==""||c_name==""||city==""||
    state==""||zip==""||mobile==""){
        alert("Invalid credentials")            
        
    }

    else{
        myfun(event)

    }

}

function myfun(event){
    event.preventDefault();
    var otp = prompt("Enter OTP");
    if(otp === "1234"){
        window.setTimeout(function() {
            window.location.href = "final-page.html";
        }, 3000);
    }
    else{
        alert("Please enter a valid OTP")
    }
}

// document.getElementById("back-cart").addEventListener("click",function(){
//     window.location.href="/cartshow.html"
// })





