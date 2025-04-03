import React, { useEffect } from 'react';
import { CustomOverlayMap, Map,MapMarker, CustomOverlayRoadview } from 'react-kakao-maps-sdk';
import markerImg from '../../img/mark.png';

const KakaoMap = ({ lat, lng }:any) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1db9f62a7ec5de46bf18feb5f2658ebb`;
        script.async = true;
        document.body.appendChild(script);
    },[]);

    return (
        <Map
            center={{ lat, lng }}   // 지도의 중심 좌표
            style={{ width: '333px', height: '200px', marginTop: '1rem' }} // 지도 크기
            level={3}  
        >  
            <MapMarker position={{ lat, lng }}
                image={{
                    src: markerImg,
                    size: {
                        width: 40,
                        height: 40,
                    }
                }}
            >
            </MapMarker>
        </Map>
    );
}

export default KakaoMap;