// References to elements
const guestbookContainer = document.querySelector(".guestbook-container")
// Add event listeners
window.addEventListener("DOMContentLoaded", getGuestbookContent)
// Constructor for form data objects STARTS
function formDataObject(name, message, funFact){
    this.name = name;
    this.message = message;
    this.funFact = funFact;
}
// Constructor for form data objects ENDS



function getGuestbookContent(e) {
    
    const XHR = new XMLHttpRequest()
    XHR.open("POST", "/guestbook", true);
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send()
    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            console.log(XHR.responseText);
            const responseAsArray = JSON.parse(XHR.responseText)
            // console.log(`vastauksen tyyppi on: ${typeof XHR.responseText}`);
            // console.log(`konversion jälkeen: ${typeof responseAsArray}`);
            // console.log(`tässä seon:${responseAsArray[0].message}`);
            for (let i = 0; i < responseAsArray.length; i++) {
                console.log(i);
                const guestbookItem = document.createElement("div")
                guestbookItem.classList.add("guestbook-item")
                guestbookItem.textContent = `Nimi: ${responseAsArray[i].name} | Viesti: ${responseAsArray[i].message} | Hauska fakta itsestäsi: ${responseAsArray[i].funFact}`
                guestbookContainer.insertAdjacentElement("beforeend", guestbookItem)
            }
        }
    }
    XHR.onerror = () => {
        console.error("Pyyntö epäonnistui!")
    }
}

