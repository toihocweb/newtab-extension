console.log("content script")


chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender , sendResponse) { 
    console.log(message)
 }