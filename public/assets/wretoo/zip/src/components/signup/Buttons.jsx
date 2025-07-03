const Buttons = ({ name, image }) => {
  return (
    <>
      <button className="w-[260px] md:w-[340px] google flex items-center justify-center space-x-2 bg-slate-50 px-6 font-semibold py-4 text-[14px] rounded-xl border border-[#D2D2D2] hover:bg-slate-100">
        <img className="w-6 h-6" src={image} alt="google" />
        <p>{name}</p>
      </button>
    </>
  );
};

export default Buttons;
