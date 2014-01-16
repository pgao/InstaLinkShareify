function sendLink() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var tabUrl = tabs[0].url;
    var newUrl = 'http://www.facebook.com/dialog/send?'
      + 'app_id=713371765353094'
      + '&link=' + tabUrl
      + '&redirect_uri=http://instantgratification.herokuapp.com/';
    console.log('newUrl is ' + newUrl);

    chrome.tabs.create({url: newUrl});
  });
}

document.getElementById('sendButton').addEventListener('click', sendLink);
