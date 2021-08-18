import { getPenPals, getSentLetters, getTopics } from "./dataAccess.js";

export const allAuthorsInListForm = (penPalAuthor) => {
   const sentLetters = getSentLetters()
    for (const author of sentLetters) {
        if (penPal.id === author.authorId) {
            penPalAuthor = author
            return `<li>${penPal.name} id="author--${penPal.id}"></li>`
        }
    }

    allAuthorsInListForm()
}

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