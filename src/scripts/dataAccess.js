const applicationState = {
    penPals: []
}
const API = "http://localhost:8088"

export const fetchPenPals = () => {
    return fetch(`${API}/penPals`)
        .then(response => response.json())
        .then(
            (userPenPals) => {
                // Store the external state in application state
                applicationState.penPals = userPenPals
            }
        )
}

export const getPenPals = () => {
    return applicationState.penPals.map(penPal => ({ ...penPal }))
}

const mainContainer = document.querySelector("#container")

export const sendPenPal = (userPenPal) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPenPal)
    }


    return fetch(`${API}/penPals`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}