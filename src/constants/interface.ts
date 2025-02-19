import React, { ButtonHTMLAttributes, ChangeEvent, FocusEvent } from "react";

export interface InputProps {
  placeholder?: string;
  type?: string;
  size?: "small" | "medium" | "large";
  [key: string]: any; // 나머지 속성을 허용
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "submitBtn"
    | "NextBtn"
    | "HomeBtn"
    | "ShareBtn"
    | "registrationBtn"
    | "submit"
    | "animationBtn"
    | "filled"
    | "outlined";
}

export interface ButtonGroupProps {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ProfileImgUploadProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onImageLoad: (file: File) => void;
}

export interface resultProps {
  breeds: string;
  representative_image: string;
  short_review: string;
  detailed_review: string;
  loyalty_score: number;
  health_score: number;
  activity_score: number;
  intelligence_score: number;
  traits: string[];
}

export interface MapState {
  center: { lat: number; lng: number };
  level: number;
}

export interface UploadedImage {
  id: string;
  url: string;
}

export interface AgreementOption {
  label: JSX.Element;
  isRequired: boolean;
  checked: boolean;
}

export interface SignupProps {
  shelterName: string;
  id: string;
  address: string;
  zonecode: string;
  name: string;
  businessNumber: string;
  password: string;
  passwordConfirm: string;
}
