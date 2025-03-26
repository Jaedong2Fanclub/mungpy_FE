import React, { ChangeEvent, forwardRef, useRef, useState } from 'react';
import { ProfileImgUploadProps } from '../../../constants/interface';
import { ProfileUploadWrapper, ProfiledUpload } from './profileStyle';
import ProfileImg from "../../../img/imageDog.svg"

const ProfileImgUpload = forwardRef<HTMLInputElement, ProfileImgUploadProps>(
    ({ onChange, onBlur, onImageLoad }, ref) => {
        const [imageUrl, setImgUrl] = useState<string>("");
        const fileInput = useRef<HTMLInputElement>(null);

        const imageUpload = (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                if (reader.readyState === 2) {
                    setImgUrl(reader.result as string);
                    onImageLoad(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };
        
    return (
        <ProfileUploadWrapper>
            <ProfiledUpload onClick={() => fileInput.current?.click()}>
                {imageUrl ? (
                    <img src={imageUrl} alt="Profile Preview" />
                ) : (
                    <img src={ProfileImg} alt="Profile Preview"/>
                )}
            </ProfiledUpload>
            <input
                type="file"
                accept="image/*"
                name="profile_img"
                style={{ display: "none", height: "230px" }}
                onChange={(e) => {
                    imageUpload(e);
                    if (onChange) {
                    onChange(e);
                    }
                }}
                onBlur={onBlur}
                ref={fileInput}
            />
        </ProfileUploadWrapper>
    );
    }
);

export default ProfileImgUpload;