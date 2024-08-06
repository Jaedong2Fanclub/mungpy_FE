import React, { useEffect, useState } from "react";
import * as L from './loadingStyle'
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                // navigate(`/result/${id}`); // Replace with your target route
            }, 1000); // Delay for showing the success state before navigation
        }, 10000);

        return () => clearTimeout(timer);
    },[navigate]);

    return (
        <>
        <L.Box>
            <L.P>사용자님과 닮은 유기견을</L.P>
            <L.SubDiv>찾는 중입니다 <L.Img src="/image/smail.png"/></L.SubDiv>
            <L.Circle success={success}>
                {loading ? (
                    <L.LoadingDots>
                        <L.Dot style={{ animationDelay: '0s' }} />
                        <L.Dot style={{ animationDelay: '0.2s' }} />
                        <L.Dot style={{ animationDelay: '0.4s' }} />
                    </L.LoadingDots>
                ) : (
                    <L.CheckIcon />
                )}
            </L.Circle>
        </L.Box>
        </>
    )
}

export default Loading;