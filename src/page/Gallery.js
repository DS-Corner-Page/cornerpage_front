import React, { useState, useEffect } from "react";
import * as A from "../styles/GalleryStyle";
import Title from "../components/title/title/Title";

export default function Gallery() {
  const [selectedNumber, setSelectedNumber] = useState("4기");

  const handleNum = (value) => {
    setSelectedNumber(value);
  };

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/gallery_data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setImages(data[selectedNumber] || []);
      })
      .catch((err) => console.error("Failed to load gallery data:", err));
  }, [selectedNumber]);

  return (
    <>
      <Title title="코너 갤러리" subtitle={`${selectedNumber} 갤러리`} color="blue" />
      <A.Gallery>
        <A.SideBar>
          {["4기", "3기", "2기", "1기"].map((item) => (
            <A.Now key={item} onClick={() => handleNum(item)} isactive={selectedNumber === item} as="div">
              <A.Num>{item}</A.Num>
            </A.Now>
          ))}
        </A.SideBar>
        <A.ImageContainer>
          {images.map((image) => (
            <A.ImgBox whileHover={{ scale: 1.05 }} onClick={() => setSelectedImage(image)}>
              <A.Image key={image.id} src={image.src} alt={image.alt} />
            </A.ImgBox>
          ))}
        </A.ImageContainer>
      </A.Gallery>

      {/* 모달 */}
      {selectedImage && (
        <A.ModalOverlay onClick={() => setSelectedImage(null)}>
          <A.ModalContent onClick={(e) => e.stopPropagation()}>
            {" "}
            {/* 모달 내부 클릭 시 닫히지 않도록 */}
            <A.ModalImage src={selectedImage.src} alt={selectedImage.alt} />
          </A.ModalContent>
        </A.ModalOverlay>
      )}
    </>
  );
}
