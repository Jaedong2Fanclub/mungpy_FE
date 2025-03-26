import styled from "styled-components";

export const Box = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SectionFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
`;

export const SectionSecond = styled.div`
  display: flex;
  gap: 12px;
`;

export const SearchSection = styled.section`
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  flex: 1;
  padding: 10px;
  height: 175px;
  cursor: pointer;
  position: relative;
`;

export const SectionSecondP = styled.p`
  text-align: left;
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 5px;
  bottom: 0px;
`;

export const Img2 = styled.img`
  width: 121px;
  height: 81px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const Img3 = styled.img`
  width: 18px;
  height: 20px;
`;

export const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SectionThird = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const Section3P = styled.p`
  margin: 0;
`;
