
const MissionCard = ({heading, desc}) => {
  return (
    <div class="text-white px-4 my-2 md:my-4 md:py-5 space-y-3">
      <h1 class="font-semibold text-xl md:text-xl ">{heading}</h1>
      <p class="my-1 text-[15px]">
        {desc}
      </p>
    </div>
  );
};

export default MissionCard;
