import styled from "styled-components";
import { Color } from "../../Styles/color";
import { fontSize } from "../../Styles/font";
import { FaExclamationCircle } from "react-icons/fa";

export const Error = styled.p`
  color: ${Color.errorMsg};
  font-size: ${fontSize.extraSmall};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const PasswordStrength = styled.p<{ color: string }>`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ color }) => color};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorIcon = styled(FaExclamationCircle)`
  position: absolute;
  right: 10px;
  top: 60%;
  transform: translateY(-50%);
  color: red;
  font-size: 1rem;
  pointer-events: none;
`;

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 6px;
`;

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const OverlayStyles = styled.div`
  width: 100%;
  height: 100%;
`;
