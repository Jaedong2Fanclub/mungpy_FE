import styled from "styled-components";

export const Title = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const UploadArea = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap; /* 줄바꿈 방지 */
  overflow-x: auto; /* 가로 스크롤 허용 */
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  padding-bottom: 10px; /* 스크롤바와 콘텐츠 간격 추가 */
  box-sizing: border-box; /* 패딩 포함 */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari: 스크롤바 숨기기 */
  }
`;

export const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const Icon = styled.div`
  font-size: 24px;
`;

export const Counter = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ff8c00;
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 5px 0;
`;
