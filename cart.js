

const productContainer =  document.getElementById("product-box")
productContainer.addEventListener("click", function(e){
    if(e.target.className.includes("call-btn")){
        const callButton = e.target ;
        
        const serviceName = callButton.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerText
        // console.log(serviceName)
        const hotlineNumber = callButton.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText
        console.log(hotlineNumber)
        const callTime = new Date().toLocaleTimeString()
        console.log(callTime)

        const newCart = document.createElement("div")
        newCart.innerHTML = ` <div id="call-history" class="add-history flex justify-between bg-green-100 p-2 rounded-xl items-center ">
                        <div class="flex flex-col gap-2">
                            <h1 class="text-xl font-medium">
                                ${serviceName}
                            </h1>
                            <p class="text-xl font-medium"> ${hotlineNumber}</p>
                        </div>
                        <div class="text-lg font-medium"> ${callTime}</div>
                    </div>`
         const cartContainer = document.getElementById("add-cart-container")
         cartContainer.append(newCart) 
        const alertMessage = `📞 Calling ${serviceName} ${hotlineNumber}...`
         alert(alertMessage)
        //  console.log(cartContainer)
    }
})