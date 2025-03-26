import React, { useState } from "react";
import Camera from "../../img/camera.png"
import { UploadedImage } from "../../constants/interface";
import { Title, UploadArea, UploadButton, ImagePreview, DeleteButton, Tag } from "./imageUploadStyle";

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
            id: crypto.randomUUID(), // 고유 아이디 생성
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
      console.log("Attempting to remove image with ID:", id);
      const updatedImages = images.filter((image) => image.id !== id);
      console.log(updatedImages);
      setImages(updatedImages);
      onUpload(updatedImages);
    }

    return (
      <div style={{marginBottom: "1rem", width: '100%', overflowX: 'auto', whiteSpace: 'nowrap'}}>
        <Title>보호 사진<span style={{color:"red"}}>*</span></Title>
        <UploadArea>
          {images.length < MAX_IMAGE && (
            <UploadButton>
                <label htmlFor="image-upload" style={{display: "flex", flexDirection: 'column'}}>
                  <img src={Camera}/>
                  <span style={{fontSize: "12px", marginTop: '10px', color: '#8E8E8E'}}>{`${images.length}/${MAX_IMAGE}`}</span>
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
              <img src={image.url} alt={`Upload ${index}`}/>
              <DeleteButton onClick={() => handleRemoveImage(image.id)}>x</DeleteButton>
              {index === 0 && <Tag>대표 사진</Tag>}
            </ImagePreview>
          ))}
        </UploadArea>
      </div>
    )
}

export default AnimalImgUpload;