const pullRipcord = () => {
    const ipt = document.getElementById("search_form_input") || document.getElementById("searchbox");
    ipt.value += ' g!';
    ipt.form.submit();
};

browser.runtime.onMessage.addListener(request => {
    switch (request.command) {
    case "pull-ripcord":
        pullRipcord();
        break;
    default:
        console.log("Bad request:", request);
        break;
    }
});
