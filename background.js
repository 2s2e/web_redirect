

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { // listener for tab opens
    if (changeInfo.status == 'loading') { // when the page is loading (you can do info.status === 'complete' but you will see the page for a second or two)
        
        //if the url contains reddit.com
        if (tab.url.includes("reddit.com")) {
            chrome.tabs.query({ // change the tab url
                currentWindow: true,
                active: true
            }, function (tab) {
                chrome.tabs.update(tab.id, {
                    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                });
            });
        }
    }
})