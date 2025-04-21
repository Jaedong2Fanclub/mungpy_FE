import { useState } from "react";
import { DataProps, ShelterDetailProps } from "../../constants/interface";

const ShareContainer = ({data} : {data: DataProps | ShelterDetailProps}) => {
    const [shareClicked, setShareClicked] = useState(false);

    const handleShare = async () => {
        setShareClicked(true);
        try {
            if (navigator.share) {
                await navigator.share({
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('링크가 클립보드에 복사되었습니다!');
            }
        } catch (error) {
            console.error('공유하기 실패:', error);
        } finally {
            setShareClicked(false);
        }
    };

    return { handleShare, shareClicked };
};

export default ShareContainer;