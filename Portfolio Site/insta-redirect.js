function redirectToExternalBrowser(targetUrl) {
  var ua = navigator.userAgent || navigator.vendor;
  var isInstagram = ua.indexOf("Instagram") > -1;

  // Check if we're in the Instagram in-app browser
  if (isInstagram) {
    console.log("Detected Instagram browser"); // Debugging: Log detection

    // For iOS devices (iPhone/iPad)
    if (/iPad|iPhone|iPod/.test(ua)) {
      // Attempt to open in Safari or another browser
      window.location.href = "x-safari-" + targetUrl; // Opens in Chrome, if available
    } else {
      // For Android devices
      window.location.href = "intent:" + targetUrl + "#Intent;end"; // This opens the link in a browser
    }
    return;
  } else {
    // If not in Instagram's in-app browser, perform a regular redirect
    window.location.href = targetUrl;
  }
}

// Call the redirect function on page load
window.onload = function () {
  const targetUrl = "https://sarthak-portfolio-f76d5.web.app/"; // Your actual URL
  redirectToExternalBrowser(targetUrl);
};
