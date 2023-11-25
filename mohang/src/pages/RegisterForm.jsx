import { useRef, useState } from "react";
import Layout from "../layout/Layout";
import { FaAngleDown } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { categories } from "../static/category";
import axios from "axios";
import { BASE_URL } from "../static";
import useRequireUnivAuth from "../hooks/useRequireUnivAuth";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const imageInputRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  useRequireUnivAuth();
  const triggerFileSelectPopup = () => imageInputRef.current.click();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setImageFile(file); // 파일 객체를 상태에 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const jsonData = {
      title: title,
      organizer: organizer,
      start: startDate,
      end: endDate,
      category: selectedCategory,
      content: description,
    };
    const jsonBlob = new Blob([JSON.stringify(jsonData)], {
      type: "application/json",
    });
    formData.append("data", jsonBlob);

    if (imageFile) {
      formData.append("file", imageFile, imageFile.name);
    }

    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/post/create`,
        data: formData,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout isBack={true} title="행사 등록하기">
      <div className="container mx-auto p-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div
            className="w-full flex justify-center items-center ring-2 ring-primary bg-inputBg rounded-xl p-4 cursor-pointer"
            onClick={triggerFileSelectPopup}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-[300px] object-cover"
              />
            ) : (
              <div className="flex flex-col items-center w-full h-[300px] justify-center">
                <BiImageAdd color="#FFC14A" size={60} />
              </div>
            )}
          </div>
          <input
            ref={imageInputRef}
            type="file"
            onChange={handleImageChange}
            className="hidden"
          />

          <input
            type="text"
            placeholder="제목"
            className="p-2 w-full ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="주최명"
              className="p-2 w-full ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
            <div className="relative w-full">
              <div
                className="flex w-full h-[40px] justify-between items-center p-2 px-4 ring-2 ring-primary bg-inputBg rounded-md cursor-pointer"
                onClick={toggleDropdown}
              >
                <span>{selectedCategory || "카테고리 선택"}</span>
                <FaAngleDown
                  className={`transform transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {dropdownOpen && (
                <div
                  className={`absolute left-0 right-0 mt-1 z-10 bg-white border-2 border-primary rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                    dropdownOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 invisible"
                  }`}
                >
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="p-2 hover:text-white cursor-pointer transition duration-150 ease-in-out"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <input
              type="date"
              className="p-2 px-4 w-full h-[40px] ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="p-2 px-4 w-full h-[40px] ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <textarea
            placeholder="내용을 입력하세요"
            className="p-2 w-full ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center h-[80px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-white bg-primary p-3 px-4 rounded-lg"
          >
            행사 등록하기
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default RegisterForm;
