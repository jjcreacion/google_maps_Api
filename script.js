let map;
let panel;
let i = 0;

let parametros = {
  center: { lat: 33.14723378848042, lng: -96.86683306705129 },
  zoom: 100,//zoom
  mapTypeId: 'satellite',//tipo de mapa
  //zoomControl: false, //eliminar zoom
  disableDefaultUI: true
}

let coord = {
  north: 33.14721378848042,
  south: 33.14722578848042,
  east: -96.86683306705129,
  west: -96.86684306705129
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), parametros);
  map.setTilt(0);

  /*const rectangle = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: coord,
    draggable: true,
    geodesic: true
  });*/
}

function agregarPanel(){
  panel[i] = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: coord,
    draggable: true,
    geodesic: true
  });
  
  i++;
}

/*
var autocomplete = document.getElementById('autocomplete');
const search = new google.maps.places.Autocomplete(autocomplete);
search.bindTo("bounds",map)
*/

 
window.initMap = initMap;
