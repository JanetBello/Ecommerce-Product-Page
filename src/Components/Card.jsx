const card = () => {
  return (
    <div className="flex-col absolute rounded-md bg-slate-50">
      <h3>Cart</h3>
      <hr className=" md:w-full " />
      <div className=" flex ">
        <img src={firstthumbnail} alt="" />
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00x3 $375.00</p>
        <img src={clear} alt="" />
      </div>
      <button className=" py-4  gap-3  md:flex-row  flex rounded-xl justify-center text-yellow-200 bg-orange w-full">
        Checkout
      </button>
    </div>
  );
};

export default card;
