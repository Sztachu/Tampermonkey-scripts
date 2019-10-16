// ==UserScript==
// @name         WykopAdRemover
// @namespace    https://github.com/Sztachu/Tampermonkey-scripts
// @version      0.21
// @description  wykop.pl - ad remover
// @author       Sztachu
// @match        https://www.wykop.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('#itemsStream li.link.iC > div:not(.dC)').forEach((el)=>el.remove());        
    document.querySelectorAll('#itemsStream li.link.iC > div.empty-media').forEach((el)=>el.remove());        
    document.querySelector('#dyingLinksBox').remove();    
})();
