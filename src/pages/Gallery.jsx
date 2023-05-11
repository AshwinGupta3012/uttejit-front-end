import React, { useState, useEffect, useRef } from "react";
import mapper from "../utils/mapper";
import Repeater from "../utils/Repeater";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  function FullSizeImage({ index, onClose }) {
    const imageRef = useRef(null);

    useEffect(() => {
      if (imageRef.current) {
        imageRef.current.style.width = "100vw";
        imageRef.current.style.height = "100vh";
      }
    }, [imageRef]);

    return (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-80"></div>
        <div className="fixed top-[180px] left-[280px] w-[1152px] overflow-hidden h-[600px] bg-gray-900 rounded-[20px] drop-shadow-2xl border-blackbutnot-0 border-[2px] hover:border-[1px] hover:border-white">
          <img
            className="m-0 p-0 object-cover max-w-full max-h-full"
            ref={imageRef}
            src={`https://picsum.photos/id/${index - 1}/1920/1080`}
            alt={`Image ${index - 1}`}
            onClick={onClose}
          />
        </div>
      </>
    );
  }

  let gallery = [];
  for (let i = 10; i < 30; i++) {
    gallery.push(
      <div
        className="w-[480px] h-[270px] bg-green-400 flex justify-center items-center align-center"
        onClick={() => setSelectedImage(i)}
      >
        <img
          className="m-0 p-0 object-cover max-w-full max-h-full"
          src={`https://picsum.photos/id/${i}/1920/1080`}
          alt={`Image ${i}`}
        />
        <div className=" absolute bg-black opacity-50 p-1 rounded-[5px]">
          img {i - 9}
        </div>
      </div>
    );
  }
  return (
    <div className="w-screen h-[max]">
      <div className="mb-[20px] text-[50px] font-FormulaReg mt-[50px] ml-[120px]">
        Gallery
      </div>
      <div className="w-full h-max grid grid-flow-row-dense grid-cols-3 gap-10 p-[100px] pt-[20px]">
        {gallery}
      </div>
      {selectedImage !== null && (
        <FullSizeImage
          index={selectedImage + 1}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default Gallery;
