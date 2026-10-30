// Adds the chatbot tag the same way a realtor would paste it, using the key from config.js
// (or ?embed_key=..., remembered in localStorage for this browser).
(function () {
  var cfg = window.SITE_CHATBOT || {};
  var key = cfg.EMBED_KEY;
  try {
    var q = new URLSearchParams(location.search).get("embed_key");
    if (q) localStorage.setItem("site_chatbot_embed_key", q);
    key = key || localStorage.getItem("site_chatbot_embed_key") || "";
  } catch (e) {}
  if (!key) {
    var n = document.createElement("p");
    n.className = "muted";
    n.style.cssText = "max-width:900px;margin:0 auto;padding:0 16px";
    n.textContent = "No chatbot key set: add EMBED_KEY in config.js, or open this page with ?embed_key=<your key>.";
    document.body.appendChild(n);
    return;
  }
  var s = document.createElement("script");
  s.src = cfg.WIDGET_SRC;
  s.async = true;
  s.setAttribute("data-embed-key", key);
  document.body.appendChild(s);
})();
