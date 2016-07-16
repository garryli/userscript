// ==UserScript==
// @name        Pocket-goto-Original
// @namespace   li.garry
// @description Opens the original instead of the pocket View!
// @include     http://getpocket.com/*
// @include     https://getpocket.com/*
// @version     1
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){        
        var style = $('<style> .original_new { font-weight: bold; color: green !important; } .original_new:hover {font-size: 1.2em !important; } </style>');
        $('html > head').append(style);
        
        $(document).on('mouseover', '.item_content', function() {
            var $this = $(this);
            
            if ($this.hasClass('original_converted')) {return;}
            
            var $originalLink = $this.find('.original_url');
            
            var url = $originalLink.attr('href');
            var originalUrl = decodeURIComponent(url.replace("https://getpocket.com/redirect?url=", ""));
            originalUrl = originalUrl.replace(/&formCheck=.*$/, '');
            console.log(originalUrl);
            
            $originalLink.attr('href', originalUrl);
            $originalLink.addClass('original_new');
            $this.addClass('original_converted');
        });
    });
})();
