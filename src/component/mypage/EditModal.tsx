import { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  margin-bottom: 10px;
`;

const CharCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`;

const CompleteButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF8A8A;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #FF6B6B;
  }
`;

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (text: string) => void;
  initialText: string;
}

const EditModal = ({ isOpen, onClose, onSave, initialText }: EditModalProps) => {
  const [text, setText] = useState(initialText);
  const maxLength = 30;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  const handleSave = () => {
    onSave(text);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h5>한 줄 소개 수정</h5>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <TextArea
          value={text}
          onChange={handleTextChange}
          placeholder="자기소개를 입력하세요"
        />
        <CharCount>
          {text.length}/{maxLength}
        </CharCount>
        <CompleteButton onClick={handleSave}>
          완료
        </CompleteButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditModal; 