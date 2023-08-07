function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}

<!-- Google tag (gtag.js) -->
loadScript('https://www.googletagmanager.com/gtag/js?id=G-QW251HRLSH');

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-QW251HRLSH');
