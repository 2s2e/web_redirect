window.onload = async function() {
    console.log("start!");
    /*//get the values from chrome storage, note the await keyword, this is because the get function is asynchronous
    const redirect_to_obj = await chrome.storage.sync.get(toValue);
    const redirect_from_obj = await chrome.storage.sync.get(fromValue);

    //for some reason, the key of the the object is toKey, redirect_to and redirect_from store the text values
    var redirect_to = redirect_to_obj.toKey;
    var redirect_from = redirect_from_obj.fromKey;*/


}

document.getElementById("save").onclick = function() {
    var toValue = document.getElementById("redirect_to").value;
    var fromKey = document.getElementById("redirect_from").value;

    if(toValue.includes("https://")) {
        toValue = toValue.replace("https://", "");
    } 

    chrome.storage.sync.set({ [fromKey] : toValue }, function() {});
    

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



    /*
    //data is an object: {toKey : "toValue"}
    chrome.storage.sync.get("toKey", function(data) {
        //gets the value of the key "toKey" in the object
        console.log(data.toKey);
    });

    //data is an object: {fromKey : "fromValue"}
    chrome.storage.sync.get("fromKey", function(data) {
        //gets the value of the key "fromKey" in the object
        console.log(data.fromKey);
    });*/


    

    /*
    //same as above
    chrome.storage.sync.get("toKey", function(data) {
        console.log(data.toKey);
    });

    chrome.storage.sync.get("fromKey", function(data) {
        console.log(data.fromKey);
    });

    chrome.storage.sync.get(null, function(data) {
        for (key in data) {
           // console.log(items.toKey);
        }
     });
*/
}

