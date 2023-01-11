

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) { // listener for tab opens
    if (changeInfo.status == 'loading') { // when the page is loading (you can do info.status === 'complete' but you will see the page for a second or two)
        

        //get the values from chrome storage, note the await keyword, this is because the get function is asynchronous
        const all = await chrome.storage.sync.get();
        for (const [key, val] of Object.entries(all)) {

            const keys = key;
            const vals = val;

            if (tab.url.includes(keys)) {
                chrome.tabs.query({ // change the tab url
                    currentWindow: true,
                    active: true
                }, function (tab) {
                    chrome.tabs.update(tab.id, {
                        url: "https://" + vals 
                    });
                });
            }
            
        }
    }
})