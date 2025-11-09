import * as Cesium from 'cesium';

class CesiumImageryLayers {

    static addArcgisLayerFromType(viewer, mapType = 1) {
        // Cesium.ArcGisBaseMapType.SATELLITE = 1
        // Cesium.ArcGisBaseMapType.OCEANS = 2
        // Cesium.ArcGisBaseMapType.HILLSHADE = 3

        const provider = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(mapType);
        const layer = Cesium.ImageryLayer.fromProviderAsync(provider);
        viewer.imageryLayers.add(layer);
        return viewer.imageryLayers.length;
    }

    static addTiandituLayers(viewer, layers = 'cta') {
        const s = 'img,ibo,cva,vec,ter,cta,cia';
        const token = '8921e4c49ea5a72df8bc5298f40a0616';
        const lyrs = layers.trim().split(',');
        for (const lyr of lyrs) {
            if (s.includes(lyr)) {
                const url = `http://{s}.tianditu.gov.cn/${lyr}_w/wmts?tk=${token}`;
                const options = {
                    "url": url,
                    "layer": lyr,
                    "style": 'default',
                    "tileMatrixSetID": 'w',
                    "format": 'tiles',
                    "maximumLevel": 18,
                    "subdomains": ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7',]
                };
                const provider = new Cesium.WebMapTileServiceImageryProvider(options);
                const layer = Cesium.ImageryLayer.fromProviderAsync(provider);
                viewer.imageryLayers.add(layer);
            } else {
                console.log('TDT', 'invalid layer name');
            }
        }
        return viewer.imageryLayers.length;
    }

    static addGridLayer(viewer) {
        const options = {};
        const provider = new Cesium.GridImageryProvider(options);
        const layer = Cesium.ImageryLayer.fromProviderAsync(provider);
        viewer.imageryLayers.add(layer);
        return viewer.imageryLayers.length;
    }

    static addSingletileLayer(viewer, url = './libs/cesium/Assets/Textures/moonSmall.jpg') {
        const provider = Cesium.SingleTileImageryProvider.fromUrl(url);
        const layer = Cesium.ImageryLayer.fromProviderAsync(provider);
        viewer.imageryLayers.add(layer);
        return viewer.imageryLayers.length;
    }

    static getLayerCount(viewer) {
        return viewer.imageryLayers.length;
    }

    static showLayerByIndex(viewer, layerIndex, exclusive = true) {
        const imageryLayers = viewer.imageryLayers;
        let layer = imageryLayers.get(layerIndex);
        layer.show = true;

        if (exclusive) {
            const layerCount = imageryLayers.length;
            for (let i = 0; i < layerCount; i++) {
                layer = imageryLayers.get(i);
                layer.show = layerIndex === i;
            }
        }
        return layerIndex;
    }

    static raiseTopByIndex(viewer, layerIndex) {
        const imageryLayers = viewer.imageryLayers;
        const layer = imageryLayers.get(layerIndex);
        imageryLayers.raiseToTop(layer);
        return layer;
    }

    static lowerBottomByIndex(viewer, layerIndex) {
        const imageryLayers = viewer.imageryLayers;
        const layer = imageryLayers.get(layerIndex);
        imageryLayers.lowerToBottom(layer);
        return layer;
    }

    static removeAll(viewer) {
        viewer.imageryLayers.removeAll();
        return viewer.imageryLayers.length;
    }
}

export default CesiumImageryLayers;