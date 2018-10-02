// ==UserScript==
// @name         Pr0 No Username @Raidrusher
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Replace your username with "pr0gramm"
// @author       You
// @include      http://pr0gramm.com/*
// @include      https://pr0gramm.com/*
// @grant        none
// @require      http://padolsey.github.io/findAndReplaceDOMText/src/findAndReplaceDOMText.js
// ==/UserScript==

(function() {
    'use strict';

    var user = 'none';

    var getText = function () {
        var element = document.body;
        return element.innerText || element.textContent;
    };

    var noUsername = function () {
        if(user === 'none'){
            var username = document.getElementById('user-profile-name');
            if(username !== null){
                var inner = username.innerHTML;
                if(inner !== 'pr0gramm'){
                    user = inner;
                    username.innerHTML = 'pr0gramm';
                }
            }
        } else {
            if(getText().indexOf(user) !== -1){
                findAndReplaceDOMText(document.body, {
                    find: user,
                    replace: 'pr0gramm'
                }
                                     );
                console.log(true, user);
            }
        }
    };

    var changeUrl = function () {
        var url = window.location.href;
        if(url.indexOf(user) !== -1){
            url = url.replace(user, "pr0gramm");
            window.history.pushState("", "pr0gramm.com", url);
        }
    };

    var start = function () {
        noUsername();
        changeUrl();
        window.requestAnimationFrame(start);
    };

    window.requestAnimationFrame(start);
})();