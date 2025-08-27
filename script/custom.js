function customElement(id) {
    return (document.getElementById(id));
}



document.getElementById("card-container").addEventListener("click", function (event) {
    
    if (event.target.className.includes("heart-icon")) {
       
        const heartPointNumber = Number(customElement("heart-point").innerText)
        let updateHeartNumber = heartPointNumber + 1;
        customElement("heart-point").innerText = updateHeartNumber;
    }

})
document.getElementById("card-container").addEventListener("click",function(event){
    // console.log(event.target.className.includes("call-btn"))
    if(event.target.className.includes("call-btn")){
        const btn=event.target;
        // console.log(btn)
        const title=btn.parentNode.parentNode.children[1].children[0].innerText;
        const callNumber=btn.parentNode.parentNode.children[1].children[2].innerText
        // console.log(callNumber)
        // alert(`${title} and ${callNumber}`)
        // console.log(customElement("call-coin").innerText)
        const callCoin=Number(customElement("call-coin").innerText)
        if(callCoin>0){
            alert(`${title} and ${callNumber}`)
            const afterCallCoin=callCoin-20;
            customElement("call-coin").innerText=afterCallCoin;
        }
        else{
            alert("insufficient balance");
        }
    }
})