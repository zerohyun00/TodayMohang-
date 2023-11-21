import { IoMdHeartEmpty } from "react-icons/io";
function EventCard({ category, title, team, date, image_url }) {
  return (
    <section className="flex flex-col rounded-xl overflow-hidden ring-1">
      <div className="object-cover w-full h-[120px] relative">
        <img
          src="https://via.placeholder.com/150"
          alt="event"
          className="w-full h-full rounded-t-xl"
        />
        <IoMdHeartEmpty
          onClick={() => console.log("즐겨찾기 추가")}
          className="absolute top-3 right-3"
        />
      </div>
      <div className="flex flex-col justify-between p-[10px] h-[80px]">
        <div className="flex flex-col">
          <span className="text-[8px] mb-[5px]">{team}</span>
          <h3 className="text-xs semibold">{title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[8px]">{date}</p>
          <Tag category={category} />
        </div>
      </div>
    </section>
  );
}

export default EventCard;

function Tag({ category }) {
  return (
    <div className="text-[8px] bg-primary rounded-full px-2 text-white">
      {category}
    </div>
  );
}
