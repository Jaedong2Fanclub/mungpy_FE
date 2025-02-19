import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './detailStyle.scss';

const DetailResult = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        axios.get('/api/matching-animals/images')
        .then(res => {
            setImages(res.data);
        })  
        .catch(error => {
            console.error("image error : ", error);
        })
    })

    return (
        <div className="detail-container">
            <div>
                <p className="detail-text">사용자님과 닮은</p>
                <p className="detail-text">친구들을 소개드려요</p>
            </div>
            <div className="image-gallery">
                {images.map((image,index) => (
                    <div key={index} className="image-item">
                        <img src={image} />
                    </div>
                ))}
            </div>
            <footer>
                <button className="search-button" onClick={() => navigate("/home")}>메인 서비스 바로가기</button>
            </footer>
        </div>
    )
}

export default DetailResult;