function redirectToExternalBrowser(targetUrl) {
  var ua = navigator.userAgent || navigator.vendor;
  var isInstagram = ua.indexOf("Instagram") > -1;

  // Check if we're in the Instagram in-app browser
  if (isInstagram) {
    // Clear the page content immediately
    document.documentElement.innerHTML = "";

    // Use a short delay to trigger the external redirect
    setTimeout(() => {
      if (/iPad|iPhone|iPod/.test(ua)) {
        window.location.href = "x-web-search://" + targetUrl; // Try using x-web-search for Safari prompt
      } else {
        window.location.href = "intent:" + targetUrl + "#Intent;end";
      }
    }, 100); // Short delay before redirecting
  } else {
    // Non-Instagram browsers get regular redirect
    window.location.href = targetUrl;
  }
}

window.onload = function () {
  const targetUrl = "https://sarthak-portfolio-f76d5.web.app/";
  redirectToExternalBrowser(targetUrl);
};
