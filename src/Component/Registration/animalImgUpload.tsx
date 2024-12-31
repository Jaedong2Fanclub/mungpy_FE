import React, { useState } from "react";
import styled from "styled-components";
import Camera from "../../img/camera.png"
import { UploadedImage } from "../../constants/interface";

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const UploadArea = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const UploadButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 24px;
`;

const Counter = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #666;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DeleteButton = styled.button`
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

const Tag = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ff8c00;
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 2px 0;
`;

const MAX_IMAGE = 5;

const AnimalImgUpload = ({
  onUpload
}: {
  onUpload: (images: UploadedImage[]) => void;
})=> {
    const [images, setImages] = useState<UploadedImage[]>([]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files)
            return;
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            url: URL.createObjectURL(file),
        }));

        if(images.length + newImages.length <= MAX_IMAGE) {
          const updatedImages = [...images, ...newImages];
            setImages(updatedImages);
            onUpload(updatedImages);
        } else {
            alert(`최대 ${MAX_IMAGE}개의 이미지 업로드만 가능`);
        }
    }

    const handleRemoveImage = (id: string) => {
        const updatedImages = images.filter((image) => image.id !== id);
        setImages(updatedImages);
        onUpload(updatedImages);
    }
    return (
        <div>
            <Title>보호 사진</Title>
            <UploadArea>
                {images.length < MAX_IMAGE && (
                    <UploadButton>
                        <label htmlFor="image-upload">
                            <img src={Camera}/>
                            <span>{`${images.length}/${MAX_IMAGE}`}</span>
                        </label>
                        <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        style={{display: "none"}}
                        />
                    </UploadButton>
                )}
                    {images.map((image, index) => (
                        <ImagePreview key={image.id}>
                            <img src={image.url}/>
                            <DeleteButton onClick={() => handleRemoveImage(image.id)}>x</DeleteButton>
                            <Tag>{index === 0 ? "대표 사진" : ""}</Tag>
                        </ImagePreview>
                    ))}
                    </UploadArea>
        </div>
    )
}

export default AnimalImgUpload;