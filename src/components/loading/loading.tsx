import React, { useEffect, useRef, useState } from "react";
import './loadingStyle.scss';
import dogFoot from "./mungpy_animation.json";
import {Player} from '@lottiefiles/react-lottie-player';

const Loading = () => {
    const [loading, setLoading]  = useState(false);
    const playerRef = useRef<Player | null>(null);

    // 컴포넌트가 마운트되면 loading을 true로 변경
    useEffect(() => {
      setLoading(true);
      const player = playerRef.current;
  
      if (player) {
        player.play();
      }
  
      return () => {
        setLoading(false);
        if (player) {
          player.stop();
        }
      };
    }, []);

    return (
      <>
        {loading && (
            <>
                <Player
                    ref={playerRef}
                    src={dogFoot}
                    style={{ height: "100vh", width: "390px"}}
                    loop
                    autoplay={true}
                />
            </>
        )}
      </>
    )
}

export default Loading;