import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { ScatterplotLayer } from '@deck.gl/layers';

const googleMapsAPIKey = 'YOUR API KEY';

loadJSAPI();
function runApp() {
  const map = initMap();
  const layerOptions = {
    id: 'scatterplot',
    data: './stations.json',
    getPosition: d => [parseFloat(d.longitude), parseFloat(d.latitude)],
    getRadius: d => parseInt(d.capacity),
    stroked: true,
    getFillColor: [255, 133, 27],
    getLineColor: [255, 38, 27],
    radiusMinPixels: 5,
    radiusMaxPixels: 50
  };
  const scatterplotLayer = new ScatterplotLayer(layerOptions);
  const googleMapsOverlay = new GoogleMapsOverlay({
    layers: [scatterplotLayer]
  });
  googleMapsOverlay.setMap(map);
}

/* API and map loader helpers */
function loadJSAPI() {
  const googleMapsAPIURI = `YOUR-API-KEY`;
  const script = document.createElement('script');

  script.src = googleMapsAPIURI;
  script.defer = true;
  script.async = true;

  window.runApp = runApp;
  document.head.appendChild(script);
}

function initMap() {
  const mapOptions = {
    center: { lat: 40.75097, lng: -73.98765 },
    zoom: 14
  };
  const mapDiv = document.getElementById('map');
  return new google.maps.Map(mapDiv, mapOptions);
}
