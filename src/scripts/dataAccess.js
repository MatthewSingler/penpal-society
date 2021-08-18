const applicationState = {
    penPals: [],
    sentLetters: [],
    topics: []
}
const API = "http://localhost:8088"

export const fetchPenPals = () => {
    return fetch(`${API}/penPals`)
        .then(response => response.json())
        .then(
            (userPenPals) => {
                applicationState.penPals = userPenPals
            }
        )
}

export const fetchSentLetters = () => {
    return fetch(`${API}/sentLetters`)
        .then(response => response.json())
        .then(
            (userSentLetters) => {
                applicationState.sentLetters = userSentLetters
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (userTopics) => {
                applicationState.topics = userTopics
            }
        )
}


export const getPenPals = () => {
    return applicationState.penPals.map(penPal => ({ ...penPal }))
}
export const getSentLetters = () => {
    return applicationState.sentLetters.map(sentLetter => ({ ...sentLetter}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
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
    

    export const sendSentLetter = (userSentLetter) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userSentLetter)
        }
        return fetch(`${API}/sentLetters`, fetchOptions)
            .then(response => response.json())
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })

    }

        export const sendTopic = (userTopic) => {
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userTopic)
            }
            return fetch(`${API}/topics`, fetchOptions)
                .then(response => response.json())
                .then(() => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                })

        }
    