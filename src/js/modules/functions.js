export function isWebP() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw' + 'AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
  }
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}