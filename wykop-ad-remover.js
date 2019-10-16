// ==UserScript==
// @name         WykopAdRemover
// @namespace    https://github.com/Sztachu/Tampermonkey-scripts
// @version      0.2
// @description  wykop.pl - ad remover
// @author       Sztachu
// @match        https://www.wykop.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('#itemsStream li.link.iC > div:not(.dC)').remove();    
    document.querySelector('#dyingLinksBox').remove();
    // prmoto article
    document.querySelector('#itemsStream li.link.iC > div.empty-media').remove();
})();
