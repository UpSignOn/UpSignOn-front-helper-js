"use strict";
var UpSignOn = (function() {
  var UPSIGNON_GREEN = "rgb(0, 171, 169)";
  var UPSIGNON_DEEP_LINK = "upsignon://";
  var translations = {
  "confidentialConnection": {
    "fr": "Connexion confidentielle",
    "es": "Conexión confidencial",
    "en": "Confidential connection"
  },
  "download": {
    "fr": "Télécharger l'application UpSignOn",
    "es": "Descargar la aplicación UpSignOn",
    "en": "Download the UpSignOn app"
  }
}
;
  var getProtocolURI = function(request) {
    var protocolURI = UPSIGNON_DEEP_LINK + "protocol/?url="+encodeURIComponent(request.url)+"&buttonId="+encodeURIComponent(request.buttonId);
    if(request.connectionToken) {
      protocolURI+="&connectionToken="+encodeURIComponent(request.connectionToken);
    }
    return protocolURI;
  };
  var getSVGLogo = function(width) {
    return `<svg width="${width}" height="${width}" viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet"><rect x="0" y="0" fill="${UPSIGNON_GREEN}" width="120" height="120"/><svg fill="white" stroke-width="0" x="10" y="10"><path d="M50.00,1.00a17 17 0 1 0 0,34a17 17 0 1 0 0,-34v7a10 10 0 0 1 0,20a10 10 0 1 1 0,-20Z"/><path d="M24.63,27.23A27 27 0 0 0 75.37,27.23A3.5 3.5 20 1 1 81.95,29.63A34 34 0 0 1 18.05,29.63A3.5 3.5 -20 1 1 24.63,27.23Z"/><path d="M8.65,33.05A44 44 0 0 0 91.35,33.05A3.5 3.5 20 1 1 97.92,35.44A51 51 0 0 1 2.08,35.44A3.5 3.5 -20 1 1 8.65,33.05Z"/><circle cx="50.00" cy="89.00" r="10"/></svg></svg>`;
  };
  var getButtonText = function() {
    var lang = navigator.language || navigator.userLanguage;
    return translations.confidentialConnection[lang.substring(0,2)] || translations.confidentialConnection['en'];
  }
  var getDownloadText = function() {
    var lang = navigator.language || navigator.userLanguage;
    return translations.download[lang.substring(0,2)] || translations.download['en'];
  }
  var addButtonContent = function(buttonContainer, protocolURI, uiConfig) {
    var linkElement = document.createElement("a");
    linkElement.href = protocolURI;
    linkElement.target = "_blank";
    linkElement.style.backgroundColor = UPSIGNON_GREEN;
    linkElement.style.padding = uiConfig.padding || "5px 15px 5px 5px";
    linkElement.style.display = "flex";
    linkElement.style.flexDirection = "row";
    linkElement.style.flexWrap = "nowrap";
    linkElement.style.alignItems = "center";
    linkElement.style.justifyContent = "flex-start";
    linkElement.style.textDecoration = "none";
    linkElement.style.borderRadius = uiConfig.borderRadius || "5px";
    var logoContainer = document.createElement("div");
    logoContainer.style.display = "flex";
    logoContainer.style.justifyContent = "center";
    logoContainer.innerHTML = getSVGLogo(uiConfig.logoWidth || 50);
    var textContainer = document.createElement("div");
    textContainer.innerHTML = "<div>UpSignOn</div><div>"+getButtonText()+"</div>";
    textContainer.style.lineHeight = "1.3em";
    textContainer.style.textAlign = "left";
    textContainer.style.color = "white";
    textContainer.style.flex = "1";
    var padding = uiConfig.spaceBetween || "5px";
    textContainer.style.paddingLeft = padding;
    textContainer.style.paddingRight = padding;
    linkElement.appendChild(logoContainer);
    linkElement.appendChild(textContainer);
    buttonContainer.innerHTML = "";
    buttonContainer.appendChild(linkElement);

    var websiteLinkNode = document.createElement("a");
    websiteLinkNode.innerText = getDownloadText();
    websiteLinkNode.target = "_blank";
    websiteLinkNode.href = 'https://upsignon.eu';
    buttonContainer.appendChild(websiteLinkNode);
  };

  var changeText = function(buttonContainer, newTextNodes, removeWebsiteFallBack) {
    buttonContainer.querySelector("a:first-of-type>:last-child").innerHTML = newTextNodes;
    if(removeWebsiteFallBack) {
      var websiteLink = buttonContainer.querySelector("a[href='https://upsignon.eu/']");
      if(websiteLink) {
        websiteLink.style.display = 'none';
      }
    }
  };

  return {
    addButtonContent: addButtonContent,
    changeText: changeText,
    getProtocolURI: getProtocolURI,
    getSVGLogo: getSVGLogo,
    getButtonText: getButtonText,
    getDownloadText: getDownloadText,
    color: UPSIGNON_GREEN
  };
})();
