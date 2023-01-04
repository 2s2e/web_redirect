

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) { // listener for tab opens
    if (changeInfo.status == 'loading') { // when the page is loading (you can do info.status === 'complete' but you will see the page for a second or two)
        
        const redirect_to_obj = await chrome.storage.sync.get("toKey");
        const redirect_from_obj = await chrome.storage.sync.get("fromKey");

        var redirect_to = redirect_to_obj.toKey;
        var redirect_from = redirect_from_obj.fromKey;

        if(redirect_to.includes("https://")) {
            redirect_to = redirect_to.replace("https://", "");
        }

        console.log(redirect_to);
        console.log(redirect_from);

        //if the url contains reddit.com
        if (tab.url.includes(redirect_from)) {
            chrome.tabs.query({ // change the tab url
                currentWindow: true,
                active: true
            }, function (tab) {
                chrome.tabs.update(tab.id, {
                    url: "https://" + redirect_to 
                });
            });
        }
    }
})