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
        
        <button class="button" id="submitRequest">Submit Request</button>
        
        <div class="field">
            <label class="label" for="sentLetter">Semt Letters</label>
            <input type="date" name="sentLetter" class="input" />
        </div>
    
    `
    return html
    
}