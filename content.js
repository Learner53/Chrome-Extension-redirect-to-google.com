var videosMatch = document.querySelector("title").innerHTML;
var videosMatched = videosMatch.match(/videos/g);
var metaSelect = document.querySelectorAll("meta");

//Checks if webpage have meta tag with attribute name value description
for (let i = 0; i < metaSelect.length; i++) {
  if (metaSelect[i].hasAttribute("name")) {
    var matchDesciption = metaSelect[i].getAttribute("name");
    if (matchDesciption === "description") {
      window.location.href = "https://www.google.com/";
    }
  }
}

if (videosMatched == "videos") {
  window.location.href = "https://www.google.com/";
}
