import { FaChevronRight } from "react-icons/fa";

function CTABtn({ title }) {
  return (
    <div className="bg-primary text-white flex items-center justify-center w-full p-5 rounded-[15px] mt-[50px]">
      <FaChevronRight size={20} className=" invisible" />
      <div className="flex-grow" />
      <h1 className="flex-grow-0 text-center">{title}</h1>
      <div className="flex-grow" />
      <FaChevronRight size={20} />
    </div>
  );
}

export default CTABtn;
