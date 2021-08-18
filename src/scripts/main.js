import { PenPals } from "./penPals.js";
import { fetchPenPals, fetchSentLetters, fetchTopics } from "./dataAccess.js";
import { penPalSociety } from "./penPalSociety.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPenPals().then(
        () => {
            mainContainer.innerHTML = penPalSociety()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged", CustomEvent => {
        render()
    }
)

