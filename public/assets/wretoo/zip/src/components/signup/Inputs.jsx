const Inputs = ({ types, name, placeHolders, value, onChange, error }) => {
  return (
    <div>
      <input
        className="w-[270px] md:w-[340px] bg-[#FCF7F7] text-black pl-3 py-4 rounded-xl border border-[#29ABE2] text-[15px] focus:outline-none focus:border-[#D2D2D2] focus:bg-white focus:ring-0.5 focus:ring-[#D2D2D2] transition"
        type={types}
        name={name}
        placeholder={placeHolders}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-red-500 text-sm text-start mt-3 ml-2">{error}</p>
      )}
    </div>
  );
};

export default Inputs;
