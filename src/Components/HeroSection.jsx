import product from "../images/image-product-1.jpg";
import firstthumbnail from "../images/image-product-1-thumbnail.jpg";
import secondthumbnail from "../images/image-product-2-thumbnail.jpg";
import thirdthumbnail from "../images/image-product-3-thumbnail.jpg";
import fourththumbnail from "../images/image-product-4-thumbnail.jpg";
const HeroSection = () => {
  return (
    <section className=" flex-grow">
      <img
        src={product}
        alt="sneakers"
        className=" w-full md:rounded-xl md:w-{50%}"
      />

      <div className=" hidden sm:mb-6 md:mb-6 sm:hidden md:flex gap-1 pt-4 ">
        <div>
          <img src={firstthumbnail} className=" h-3/4 rounded-xl" />
        </div>
        <div>
          <img src={secondthumbnail} className=" h-3/4 rounded-xl" />
        </div>
        <div>
          <img src={thirdthumbnail} className=" h-3/4 rounded-xl" />
        </div>
        <div>
          <img src={fourththumbnail} className=" h-3/4 rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
