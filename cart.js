const productContainer =  document.getElementById("product-box")
productContainer.addEventListener("click", function(e){
    if(e.target.className.includes("call-btn")){
        const callButton = e.target ;
        
        const serviceName = callButton.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerText
        // console.log(serviceName)
        const hotlineNumber = callButton.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText
        console.log(hotlineNumber)
    }
})