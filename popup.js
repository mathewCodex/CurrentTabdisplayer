"use-strict";
// Function that get the current Tab from chrome
// On click event to trigger the function once the content is loaded
document.addEventListener('DOMContentLoaded', function(){
    //get the current to display in the markup on click
    document.getElementById("getCurTab").addEventListener('click', function(){
        //using chrome APi to query our tab and to display the content in our HTML...
        chrome.tabs.query({active: true, currentWindow:true},
            function (tabs){
                const tab = tabs[0];
                const title = tab.title;
                document.getElementById("curTabTitle").textContent = 'Current Tab Title: ' + title;
            })
    });
})