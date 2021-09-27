const onlineEl = document.querySelector(".online");
const offlineEl = document.querySelector(".offline")
let OnLine = () => {
    onlineEl.style.cssText = "color:#00FF00";
}
function OffLine() {
    offlineEl.style.cssText = "color:#ff0000";
}
if(window.navigator.onLine) {
    OnLine();
} else {
    OffLine();
};
window.addEventListener("OnLine",OnLine);
window.addEventListener("OffLine",OffLine)