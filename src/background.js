"use strict";

const sendPullRipcord = () => {
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, {"command": "pull-ripcord"});
    });
};

browser.commands.onCommand.addListener((command) => {
    if (command === "pull-ripcord")
        sendPullRipcord();
});
