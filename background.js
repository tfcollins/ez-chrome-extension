function onRequest(request, sender, callbackOfContentScript) {
    chrome.storage.sync.get(null, function(items){
        callbackOfContentScript(items);
    });
    return true;
}
chrome.runtime.onMessage.addListener(onRequest);
