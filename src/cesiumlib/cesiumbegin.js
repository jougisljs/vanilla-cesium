window.CESIUM_BASE_URL = './assets/cesium';
import * as Cesium from 'cesium';

class CesiumBegin {
    static start(container = 'cesiumContainer') {
        if (!Cesium) {
            console.error('Missing API');
            return undefined;
        }
        // Cesium.Ion.defaultAccessToken =
        //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMjk2NTg2ZC03OGFmLTQ1NDYtOWY2Ny04ZGNkNDA1M' +
        //     '2I2NjAiLCJpZCI6MTcwNTQsImlhdCI6MTY4OTY0NjkxOX0.PVUZ6giMn0d4eVY9pOpmXS1bJpG7MEe2n5C4laMslp0';

        const options = {
            infoBox: true,
            vrButton: false,
            geocoder: false,
            timeline: false,
            baseLayer: false,
            animation: false,
            homeButton: true,
            scene3DOnly: false,
            shouldAnimate: true,
            baseLayerPicker: false,
            sceneModePicker: true,
            imageryProvider: false,
            fullscreenButton: false,
            projectionPicker: false,
            selectionIndicator: true,
            navigationHelpButton: false,
            sceneMode: Cesium.SceneMode.SCENE3D,
            navigationInstructionsInitiallyVisible: false,
        };

        const viewer = new Cesium.Viewer(container, options);

        const scene = viewer.scene;
        scene.skyAtmosphere.show = false;

        const globe = scene.globe;
        globe.show = true;
        globe.translucency.enabled = false;
        globe.baseColor = Cesium.Color.DARKSLATEGRAY;


        // viewer.infoBox.frame.removeAttribute('sandbox');
        // viewer.infoBox.frame.src = 'about:blank';
        // viewer.cesiumWidget.creditContainer.style.display = 'none';

        // viewer.extend(Cesium.viewerDragDropMixin);
        // viewer.extend(Cesium.viewerCesiumInspectorMixin);
        // viewer.extend(Cesium.viewerPerformanceWatchdogMixin);


        return viewer;
    }
}

export default CesiumBegin;