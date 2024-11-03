function redirectToExternalBrowser(targetUrl) {
  var ua = navigator.userAgent || navigator.vendor;
  var isInstagram = ua.indexOf("Instagram") > -1;

  if (isInstagram) {
    // Redirect to a blank page within Instagram
    document.body.innerHTML = ""; // Clear page content immediately

    // Check device and trigger external browser prompt
    if (/iPad|iPhone|iPod/.test(ua)) {
      window.location.href = "x-safari-https://" + targetUrl;
    } else {
      window.location.href = "intent:" + targetUrl + "#Intent;end";
    }
  } else {
    // Non-Instagram browsers get regular redirect
    window.location.href = targetUrl;
  }
}

window.onload = function () {
  const targetUrl = "https://sarthak-portfolio-f76d5.web.app/";
  redirectToExternalBrowser(targetUrl);
};
