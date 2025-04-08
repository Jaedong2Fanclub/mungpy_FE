import { useRef, useState } from "react";
import { resultProps } from "../../../constants/interface";
import './resultStyle.scss';
import Button from "../../button/button";
import { useNavigate, useLocation } from "react-router-dom";
import AnimalProgressBar from "../../progressBar/animalProgressBar";
// import dog from "../../../img/dog1.jpg";
import { MdOutlineFileDownload, MdOutlineShare } from "react-icons/md";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const Result = () => {
    const location = useLocation();
    const data = location.state as resultProps;
    const navigate = useNavigate();

    const progressData = [
        {label : "충성심", value: data?.loyaltyScore},
        {label : "건강미", value: data?.healthScore},
        {label : "활동적", value: data?.activityScore},
        {label : "똑똑이", value: data?.intelligenceScore}
    ]

    // const traitsData = {
    //     traits: [data?.traits[0], data?.traits[1], data?.traits[2]]
    // }

//     activityScore
// : 
// 50
// breeds
// : 
// "eric"
// detailedReview
// : 
// "충성심이 강하나 때때로 독립성이 있어요"
// healthScore
// : 
// 51
// intelligenceScore
// : 
// 80
// loyaltyScore
// : 
// 80
// representativeImage
// : 
// "https://avatars.githubusercontent.com/u/92240138?v=4"
// shortReview
// : 
// "사용자님은 귀여운 푸들상 입니다."
// traits
// : 
// ["산책은 필수에요", "밥은 3끼를 먹어요", "우리나라에서 가장 충심이 강해요"]

    const HightLightWord = (text: string) => {
        const words = text.split(" ");
        return (
            <p>
                {words.map((word, index) => 
                    index === 2 ? (
                        <span key={index} style={{color: "#FF7920", fontWeight: 'bold'}}>
                            {word}{""}
                        </span>
                    ) : (
                        `${word}`
                    )
                )}
            </p>
        )
    }

    const ShareSubmit = () => {
        if(navigator.share) {
            navigator.share({
                title: "결과 공유",
                text: "결과를 확인해보세요!",
                url: window.location.href
            })
            .then(() => alert("공유 성공!"))
            .catch((error) => console.log("공유 실패",error));
        } else {
            alert("공유를 지원하지 않는 브라우저입니다.")
        }
    }

    const divRef = useRef<HTMLDivElement>(null);

    const DownloadSubmit = async () => {
        if(!divRef.current) return;

        try {
            const div = divRef.current;
            const canvas = await html2canvas(div, {scale: 2});
            canvas.toBlob((blob) => {
                if(blob !== null) {
                    saveAs(blob, "result.png");
                }
            });
        }catch(error) {
            console.log("error converting div to image : ", error);
        }
    };

    return (
        <div ref={divRef} className="result-container">
            <div className="result-box">
                <div className="img-div">
                    <img src={data?.representativeImage} alt="동물 유형 결과 이미지" />
                </div>
                <div className="result-description">
                    <div className="review">
                        <p>{data?.breeds}</p>
                        {data?.shortReview ? (
                            <p>{HightLightWord(data?.shortReview)}</p>
                        ):(<p>데이터가 없습니다.</p>)
                        }  
                    </div>
                </div>
                <div className="detail-review">{data?.detailedReview}</div>
                <div className="progressbar-container">
                    {progressData.map((item) => (
                        <AnimalProgressBar
                            key={item.label}
                            label={item.label}
                            percentage={item.value || 0}
                        />
                    ))}
                </div>
                <div className="traits-container">
                    {data?.traits.map((trait, index) => (
                        <ul
                            key={index}
                        >
                            {trait}
                        </ul>
                    ))}
                </div>
                <div className="button-container">
                        <button className="icon-btn" onClick={ShareSubmit}><MdOutlineShare className="icon"/></button>
                        <button className="icon-btn" onClick={DownloadSubmit}><MdOutlineFileDownload className="icon"/></button>
                </div>
                <div className="button-container">
                        <Button type="button" variant="outlined" onClick={() => navigate('/')}>다시하기</Button>
                        <Button type="button" variant="filled" onClick={() => navigate('/detail')}>친구 보러가기</Button>
                </div>
            </div>
        </div>
    )
}

export default Result;