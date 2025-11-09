import * as Cesium from "cesium";

class CesiumEnities {
    static addPoint(viewer, name, longitude, latitude, altitude, pixelSize, r, g, b) {
        const entity = {
            name: name,
            description: name,
            position:
                Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude), // 经度、纬度
            point: {
                pixelSize: pixelSize,              // 点的大小（像素）
                color: Cesium.Color.fromBytes(r, g, b, 125),    // 点的颜色
                outlineColor: Cesium.Color.fromBytes(b, g, r), // 外边框颜色
                outlineWidth: 2             // 外边框宽度
            },
            label: {
                text: name,
                font: '14pt sans-serif',
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, -15)
            }
        };
        const pointEntity = viewer.entities.add(entity);
        return viewer.entities.values.length;
    }

    static addPloyline(viewer, name, points, width, r, g, b) {
        const entity = {
            name: name,
            description: name,
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
                width: width,
                material: Cesium.Color.fromBytes(r, g, b),
            }
        };
        viewer.entities.add(entity);
        return viewer.entities.values.length;
    }

}

export default CesiumEnities;
