console.log("inside send.js");
    
FB.ui({
    method: 'send',
    link: document.url,
});

console.log("end of send.js");
