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



let totalAmt=localStorage.getItem('amount')||0


let suntot=document.getElementById("sub_total");
suntot.innerText=Math.floor(totalAmt);


let shipping = document.getElementById("shipping");
let c=Math.floor(totalAmt*1/100);
shipping.innerText=c;


let tax = document.getElementById("tax");
let a=Math.floor(totalAmt*18/100);
tax.innerText=a;

let loss = document.getElementById("loss");
let b=Math.floor(totalAmt*5/100);
loss.innerText=b;

let d=a+b+c+Math.floor(totalAmt)
console.log(d)

let total = document.getElementById("o_total");
total.innerText=Math.floor(d)



// <div id="value">
// <p id="sub_total">1</p>
// <p id="shipping">2</p>
// <p id="tax">3</p>
// <p id="loss">4</p>
// <h3 id="o_total">5</h3>

// </div>