import { getPenPals } from "./dataAccess.js";

export const allAuthorsInListForm = (author) => {
    return `<li>${author.name} id="author--${author.id}"></li>`

}

export PenPals = () => {
const penPals = getPenPals ()
}