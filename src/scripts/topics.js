import { getTopics } from "./dataAccess.js";

export const Topics = () => {

    const topics = getTopics()


    let html = `
        <ul>
            ${topics.map(allTopicsInListForm).join("")}
        </ul>
    `
    return html
}