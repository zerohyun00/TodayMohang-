import { kcategories } from "../static/category";

export default function Tag({ category }) {
  const categoryColor =
    kcategories.find((cat) => cat.name === category)?.color || "#e1e2e4"; // Replace 'defaultColor' with your default color

  return (
    <div
      className={`text-[8px] rounded-full px-2 text-white`}
      style={{ backgroundColor: categoryColor }}
    >
      {category}
    </div>
  );
}
