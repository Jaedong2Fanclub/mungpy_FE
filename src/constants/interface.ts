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
  representativeImage: string;
  shortReview: string;
  detailedReview: string;
  loyaltyScore: number;
  healthScore: number;
  activityScore: number;
  intelligenceScore: number;
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
export interface DataProps {
  id: number;
  gender: string;
  age: string;
  isNeutered: string;
  weight: number | string;  // 숫자와 문자열 모두 허용
  email: string;
  characteristics: string;
  name: string;
  rescuePlace: string;
  rescuePlaceLink: string;
  rescueDetail: string;
  breedName: string;
  ownerName: string;
  shelterName: string;
  telno: string;
  images: string[]; // 이미지 배열
}

export interface ShelterDetailProps {
  id: number;
  shelterName: string;
  companyName: string;
  address: string;
  link: string;
  telno: string;
  email: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
}
export interface PostItemProps {
  userImage: string;
  userName: string;
  userDescription: string;
  postImages: string[];
  postTitle: string;
  postContent: string;
  postDate: string;
  postLike: number;
  postComment: number;
  postView: number;
  postId: number;
}