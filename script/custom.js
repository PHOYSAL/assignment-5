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
        const historyContainer=customElement("history-container");
        // console.log(historyContainer)
        const newDiv=document.createElement("div")
        // newDiv.innerHTML=`
        // <div class="bg-[#D4D6D5] p-5 rounded-lg flex justify-between items-center mb-2">
        //                         <div>
        //                             <h2 class="font-bold">${title}</h2>
        //                             <p class="text-gray-500">${callNumber}</p>
        //                         </div>
        //                         <div>
        //                             <span class="text-gray-500">12:19:32 AM</span>
        //                         </div>
        //                     </div>
        // `
        // historyContainer.appendChild(newDiv)

        
        if(callCoin>0){
            alert(`Calling ${title} ${callNumber}...`)
            const afterCallCoin=callCoin-20;
            customElement("call-coin").innerText=afterCallCoin;

            newDiv.innerHTML=`
        <div class="bg-[#D4D6D5] p-5 rounded-lg flex justify-between items-center mb-2">
                                <div>
                                    <h2 class="font-bold">${title}</h2>
                                    <p class="text-gray-500">${callNumber}</p>
                                </div>
                                <div>
                                    <span class="text-gray-500">2:49 PM</span>
                                </div>
                            </div>
        `
        historyContainer.appendChild(newDiv)
        }
        else{
            alert("You have no sufficient coins. Need 20 coins or more...");
            
        }
    }
    customElement("clear-btn").addEventListener("click",function(){
        customElement("history-container").innerText=""
    });
    
})