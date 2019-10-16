// ==UserScript==
// @name         WykopAdRemover
// @namespace    https://github.com/Sztachu/Tampermonkey-scripts
// @version      0.22
// @description  wykop.pl - ad remover
// @author       Sztachu
// @match        https://www.wykop.pl/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(' #dyingLinksBox, #itemsStream li.link.iC > div:not(.dC), #itemsStream li.link.iC > div.empty-media { display: none !important; } ');
    
    // document.querySelectorAll('#itemsStream li.link.iC > div:not(.dC)').forEach((el)=>el.remove());        
    // document.querySelectorAll('#itemsStream li.link.iC > div.empty-media').forEach((el)=>el.remove());        
    // document.querySelector('#dyingLinksBox').remove();    
})();
