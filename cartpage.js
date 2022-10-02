


likedData=[
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/30edd1359639179ab267545062a456d754dfdbac/SAFAVIEH-Handmade-Capri-Ilianka-Wool-Rug.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$35",
        "description": "Name:SAFAVIEH Handmade Capri Ilianka Wool Rug",
        "rating": "Rating:4.5 Star",
        "price":35
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/50de42d7aefa890a8cb16948d26d201b4f6919ca/LUCID-Comfort-Collection-10-inch-Gel-Memory-Foam-Mattress.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$245",
        "description": "Name:LUCID Comfort Collection Firm 10-inch Gel Memory Foam Mattress",
        "rating": "Rating:4.5 Star",
        "price":245
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/e73d21339290da4dbc0977e71f1a15b3667de1d8/Elle-Decor-Lulu-Bent-Metal-Side-Table.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$88",
        "description": "Name:Elle Decor Lulu Round Hourglass Metal Side Table, Small Modern Accent Nightstand",
        "rating": "Rating:3 Star",
        "price":88
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/576a0674d5cb51ff68024dd19bdaa823117b5f76/F.-Scott-Fitzgerald-Sterling-Silver-Throw-Pillow.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$42",
        "description": "Name:F. Scott Fitzgerald Sterling Silver Throw Pillow",
        "rating": "Rating:5 Star",
        "price":42
    }
    
]




viewed=[
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/56c3c9f2f57395f2743760aa725994c8f0666852/SAFAVIEH-Handmade-Capri-Berntraud-Contemporary-Wool-Rug.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$60",
        "description": "Name:SAFAVIEH Handmade Capri Berntraud Contemporary Wool Rug",
        "rating": "Rating:5 Star",
        "price":60
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/6ec30be262d533773c41ac91702cd52b65025de0/Wallniture-Palla-Set-of-4-Ball-Holder%2C-Storage-Rack-for-Basketball%2C-Football%2C-Volleyball%2C-Soccer-Ball.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$29",
        "description": "Name:Wallniture Palla Set of 4 Ball Holder, Storage Rack for Basketball, Football, Volleyball, Soccer Ball",
        "rating": "Rating:4 Star",
        "price":29
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/is/images/direct/46a2619bf7e2515d8d79a4b5e658a5a3f78d02d1/LUCID-Comfort-Collection-10-inch-Luxury-Gel-Memory-Foam-Mattress.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$239",
        "description": "Name:LUCID Comfort Collection 10-inch Luxury Gel Memory Foam Mattress",
        "rating": "Rating:4.7 Star",
        "price":239
    },
    {
        "image": "https://ak1.ostkcdn.com/images/products/17928359/Keter-Capri-80-Gallon-Resin-Deck-Box-768077e8-b25b-420a-a25b-654d2bd6d9f2_320.jpg?impolicy=mediumlow",
        "amt": "Sale Amount:$108",
        "description": "Name:Keter Capri 80 Gallon Resin Deck Box",
        "rating": "Rating:4 Star",
        "price":108
    }
]

let loved=document.getElementById('lovedItems')
let recent=document.getElementById('recentView')

let appendliked=(data)=>{

   
    data.forEach((ele)=>{

        let img=document.createElement('img')
        img.src=ele.image

        let amt=document.createElement('h3')
        amt.innerHTML=ele.amt

        let des=document.createElement('p')
        des.innerHTML=ele.description

        let rating=document.createElement('p')
        rating.innerHTML=ele.rating

        let btn=document.createElement("button")

        btn.innerText='Add To Cart'

        btn.setAttribute('class',"div1")

        btn.addEventListener('click',function(){
            addToCart(ele)
         // console.log(ele)
        })

        let div=document.createElement('div')
        div.append(img,btn,amt,des,rating)

        loved.append(div)
    })
}
appendliked(likedData)


let qty1

let appendrecent=(data)=>{

  //  document.getElementById('recentView').innerHTML=null

    data.forEach((ele,index)=>{

        let img=document.createElement('img')
        img.src=ele.image

        let amt=document.createElement('h3')
        amt.innerHTML=ele.amt

        let des=document.createElement('p')
        des.innerHTML=ele.description

        let rating=document.createElement('p')
        rating.innerHTML=ele.rating

        let btn=document.createElement("button")

        btn.innerText='Add To Cart'

        btn.setAttribute('class',"div1")

        btn.addEventListener('click',function(){
            addToCart1(ele)
          //console.log('ok')
        })

        let div=document.createElement('div')
        div.append(img,btn,amt,des,rating)

        recent.append(div)
    })

    
}
appendrecent(viewed)


let cartArr=JSON.parse(localStorage.getItem("cartPro"))||[]

let totalAmt=localStorage.getItem('amount')||0

let addToCart=(ele)=>{

   cartArr.push(ele)
    localStorage.setItem("cartPro",JSON.stringify(cartArr))
  
    let total=Number(totalAmt)+Number(ele.price)*81.52

     localStorage.setItem('amount',total)
   window.location.reload()


}

let addToCart1=(ele)=>{
    cartArr.push(ele)
     localStorage.setItem("cartPro",JSON.stringify(cartArr))

     let total=Number(totalAmt)+Number(ele.price)*81.52

      localStorage.setItem('amount',total)
   window.location.reload()

 }
 //console.log(totalAmt)
 let a=Math.floor(totalAmt)
 document.getElementById('amtMain').innerText=a
let promo=document.getElementById('promoMain')


let promoApply=document.getElementById('promoApply')

promoApply.addEventListener("click",function(){
    let promoVal=document.getElementById('promoVal')
    if(promoVal.value=="aeiouz"){
        promo.innerText=Math.floor(12/100*a)
        document.getElementById('totalMain').innerText=a-Math.floor(12/100*a)
    }else{
        promo.innerText=0
        alert('please enter valid promocode')
     
    }
})

 document.getElementById('totalMain').innerText=a



function addedCartData(data){

    let cont2=document.getElementById("cont2")
    let imgAppend=document.getElementById('imgAppend')
   // let cont2Main1=document.querySelector(".cont2Main1")
   // cont2.innerHTML=null

    data.forEach((ele,index)=>{
        let img=document.createElement('img')
        img.setAttribute("class",'imgClass')
        img.src=ele.image

        let amt=document.createElement('h3')
        amt.innerHTML=ele.amt

        let des=document.createElement('p')
        des.innerHTML=ele.description

        let rating=document.createElement('p')
        rating.innerHTML=ele.rating

        let btn=document.createElement("button")

        btn.innerText='remove from cart'

        btn.setAttribute('class',"div1")
        btn.addEventListener("click",function(){
            remove(ele,index)
        })

         var select = document.createElement("Select")
    // select.setAttribute("disabled", "")
    var seloption = document.createElement("option")
    seloption.setAttribute("label", "item.qty")
    // ///Debugging..
    var option1 = document.createElement("option")
    option1.setAttribute("value", "1")
    let val1 = document.createTextNode("1")
    option1.appendChild(val1)
    
    var option2 = document.createElement("option")
    option2.setAttribute("value", "2")
    let val2 = document.createTextNode("2")
    option2.appendChild(val2)
    
    var option3 = document.createElement("option")
    option3.setAttribute("value", "3")
    let val3 = document.createTextNode("3")
    option3.appendChild(val3)

    var option4 = document.createElement("option")
    option4.setAttribute("value", "4")
    let val4 = document.createTextNode("4")
    option4.appendChild(val4)
    
    var option5 = document.createElement("option")
    option5.setAttribute("value", "5")
    let val5 = document.createTextNode("5")
    option5.appendChild(val5)
    
    var option6 = document.createElement("option")
    option6.setAttribute("value", "6")
    let val6 = document.createTextNode("6")
    option6.appendChild(val6)
    
    var option7 = document.createElement("option")
    option7.setAttribute("value", "7")
    let val7 = document.createTextNode("7")
    option7.appendChild(val7)
    
    var option8 = document.createElement("option")
    option8.setAttribute("value", "8")
    let val8 = document.createTextNode("8")
    option8.appendChild(val8)
    
    var option9 = document.createElement("option")
    option9.setAttribute("value", "9")
    let val9 = document.createTextNode("9")
    option9.appendChild(val9)
    
    var option10 = document.createElement("option")
    option10.setAttribute("value", "10")
    let val10 = document.createTextNode("10")
    option10.appendChild(val10)
        
    select.append(seloption,option1,option2,option3
        ,option4,option5,option6,option7,option8,option9,option10
      )
  
      select.addEventListener("change", function(event) {
        let qty1 = event.target.value;
        for (var i = 0; i < data.length; i++){
          if (i == index){
            data[i].qty = qty1;
          }
        }
        localStorage.setItem("cartPro",JSON.stringify(data));
        // window.location.href = "cart.html"
        localStorage.setItem('qty',qty1)
     let total=Number(totalAmt)+Number(ele.price)*(qty1-1)*81.52

     localStorage.setItem('amount',total)
     window.location.reload()
     let a=Math.floor(totalAmt)
     document.getElementById('amtMain').innerText=a


      })
    //   iw.append(label, select)


        let div=document.createElement('div')
        div.setAttribute("class","desc")
        div.append(amt,des,rating,select,btn)
        cont2.append(div)
        imgAppend.append(img)

        
    })


}
addedCartData(cartArr)

let remove=(ele,index)=>{
let qtyVal=localStorage.getItem('qty')
    cartArr.splice(index,1)
    localStorage.setItem("cartPro",JSON.stringify(cartArr))
    addedCartData(cartArr)
    //console.log("ok")
    localStorage.setItem("cartPro",JSON.stringify(cartArr))
  
    let total=Number(totalAmt)-Number(ele.price)*81.52*(qtyVal)

     localStorage.setItem('amount',total)
   window.location.reload()
}

let checkout=document.getElementById("checkout")

checkout.addEventListener("click",function(){
    window.location.href="payment.html"
})