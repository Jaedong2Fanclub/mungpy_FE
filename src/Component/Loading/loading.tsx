import React, { useEffect, useRef, useState } from "react";
import './loadingStyle.scss';
import { useNavigate, useParams } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import dogFoot from "./dogfoot.json";
import {Player} from '@lottiefiles/react-lottie-player';

const Loading = () => {
    const [loading, setLoading]  = useState(false);
    const playerRef = useRef<Player | null>(null);

    // 컴포넌트가 마운트되면 loading을 true로 변경
    useEffect(() => {
      setLoading(true);
  
      if (playerRef.current) {
        playerRef.current.play(); // 애니메이션 실행
      }
  
      return () => {
        setLoading(false);
        if (playerRef.current) {
          playerRef.current.stop(); // 언마운트 시 애니메이션 정지
        }
      };
    }, []);

    return (
        <div className="loading-container">
            <div>
                {loading && (
                    <>
                        <div>
                            <p className="loading-text">사용자님과 닮은 반려견을</p>
                            <p className="loading-subtext">찾고 있어요<span><HiDotsHorizontal/></span></p>
                        </div>
                        <Player
                            ref={playerRef}
                            src={dogFoot}
                            style={{ height: "300px", width: "300px"}}
                            loop
                            autoplay={true}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default Loading;