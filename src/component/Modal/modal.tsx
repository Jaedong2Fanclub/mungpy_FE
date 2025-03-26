import "./modalStyle.scss";
import React, { useRef } from 'react';
import Button from '../button/button';

interface AgreementOption {
    label: JSX.Element;
    isRequired: boolean;
    checked: boolean;
}

interface ModalProps {
    modalClose: () => void;
    checkedOptions: AgreementOption[];
    setCheckedOptions: React.Dispatch<React.SetStateAction<AgreementOption[]>>;
    handleSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalClose, checkedOptions, setCheckedOptions, handleSubmit }) => {
    const agreementRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleCheckboxChange = (index: number) => {
        const updatedOptions = [...checkedOptions];
        updatedOptions[index].checked = !updatedOptions[index].checked;
        setCheckedOptions(updatedOptions);
    };

    const handleAllCheckedChange = () => {
        const allChecked = !checkedOptions.every(option => option.checked);
        const updatedOptions = checkedOptions.map(option => ({ ...option, checked: allChecked }));
        setCheckedOptions(updatedOptions);
        agreementRefs.current.forEach(ref => {
            if (ref) ref.checked = allChecked;
        });
    };

    const isAllRequiredChecked = checkedOptions.every((option) => option.isRequired && option.checked);

    return (
        <div className="Modal">
            <div onClick={modalClose}>
                <div className="close-button"></div>
            </div>
            <h2>약관동의<span className="red">*</span></h2>
            <div className="agreement-options">
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={checkedOptions.every((option) => option.checked)} 
                        onChange={handleAllCheckedChange}
                    />
                    <span className="checkmark"></span>
                    모두 동의합니다.
                </div>
                <hr style={{ color: "#D6DAE0" }} />
                {checkedOptions.map((option, index) => (
                    <div key={index} className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={option.checked}
                            onChange={() => handleCheckboxChange(index)}
                            ref={(el) => (agreementRefs.current[index] = el)}
                        />
                        <span className="checkmark"></span>
                        {option.label}
                    </div>
                ))}
            </div>
            <p className="agreement-info" style={{marginBottom:"34px"}}>
                적어보자
            </p>
            <Button variant="submitBtn" type="submit" onClick={handleSubmit}>
                회원가입
            </Button>
        </div>
    );
};

export default Modal;