document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('playConsoleLink');
    var userAgent = navigator.userAgent;
    if (/Android/.test(userAgent)) {
        link.href = 'intent://play.google.com/console/u/0/developers/5551562284230183244#Intent;scheme=https;package=com.google.android.apps.playconsole;S.browser_fallback_url=https://play.google.com/console/u/0/developers/5551562284230183244;end';
    }
    // For iOS and others, keep the https URL, which will open the app if installed via universal links
});