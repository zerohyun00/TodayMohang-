import Icon from "../assets/images/logos.png";

function DetailLayout({ children, isNav }) {
  return (
    <section
      className={`flex flex-col px-[22px] py-4 h-[100vh] overflow-scroll relative ${
        isNav ? "pb-[90px]" : ""
      }`}
    >
      <img
        src={Icon}
        alt="logo"
        className=" object-cover w-[30px] h-[30px] mt-[10px]"
      />
      {children}
    </section>
  );
}

export default DetailLayout;
