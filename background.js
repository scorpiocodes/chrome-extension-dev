chrome.runtime.onInstalled.addListener( () => {
    console.log("installed");
})

chrome.bookmarks.onCreated.addListener( () => {
    alert("HURRAHHH! Bookmark saved succcesfully!!");
})