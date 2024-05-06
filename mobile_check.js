function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
	console.log("user is on mobile!");
    window.location.replace("https://m.tophatgames.net");
} else {
	console.log("user is on desktop!");
}