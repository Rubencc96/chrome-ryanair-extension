"use strict";
chrome.action.onClicked.addListener((tab) => {
    if (tab.id !== undefined) { // Aseguramos que tab.id tiene un valor
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    }
    else {
        console.error("El ID de la pestaña no está disponible.");
    }
});
