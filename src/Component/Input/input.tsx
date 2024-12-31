import styled from "styled-components";
import React, { forwardRef, Ref } from "react";
import { InputProps } from '../../constants/interface';

const InputBox = styled.input<InputProps>`
    padding: 0.5rem;
    border: 1px solid #000000; /* 입력 필드의 테두리를 설정 */
    border-radius: 0.3rem; 
    margin-top : 0.5rem;
    width: ${(props) => (props.size === 'large' ? '100%' : props.size === 'small' ? '150px' : '200px')};
`;

const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, type, size, ...rest }, ref) => {
    return <InputBox ref={ref} placeholder={placeholder} type={type} size={size} {...rest} />
});

export default Input; 