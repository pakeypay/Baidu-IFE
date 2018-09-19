window.intercomSettings = {
    app_id: 'av16vnft',
    language_override: 'zh-CN'
};
/* Replace 'APP_ID' with your app ID */
(function() {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', intercomSettings);
    } else {
        var d = document;
        var i = function() {
            i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
            i.q.push(args);
        };
        w.Intercom = i;

        function l() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/av16vnft';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})();

document.addEventListener("DOMContentLoaded", function(event) {
    (function(cookies) {
        $('#intercomLauncher').on('click', function() {
            Intercom('showNewMessage');
            this.remove();
        });
    })(Cookies);
    $('#intercomLauncher').removeClass('hidden');
});