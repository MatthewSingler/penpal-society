import { getPenPals, getSentLetters, getTopics } from "./dataAccess.js";

//trying to iterate through sentLetters to get the author id and then match the author id to penPal id in order to say who the author is.
export const allAuthors = (penPal) => {
    const authors = sentLetters.map(authorId => {
        return `<li>${sentLetters.authorId}</li>`
    })
        for (const author of authors) {
            if (sentLetters.authorId === penPal.id) {
                return author
            }
            
        }
    
    }
    allAuthors()
//experimenting with another way to do the same thing
export const PenPals = () => {
    const penPals = getPenPals()
    
    let html = ""
    html += "<select id='authors'><option value='0'>Author"
    const authorChoices = penPals.map(penPal => {
        return `<option value="${penPal.id}">${penPal.name}</option>`
    }).join("")
    html += authorChoices
    html += "</select>"
}

export const allRecipientsInListForm = (penPal) => {
    return `<li>${penPal.name} id="recipient--${penPal.id}"></li>`
}

/*export const PenPals = () => {
    const recipients = getPenPals()

    let html = `
        <ul>
            ${penPals.map(allRecipientsInListForm).join("")}
        </ul>
    `
    return html
}*/