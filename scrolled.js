/*
 * - scrolled.js -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  0.1 (2014-02-12)
 * Requirement : No one, it is a framework-free fonction (ie : You do not need to include any other file in your page such as jQuery)
 * fork me on github : https://github.com/Yappli/scrolled.js (and don't forget to pull request !)
 * */
(function(undefined) // Code in a function to create an isolate scope
{
    'use strict';
    var fn;
    (fn = function(e){
       
        var body = document.getElementsByTagName('body')[0],
            indexOfScrolledClass = body.className.indexOf('scrolled');
        
        if(parseInt(document.documentElement.scrollTop || document.body.scrollTop) > 0)
        {
            if(indexOfScrolledClass == -1)
                body.className += (body.className.length == 0 ? '' : ' ')+'scrolled';
        }
        else
        {
            if(indexOfScrolledClass != -1)
                body.className = body.className.replace('scrolled', '');
        }
        
    })();
    
    window.onscroll = fn;
})();
