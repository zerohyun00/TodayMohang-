import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function BackHeader() {
  const navigate = useNavigate();
  return (
    <div className="absolute w-full left-0 top-0 pt-4 py-2 border-b-2">
      <IoChevronBack
        className="semibold"
        size={32}
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default BackHeader;
