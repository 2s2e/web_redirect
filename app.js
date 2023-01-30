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
    

}

document.getElementById("clear").onclick = function(){
    chrome.storage.sync.clear();
}

