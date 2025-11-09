import * as Cesium from "cesium";

import Cesiumbegin from "./cesiumlib/cesiumbegin.js";
import Cesiumimagerylayers from "./cesiumlib/cesiumimagerylayers.js";
import Cesiumdatasoures from "./cesiumlib/cesiumdatasoures.js";


const viewer = Cesiumbegin.start("cesiumContainer");
window.viewer = viewer;

Cesiumimagerylayers.addArcgisLayerFromType(viewer, 1);
// Cesiumimagerylayers.addGridLayer(viewer);
// Cesiumimagerylayers.addSingletileLayer(viewer);


//--------------------------------------------------------------
const btnloadgeojson = document.getElementById("btnloadgeojson");

function loadgeojson() {
    Cesiumdatasoures.loadGeoJson(viewer, "/assets/geojson/argometa.geojson");
}

btnloadgeojson.addEventListener("click", loadgeojson);
//--------------------------------------------------------------

const btntest = document.getElementById("btntest");

function loadtest() {
    if (viewer.dataSources.length > 0) {
        const dataSource = viewer.dataSources.get(0);
        const entities = dataSource.entities.values;
        console.log("Entities loaded");

        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            if (i % 2 === 0) {

                entity.show = false;
                // 设置圆点样式
                // entity.point = new Cesium.PointGraphics({
                //     pixelSize: 3, // 圆点大小
                //     color: Cesium.Color.RED, // 填充颜色
                //     outlineColor: Cesium.Color.WHITE, // 边框颜色
                //     outlineWidth: 1 // 边框宽度
                // });
            } else {
                entity.point.pixelSize = 6;
                entity.point.color = Cesium.Color.WHITE;
            }

        }
    } else {
        console.log("Entities not loaded");
    }
}

btntest.addEventListener("click", loadtest);