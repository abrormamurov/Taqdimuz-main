function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Samsung Galaxy S20+ uchun maxsus xususiyatlar
  if (/Samsung.*SM-G986B/i.test(userAgent)) {
    document.body.style.backgroundColor = "#ffffff"; // Oq fon
    document.body.style.color = "#000000"; // Qora matn
  }
}

detectDevice();
