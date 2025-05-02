let historyArray = [];

const loadFromLocalStorage = () => {
    let data = localStorage.getItem("history");
    if (data) {
        historyArray = JSON.parse(data);
    } else {
        historyArray = [];
    }
    return historyArray;
};

const addToHistoryArray = (historyObject) => {
    historyArray.push(historyObject);
    localStorage.setItem("history", JSON.stringify(historyArray));
};

const removeFromHistoryArray = (index) => {
    historyArray.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(historyArray));
};
