document.querySelector("body").innerHTML = `
<h1>Geolocation 2000.</h1>
<button class='js-locateMeBtn'>Locate me!</button>
<div class='js-output'></div>
`;

const locateMeBtn = document.querySelector(".js-locateMeBtn"),
  output = document.querySelector(".js-output");

const handleGeoError = () => {
  output.innerHTMl = "<h2>Can't locate you</h2>";
};

const createMapImage = (lat, lng) => {
  const imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=800x800&zoom=12&markers=color:red%label:U%${lat},${lng}&key=AIzaSyDHaFh5JG-NlZWZgjSpxxcgRDkqZR9rSdY`;
  const image = new Image();
  image.src = imageURL;
  output.appendChild(image);
};

const handleGeoSuccee = position => {
  const {
    coords: { latitude, longitude }
  } = position;
  output.innerHTML = `<h2>Got you!...</h2>`;
  createMapImage(latitude, longitude);
};

const getLoation = () => {
  output.innerHTML = `<h2>Locating you...</h2>`;
  const geoOptions = {
    enableHightAccurancy: true
  };
  navigator.geolocation.getCurrentPosition(
    handleGeoSuccee,
    handleGeoError,
    geoOptions
  );
};

locateMeBtn.addEventListener("click", getLoation);
