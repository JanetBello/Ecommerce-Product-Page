import cart from "../images/icon-cart.svg";
import Counts from "../Components/Count";
import HeroSection from "../Components/HeroSection";

const MainSections = () => {
  return (
    <section className=" mb-20 md:flex md:pr-24 md:pl-24 md:gap-20">
      <HeroSection />
      <section className="p-4">
        <p className=" mb-4 uppercase text-orange font-700">sneaker company</p>
        <h3 className=" mb-6 text-4xl font-extrabold">
          Fall Limited Edition Sneakers
        </h3>
        <p className="p-1 mb-6">
          These low-profile sneakers ar your perfect casual wear companion.
          Featuring a durable rubber sole, they'll withstand everything the
          weather can offer
        </p>

        <div className=" mb-6 flex justify-between md:block">
          <div className="flex gap-6">
            <div className=" text-4xl font-extrabold">$125.00</div>
            <div className=" pt-1 mt-1 w-14 h-8 flex justify-center rounded-xl font-extrabold text-orange bg-orange bg-opacity-10">
              50%
            </div>
          </div>
          <div>
            <p className=" mt-1 text-slate-400 font-extrabold line-through">
              $250.00
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-4 md:flex-row">
          <Counts />

          <button className=" py-4  gap-3  md:flex-row  flex rounded-xl justify-center text-yellow-200 bg-orange w-full ">
            <img src={cart} className="" /> Add to cart
          </button>
        </div>
      </section>
    </section>
  );
};

export default MainSections;
