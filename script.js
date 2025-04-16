document.addEventListener("DOMContentLoaded", () => {
    const agendaList = document.getElementById("agenda-list");
    const agendaItems = [
        "Chatroulette",
        "AI Tools - a chance to share experiences or what tools we've been using or learning about (Cursor, VS Code Agent mode, Github CoPilot, etc)",
        "API access to AI services: Two use cases:\n    a. 'Bring your own model' tools where we integrate with VS Code, but we can point it to the latest and greatest model from whatever provider we want.\n    b. Development (e.g. AI Components) - our current dev work is OpenAI specific because we have easy access to those models. What if we want to use one of the other services?",
        "Agent2Agent (A2A) Protocol - Introduction to the new Agent2Agent (A2A) protocol",
        "Exemplar project updates",
        "Any Other Business"
    ];

    agendaItems.forEach(item => {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(item));
        agendaList.appendChild(listItem);
    });

    agendaList.addEventListener("change", (event) => {
        if (event.target.type === "checkbox") {
            const listItem = event.target.parentElement;
            listItem.style.backgroundColor = event.target.checked ? "blue" : "white";
        }
    });
});