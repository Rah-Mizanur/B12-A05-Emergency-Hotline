function getElement(id) {
    const element = document.getElementById(id)
    return element
}

const historyContainer = getElement("call-history-container")

const cartContainer = getElement("dialer-box")
cartContainer.addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {

        const coinCount = getElement("coin").innerText

        if (coinCount < 20) {
            alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            return
        }

        const currentCoinCount = Number(coinCount) - Number(20)
        getElement("coin").innerText = currentCoinCount;

        const callButton = e.target;

        const serviceName = callButton.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].innerText
        // console.log(serviceName)
        const hotlineNumber = callButton.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText
        // console.log(hotlineNumber)
        const callTime = new Date().toLocaleTimeString()
        // console.log(callTime)

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

        historyContainer.append(newCart)
        const alertMessage = `📞 Calling ${serviceName} ${hotlineNumber}...`
        alert(alertMessage)
        //  console.log(cartContainer)
    }
    if (e.target.className.includes("copy-button")) {
        const copyCount = getElement("copy-count").innerText
        const currentCopyCount = Number(copyCount) + Number(1)
        getElement("copy-count").innerText = currentCopyCount;
        const copyButton = e.target;
        let hotlineNumber = copyButton.parentNode.parentNode.childNodes[3].childNodes[3].childNodes[1].innerText
        navigator.clipboard.writeText(hotlineNumber)
        const message = `নম্বর কপি হয়েছে :${hotlineNumber}`
        alert(message)
    }
    if (e.target.className.includes("fa-heart")) {
        const heartCount = getElement("heart").innerText

        const currentHeartCount = Number(heartCount) + Number(1)
        getElement("heart").innerText = currentHeartCount
    }
})


const clearHistoryButton = getElement("clear-btn")
clearHistoryButton.addEventListener("click", function () {
    historyContainer.innerHTML = ""
})