const setup = () => {
    document.getElementById("buttonGo").addEventListener("click", goToSite);
    document.getElementById("sortButton").addEventListener("click", sortHistoryByTitle);
    let previousHistory = loadFromLocalStorage();
    previousHistory.forEach((item, index) => addHistoryItem(item, index));
};

const goToSite = () => {
    let searchbar = document.getElementById("searchbar");
    let input = searchbar.value.trim();

    if (!input.startsWith("/")) {
        alert("Ongeldig commando.");
        return;
    }

    let prefix = input.slice(0, 2);
    let query = input.slice(2).trim();

    let title = "", url = "";

    switch (prefix) {
        case "/g":
            title = "Google";
            url = "https://www.google.com/search?q=" + encodeURIComponent(query);
            break;
        case "/y":
            title = "Youtube";
            url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
            break;
        case "/x":
            title = "X (Twitter)";
            url = "https://x.com/hashtag/" + encodeURIComponent(query);
            break;
        case "/i":
            title = "Instagram";
            url = "https://www.instagram.com/explore/tags/" + encodeURIComponent(query) + "/";
            break;
        default:
            alert("Onbekende prefix. Gebruik /g, /y, /x of /i.");
            return;
    }

    let historyObject = {
        title: title,
        text: query,
        url: url
    };

    addToHistoryArray(historyObject);
    addHistoryItem(historyObject, historyArray.length - 1);
    window.open(url, "_blank");
    searchbar.value = "";
};

const addHistoryItem = ({ title, text, url }, index) => {
    let container = document.querySelector(".history-container");

    let item = document.createElement("div");
    item.className = "history-item";

    switch (title) {
        case "Google": item.style.backgroundColor = "#4285F4"; break;
        case "Youtube": item.style.backgroundColor = "#FF0000"; break;
        case "Instagram": item.style.backgroundColor = "#C13584"; break;
        case "X (Twitter)": item.style.backgroundColor = "#1DA1F2"; break;
        default: item.style.backgroundColor = "#777";
    }

    let titleEl = document.createElement("h3");
    titleEl.textContent = title;

    let desc = document.createElement("p");
    desc.textContent = text;

    let btnGo = document.createElement("button");
    btnGo.textContent = "Go!";
    btnGo.className = "history-button";
    btnGo.addEventListener("click", () => window.open(url, "_blank"));

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Verwijder";
    btnDelete.className = "history-button";
    btnDelete.style.marginLeft = "10px";
    btnDelete.style.backgroundColor = "darkred";
    btnDelete.style.color = "white";
    btnDelete.addEventListener("click", () => {
        removeFromHistoryArray(index);
        container.innerHTML = "";
        loadFromLocalStorage().forEach((item, i) => addHistoryItem(item, i));
    });

    item.appendChild(titleEl);
    item.appendChild(desc);
    item.appendChild(btnGo);
    item.appendChild(btnDelete);

    container.appendChild(item);
};

const sortHistoryByTitle = () => {
    let sorted = [...historyArray].sort((a, b) => a.title.localeCompare(b.title));
    document.querySelector(".history-container").innerHTML = "";
    sorted.forEach((item, i) => addHistoryItem(item, i));
};

window.addEventListener("load", setup);
