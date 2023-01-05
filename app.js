window.onload = async function() {
    console.log("start!");
    
    //get the values from chrome storage, note the await keyword, this is because the get function is asynchronous
    const redirect_to_obj = await chrome.storage.sync.get("toKey");
    const redirect_from_obj = await chrome.storage.sync.get("fromKey");

    //for some reason, the key of the the object is toKey, redirect_to and redirect_from store the text values
    var redirect_to = redirect_to_obj.toKey;
    var redirect_from = redirect_from_obj.fromKey;

    //on startup, make it so that the text boxes are filled with the values from chrome storage
    const toText = document.getElementById("redirect_to");
    const fromText = document.getElementById("redirect_from");

    toText.value = redirect_to;
    fromText.value = redirect_from;

}

document.getElementById("save").onclick = function() {
    const toValue = document.getElementById("redirect_to").value;
    const fromValue = document.getElementById("redirect_from").value;

    /*
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
    */
    // console.log(localStorage["toKey"]);
    // console.log(localStorage["fromKey"]);




    //data is an object: {toKey : "toValue"}
    chrome.storage.sync.get("toKey", function(data) {
        //gets the value of the key "toKey" in the object
        console.log(data.toKey);
    });

    //data is an object: {fromKey : "fromValue"}
    chrome.storage.sync.get("fromKey", function(data) {
        //gets the value of the key "fromKey" in the object
        console.log(data.fromKey);
    });


    chrome.storage.sync.set({ "toKey" : toValue }, function() {});
    chrome.storage.sync.set({ "fromKey" : fromValue }, function() {});


    //same as above
    chrome.storage.sync.get("toKey", function(data) {
        console.log(data.toKey);
    });

    chrome.storage.sync.get("fromKey", function(data) {
        console.log(data.fromKey);
    });

    

}

