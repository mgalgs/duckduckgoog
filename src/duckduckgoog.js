document.body.style.border = "5px solid red";

const pullRipcord = () => {
    const ipt = document.getElementById("search_form_input");
    ipt.value += ' g!';
    ipt.form.submit();
};

browser.commands.onCommand.addListener((command) => {
    console.log("Got command:", command);
    if (command === "pull-ripcord")
        pullRipcord();
});

console.log("HELLO DUCKDUCKGOOG");
