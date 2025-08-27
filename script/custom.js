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