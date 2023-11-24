import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import Tag from "./Tag";
function EventCard({ id, category, title, organizer, start, end, imageUrl }) {
  return (
    <Link
      to={`/event/${id}`}
      className="flex flex-col rounded-xl overflow-hidden ring-1"
    >
      <div className="object-cover w-full h-[120px] relative">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="event"
              className="w-full h-full rounded-t-xl object-cover"
            />
            <IoMdHeartEmpty
              onClick={() => console.log("즐겨찾기 추가")}
              className="absolute top-3 right-3"
            />
          </>
        ) : (
          <div className="w-full h-full rounded-t-xl object-cover flex items-center justify-center text-center bg-gray-200 overflow-hidden">
            <h1 className="font-semibold text-gray-500">이미지가 없습니다</h1>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between p-[10px] h-[80px]">
        <div className="flex flex-col">
          <span className="text-[8px] mb-[5px]">{organizer}</span>
          <h3 className="text-xs semibold">{title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[8px]">{start}</p>
          <p className="text-[8px]">{end}</p>
        </div>
        <div className="w-fit self-end">
          <Tag category={category} />
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
