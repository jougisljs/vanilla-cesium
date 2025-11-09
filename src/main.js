import Cesiumbegin from "./cesiumlib/cesiumbegin.js";
import Cesiumimagerylayers from "./cesiumlib/cesiumimagerylayers.js";
import Cesiumdatasoures from "./cesiumlib/cesiumdatasoures.js";

const viewer = Cesiumbegin.start("cesiumContainer");
window.viewer = viewer;

Cesiumimagerylayers.addArcgisLayerFromType(viewer, 1);
// Cesiumimagerylayers.addGridLayer(viewer);

//--------------------------------------------------------------
const btnloadgeojson = document.getElementById("btnloadgeojson");

function loadgeojson() {
    const promise = Cesiumdatasoures.loadGeoJson(viewer);
    promise.then((counts) => {
        console.log(counts);
    });
}

btnloadgeojson.addEventListener("click", loadgeojson);
//--------------------------------------------------------------