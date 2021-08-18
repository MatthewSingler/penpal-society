import { sendPenPal, sendSentLetter, sendTopic } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send") {
        
        const userPenPal = document.querySelector("input[name='userPenPal']").value
        const userSentLetter = document.querySelector("input[name='userSentLetter']").value
        const userTopic = document.querySelector("input[name='userTopic']").value

        const dataToSendToAPI = {
            author: userPenPal,
            recipient: userPenPal,
            sentLetter: userSentLetter,
            topic: userTopic
        }

        sendPenPal(dataToSendToAPI)
        sendSentLetter(dataToSendToAPI)
        sendTopic(dataToSendToAPI)
    }
})


export const mainLetterBody = () => {
   
    let html = `
    
        <div class="field">
            <label class="label" for="letterAuthor">Author</label>
            <input type="text" name="letterAuthor" class="input" />
        </div>
        
        <div class="field">
            <label class="label" for="letterContent">Letter</label>
            <input type="text" name="letterContent" class="input" />
        </div>
        
        <div class="field">
            <label class="label" for="letterTopic">Topic</label>
            <input type="text" name="letterTopic" class="input" />
        </div>
        
        <div class="field">
            <label class="label" for="letterRecipient">Recipient</label>
            <input type="text" name="letterRecipient" class="input" />
        </div>
        
        <button class="button" id="sendLetter">Send</button>
        
        <div class="field">
            <label class="label" for="sentLetter">Sent Letters</label>
            <input type="text" name="sentLetter" class="input" />
        </div>
    
    `
    return html

}