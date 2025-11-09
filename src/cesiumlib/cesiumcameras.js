import * as Cesium from 'cesium';

class CesiumCamera {
    static flyto(viewer, longitude, latitude, height, heading = 0, pitch = -90, roll = 0) {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            orientation: {
                heading: Cesium.Math.toRadians(heading),
                pitch: Cesium.Math.toRadians(pitch),
                roll: roll
            }
        });
    }

    static flytoantipodes(viewer, longitude, latitude, height = 50000, heading = 0, pitch = -90, roll = 0) {
        const antilongitude = -Math.sign(longitude) * (180 - Math.abs(longitude));
        const antilatitude = -latitude;
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(antilongitude, antilatitude, height),
            orientation: {
                heading: Cesium.Math.toRadians(heading),
                pitch: Cesium.Math.toRadians(pitch),
                roll: roll
            }
        });
    }

}

export default CesiumCamera;