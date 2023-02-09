window.onload = async function() {
    console.log("start!");
    /*//get the values from chrome storage, note the await keyword, this is because the get function is asynchronous
    const redirect_to_obj = await chrome.storage.sync.get(toValue);
    const redirect_from_obj = await chrome.storage.sync.get(fromValue);

    //for some reason, the key of the the object is toKey, redirect_to and redirect_from store the text values
    var redirect_to = redirect_to_obj.toKey;
    var redirect_from = redirect_from_obj.fromKey;*/


}

async function addPair(toUrl, fromUrl) {
    if(toUrl.includes("https://")) {
        toUrl = toUrl.replace("https://", "");
    } 

    if(toUrl.includes(fromUrl)) {
        return "Error: Redirecting to the same page.";
    }

    if(toUrl.length == 0 || fromUrl.length == 0) {
        return "Error: Empty field.";
    }

    if(fromUrl.length < 3) {
        return "Error: Redirecting from a page with less than 3 characters.";
    }

    var storageItems = await chrome.storage.sync.get(["redirects"]);
    var all = storageItems.redirects;

    if(all != null) {
        for (const [key, val] of Object.entries(all)) { 
            if(toUrl.includes(key)) {
                return "Error: Redirecting to or from a page that is already being redirected.";
            }
        }    
    }
   
    // console.log("Chrome.storage.sync.get():")
    // console.log(await chrome.storage.sync.get());
    // console.log("Chrome.storage.sync.get(\"redirects\"):")
    // console.log(await chrome.storage.sync.get(["redirects"]));
    // console.log("Chrome.storage.sync.get(\"redirects\").redirects:")
    // console.log(await chrome.storage.sync.get("redirects").redirects);

    chrome.storage.sync.get(["redirects"], function(result) {
        
        if(result.redirects == null) {
            result.redirects = {};
        }

        result.redirects[fromUrl] = toUrl;

        chrome.storage.sync.set({redirects : result.redirects});
    });

    return "Success: Redirect added.";
}

document.getElementById("save").onclick = async function() {
    var toValue = document.getElementById("redirect_to").value;
    var fromKey = document.getElementById("redirect_from").value;

    if(toValue.includes("https://")) {
        toValue = toValue.replace("https://", "");
    } 

    var message = await addPair(toValue, fromKey);

    if(message.includes("Error")) {
        document.getElementById("status").innerHTML = message;
        document.querySelector("#status").style.color = "red";
    }
    else {
        document.getElementById("status").innerHTML = message;
        document.querySelector("#status").style.color = "green";
    }

}

document.getElementById("clear").onclick = function(){
    chrome.storage.sync.remove(["redirects"]);
}

