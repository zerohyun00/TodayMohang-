import { useRef, useState } from "react";
import Layout from "../layout/Layout";
import { FaAngleDown } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { categories } from "../static/category";

function RegisterForm() {
  const [imagePreview, setImagePreview] = useState(null);
  const imageInputRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("카테고리 선택");

  const triggerFileSelectPopup = () => imageInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };
  return (
    <Layout title="행사 등록하기">
      <div className="container mx-auto p-4">
        <form className="space-y-4">
          {/* 이미지 업로드하는 부분 */}
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
          />

          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="주최명"
              className="p-2 w-full ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
            />
            {/* 카테고리 선택 드롭다운 */}
            <div className="relative w-full">
              <div
                className="flex w-full h-[40px] justify-between items-center p-2 px-4 ring-2 ring-primary bg-inputBg rounded-md cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{selectedCategory}</span>
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
            />
            <input
              type="date"
              className="p-2 px-4 w-full h-[40px] ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center"
            />
          </div>
          {/* 설명 입력 필드 */}
          <textarea
            placeholder="내용을 입력하세요"
            className="p-2 w-full ring-2 ring-primary bg-inputBg rounded-md placeholder:text-center h-[80px]"
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
