import React, { ButtonHTMLAttributes, ChangeEvent, FocusEvent } from "react";

export interface InputProps {
    placeholder?: string;
    type?: string;
    size?: 'small' | 'medium' | 'large';
    [key: string]: any; // 나머지 속성을 허용
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'submitBtn' | 'NextBtn';
}

export interface ProfileImgUploadProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onImageLoad: (file: File) => void;
}

export interface Dog {
    age: number;
    sex: string;
    kind: string | null;
    name: string;
    image: string;
    personality: string[];
    rescuePlace: string;
    protectPlace: string;
    protectTelno: string;
    expirationDate: string;
}