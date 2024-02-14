import { useState } from "react";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

function ImageSlider({ imageArr, thumbnailArr }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex(() => {
      if (imageIndex === imageArr.length - 1) return 0;
      return imageIndex + 1;
    });
  };

  const prevSlide = () => {
    setImageIndex(() => {
      if (imageIndex === 0) return imageArr.length - 1;
      return imageIndex - 1;
    });
  };

  return (
    <div className="relative overflow-hidden ">
      {/* <img className="w-full  h-full" src={imageArr[imageIndex]} alt="" /> */}

      <div
        className="flex md:w-[30rem] md:h-[30rem] transition duration-500 "
        style={{ transform: `translateX(${-100 * imageIndex}%)` }}
      >
        {imageArr.map((image) => (
          <img
            key={image}
            className="w-full h-full block flex-shrink-0 flex-grow-0 md:rounded-lg"
            src={image}
            alt=""
          />
        ))}
      </div>

      <div className="absolute w-[95%] top-[50%] left-0 right-0 mx-auto justify-between flex">
        <button
          className=" flex left-4 size-12 select-none justify-center items-center rounded-full bg-slate-50 "
          onClick={prevSlide}
        >
          <img src={prev} />
        </button>

        <button
          className="flex size-12 select-none justify-center items-center rounded-full bg-slate-50 "
          onClick={nextSlide}
        >
          {" "}
          <img src={next} />
        </button>
      </div>

      <div className="hidden justify-between mt-4 md:gap md:flex">
        {thumbnailArr.map((image, index) => (
          <button onClick={() => setImageIndex(index)}>
            <img className=" w-24 rounded-lg" src={image} key={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
export default ImageSlider;
