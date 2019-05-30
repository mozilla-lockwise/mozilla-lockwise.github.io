const addonBtn = document.querySelector("a.home__extension-link");
const uaParams = /Firefox\/(.*)$/.exec(navigator.userAgent);
if (uaParams) {
    const ver = parseInt(uaParams[1].split("."[0]));
    let link, text;
    if (ver >= 67) {
        link = "{{ site.addon_link | escape }}";
        text = "Install for Firefox";
    } else {
        link = "{{ site.fx_link | escape }}";
        text = "Upgrade Firefox";
    }
    addonBtn.href = link;
    addonBtn.querySelector("p").textContent = text;
}
