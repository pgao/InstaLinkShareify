function sendLink(tab) {
    var newUrl = 'http://www.facebook.com/dialog/send?'
      + 'app_id=713371765353094'
      + '&link=' + tab.url
      + '&redirect_uri=http://instantgratification.herokuapp.com/';
 	chrome.tabs.create({url: newUrl});
}

chrome.browserAction.onClicked.addListener(sendLink);
