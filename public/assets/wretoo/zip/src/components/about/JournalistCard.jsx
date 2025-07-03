const teamData = [
  {
    img: "/images/team-01.jpg",
    name: "Alex Wood",
    role: "Editor-in-Chief",
  },
  {
    img: "/images/team-02.jpg",
    name: "Taylor Kim",
    role: "Senior Reporter",
  },
  {
    img: "/images/team-03.jpg",
    name: "Riley Brooks",
    role: "Features Writer",
  },
];

const JournalistCard = () => {
  return (
    <div className="cards px-5 grid md:grid-cols-2 lg:grid-cols-3  gap-5">
      {teamData.map((member, index) => (
        <div
          key={index}
          className="card-item flex flex-col items-start space-y-5  w-full  "
        >
          <img
            className="object-cover  h-full w-full"
            src={member.img}
            alt={member.name}
          />
          <div className="cards-heading space-y-2">
            <h1 className="font-semibold text-xl md:text-[25px]">
              {member.name}
            </h1>
            <p className="text-[15px] md:text-[18px]">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalistCard;
