import React, {useState} from 'react';
import "./style.scss";
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaWithCounterProps {
  register: UseFormRegisterReturn;
  placeholder: string;
  maxLength: number;
  value:string;
}

const TextAreaWithCounter: React.FC<TextAreaWithCounterProps> = ({
  register,
  value,
  placeholder,
  maxLength
}) => {
  return (
    <>
      <div className='textarea-container'>
        <textarea
          {...register}
          maxLength={maxLength}
          placeholder={`${placeholder}을 적어주세요 (최대 ${maxLength}자 이내)`}
        />
      </div>
      <div className='counter'>
      {value.length || 0}/{maxLength}
      </div>
    </>
  )
}

export default TextAreaWithCounter;