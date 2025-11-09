import * as Cesium from 'cesium';

class CesiumDataSources {
    static loadGeoJson(viewer, url = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json') {
        // const defaulturl = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';
        // const options = {
        //     // stroke: Cesium.Color.YELLOW,
        //     // fill: Cesium.Color.YELLOW.withAlpha(0.1),
        //     // strokeWidth: 10,
        //     // markerSymbol: 'A',
        //     markerSize: 50,
        //     markerColor: Cesium.Color.LIGHTGREY,
        //     //clampToGround: true
        // };
        const promise = Cesium.GeoJsonDataSource.load(url);
        promise.then((data) => {
            const promise = viewer.dataSources.add(data);

            const entities = data.entities.values;
            for (let i = 0; i < entities.length; i++) {

                const entity = entities[i];
                entity.billboard = undefined;
                // 设置圆点样式
                entity.point = new Cesium.PointGraphics({
                    pixelSize: 3, // 圆点大小
                    color: Cesium.Color.RED, // 填充颜色
                    outlineColor: Cesium.Color.WHITE, // 边框颜色
                    outlineWidth: 1 // 边框宽度
                });
            }
        });
    }

    static loadCzml(viewer, url) {
        const promise = Cesium.CzmlDataSource.load(url);
        return promise.then((data) => {
            const promise = viewer.dataSources.add(data);
            return promise.then((data) => {
                return viewer.dataSources.length;
            });
        });
    }

    static loadKml(viewer, url) {
        const promise = Cesium.KmlDataSource.load(url);
        return promise.then((data) => {
            const promise = viewer.dataSources.add(data);
            return promise.then((data) => {
                return viewer.dataSources.length;
            });
        });
    }

    static loadGpx(viewer, url) {
        const promise = Cesium.GpxDataSource.load(url);
        return promise.then((data) => {
            const promise = viewer.dataSources.add(data);
            return promise.then((data) => {
                return viewer.dataSources.length;
            });
        });
    }

    static removeAll(viewer) {
        viewer.dataSources.removeAll();
        return viewer.dataSource.length;
    }

}

export default CesiumDataSources;