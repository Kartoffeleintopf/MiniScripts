// ==UserScript==
// @name         NormPr0 @FirstClassBenis
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pr0gramm.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', function (e) {
        //Init
        var head;
        var styleElement;
        var css;

        //Styles
        css = '.item-image-actual{display:block; max-height:85vh; width:auto !important; height:auto !important; max-width: 1052px;}';

        // Config Stylecontainer
        styleElement = document.createElement("style");
        styleElement.type = 'text/css';
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
        } else {
            styleElement.appendChild(document.createTextNode(css));
        }

        head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(styleElement);
    });
})();
