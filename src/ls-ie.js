// Copyright themirrazz 2025. All rights reserved.
(function (OnCookies) {
    if(!window.localStorage) {
        var lsel = document.getElementById('LocalStorage');
        lsel.removeAttribute('id'); // don't save to localStorage.
        lsel.style.behavior = "url('#default#userData')";
        // if not IE
        if(typeof lsel.load == 'undefined' || typeof lsel.save == 'undefined') {
            // The cookies will handle it for us
            return false;
        }
        lsel.load('themirrazzls'); // load our storage
        window.localStorage = {
            setItem: function (key, value) {
                lsel.setAttribute(key, value);
                lsel.save('themirrazzls');
                return true;
            },
            getItem: function (key) {
                return lsel.getAttribute(key);
            },
            removeItem: function (key) {
                lsel.removeAttribute(key);
                lsel.save('themirrazzls');
                return true;
            }
        };
    }
})();
