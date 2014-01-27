console.log("inside fbinit.js");

// var root = document.createElement("div");
// root.setAttribute("id", "fb-root");
// document.body.appendChild(root);

window.fbAsyncInit = function() {
    console.log("async init");

    // FB._domain = {
    //     api: 'https://api.facebook.com/',
    //     cdn: 'https://s-static.ak.fbcdn.net/',
    //     www: 'https://www.facebook.com/'
    // }

    FB.init({
        appId      : '713371765353094',
        status     : true,
        xfbml      : true
    });

    console.log("init done");

    FB.getLoginStatus(function(response) {
        console.log("get login status");
        FB.ui({
            method: 'send',
            link: document.url,
        });
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

console.log("end of fbinit.js")
