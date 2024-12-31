import React, { useRef, useEffect } from "react";
import Video from '../../video/dogvideo.mp4'
import styled from "styled-components";

const VideoBacgGround = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px; /* Ensure it matches the Box's border-radius */
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for desired darkness */
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px; /* Ensure it matches the Box's border-radius */
    z-index: -1; /* Ensure the overlay is above the video but below other content */
`;

const Background = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const setPlayBackRef = () => {
        if(videoRef.current){
            videoRef.current.playbackRate = 0.5;
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            setPlayBackRef();
        }
    }, []);

    return (
        <div>
            <VideoBacgGround
            muted
            autoPlay
            loop
            ref={videoRef}
            onCanPlay={() => setPlayBackRef()}
            >
                <source src={Video} type="video/mp4"/>
            </VideoBacgGround>
            <Overlay/>
        </div>
    )
}

export default Background;