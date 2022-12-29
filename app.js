document.getElementById("save").onclick = function() {
    var toValue = document.getElementById("redirect_to").value;
    var fromValue = document.getElementById("redirect_from").value;

    // const toData = chrome.storage.sync.get(["toKey"]).then((result) => {
    //     console.log("Value currently is " + result.key);
    //   });

    // const fromData = chrome.storage.sync.get(["fromKey"]).then((result) => {
    //     console.log("Value currently is " + result.key);
    //   });

    // console.log(toData);
    // console.log(fromData);

    // chrome.storage.sync.set({ toKey : toValue }).then(() => {
    //     console.log("toValue is set to " + toValue);
    // });

    // chrome.storage.sync.set({ fromKey : fromValue }).then(() => {
    //     console.log("fromValue is set to " + fromValue);
    // });
    console.log(localStorage["toKey"]);
    console.log(localStorage["fromKey"]);

    localStorage["toKey"] = toValue;
    localStorage["fromKey"] = fromValue;

    console.log(localStorage["toKey"]);
    console.log(localStorage["fromKey"]);
}

