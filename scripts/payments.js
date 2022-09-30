document.querySelector("#order").addEventListener("click", check);

function check(elem){
    event.preventDefault();
    
    let card = document.getElementById("card-type").value;
    let credit = document.getElementById("credit-input").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("Year").value;
    let code = document.getElementById("secure-code").value;

    if (card === "" || credit === "" || month === "" || year === "" || code ===""){
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

document.getElementById("back-cart").addEventListener("click",function(){
    window.location.href="/cartshow.html"
})