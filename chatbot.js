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

  // While the chat panel is open, make room for it on the right so it never
  // covers the page (style.css adds the padding on wide screens only).
  var watched = null, styleObs = null;
  function sync() {
    var frame = document.getElementById("gcb-frame");
    if (frame !== watched) {
      if (styleObs) styleObs.disconnect();
      watched = frame;
      if (frame) {
        styleObs = new MutationObserver(sync);
        styleObs.observe(frame, { attributes: true, attributeFilter: ["style"] });
      }
    }
    document.body.classList.toggle("chat-open", !!frame && frame.style.display === "block");
  }
  new MutationObserver(sync).observe(document.body, { childList: true, subtree: true });
})();
