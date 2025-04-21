import styled, { keyframes, css } from "styled-components";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./nav";
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const loading = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border-top: 3px solid #FF7920;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;
    justify-content: space-between;
    padding: 10px 30px;
    margin-top: 10px;
    position: relative;
    background: white;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
    }
`

const Li = styled.li<{ isActive: boolean; isLoading: boolean }>`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.isActive ? '#FF7920' : '#999'};
    cursor: pointer;
    padding-bottom: 10px;
    position: relative;
    flex: 1;
    text-align: center;
    transition: color 0.3s ease;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${props => props.isActive ? '100%' : '0%'};
        height: 3px;
        background-color: #FF7920;
        transition: width 0.3s ease;
        z-index: 1;
        ${props => props.isLoading && css`
            animation: ${loading} 1s linear;
        `}
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const NavWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 1000;
    background: white;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
`

const OutletWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 10px;
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const CommunityContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    return (
        <Container>
            <Ul>
                <Li 
                    isActive={isActive('help')} 
                    isLoading={isLoading && isActive('help')}
                    onClick={() => navigate("help")}
                >
                    도와주세요
                </Li>
                <Li 
                    isActive={isActive('found')} 
                    isLoading={isLoading && isActive('found')}
                    onClick={() => navigate("found")}
                >
                    찾았어요
                </Li>
                <Li 
                    isActive={isActive('adoption')} 
                    isLoading={isLoading && isActive('adoption')}
                    onClick={() => navigate("adoption")}
                >
                    입양후기
                </Li>
            </Ul>
            <NavWrapper>
                <Nav />
            </NavWrapper>
            <OutletWrapper>
                {isLoading ? (
                    <LoadingContainer>
                        <LoadingSpinner />
                    </LoadingContainer>
                ) : (
                    <Outlet />
                )}
            </OutletWrapper>
        </Container>
    )
}

export default CommunityContainer;